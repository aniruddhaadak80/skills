# Contributing to Agent Skills Directory

Thank you for wanting to contribute! This library's value comes from **real, production-tested knowledge** — this guide explains exactly how to add yours.

## 🧭 The Quality Bar (read first)

Every skill must pass these gates before merge:

| Gate | Requirement |
|---|---|
| **Lived experience** | You have actually done this procedure in real work — not synthesized from blog posts |
| **Concrete steps** | 4+ numbered, imperative steps a competent agent could follow |
| **Pitfalls** | At least one real way this goes wrong (you've seen it happen) |
| **No duplication** | Check existing tracks first — variants beat duplicates |
| **Original writing** | Written by you; no copied content without attribution rights |
| **Safe content** | No instructions facilitating harm; professional/professional-adjacent knowledge only |

> We ship quality over quantity on purpose. A PR adding one excellent procedure beats ten mediocre ones.

## 📁 How the Library Works

```
src/data/tracks/<track>.mjs   ← YOU edit this (structured data)
scripts/generate.mjs          ← builds everything else automatically:
  → skills/<slug>/SKILL.md        installable agent skills
  → public/search-index.json      website search
  → src/data/tracks-meta.json     badges
src/app/*                     ← website (only touch if building features)
```

You never write SKILL.md files by hand — the generator creates them.

## ➕ Adding a Skill (most common)

1. Pick the track file matching your expertise in `src/data/tracks/`
2. Add a procedure object to the relevant domain:

```js
{
  id: "my-procedure",                    // unique within domain
  title: "Do X without breaking Y",
  level: "intermediate",                 // foundation | intermediate | advanced
  minutes: 30,                           // realistic time to apply
  description: "What it does AND when an agent should activate it.", // ≥40 chars
  tags: ["tag1", "tag2"],
  steps: [
    "First imperative step",
    "Second imperative step",
    // ...4+ steps
  ],
  pitfalls: [
    "Real failure mode you have witnessed"
  ],
  kpis: ["Measurable success signal"],   // optional
  commands: [{ label: "Run check", cmd: "example --flag" }], // optional
  variants: {                            // optional — multiplies into separate skills
    python: { id: "py", label: "Python", adds: ["Python-specific step"] }
  }
}
```

3. Validate locally:

```bash
node scripts/validate-data.mjs   # content QA checks
npm run gen                      # regenerate skills + indexes
npm run build                    # website build (optional but nice)
```

4. Commit and open a PR. CI validates everything automatically.

## 🆕 Adding a Track or Domain

New profession? Create `src/data/tracks/<id>.mjs` exporting a track object:

```js
export const track = {
  id: "your-track-id",            // kebab-case, stable forever
  label: "Human Readable Name",
  icon: "🧩",                     // one emoji, not already used
  gradient: "from-cyan-500 via-teal-500 to-emerald-400",  // tailwind classes
  ring: "ring-teal-500/30",
  text: "text-teal-300",
  blurb: "One sentence describing the track.",
  roles: ["Role One", "Role Two"],
  domains: [ /* 2+ domains, each with 2+ procedures */ ]
};
```

Register it in `src/data/tracks/index.mjs`. Add journey playbooks in `playbooks.mjs` referencing your procedures by final slug.

## 🗺️ Playbook Schema

```js
{ trackId: "some-track", items: [
  { id: "journey-id", title: "Achieve Big Thing", goal: "End state...",
    uses: ["slug-of-procedure-1", "slug-of-procedure-2"],  // must exist!
    guidance: "How the pieces fit and what order matters." }
]}
```

## 💻 Local Development

```bash
git clone https://github.com/aniruddhaadak80/skills && cd skills
npm install
npm run dev        # website at localhost:3000
npm run gen        # regenerate after data edits
npm run build      # production build
node scripts/validate-data.mjs   # QA gate (runs in CI too)
node scripts/verify-routes.mjs   # post-build route check
```

## 🔍 What CI Checks on Every PR

Our automation reviews every pull request automatically:

1. **Data validation** — schema, step counts, placeholders, duplicate detection
2. **Sync check** — generated files match source data (if not: run `npm run gen` and commit)
3. **Route integrity** — every skill resolves to a working page
4. **Auto-labeling** — PRs labeled by area touched
5. **Welcome** — first-time contributors get a greeting with links

If CI fails, the check comment tells you exactly which rule broke.

## 🌟 Getting Credit

All contributors are recognized automatically:

- Your GitHub avatar appears in the README Contributors wall (auto-updated)
- Every merged PR is counted toward your contributor stats
- Substantial contributions (new tracks, 10+ skills) earn a mention in release notes

Use your real work — this repo is portfolio-visible and honesty is the culture here.

## 🐛 Reporting Problems

- **Wrong/dangerous content in a skill** → open an issue with label `content-fix`, quote the exact text
- **Website bug** → issue with steps to reproduce + browser
- **Skill suggestions** → use the Skill Suggestion issue template

## 📜 License

By contributing you agree your contributions are licensed MIT alongside the project.
