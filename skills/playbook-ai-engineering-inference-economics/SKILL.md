---
name: playbook-ai-engineering-inference-economics
description: "Quantization, KV-cache strategy, and distillation decisions grounded in measured quality contracts."
---
# Playbook: Make LLM inference economically survivable

> Quantization, KV-cache strategy, and distillation decisions grounded in measured quality contracts.

**Track:** 🗺️ AI Engineering · **Domain:** Journey Playbooks · **Level:** journey · **~95 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Quantization, KV-cache strategy, and distillation decisions grounded in measured quality contracts.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Select quantization strategies without wrecking quality: start with "Baseline full-precision on YOUR eval suite; record per-task deltas as contract"
2. Step 2 — Optimize KV cache for long-context serving: start with "Measure KV footprint per token per layer; size GPU pools from p99 sequences"
3. How it fits together: Every efficiency win must survive your eval contract AND real batch shapes.

### Referenced Skills

- `model-efficiency-quantization-strategy-selection`
- `model-efficiency-kv-cache-optimization`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill model-efficiency-quantization-strategy-selection && npx skills add aniruddhaadak80/skills --skill model-efficiency-kv-cache-optimization
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills