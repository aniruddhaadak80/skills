---
name: test-foundations-mobile-testing-basics
description: "Device matrix selection, interruption/resume testing, and network-condition realism."
---
# Test mobile apps across the fragmentation minefield

> Device matrix selection, interruption/resume testing, and network-condition realism.

**Track:** 🧪 QA & Testing · **Domain:** Test Foundations · **Level:** intermediate · **~35 min**

**Who this is for:** QA Engineers, SDETs, Test Automation Engineers, Developers

## When to Use This Skill

Device matrix selection, interruption/resume testing, and network-condition realism.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Pick matrix from actual user analytics (top devices × OS versions covering 80%)
2. Test interruptions always: calls, notifications, backgrounding mid-flow
3. Emulate hostile networks: 3G, high-latency, flaky reconnects
4. Verify permission denials degrade gracefully, not fatally
5. Check OS-upgrade path and deep-link survival after updates
6. Real devices for touch/haptics/camera; emulators only for breadth

## Common Pitfalls

- Flagship-device-only testing missing the median user's phone
- Push-notification flows untested against revoked permissions

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill test-foundations-mobile-testing-basics
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill test-foundations-mobile-testing-basics -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills