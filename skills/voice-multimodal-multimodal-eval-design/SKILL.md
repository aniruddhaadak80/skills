---
name: voice-multimodal-multimodal-eval-design
description: "Task-grounded scoring for image/chart/document understanding with calibrated human baselines."
---
# Evaluate multimodal outputs beyond vibes

> Task-grounded scoring for image/chart/document understanding with calibrated human baselines.

**Track:** 🤖 AI Engineering · **Domain:** Voice & Multimodal · **Level:** advanced · **~40 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Task-grounded scoring for image/chart/document understanding with calibrated human baselines.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Define extractable ground truth per input type (chart→data table)
2. Score extraction tasks deterministically before LLM-judging anything
3. Include adversarial inputs: low-res, occluded, wrong-language documents
4. Calibrate judge agreement against 50 human-labeled samples
5. Report per-modality results separately; averages hide blindness
6. Version test image sets like code — URLs rot

## Common Pitfalls

- Judges rewarding fluent descriptions over factual accuracy
- Test sets degrading via hotlinked image death

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill voice-multimodal-multimodal-eval-design
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill voice-multimodal-multimodal-eval-design -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills