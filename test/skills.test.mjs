import { test } from "node:test";
import assert from "node:assert/strict";

import { getAllSkills, getSearchIndex, slugify } from "../src/lib/skills.mjs";
import { TRACKS } from "../src/data/tracks/index.mjs";
import { PLAYBOOKS } from "../src/data/tracks/playbooks.mjs";

const skills = getAllSkills();
const playbooks = skills.filter((s) => s.isPlaybook);
const bySlug = new Map(skills.map((s) => [s.slug, s]));

const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;
const LEVELS = new Set(["foundation", "intermediate", "advanced", "journey"]);
const PLACEHOLDER = /TODO|TBD|FIXME|lorem ipsum|coming soon/i;

// Commands are built from template literals, so a bare nullish token there is always
// a broken interpolation. Prose fields are natural English ("success metrics undefined
// until retro", "show null handling"), so only true artefacts are treated as bugs there.
const CMD_NULLISH = /(^|[^\w])(undefined|null|NaN)([^\w]|$)|\[object Object\]/;
const PROSE_ARTEFACT = /\[object Object\]|\bNaN\b|["'](undefined|null|NaN)["']/;

test("catalog is non-empty and search index mirrors it 1:1", () => {
  assert.ok(skills.length > 0, "expected at least one skill");
  const index = getSearchIndex();
  assert.equal(index.length, skills.length, "search index size must match skill count");
  assert.deepEqual(
    index.map((i) => i.slug).sort(),
    skills.map((s) => s.slug).sort(),
    "search index slugs must match skill slugs",
  );
});

test("slugs are unique and well formed", () => {
  const seen = new Set();
  for (const s of skills) {
    assert.ok(SLUG_RE.test(s.slug), `malformed slug: ${s.slug}`);
    assert.equal(s.slug, s.name, `name must mirror slug for ${s.slug}`);
    assert.ok(!seen.has(s.slug), `duplicate slug: ${s.slug}`);
    seen.add(s.slug);
  }
});

test("every skill carries the fields the site and generator depend on", () => {
  for (const s of skills) {
    for (const field of ["title", "description", "trackLabel", "domainLabel", "level"]) {
      assert.ok(typeof s[field] === "string" && s[field].length > 0, `${s.slug}: empty ${field}`);
    }
    assert.ok(s.title.trim().length > 0, `${s.slug}: blank title`);
    assert.ok(
      s.description.length >= 40,
      `${s.slug}: description is ${s.description.length} chars, needs >= 40`,
    );
    assert.ok(LEVELS.has(s.level), `${s.slug}: unexpected level ${s.level}`);
    assert.ok(Number.isFinite(s.minutes) && s.minutes > 0, `${s.slug}: bad minutes ${s.minutes}`);
  }
});

test("every skill has non-empty, unique steps and pitfalls are strings", () => {
  for (const s of skills) {
    assert.ok(s.steps.length > 0, `${s.slug}: no steps`);
    const unique = new Set(s.steps);
    assert.equal(unique.size, s.steps.length, `${s.slug}: duplicate steps`);
    for (const st of s.steps) {
      assert.ok(typeof st === "string" && st.trim().length > 0, `${s.slug}: blank step`);
    }
    for (const p of s.pitfalls) {
      assert.ok(typeof p === "string" && p.trim().length > 0, `${s.slug}: blank pitfall`);
    }
  }
});

test("tags are present and de-duplicated, and capped in the search index", () => {
  for (const s of skills) {
    assert.ok(s.tags.length > 0, `${s.slug}: no tags`);
    assert.equal(new Set(s.tags).size, s.tags.length, `${s.slug}: duplicate tags`);
  }
  for (const entry of getSearchIndex()) {
    assert.ok(entry.tags.length <= 6, `${entry.slug}: ${entry.tags.length} tags exceeds cap of 6`);
  }
});

test("playbook references all resolve to real skills", () => {
  for (const p of playbooks) {
    assert.ok(p.playbookRefs.length > 0, `${p.slug}: no playbookRefs`);
    for (const ref of p.playbookRefs) {
      assert.ok(bySlug.has(ref), `${p.slug}: dangling playbookRef ${ref}`);
    }
  }
});

test("no step or description leaks an interpolation artefact", () => {
  for (const s of skills) {
    for (const st of s.steps) {
      assert.ok(
        !PROSE_ARTEFACT.test(String(st)),
        `${s.slug}: interpolation artefact in step: ${String(st).slice(0, 80)}`,
      );
    }
    for (const p of s.pitfalls) {
      assert.ok(!PROSE_ARTEFACT.test(String(p)), `${s.slug}: artefact in pitfall: ${String(p).slice(0, 80)}`);
    }
    assert.ok(!PROSE_ARTEFACT.test(s.description), `${s.slug}: artefact in description`);
    assert.ok(!PLACEHOLDER.test(s.description), `${s.slug}: placeholder text in description`);
  }
});

test("no command leaks a nullish interpolation", () => {
  for (const s of skills) {
    for (const c of s.commands) {
      assert.ok(!CMD_NULLISH.test(c.cmd), `${s.slug}: nullish token in command: ${c.cmd.slice(0, 80)}`);
    }
  }
});

test("non-playbook skills are installable by their own slug", () => {
  for (const s of skills.filter((x) => !x.isPlaybook)) {
    assert.ok(s.commands.length >= 2, `${s.slug}: expected install + global install commands`);
    const install = s.commands[0];
    assert.match(install.cmd, /^npx skills add aniruddhaadak80\/skills --skill /, `${s.slug}: bad install cmd`);
    assert.ok(install.cmd.endsWith(s.slug), `${s.slug}: install cmd must target its own slug`);
  }
});

test("playbook install commands reference only resolvable skills", () => {
  for (const p of playbooks) {
    assert.equal(p.commands.length, 1, `${p.slug}: expected one combined install command`);
    assert.match(p.commands[0].cmd, /^npx skills add aniruddhaadak80\/skills --skill /);
    const targets = p.commands[0].cmd.split(" && ").map((c) => c.trim().split("--skill ")[1]);
    for (const t of targets) {
      assert.ok(bySlug.has(t), `${p.slug}: install command targets unknown skill ${t}`);
    }
  }
});

test("every track and playbook group is wired to real data", () => {
  const trackIds = new Set(TRACKS.map((t) => t.id));
  assert.equal(trackIds.size, TRACKS.length, "duplicate track ids");
  for (const t of TRACKS) {
    assert.ok(t.label && t.label.length > 0, `track ${t.id}: missing label`);
    assert.ok(t.domains.length > 0, `track ${t.id}: no domains`);
    for (const d of t.domains) {
      assert.ok(d.procedures.length > 0, `track ${t.id}/${d.id}: empty domain`);
    }
  }
  for (const g of PLAYBOOKS) {
    assert.ok(trackIds.has(g.trackId), `playbook group references unknown track: ${g.trackId}`);
  }
});

test("catalog build is deterministic across repeated calls", () => {
  const first = JSON.stringify(skills);
  const second = JSON.stringify(getAllSkills());
  assert.equal(first, second, "getAllSkills must return identical output on repeat calls");
});

test("slugify normalises to lowercase hyphenated form", () => {
  assert.equal(slugify("Hello World"), "hello-world");
  assert.equal(slugify("  --Foo__Bar--  "), "foo-bar");
  assert.equal(slugify("A/B & C"), "a-b-c");
  assert.equal(slugify("Already-Hyphenated"), "already-hyphenated");
  assert.equal(slugify(""), "");
});
