# skills

Original [Agent Skills](https://agentskills.io/) by [Aniruddha Adak](https://github.com/aniruddhaadak80) — reusable instruction packs for AI coding agents, installable via the open [skills CLI](https://github.com/vercel-labs/skills) and discoverable on [skills.sh](https://skills.sh).

[![skills.sh](https://skills.sh/b/aniruddhaadak80/skills)](https://skills.sh/aniruddhaadak80/skills)

## Available Skills

| Skill | What it does |
|---|---|
| [`vercel-token-deploy`](skills/vercel-token-deploy/SKILL.md) | Deploy to Vercel via a stored token file — no browser OAuth, safe for clock-drift machines, token never printed or committed |
| [`footprint-audit`](skills/footprint-audit/SKILL.md) | Audit an online identity: verified vs inflated claims, namesake collisions, privacy-leak takedown lists |
| [`oss-pr-landing`](skills/oss-pr-landing/SKILL.md) | Land merged PRs in large OSS repos: issue triage, minimal diffs, review follow-through |

Each skill is authored from real, repeated workflows — not generated filler.

## Install

```bash
npx skills add aniruddhaadak80/skills
```

Pick specific skills non-interactively:

```bash
npx skills add aniruddhaadak80/skills --skill vercel-token-deploy -a claude-code -g
```

Works with 75+ agents (OpenCode, Claude Code, Codex, Cursor, Copilot, Windsurf, Gemini CLI, ...). See the full list in the [CLI docs](https://github.com/vercel-labs/skills#supported-agents).

## Repo Layout

```
skills/
├── vercel-token-deploy/
│   └── SKILL.md
├── footprint-audit/
│   └── SKILL.md
└── oss-pr-landing/
    └── SKILL.md
```

Every skill is a directory with a `SKILL.md` (YAML frontmatter: `name` + `description`) following the open Agent Skills format.

## Author

Aniruddha Adak — AI Agent Engineer / Full-Stack Developer, Kolkata.
350+ merged PRs across open-source projects · [aniruddhaadak80@gmail.com](mailto:aniruddhaadak80@gmail.com)

## License

MIT
