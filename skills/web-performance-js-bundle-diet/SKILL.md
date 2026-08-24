---
name: web-performance-js-bundle-diet
description: "Analyze, split, and replace dependencies so routes ship only the code they execute."
---
# Put JavaScript bundles on a diet

> Analyze, split, and replace dependencies so routes ship only the code they execute.

**Track:** 🎨 Frontend Engineering · **Domain:** Web Performance · **Level:** intermediate · **~35 min**

**Who this is for:** Frontend Engineers, Full-Stack Developers, Design Engineers, UI Developers

## When to Use This Skill

Analyze, split, and replace dependencies so routes ship only the code they execute.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Generate a bundle report; list the ten largest modules per route
2. Replace moment/lodash-class imports with native APIs or per-function imports
3. Dynamic-import heavy widgets (editors, charts) behind interaction
4. Move date/number formatting and markdown parsing server-side where possible
5. Set an import lint rule banning known-bloated packages
6. Track route-level JS budget over time; investigate any growth spike same week

## Common Pitfalls

- Tree-shaking defeated by side-effectful barrel files
- Polyfills duplicated by transpilation misconfig

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill web-performance-js-bundle-diet
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill web-performance-js-bundle-diet -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills