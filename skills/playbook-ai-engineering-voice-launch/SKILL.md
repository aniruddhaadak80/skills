---
name: playbook-ai-engineering-voice-launch
description: "Sub-800ms conversational latency with barge-in and multimodal eval coverage."
---
# Playbook: Ship a voice agent people enjoy

> Sub-800ms conversational latency with barge-in and multimodal eval coverage.

**Track:** 🗺️ AI Engineering · **Domain:** Journey Playbooks · **Level:** journey · **~85 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Sub-800ms conversational latency with barge-in and multimodal eval coverage.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Engineer voice agents under latency ceilings: start with "Stream ASR partials; begin intent processing before final transcript"
2. Step 2 — Evaluate multimodal outputs beyond vibes: start with "Define extractable ground truth per input type (chart→data table)"
3. How it fits together: Latency is the product in voice; evaluate extraction deterministically before judges.

### Referenced Skills

- `voice-multimodal-voice-agent-latency`
- `voice-multimodal-multimodal-eval-design`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill voice-multimodal-voice-agent-latency && npx skills add aniruddhaadak80/skills --skill voice-multimodal-multimodal-eval-design
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills