---
name: test-strategy-risk-based-testing
description: "Failure likelihood × impact matrix focusing effort where bugs hurt most."
---
# Prioritize testing by risk, not habit

> Failure likelihood × impact matrix focusing effort where bugs hurt most.

**Track:** 🧪 QA & Testing · **Domain:** Test Strategy · **Level:** intermediate · **~25 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Failure likelihood × impact matrix focusing effort where bugs hurt most.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. List modules; score failure probability from change frequency + complexity
2. Score business impact: money paths, data integrity, legal exposure first
3. Matrix top-right quadrant gets deepest coverage and fastest fixes
4. New features inherit high risk scores until proven stable
5. Revisit after every incident; incidents reveal mis-scored areas
6. Publish the matrix so devs understand review depth expectations

## Common Pitfalls

- Equal test depth everywhere = shallow where it matters
- Legacy untouched code tested ritually

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill test-strategy-risk-based-testing
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill test-strategy-risk-based-testing -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills