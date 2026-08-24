<div align="center">

# ⚡ Agent Skills Directory

### Installable AI agent skills for every profession

**Engineering · AI/ML · Product · Leadership · HR · Legal · Biotech & Pharma · Science · QA · Writing · Startups**

[![Skills Count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Faniruddhaadak80%2Fskills%2Fmain%2Fsrc%2Fdata%2Fskills-index.json&query=%24.count&label=skills&color=violet)](https://github.com/aniruddhaadak80/skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Directory](https://img.shields.io/badge/web-directory-8b5cf6)](#-live-directory)
[![Format](https://img.shields.io/badge/format-Agent_Skills_(SKILL.md)-teal)](https://agentskills.io)

</div>

---

A curated library of **production-grade [Agent Skills](https://agentskills.io)** (`SKILL.md` procedures) that give coding agents — OpenCode, Claude Code, Cursor, Codex, Copilot, Gemini CLI and **75+ more** — the procedural knowledge of an entire senior team.

Every skill is authored from real workflows: concrete steps, common pitfalls, success signals, and copy-paste commands. No filler, no near-duplicates, no AI slop.

## 🚀 Quick Start

```bash
npx skills add aniruddhaadak80/skills
```

Install one skill to one agent:

```bash
npx skills add aniruddhaadak80/skills --skill rag-pipelines-chunking-strategy -a opencode
```

That's it. Your agent discovers installed skills automatically and activates them on demand via progressive disclosure — zero context cost until relevant.

## 📚 What's Inside

| Track | Sample skills |
|---|---|
| 🤖 **AI Engineering** | RAG chunking & hybrid search, agent guardrails, prompt-injection defense, evals, fine-tuning datasets |
| 🎨 **Frontend** | RSC boundaries, Core Web Vitals rescue, design tokens, animation craft, accessibility audits |
| ⚙️ **Backend** | REST/gRPC modeling, idempotency keys, zero-downtime migrations, cache layering, queue reliability |
| ☁️ **DevOps & Cloud** | Production Dockerfiles, CI pipeline design, deploy strategies, Terraform modules, golden signals, Vercel token deploys |
| 🔐 **Cybersecurity** | Threat modeling, secure code review, secrets hygiene, IAM least-privilege, breach first-hour playbook |
| 🧰 **Engineering Essentials** | Systematic debugging, code review, refactoring, profiling, git discipline — tuned per stack (Node/Python/Go/Rust/Java/.NET) |
| 📊 **Data Science** | Dataset health checks, causal traps, trustworthy A/B tests, leakage prevention, metric contracts |
| 📋 **Product Management** | Customer interviews, opportunity sizing, outcome roadmaps, one-page PRDs, launch checklists |
| 🧭 **Engineering Leadership** | 1:1s that build trust, performance calibration, tech-debt portfolios, structured hiring, OSS stewardship |
| 👥 **People & HR** | Inclusive JDs, bias-guarded screening, onboarding/offboarding lifecycle, engagement loops, footprint audits |
| 🧬 **Biotech & Pharma** | Sequencing QC, variant calling SOPs, sample lineage, protocol versioning, GxP documentation, clinical data |
| ⚖️ **Legal & Compliance** | GDPR data mapping, DSAR response flow, MSA redline triage, IP assignment hygiene |
| 🔬 **Scientific Research** | Power analysis, control design, computational reproducibility, paper writing order, grant narratives |
| 🧪 **QA & Testing** | Test pyramids, flaky-test elimination, maintainable E2E, session-based exploratory, release gates |
| ✍️ **Technical Writing** | Diátaxis audits, docs-as-code, endpoint docs, tutorial craft, changelogs users read |
| 🚀 **Startup & Founders** | MVP scope-cutting, validation signals, founder narrative decks, first growth loops |
| 💼 **Freelance & Business** | Proposals that close, niche positioning, value pricing, scope-change control |

Plus 🗺️ **Journey Playbooks** — multi-skill guided sequences like *"Launch a RAG feature end to end"*, *"New engineering manager: first 90 days"*, and *"Stand up a privacy program baseline"*.

## 🌐 Live Directory

Browse, search, and copy install commands at the companion web app (Next.js, fully static):

```bash
npm install && npm run dev   # local development
npm run gen                  # regenerate SKILL.md files from src/data/
```

## 🏗️ How It Works

```
src/data/tracks/*.mjs    ← structured knowledge base (source of truth)
        │
        ▼ node scripts/generate.mjs
skills/<slug>/SKILL.md   ← Agent Skills format, auto-generated + indexed
        │
        ▼ npx skills add aniruddhaadak80/skills
Your agent               ← discovers + activates skills on demand
```

Each skill follows the open spec:

```markdown
---
name: my-skill
description: What it does + when the agent should activate it
---
# Steps, pitfalls, success signals, commands…
```

## 📈 Scaling Roadmap

The generator architecture is built for scale — new skills come from expanding the knowledge base, not from hand-writing files:

1. **Expansion packs** — new domains per track (each domain contributes procedurally distinct skills)
2. **Stack variants** — universal engineering procedures multiply across language stacks with stack-specific steps
3. **Playbook compositions** — new journeys assemble existing skills into guided sequences
4. **Community contributions** — PRs adding procedures to `src/data/tracks/` auto-generate installable skills

> Honest note from the author: this repo ships only skills that pass a quality bar — real steps, real pitfalls, no template spam. Volume follows quality; not the other way around.

## 🤝 Contributing

1. Pick a track you have real production experience in
2. Add a procedure object to `src/data/tracks/<track>.mjs` following the schema
3. Run `npm run gen` — your `SKILL.md` appears with frontmatter, index entry, and website page
4. Open a PR; CI validates slug uniqueness and format

MIT © [Aniruddha Adak](https://github.com/aniruddhaadak80) · 350+ merged OSS PRs · [aniruddhaadak80@gmail.com](mailto:aniruddhaadak80@gmail.com)
