---
name: web-app-testing-playwright-smoke-authoring
description: "Journey-selection, trace-on-retry infrastructure, and network stubs producing trustworthy five-minute gates."
---
# Author Playwright smoke suites for web apps

> Journey-selection, trace-on-retry infrastructure, and network stubs producing trustworthy five-minute gates.

**Track:** 🧪 QA & Testing · **Domain:** Web App Testing · **Level:** intermediate · **~40 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Journey-selection, trace-on-retry infrastructure, and network stubs producing trustworthy five-minute gates.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Pick 5-7 journeys by traffic × revenue impact; ignore the rest at gate level
2. Configure trace + video on retry only; artifacts for failures, speed for passes
3. Stub third-party calls; your gate shouldn't fail because an analytics vendor sneezed
4. Seed state via API routes, never UI-click signup chains
5. Assert user-visible outcomes (row rendered, email text) over DOM internals
6. Run against preview deployments per PR; prod-smoke separately post-deploy

## Common Pitfalls

- Flaky third-party scripts owning your merge gate
- Selectors coupled to styling classes renamed weekly

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill web-app-testing-playwright-smoke-authoring
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill web-app-testing-playwright-smoke-authoring -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills