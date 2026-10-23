// test/verification.test.mjs
//
// Tests for scripts/sign-skills.mjs + scripts/verify-skills.mjs.
//
// These tests stage a tiny skills/ tree in a temp directory and exercise
// the sign → tamper → verify loop end-to-end.

import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoRoot = join(fileURLToPath(import.meta.url), "..", "..");
const signScript = join(repoRoot, "scripts", "sign-skills.mjs");
const verifyScript = join(repoRoot, "scripts", "verify-skills.mjs");

function stageFakeSkills(root, slugs) {
  const skillsDir = join(root, "skills");
  mkdirSync(skillsDir, { recursive: true });
  for (const slug of slugs) {
    const dir = join(skillsDir, slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, "SKILL.md"),
      `---\nname: ${slug}\ndescription: "fake skill ${slug}"\n---\n# ${slug}\n\nbody\n`,
      "utf8"
    );
  }
}

function run(scriptPath, root) {
  // Each script resolves paths relative to its own __dirname; we cannot
  // point them at an arbitrary root. Instead, copy the two scripts into the
  // temp tree as scripts/ entries and run them there.
  const targetScripts = join(root, "scripts");
  mkdirSync(targetScripts, { recursive: true });
  writeFileSync(join(targetScripts, "sign-skills.mjs"), readFileSync(signScript));
  writeFileSync(join(targetScripts, "verify-skills.mjs"), readFileSync(verifyScript));
  // The scripts assume a `skills/` dir at the repo root, so cwd into root.
  const res = spawnSync("node", [scriptPath.replace(repoRoot, root)], { cwd: root, encoding: "utf8" });
  return { status: res.status, stdout: res.stdout, stderr: res.stderr };
}

function freshRoot() {
  const root = mkdtempSync(join(tmpdir(), "skill-verify-"));
  // .gitignore would normally protect the signing key. For tests, write
  // the key into the temp tree explicitly.
  return root;
}

test("sign then verify round-trips", () => {
  const root = freshRoot();
  try {
    stageFakeSkills(root, ["alpha", "beta", "gamma"]);
    const s = run(join(repoRoot, "scripts", "sign-skills.mjs"), root);
    assert.equal(s.status, 0, `signer failed: ${s.stderr}`);
    assert.ok(existsSync(join(root, "skills-manifest.json")));
    assert.ok(existsSync(join(root, "skills-public-key.pem")));
    assert.ok(existsSync(join(root, ".skills-signing-key")));

    const v = run(join(repoRoot, "scripts", "verify-skills.mjs"), root);
    assert.equal(v.status, 0, `verifier failed: ${v.stderr}`);
    assert.match(v.stdout, /OK — 3\/3 skills verified/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("verifier detects a drifted SKILL.md", () => {
  const root = freshRoot();
  try {
    stageFakeSkills(root, ["alpha", "beta"]);
    run(join(repoRoot, "scripts", "sign-skills.mjs"), root);

    // Tamper: append a newline to one skill's SKILL.md
    const skillPath = join(root, "skills", "alpha", "SKILL.md");
    writeFileSync(skillPath, readFileSync(skillPath, "utf8") + "\n", "utf8");

    const v = run(join(repoRoot, "scripts", "verify-skills.mjs"), root);
    assert.notEqual(v.status, 0, "verifier should fail when a skill drifted");
    assert.match(v.stderr, /alpha: SHA-256 mismatch/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("verifier detects a skill on disk but missing from manifest", () => {
  const root = freshRoot();
  try {
    stageFakeSkills(root, ["alpha"]);
    run(join(repoRoot, "scripts", "sign-skills.mjs"), root);

    // Add a new skill after signing, without re-signing
    stageFakeSkills(root, ["beta"]);

    const v = run(join(repoRoot, "scripts", "verify-skills.mjs"), root);
    assert.notEqual(v.status, 0, "verifier should fail when a skill is untracked");
    assert.match(v.stderr, /beta: present on disk but missing from manifest/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("verifier detects a manifest entry with no matching file on disk", () => {
  const root = freshRoot();
  try {
    stageFakeSkills(root, ["alpha", "beta"]);
    run(join(repoRoot, "scripts", "sign-skills.mjs"), root);

    // Delete one skill's directory after signing
    rmSync(join(root, "skills", "beta"), { recursive: true, force: true });

    const v = run(join(repoRoot, "scripts", "verify-skills.mjs"), root);
    assert.notEqual(v.status, 0, "verifier should fail when manifest references a missing file");
    assert.match(v.stderr, /beta: listed in manifest but no SKILL.md on disk/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("re-signing produces the same digests (deterministic)", () => {
  const root = freshRoot();
  try {
    stageFakeSkills(root, ["alpha", "beta"]);
    run(join(repoRoot, "scripts", "sign-skills.mjs"), root);
    const m1 = JSON.parse(readFileSync(join(root, "skills-manifest.json"), "utf8"));
    const digests1 = m1.entries.map((e) => e.sha256).sort();

    // Sign again with the same key
    run(join(repoRoot, "scripts", "sign-skills.mjs"), root);
    const m2 = JSON.parse(readFileSync(join(root, "skills-manifest.json"), "utf8"));
    const digests2 = m2.entries.map((e) => e.sha256).sort();

    assert.deepEqual(digests1, digests2, "digests must be reproducible across sign runs");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
