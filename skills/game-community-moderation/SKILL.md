---
name: game-community-moderation
description: "Published rules, a graduated enforcement ladder, and appeals that protect the game economy without alienating the players who fund it. Use when running player forums, in-game chat, or a live report queue."
---
# Moderate game communities

> Published rules, a graduated enforcement ladder, and appeals that protect the game economy without alienating the players who fund it. Use when running player forums, in-game chat, or a live report queue.

**Track:** 🎮 Game & Interactive Dev · **Domain:** Performance & Live-Ops · **Level:** advanced · **~40 min**

**Who this is for:** Game Developers, Technical Designers, Live-Ops Engineers, Indie Devs

## When to Use This Skill

Published rules, a graduated enforcement ladder, and appeals that protect the game economy without alienating the players who fund it. Use when running player forums, in-game chat, or a live report queue.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Publish the rules as the behaviours you will enforce, written in the player's language, before you need to cite them
2. Define the enforcement ladder in advance — warning, restriction, removal, ban — with the threshold for each rung written down
3. Give moderators one-action tooling: pick the user, see the surrounding context, apply a rung, and have it land in that player's history automatically
4. Escalate the ambiguous middle to a second reviewer instead of guessing, because consistency beats speed on the hard calls
5. Offer an appeal path with a stated turnaround on every enforcement; decisions nobody can question read as arbitrary
6. Track enforcement volume and topic mix weekly, since a spike in one category is a design or economy problem before it is a player problem

## Common Pitfalls

- Silent removals with no stated reason, so players escalate straight to the platform's own reporting tools
- Moderation duty resting on one volunteer whose judgement becomes the policy nobody wrote down

## Success Signals

- Median enforcement-to-appeal-resolution under 48 hours
- Under 5% of decisions overturned on appeal
- Repeat-offender rate under 3% of the moderated base

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill game-community-moderation
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill game-community-moderation -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills