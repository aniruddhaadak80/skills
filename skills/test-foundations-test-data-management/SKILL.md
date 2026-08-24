---
name: test-foundations-test-data-management
description: "Synthetic generation, masked subsets, and refresh pipelines keeping tests realistic and legal."
---
# Manage test data without production leaks

> Synthetic generation, masked subsets, and refresh pipelines keeping tests realistic and legal.

**Track:** 🧪 QA & Testing · **Domain:** Test Foundations · **Level:** advanced · **~35 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Synthetic generation, masked subsets, and refresh pipelines keeping tests realistic and legal.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Prefer synthetic generators seeded for reproducibility over prod copies
2. Where real data needed: mask irreversibly, subset minimally, document lineage
3. Version datasets with test code; breaking data changes break loudly in CI
4. Unique-per-run entities prevent cross-test interference by construction
5. Purge stale environments on schedule; storage isn't free forever
6. Audit quarterly: no PII in any non-prod environment, verified not assumed

## Common Pitfalls

- Prod database dumps cloned to every laptop
- Shared 'QA account' state mutated into permanent brokenness

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill test-foundations-test-data-management
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill test-foundations-test-data-management -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills