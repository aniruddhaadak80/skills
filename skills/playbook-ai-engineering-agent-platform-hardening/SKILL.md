---
name: playbook-ai-engineering-agent-platform-hardening
description: "Traced, permission-governed agent infrastructure auditors and engineers both trust."
---
# Playbook: Harden an agent platform for production

> Traced, permission-governed agent infrastructure auditors and engineers both trust.

**Track:** 🗺️ AI Engineering · **Domain:** Journey Playbooks · **Level:** journey · **~120 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Traced, permission-governed agent infrastructure auditors and engineers both trust.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Standardize agent observability with tracing spans: start with "Define span hierarchy: session → plan → step → tool-call → sub-calls"
2. Step 2 — Design tools an agent can use reliably: start with "One tool = one verb-noun responsibility; split anything doing two jobs"
3. Step 3 — Govern agent tool access with permission matrices: start with "Inventory every tool × action class; classify read/write/irreversible"
4. How it fits together: Traces answer debugging; permission matrices answer insurance. You need both.

### Referenced Skills

- `agent-platform-agent-tracing-standards`
- `agents-tool-design`
- `agent-platform-tool-permission-matrix`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill agent-platform-agent-tracing-standards && npx skills add aniruddhaadak80/skills --skill agents-tool-design && npx skills add aniruddhaadak80/skills --skill agent-platform-tool-permission-matrix
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills