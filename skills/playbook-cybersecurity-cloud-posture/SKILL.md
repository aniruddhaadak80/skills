---
name: playbook-cybersecurity-cloud-posture
description: "Configuration audits codified per platform with drift detection running."
---
# Playbook: Fix cloud posture systematically

> Configuration audits codified per platform with drift detection running.

**Track:** 🗺️ Cybersecurity · **Domain:** Journey Playbooks · **Level:** journey · **~120 min**

**Who this is for:** Security Engineers, AppSec, DevSecOps, Compliance Teams

## When to Use This Skill

Configuration audits codified per platform with drift detection running.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Audit cloud account configurations systematically (AWS): start with "Inventory public exposure: buckets, shares, snapshots, load balancers"
2. Step 2 — Audit cloud account configurations systematically (GCP): start with "Inventory public exposure: buckets, shares, snapshots, load balancers"
3. Step 3 — Audit cloud account configurations systematically (Azure): start with "Inventory public exposure: buckets, shares, snapshots, load balancers"
4. How it fits together: Run the variant matching your platform; codify checks so drift gets caught.

### Referenced Skills

- `cloud-config-audit-cloud-config-audit-basics-aws`
- `cloud-config-audit-cloud-config-audit-basics-gcp`
- `cloud-config-audit-cloud-config-audit-basics-azure`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill cloud-config-audit-cloud-config-audit-basics-aws && npx skills add aniruddhaadak80/skills --skill cloud-config-audit-cloud-config-audit-basics-gcp && npx skills add aniruddhaadak80/skills --skill cloud-config-audit-cloud-config-audit-basics-azure
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills