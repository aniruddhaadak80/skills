---
name: agent-platform-tool-permission-matrix
description: "Role-scoped tool grants, parameter-level policies, and audit trails making agent autonomy insurable."
---
# Govern agent tool access with permission matrices

> Role-scoped tool grants, parameter-level policies, and audit trails making agent autonomy insurable.

**Track:** 🤖 AI Engineering · **Domain:** Agent Platform Engineering · **Level:** advanced · **~40 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Role-scoped tool grants, parameter-level policies, and audit trails making agent autonomy insurable.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Inventory every tool × action class; classify read/write/irreversible
2. Bind permissions to agent ROLES, not individual deployments ad hoc
3. Enforce parameter constraints server-side (amount caps, allowlisted targets)
4. Require dual approval workflows for irreversible classes in prod
5. Log grant changes separately from usage; both auditable immutably
6. Red-team the matrix quarterly: can role combos escalate?

## Common Pitfalls

- Wildcard grants copied between environments 'temporarily'
- Parameter validation living only in prompts

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill agent-platform-tool-permission-matrix
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill agent-platform-tool-permission-matrix -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills