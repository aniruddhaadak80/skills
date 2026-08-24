---
name: agent-memory-context-window-budgeting
description: "Priority-ranked context assembly with measured attention degradation at depth."
---
# Budget long-context windows deliberately

> Priority-ranked context assembly with measured attention degradation at depth.

**Track:** 🤖 AI Engineering · **Domain:** Agent Memory · **Level:** intermediate · **~30 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Priority-ranked context assembly with measured attention degradation at depth.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Rank content classes by decision-relevance; measure, don't assume
2. Place critical instructions at start AND end; middle is weakest
3. Compress history progressively: verbatim → summary → one-line pointers
4. Track needle-in-haystack performance at YOUR actual context lengths
5. Set hard caps per source type to prevent single-source domination
6. Log what fit vs what was cut for every production request class

## Common Pitfalls

- Trusting '128k context' marketing at 120k utilization
- Retrieval dumps filling windows with unranked chunks

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill agent-memory-context-window-budgeting
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill agent-memory-context-window-budgeting -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills