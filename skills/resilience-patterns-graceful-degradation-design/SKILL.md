---
name: resilience-patterns-graceful-degradation-design
description: "Feature-tier fallbacks, circuit breakers, and honest UI states keeping core journeys alive during partial failure."
---
# Design degradation users forgive

> Feature-tier fallbacks, circuit breakers, and honest UI states keeping core journeys alive during partial failure.

**Track:** ⚙️ Backend Engineering · **Domain:** Resilience Patterns · **Level:** advanced · **~40 min**

**Who this is for:** Backend Engineers, API Developers, Platform Engineers, Full-Stack Developers

## When to Use This Skill

Feature-tier fallbacks, circuit breakers, and honest UI states keeping core journeys alive during partial failure.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Rank features by criticality; define degraded-mode behavior per tier now
2. Wrap non-critical dependencies in circuit breakers with half-open probing
3. Serve cached/stale content with honest timestamps over hard failures
4. Disable expensive features automatically under load-shed pressure
5. Surface degraded states subtly-but-honestly; silence breeds distrust
6. Chaos-test degradation paths deliberately, not just happy paths

## Common Pitfalls

- Everything depends on everything so nothing degrades gracefully
- Fallback content so stale it misleads decision-making

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill resilience-patterns-graceful-degradation-design
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill resilience-patterns-graceful-degradation-design -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills