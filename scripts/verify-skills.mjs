// scripts/verify-skills.mjs
//
// Verify that every skills/<slug>/SKILL.md in the repo matches the
// Ed25519 signature recorded in skills-manifest.json.
//
// Returns non-zero if any skill:
//   - is missing from the manifest
//   - has a different SHA-256 (file drifted after signing)
//   - fails Ed25519 signature verification against the public key in the manifest
//
// Also returns non-zero if the manifest references skills that no longer
// exist (the manifest is stale relative to the working tree).
//
// Usage: node scripts/verify-skills.mjs

import { createHash, createPublicKey, verify } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const manifestPath = join(root, "skills-manifest.json");

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function listSkillSlugs() {
  if (!existsSync(skillsDir)) return [];
  return readdirSync(skillsDir)
    .filter((name) => statSync(join(skillsDir, name)).isDirectory())
    .filter((name) => existsSync(join(skillsDir, name, "SKILL.md")))
    .sort();
}

function main() {
  if (!existsSync(manifestPath)) {
    console.error(`[verify-skills] ${manifestPath} not found.`);
    console.error("[verify-skills] run `node scripts/sign-skills.mjs` to produce it.");
    process.exit(1);
  }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  if (manifest.algorithm !== "ed25519") {
    console.error(`[verify-skills] unsupported algorithm: ${manifest.algorithm}`);
    process.exit(1);
  }
  const publicKey = createPublicKey(manifest.publicKey);

  const onDisk = new Set(listSkillSlugs());
  const manifestSlugs = new Set(manifest.entries.map((e) => e.slug));

  const errors = [];
  for (const slug of onDisk) {
    if (!manifestSlugs.has(slug)) {
      errors.push(`${slug}: present on disk but missing from manifest`);
      continue;
    }
  }
  for (const slug of manifestSlugs) {
    if (!onDisk.has(slug)) {
      errors.push(`${slug}: listed in manifest but no SKILL.md on disk`);
    }
  }

  let verified = 0;
  for (const entry of manifest.entries) {
    const skillPath = join(skillsDir, entry.slug, "SKILL.md");
    if (!existsSync(skillPath)) continue; // already reported above
    const bytes = readFileSync(skillPath);
    const digest = sha256(bytes);
    if (digest !== entry.sha256) {
      errors.push(`${entry.slug}: SHA-256 mismatch (file drifted since signing)`);
      continue;
    }
    const sig = Buffer.from(entry.signature, "base64");
    const ok = verify(null, Buffer.from(digest, "hex"), publicKey, sig);
    if (!ok) {
      errors.push(`${entry.slug}: signature did not verify against manifest public key`);
      continue;
    }
    verified++;
  }

  if (errors.length) {
    console.error(`[verify-skills] FAIL — ${verified}/${manifest.entries.length} verified, ${errors.length} error(s):`);
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  console.log(`[verify-skills] OK — ${verified}/${manifest.entries.length} skills verified against ${manifest.publicKeyPath || "embedded public key"}`);
}

main();
