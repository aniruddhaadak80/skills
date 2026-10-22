---
name: playbook-qa-testing-foundations-hardened
description: "Leak-free test data and mobile matrices matching real users."
---
# Playbook: Harden testing foundations

> Leak-free test data and mobile matrices matching real users.

**Track:** 🗺️ QA & Testing · **Domain:** Journey Playbooks · **Level:** journey · **~70 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Leak-free test data and mobile matrices matching real users.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Manage test data without production leaks: start with "Prefer synthetic generators seeded for reproducibility over prod copies"
2. Step 2 — Test mobile apps across the fragmentation minefield: start with "Pick matrix from actual user analytics (top devices × OS versions covering 80%)"
3. How it fits together: PII in test envs is a breach waiting for discovery day.

### Referenced Skills

- `test-foundations-test-data-management`
- `test-foundations-mobile-testing-basics`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill test-foundations-test-data-management && npx skills add aniruddhaadak80/skills --skill test-foundations-mobile-testing-basics
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills