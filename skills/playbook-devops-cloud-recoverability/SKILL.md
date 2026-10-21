---
name: playbook-devops-cloud-recoverability
description: "Backups restored on schedule against declared RPO/RTO with evidence."
---
# Playbook: Prove you can recover

> Backups restored on schedule against declared RPO/RTO with evidence.

**Track:** 🗺️ DevOps & Cloud · **Domain:** Journey Playbooks · **Level:** journey · **~75 min**

**Who this is for:** DevOps Engineers, SREs, Cloud Architects, Platform Engineers

## When to Use This Skill

Backups restored on schedule against declared RPO/RTO with evidence.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Test backups by restoring them on schedule: start with "Define RPO/RTO per system with business sign-off, in writing"
2. Step 2 — Instrument the four golden signals: start with "Emit RED metrics per endpoint: rate, errors, duration histograms"
3. How it fits together: A backup never restored is a hope, not a plan.

### Referenced Skills

- `platform-tooling-backup-restore-testing`
- `observability-golden-signals`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill platform-tooling-backup-restore-testing && npx skills add aniruddhaadak80/skills --skill observability-golden-signals
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills