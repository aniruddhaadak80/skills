---
name: data-movement-export-pipeline-design
description: "Async generation, progress signaling, chunked streaming, and format honesty."
---
# Build data exports users actually download

> Async generation, progress signaling, chunked streaming, and format honesty.

**Track:** ⚙️ Backend Engineering · **Domain:** Data Movement · **Level:** intermediate · **~30 min**

**Who this is for:** Backend Engineers, API Developers, Platform Engineers, Full-Stack Developers

## When to Use This Skill

Async generation, progress signaling, chunked streaming, and format honesty.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Generate async with job status endpoint; sync exports die at scale
2. Stream files chunked; avoid building multi-GB buffers in memory
3. Honor requested schema exactly; silent column renames break downstream parsers
4. Cap rows per file with manifest for continuation
5. Expire artifacts with signed URLs; clean storage on schedule
6. Include generated-at + filters-used metadata inside the export itself

## Common Pitfalls

- CSV injection from unsanitized formula-leading cells
- Exports blocking web workers and stalling the whole app

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill data-movement-export-pipeline-design
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill data-movement-export-pipeline-design -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills