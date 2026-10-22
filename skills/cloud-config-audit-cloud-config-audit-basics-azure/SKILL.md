---
name: cloud-config-audit-cloud-config-audit-basics-azure
description: "Structured cloud configuration review catching the misconfigurations attackers scan for first."
---
# Audit cloud account configurations systematically (Azure)

> Structured cloud configuration review catching the misconfigurations attackers scan for first.

**Track:** 🔐 Cybersecurity · **Domain:** Cloud Config Audit · **Level:** intermediate · **~40 min**

**Who this is for:** Security Engineers, AppSec, DevSecOps, Compliance Teams

## When to Use This Skill

Structured cloud configuration review catching the misconfigurations attackers scan for first.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Inventory public exposure: buckets, shares, snapshots, load balancers
2. Verify encryption-at-rest defaults everywhere including backups
3. Check network paths: 0.0.0.0/0 security groups, public subnets for databases
4. Confirm central logging exists and is tamper-resistant
5. Triage findings by exploitability × data-sensitivity; fix internet-facing criticals this week
6. Codify checks into scheduled scans so drift gets caught automatically
7. Audit subscription-level RBAC assignments vs management groups
8. Check diagnostic settings flowing to central Log Analytics

## Common Pitfalls

- One-time audits certifying perpetually-drifting accounts
- Criticals tracked in spreadsheets until they age out of memory

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill cloud-config-audit-cloud-config-audit-basics-azure
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill cloud-config-audit-cloud-config-audit-basics-azure -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills