---
name: performance-testing-load-testing
description: "Load scenarios rebuilt from production traffic shape — ramp, think time, real payloads — so capacity findings transfer to production. Use when sizing capacity, validating an SLO, or preparing for a traffic event."
---
# Design and run load tests that reflect reality

> Load scenarios rebuilt from production traffic shape — ramp, think time, real payloads — so capacity findings transfer to production. Use when sizing capacity, validating an SLO, or preparing for a traffic event.

**Track:** 🧪 QA & Testing · **Domain:** Performance Testing · **Level:** intermediate · **~35 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Load scenarios rebuilt from production traffic shape — ramp, think time, real payloads — so capacity findings transfer to production. Use when sizing capacity, validating an SLO, or preparing for a traffic event.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Reconstruct the traffic shape from real analytics instead of a round number of users; peak concurrency comes from the actual funnel and session length
2. Model think time and its distribution, because a load test with zero think time measures your server and not your users
3. Use real payload shapes and data cardinalities, since empty bodies and single-row tables hide every database bottleneck
4. Ramp gradually, then hold a steady state long enough to catch cache warm-up, connection pools, and leaks rather than only the first spike
5. Instrument the whole stack during the run — p95 and p99 latency, error rate, and saturation per dependency — so you can attribute the slow part
6. Write the pass/fail thresholds down before the run, otherwise the report becomes an argument instead of a result

## Common Pitfalls

- Every user arriving at once with no think time, a synthetic stampede that no real traffic produces
- Load testing a staging environment with production-sized data and calling the result a capacity plan

## Success Signals

- p95 latency within the agreed SLO at peak concurrency
- Error rate under 0.1% across the whole steady-state window
- Every bottleneck identified with a saturation metric rather than a guess

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill performance-testing-load-testing
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill performance-testing-load-testing -g
```

**Run the peak-traffic scenario**
```bash
k6 run --summary-export=summary.json scenarios/peak-traffic.js
```

**Point the scenario at a staging base URL**
```bash
k6 run -e BASE_URL=https://staging.example.com scenarios/peak-traffic.js
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills