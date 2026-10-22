---
name: program-security-vendor-risk-assessment
description: "Tiered questionnaires, evidence requests, and ongoing monitoring proportionate to data exposure."
---
# Assess vendor risk before data leaves

> Tiered questionnaires, evidence requests, and ongoing monitoring proportionate to data exposure.

**Track:** 🔐 Cybersecurity · **Domain:** Security Program · **Level:** intermediate · **~35 min**

**Who this is for:** Security Engineers, AppSec, DevSecOps, Compliance Teams

## When to Use This Skill

Tiered questionnaires, evidence requests, and ongoing monitoring proportionate to data exposure.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Tier vendors by data sensitivity × operational dependency
2. Tier-1 gets evidence: SOC2/ISO certs read critically, pen-test summaries, DPA review
3. Check subprocessor chains — your risk extends to their vendors
4. Contract terms: breach notification windows, audit rights, exit/data-return
5. Monitor continuously for vendor breaches affecting your stack
6. Register everything in a living third-party inventory with review dates

## Common Pitfalls

- Questionnaire theater: self-attested 'yes' treated as assurance
- Shadow SaaS adopted by teams bypassing the process entirely

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill program-security-vendor-risk-assessment
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill program-security-vendor-risk-assessment -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills