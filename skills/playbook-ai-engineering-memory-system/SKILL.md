---
name: playbook-ai-engineering-memory-system
description: "Tiered memory architecture with promotion, forgetting, and audit hygiene live in production."
---
# Playbook: Give your agent a working memory

> Tiered memory architecture with promotion, forgetting, and audit hygiene live in production.

**Track:** 🗺️ AI Engineering · **Domain:** Journey Playbooks · **Level:** journey · **~75 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Tiered memory architecture with promotion, forgetting, and audit hygiene live in production.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Design tiered memory for persistent agents: start with "Keep working memory as curated context window, not raw transcript"
2. Step 2 — Budget long-context windows deliberately: start with "Rank content classes by decision-relevance; measure, don't assume"
3. How it fits together: Memory without forgetting policy becomes noise; budget context before scaling storage.

### Referenced Skills

- `agent-memory-agent-memory-tiers`
- `agent-memory-context-window-budgeting`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill agent-memory-agent-memory-tiers && npx skills add aniruddhaadak80/skills --skill agent-memory-context-window-budgeting
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills