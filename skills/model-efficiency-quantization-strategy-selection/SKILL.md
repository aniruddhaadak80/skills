---
name: model-efficiency-quantization-strategy-selection
description: "PTQ vs QAT tradeoffs, per-layer sensitivity analysis, and eval gates protecting downstream task accuracy."
---
# Select quantization strategies without wrecking quality

> PTQ vs QAT tradeoffs, per-layer sensitivity analysis, and eval gates protecting downstream task accuracy.

**Track:** 🤖 AI Engineering · **Domain:** Model Efficiency · **Level:** advanced · **~50 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

PTQ vs QAT tradeoffs, per-layer sensitivity analysis, and eval gates protecting downstream task accuracy.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Baseline full-precision on YOUR eval suite; record per-task deltas as contract
2. Quantize post-training first (INT8/FP8); measure sensitive layers via per-layer KL divergence
3. Keep outlier layers (first/last, attention sinks) higher precision when regressions cluster
4. Escalate to QAT only where PTQ gaps exceed product tolerance
5. Benchmark throughput AND memory at target batch sizes — wins must be real end-to-end
6. Re-quantize per model refresh; never assume transfer across checkpoints

## Common Pitfalls

- Perplexity used alone while downstream classification collapses
- Kernel speedups measured on shapes production never runs

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill model-efficiency-quantization-strategy-selection
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill model-efficiency-quantization-strategy-selection -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills