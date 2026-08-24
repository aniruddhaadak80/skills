import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllSkills } from "../src/lib/skills.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");

const skills = getAllSkills();
console.log(`Expanding ${skills.length} skills...`);

rmSync(skillsDir, { recursive: true, force: true });
mkdirSync(skillsDir, { recursive: true });

function body(s) {
  const L = [];
  L.push(`# ${s.title}`, "");
  L.push(`> ${s.description}`, "");
  L.push(`**Track:** ${s.trackIcon} ${s.trackLabel} · **Domain:** ${s.domainLabel} · **Level:** ${s.level} · **~${s.minutes} min**`, "");
  if (s.roles?.length) L.push(`**Who this is for:** ${s.roles.join(", ")}`, "");
  L.push("## When to Use This Skill", "");
  L.push(s.description.endsWith(".") ? s.description : s.description + ".", "Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.", "");
  if (s.isPlaybook) {
    L.push("## Journey Steps", "");
    s.steps.forEach((st, i) => L.push(`${i + 1}. ${st}`));
    L.push("");
    L.push("### Referenced Skills", "");
    (s.playbookRefs || []).forEach((r) => L.push(`- \`${r}\``));
    L.push("");
  } else {
    L.push("## Steps", "");
    s.steps.forEach((st, i) => L.push(`${i + 1}. ${st}`));
    L.push("");
    if (s.pitfalls.length) {
      L.push("## Common Pitfalls", "");
      s.pitfalls.forEach((p) => L.push(`- ${p}`));
      L.push("");
    }
    if (s.kpis.length) {
      L.push("## Success Signals", "");
      s.kpis.forEach((k) => L.push(`- ${k}`));
      L.push("");
    }
  }
  if (s.commands.length) {
    L.push("## Commands", "");
    for (const c of s.commands) {
      L.push(`**${c.label}**`, "```bash", c.cmd, "```", "");
    }
  }
  L.push("---", "", `Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills`);
  return L.join("\n");
}

for (const s of skills) {
  const dir = join(skillsDir, s.slug);
  mkdirSync(dir, { recursive: true });
  const desc = `${s.description.replace(/\s+/g, " ").trim()}`;
  const fm = [
    "---",
    `name: ${s.slug}`,
    `description: ${JSON.stringify(desc)}`,
    "---",
    ""
  ].join("\n");
  writeFileSync(join(dir, "SKILL.md"), fm + body(s), "utf8");
}

// Flat index for tooling (no timestamps: output must be deterministic for CI sync checks)
const idx = skills.map(({ slug, title, description, track, trackLabel, domain, level, minutes, tags }) => ({ slug, title, description, track, trackLabel, domain, level, minutes, tags }));
writeFileSync(join(root, "src", "data", "skills-index.json"), JSON.stringify({ count: idx.length, skills: idx }, null, 1));

// Compact search index served statically (fetched once by the command palette)
const publicDir = join(root, "public");
mkdirSync(publicDir, { recursive: true });
writeFileSync(
  join(publicDir, "search-index.json"),
  JSON.stringify(skills.map((s) => ({ slug: s.slug, title: s.title, track: s.track, trackIcon: s.trackIcon, tags: s.tags.slice(0, 5), pb: !!s.isPlaybook })))
);

// Track metadata for README badges
import { TRACKS as _TRACKS } from "../src/data/tracks/index.mjs";
writeFileSync(join(root, "src", "data", "tracks-meta.json"), JSON.stringify({ tracks: _TRACKS.length, domains: _TRACKS.reduce((a, t) => a + t.domains.length, 0) }));

console.log(`Done. ${skills.length} SKILL.md files written to ./skills`);
