---
name: platform-tooling-observability-stack-setup-grafana
description: "Choose and wire an observability platform matching team size, budget, and cardinailty discipline."
---
# Stand up an observability stack that fits (Grafana LGTM)

> Choose and wire an observability platform matching team size, budget, and cardinailty discipline.

**Track:** ☁️ DevOps & Cloud · **Domain:** Platform Tooling Choices · **Level:** intermediate · **~40 min**

**Who this is for:** DevOps Engineers, SREs, Cloud Architects, Platform Engineers

## When to Use This Skill

Choose and wire an observability platform matching team size, budget, and cardinailty discipline.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Inventory must-have signals: traces? logs? RUM? profiles?
2. Budget cardinality: labels cost money forever; tag deliberately
3. Wire OpenTelemetry SDKs vendor-neutrally to preserve exit options
4. Alert routing into on-call tool with runbook links mandatory
5. Provision dashboards per service template, not artisanal snowflakes
6. Review spend monthly against signal-value; prune unused streams
7. Run Loki log aggregation with retention tiers
8. Manage dashboards-as-code via provisioning configs

## Common Pitfalls

- Full-fidelity everything ingested at eye-watering invoice
- Dashboards nobody opens while pages fire into voids

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill platform-tooling-observability-stack-setup-grafana
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill platform-tooling-observability-stack-setup-grafana -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills