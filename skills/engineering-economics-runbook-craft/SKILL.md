---
name: engineering-economics-runbook-craft
description: "Symptom-indexed, copy-paste-ready procedures with verification steps and escalation exits."
---
# Write runbooks that work at 3am

> Symptom-indexed, copy-paste-ready procedures with verification steps and escalation exits.

**Track:** ☁️ DevOps & Cloud · **Domain:** Engineering Economics · **Level:** foundation · **~25 min**

**Who this is for:** DevOps Engineers, SREs, Cloud Architects, Platform Engineers

## When to Use This Skill

Symptom-indexed, copy-paste-ready procedures with verification steps and escalation exits.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Index by SYMPTOM the on-call observes, not internal component names
2. Every command copy-pasteable with expected output shown beside it
3. Include decision points: if X then do Y else escalate to Z with link
4. State blast radius of each destructive step explicitly before it appears
5. Test runbooks during calm drills quarterly; stale steps kill trust
6. Owner named per runbook; review date visible at top

## Common Pitfalls

- Architecture essays where triage steps belong
- Commands referencing hostnames that stopped existing months ago

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill engineering-economics-runbook-craft
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill engineering-economics-runbook-craft -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills