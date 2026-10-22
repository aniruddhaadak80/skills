---
name: playbook-qa-testing-automation-from-zero
description: "Pyramid-balanced suite with stable selectors gating deploys reliably."
---
# Playbook: Start test automation that lasts

> Pyramid-balanced suite with stable selectors gating deploys reliably.

**Track:** 🗺️ QA & Testing · **Domain:** Journey Playbooks · **Level:** journey · **~105 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Pyramid-balanced suite with stable selectors gating deploys reliably.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Balance the test pyramid for your app: start with "Default ratio: ~70% unit, ~20% integration, ~10% e2e — adjust per risk"
2. Step 2 — Write E2E tests that survive redesigns (Playwright): start with "Locate elements by accessible role/name — resilient AND forces a11y"
3. Step 3 — Eliminate flaky tests systematically: start with "Auto-detect flakiness via retry-pass detection; report rate weekly"
4. How it fits together: Selector strategy decided day one saves months. Smoke suite first, depth later.

### Referenced Skills

- `test-strategy-test-pyramid-balance`
- `automation-e2e-maintainable-selectors-pw`
- `automation-flaky-test-elimination`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill test-strategy-test-pyramid-balance && npx skills add aniruddhaadak80/skills --skill automation-e2e-maintainable-selectors-pw && npx skills add aniruddhaadak80/skills --skill automation-flaky-test-elimination
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills