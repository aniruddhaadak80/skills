import { getAllSkills } from "../src/lib/skills.mjs";
import { TRACKS } from "../src/data/tracks/index.mjs";
import { PLAYBOOKS } from "../src/data/tracks/playbooks.mjs";

const errors = [];
const warnings = [];
const skills = getAllSkills();

for (const s of skills) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(s.slug)) errors.push(`${s.slug}: slug must be lowercase alphanumeric+hyphens`);
  if (s.description.length < 40) warnings.push(`${s.slug}: description under 40 chars — add trigger context`);
  if (!s.isPlaybook) {
    if (s.steps.length < 4) errors.push(`${s.slug}: needs at least 4 steps`);
    if (s.pitfalls.length < 1) warnings.push(`${s.slug}: no pitfalls listed — every procedure has at least one`);
    if (/TODO|TBD|FIXME|lorem/i.test(s.steps.join(" ") + s.description)) errors.push(`${s.slug}: placeholder text found`);
    const dupes = s.steps.filter((st, i) => s.steps.indexOf(st) !== i);
    if (dupes.length) errors.push(`${s.slug}: duplicate steps: ${dupes.join(" | ")}`);
  }
}

// Track hygiene
for (const t of TRACKS) {
  if (!t.blurb || t.blurb.length < 20) errors.push(`track ${t.id}: missing blurb`);
  for (const d of t.domains) {
    if (!d.procedures.length) errors.push(`track ${t.id}/${d.id}: empty domain`);
  }
}
const trackIds = new Set(TRACKS.map((t) => t.id));
for (const g of PLAYBOOKS) if (!trackIds.has(g.trackId)) errors.push(`playbook group references unknown track: ${g.trackId}`);

if (warnings.length) console.log("Warnings:\n" + warnings.map((w) => ` ⚠ ${w}`).join("\n"));
if (errors.length) {
  console.error("Errors:\n" + errors.map((e) => ` ✗ ${e}`).join("\n"));
  process.exit(1);
}
console.log(`OK — ${skills.length} skills valid across ${TRACKS.length} tracks (${PLAYBOOKS.reduce((a, g) => a + (g.items?.length || 0), 0)} playbooks)`);
