---
name: traffic-control-rate-limiting-strategies
description: "Algorithm selection, key dimensioning, and honest 429s with Retry-After that clients obey."
---
# Rate-limit APIs without breaking good clients

> Algorithm selection, key dimensioning, and honest 429s with Retry-After that clients obey.

**Track:** ⚙️ Backend Engineering · **Domain:** Traffic Control · **Level:** intermediate · **~35 min**

**Who this is for:** Backend Engineers, API Developers, Platform Engineers, Full-Stack Developers

## When to Use This Skill

Algorithm selection, key dimensioning, and honest 429s with Retry-After that clients obey.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Choose algorithm per shape: token bucket for bursts, sliding window for fairness
2. Key by API-key then user then IP cascade; document precedence
3. Return 429 with Retry-After AND remaining-headers always
4. Publish limits in docs and headers; surprises are support tickets
5. Whitelist health checks and internal callers explicitly
6. Load-test limiter itself; it becomes the new bottleneck

## Common Pitfalls

- Global limit keyed by shared NAT IP punishing offices
- Limiters deployed without client libraries respecting them

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill traffic-control-rate-limiting-strategies
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill traffic-control-rate-limiting-strategies -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills