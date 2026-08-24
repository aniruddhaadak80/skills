---
name: web-performance-image-pipeline
description: "Modern formats, responsive sizes, lazy strategies, and priority hints for above-fold heroes."
---
# Ship images that cost almost nothing

> Modern formats, responsive sizes, lazy strategies, and priority hints for above-fold heroes.

**Track:** 🎨 Frontend Engineering · **Domain:** Web Performance · **Level:** foundation · **~25 min**

**Who this is for:** Frontend Engineers, Full-Stack Developers, Design Engineers, UI Developers

## When to Use This Skill

Modern formats, responsive sizes, lazy strategies, and priority hints for above-fold heroes.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Serve AVIF/WebP with automatic fallbacks via an image component or CDN
2. Generate responsive srcsets at 3-4 widths matched to actual layout slots
3. Lazy-load below-fold images; set fetchpriority=high on the LCP hero only
4. Always set explicit width and height to protect CLS
5. Strip metadata at upload; cap decoded size for thumbnails
6. Audit monthly for orphaned assets and unoptimized direct <img> usage

## Common Pitfalls

- Lazy-loading the hero because a global wrapper applied it
- Serving 2400px originals into 300px cards

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill web-performance-image-pipeline
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill web-performance-image-pipeline -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills