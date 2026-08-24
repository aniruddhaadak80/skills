---
name: agent-memory-memory-architecture-tiers
description: "Working, episodic, and semantic memory tiers with promotion/forgetting policies that stay coherent."
---
# Design tiered memory for persistent agents

> Working, episodic, and semantic memory tiers with promotion/forgetting policies that stay coherent.

**Track:** 🤖 AI Engineering · **Domain:** Agent Memory · **Level:** advanced · **~45 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Working, episodic, and semantic memory tiers with promotion/forgetting policies that stay coherent.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Keep working memory as curated context window, not raw transcript
2. Write episodic summaries at session boundaries with salience scores
3. Promote recurring facts to semantic store only after N corroborations
4. Implement forgetting: decay scores, TTL on stale entries
5. Give agents explicit memory-write tools with structured schemas
6. Audit memory contents monthly for PII and contradiction buildup

## Common Pitfalls

- Everything stored forever until retrieval drowns in noise
- Contradictory memories surfacing whichever was written last

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill agent-memory-memory-architecture-tiers
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill agent-memory-memory-architecture-tiers -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills