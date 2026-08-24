---
name: web-performance-core-web-vitals
description: "Diagnose LCP, INP, and CLS from field data and apply targeted fixes per metric rather than guessing."
---
# Fix Core Web Vitals regressions systematically

> Diagnose LCP, INP, and CLS from field data and apply targeted fixes per metric rather than guessing.

**Track:** 🎨 Frontend Engineering · **Domain:** Web Performance · **Level:** advanced · **~45 min**

**Who this is for:** Frontend Engineers, Full-Stack Developers, Design Engineers, UI Developers

## When to Use This Skill

Diagnose LCP, INP, and CLS from field data and apply targeted fixes per metric rather than guessing.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Pull field data (RUM) first; lab scores only reproduce what field data flags
2. For LCP: preload the hero asset, fix server TTFB, defer everything competing
3. For INP: break long tasks, debounce handlers, move work off main thread
4. For CLS: reserve dimensions for media, fonts, and late banners
5. Set per-template budgets in CI; fail builds on regression beyond 10%
6. Re-check after every third-party script change — they are the usual suspects

## Common Pitfalls

- Optimizing lab LCP while field users on 3G suffer
- A/B analytics snippets injected without async strategy

## Success Signals

- LCP p75 under 2.5s on 4G
- CLS under 0.05 on top templates

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill web-performance-core-web-vitals
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill web-performance-core-web-vitals -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills