import { TRACKS } from "../data/tracks/index.mjs";
import { PLAYBOOKS } from "../data/tracks/playbooks.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_A } from "../data/tracks/expansions-a.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_B } from "../data/tracks/expansions-b.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_C } from "../data/tracks/expansions-c.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_D } from "../data/tracks/expansions-d.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_E } from "../data/tracks/expansions-e.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_F } from "../data/tracks/expansions-f.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_G } from "../data/tracks/expansions-g.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_H } from "../data/tracks/expansions-h.mjs";
import { EXTRA_DOMAINS as EXPANSIONS_I } from "../data/tracks/expansions-i.mjs";

const EXPANSIONS = { ...EXPANSIONS_A, ...EXPANSIONS_B, ...EXPANSIONS_C, ...EXPANSIONS_D, ...EXPANSIONS_E, ...EXPANSIONS_F, ...EXPANSIONS_G, ...EXPANSIONS_H, ...EXPANSIONS_I };

let _cache = null;

export function getAllSkills() {
  if (_cache) return _cache;
  const out = [];
  for (const track of TRACKS) {
    const extraDomains = EXPANSIONS[track.id] || [];
    const domains = [...track.domains, ...extraDomains];
    for (const domain of domains) {
      for (const proc of domain.procedures) {
        const variants = proc.variants ? Object.entries(proc.variants) : [];
        if (!variants.length) {
          out.push(buildSkill(track, domain, proc, null));
        } else {
          for (const [vid, v] of variants) {
            out.push(buildSkill(track, domain, proc, { id: vid, ...v }));
          }
        }
      }
    }
  }
  out.push(...expandPlaybooks(out));
  const seen = new Set();
  for (const s of out) {
    if (seen.has(s.slug)) throw new Error(`Duplicate slug: ${s.slug}`);
    seen.add(s.slug);
  }
  _cache = out;
  return out;
}

export function getSearchIndex() {
  return getAllSkills().map((s) => ({
    slug: s.slug,
    title: s.title,
    track: s.track,
    trackLabel: s.trackLabel,
    trackIcon: s.trackIcon,
    tags: s.tags.slice(0, 6),
    isPlaybook: !!s.isPlaybook,
  }));
}

function expandPlaybooks(baseSkills) {
  const bySlug = new Map(baseSkills.map((s) => [s.slug, s]));
  const out = [];
  for (const group of PLAYBOOKS) {
    const track = TRACKS.find((t) => t.id === group.trackId);
    if (!track || !track.domains?.length) continue;
    const domain = track.domains[0];
    for (const entry of group.items || []) {
      const resolved = (entry.uses || []).map((slug) => bySlug.get(slug)).filter(Boolean);
      if (!resolved.length) continue;
      out.push({
        slug: `playbook-${group.trackId}-${entry.id}`,
        name: `playbook-${group.trackId}-${entry.id}`,
        title: `Playbook: ${entry.title}`,
        description: entry.goal,
        summary: entry.goal.slice(0, 160),
        track: track.id,
        trackLabel: track.label,
        trackIcon: "🗺️",
        gradient: track.gradient,
        ring: track.ring,
        text: track.text,
        domain: "playbooks",
        domainLabel: "Journey Playbooks",
        level: "journey",
        minutes: resolved.reduce((a, s) => a + (s.minutes || 0), 0),
        roles: track.roles || [],
        tags: ["playbook", "journey", group.trackId],
        steps: [
          ...resolved.map((r, i) => `Step ${i + 1} — ${r.title}: start with "${r.steps[0]}"`),
          `How it fits together: ${entry.guidance}`
        ],
        pitfalls: [],
        kpis: [],
        commands: [{ label: "Install all referenced skills", cmd: resolved.map((r) => `npx skills add aniruddhaadak80/skills --skill ${r.slug}`).join(" && ") }],
        authored: false,
        isPlaybook: true,
        playbookRefs: resolved.map((r) => r.slug)
      });
    }
  }
  return out;
}

function buildSkill(track, domain, proc, variant) {
  const suffix = variant ? ` (${variant.label})` : "";
  const slug = variant ? `${proc.slug || `${domain.id}-${proc.id}`}-${slugify(variant.id)}` : (proc.slug || `${domain.id}-${proc.id}`);
  const steps = [...(proc.steps || []), ...(variant?.adds || [])];
  return {
    slug,
    name: slug,
    title: (proc.title || proc.id) + suffix,
    description: (variant?.note ? `${variant.note} ` : "") + (proc.description || ""),
    summary: (proc.summary || proc.description || "").slice(0, 160),
    track: track.id,
    trackLabel: track.label,
    trackIcon: track.icon,
    gradient: track.gradient,
    ring: track.ring,
    text: track.text,
    domain: domain.id,
    domainLabel: domain.label,
    level: variant?.level || proc.level || "intermediate",
    minutes: proc.minutes || 20,
    roles: track.roles || [],
    tags: [...new Set([...(proc.tags || []), ...(variant?.tags || []), track.id, domain.id])],
    steps,
    pitfalls: proc.pitfalls || [],
    kpis: proc.kpis || [],
    commands: buildCommands(slug, proc, variant),
    authored: !!proc.authored,
    body: proc.body || null,
  };
}

function buildCommands(slug, proc, variant) {
  const cmds = [];
  cmds.push({ label: "Install with skills CLI", cmd: `npx skills add aniruddhaadak80/skills --skill ${slug}` });
  cmds.push({ label: "Install globally", cmd: `npx skills add aniruddhaadak80/skills --skill ${slug} -g` });
  if (proc.commands) cmds.push(...proc.commands);
  return cmds;
}

export function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
