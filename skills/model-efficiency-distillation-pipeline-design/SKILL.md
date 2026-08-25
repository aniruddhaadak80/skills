---
name: model-efficiency-distillation-pipeline-design
description: "Teacher selection, data generation governance, and student eval harnesses preserving target behaviors."
---
# Distill large-model capability into deployable students

> Teacher selection, data generation governance, and student eval harnesses preserving target behaviors.

**Track:** 🤖 AI Engineering · **Domain:** Model Efficiency · **Level:** advanced · **~55 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Teacher selection, data generation governance, and student eval harnesses preserving target behaviors.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Choose teachers by TARGET task performance, not general leaderboard fame
2. Generate training data under diversity quotas; dedupe near-copies ruthlessly
3. Filter student training data THROUGH the teacher's own confidence + verifiers
4. Hold out real production traffic samples as untouched eval gold
5. Compare student vs teacher on failure cases, not just aggregate metrics
6. Document data provenance fully — licensing questions arrive later

## Common Pitfalls

- Students memorizing teacher artifacts including hallucinations
- Eval contamination inflating distillation 'success'

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill model-efficiency-distillation-pipeline-design
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill model-efficiency-distillation-pipeline-design -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills