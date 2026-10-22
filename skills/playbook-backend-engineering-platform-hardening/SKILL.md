---
name: playbook-backend-engineering-platform-hardening
description: "Fair rate limits, trustworthy outbound webhooks, and exports that scale."
---
# Playbook: Harden platform traffic and integrations

> Fair rate limits, trustworthy outbound webhooks, and exports that scale.

**Track:** 🗺️ Backend Engineering · **Domain:** Journey Playbooks · **Level:** journey · **~100 min**

**Who this is for:** Backend Engineers, API Developers, Platform Engineers, Full-Stack Developers

## When to Use This Skill

Fair rate limits, trustworthy outbound webhooks, and exports that scale.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Rate-limit APIs without breaking good clients: start with "Choose algorithm per shape: token bucket for bursts, sliding window for fairness"
2. Step 2 — Send webhooks partners can rely on: start with "Sign payloads (HMAC + timestamp) and publish verification snippets per language"
3. Step 3 — Build data exports users actually download: start with "Generate async with job status endpoint; sync exports die at scale"
4. How it fits together: These three break production trust fastest; instrument each before launch.

### Referenced Skills

- `traffic-control-rate-limiting-strategies`
- `traffic-control-outbound-webhooks-reliability`
- `data-movement-export-pipeline-design`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill traffic-control-rate-limiting-strategies && npx skills add aniruddhaadak80/skills --skill traffic-control-outbound-webhooks-reliability && npx skills add aniruddhaadak80/skills --skill data-movement-export-pipeline-design
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills