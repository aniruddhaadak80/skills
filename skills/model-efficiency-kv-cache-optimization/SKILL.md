---
name: model-efficiency-kv-cache-optimization
description: "Paged attention, prefix reuse, and eviction policies turning long-context from cost center into feature."
---
# Optimize KV cache for long-context serving

> Paged attention, prefix reuse, and eviction policies turning long-context from cost center into feature.

**Track:** 🤖 AI Engineering · **Domain:** Model Efficiency · **Level:** advanced · **~45 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Paged attention, prefix reuse, and eviction policies turning long-context from cost center into feature.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Measure KV footprint per token per layer; size GPU pools from p99 sequences
2. Enable paged/block-managed allocation eliminating fragmentation stalls
3. Cache shared prefixes (system prompts, documents) across requests explicitly
4. Set eviction by recency-and-reference; never evict mid-generation blocks
5. Offload cold caches to CPU/NVMe only with measured recall latency budget
6. Alert on cache hit-rate drops — they signal routing or versioning bugs

## Common Pitfalls

- Prefix invalidated by trivial prompt-template edits
- Eviction during beam search corrupting output mid-stream

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill model-efficiency-kv-cache-optimization
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill model-efficiency-kv-cache-optimization -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills