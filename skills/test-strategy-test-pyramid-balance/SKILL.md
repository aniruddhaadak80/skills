---
name: test-strategy-test-pyramid-balance
description: "Allocate unit/integration/e2e counts by feedback speed and failure diagnosability."
---
# Balance the test pyramid for your app

> Allocate unit/integration/e2e counts by feedback speed and failure diagnosability.

**Track:** 🧪 QA & Testing · **Domain:** Test Strategy · **Level:** foundation · **~30 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Allocate unit/integration/e2e counts by feedback speed and failure diagnosability.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Default ratio: ~70% unit, ~20% integration, ~10% e2e — adjust per risk
2. Push logic coverage down; keep e2e for critical user journeys only
3. Integration tests own API contracts and database interactions
4. One smoke e2e suite under 5 min gates every deploy
5. Delete redundant tests asserting the same behavior at multiple levels
6. Review distribution quarterly as architecture evolves

## Common Pitfalls

- Ice-cream-cone suites: thousands of slow UI tests
- Unit tests mocking everything, testing nothing real

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill test-strategy-test-pyramid-balance
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill test-strategy-test-pyramid-balance -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills