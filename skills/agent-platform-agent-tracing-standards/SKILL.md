---
name: agent-platform-agent-tracing-standards
description: "OpenTelemetry-aligned span taxonomies for LLM calls, tool executions, and handoffs enabling real debugging."
---
# Standardize agent observability with tracing spans

> OpenTelemetry-aligned span taxonomies for LLM calls, tool executions, and handoffs enabling real debugging.

**Track:** 🤖 AI Engineering · **Domain:** Agent Platform Engineering · **Level:** advanced · **~40 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

OpenTelemetry-aligned span taxonomies for LLM calls, tool executions, and handoffs enabling real debugging.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Define span hierarchy: session → plan → step → tool-call → sub-calls
2. Attach token counts, costs, model versions, and prompt hashes to every span
3. Propagate trace context across queues/services so retries stay linked
4. Sample intelligently: 100% of errors/tool-failures, fraction of successes
5. Build the 'why did it do that' query: input hash → exact prompts retrieved
6. Version span schema; dashboards break silently otherwise

## Common Pitfalls

- Each framework's proprietary format trapping traces in silos
- PII flowing into trace storage without scrubbing

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill agent-platform-agent-tracing-standards
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill agent-platform-agent-tracing-standards -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills