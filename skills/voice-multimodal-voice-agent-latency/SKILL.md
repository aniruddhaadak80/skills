---
name: voice-multimodal-voice-agent-latency
description: "Streaming ASR, incremental TTS, and barge-in handling keeping conversation feel under 800ms response."
---
# Engineer voice agents under latency ceilings

> Streaming ASR, incremental TTS, and barge-in handling keeping conversation feel under 800ms response.

**Track:** 🤖 AI Engineering · **Domain:** Voice & Multimodal · **Level:** advanced · **~45 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Streaming ASR, incremental TTS, and barge-in handling keeping conversation feel under 800ms response.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Stream ASR partials; begin intent processing before final transcript
2. Generate TTS sentence-by-sentence; never wait for full completion text
3. Implement barge-in: cancel playback within 200ms of user speech onset
4. Pre-fetch likely responses during user silence gaps
5. Measure end-of-user-speech to first-audio-byte as the only latency that matters
6. Test with real telephony jitter, not studio conditions

## Common Pitfalls

- Full turn-taking waits making agents feel robotic-dead
- Echo without proper cancellation re-triggering the agent

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill voice-multimodal-voice-agent-latency
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill voice-multimodal-voice-agent-latency -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills