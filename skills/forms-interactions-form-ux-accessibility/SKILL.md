---
name: forms-interactions-form-ux-accessibility
description: "Single-column flow, inline validation timing, error recovery, and keyboard-complete submission."
---
# Build forms people complete without rage

> Single-column flow, inline validation timing, error recovery, and keyboard-complete submission.

**Track:** 🎨 Frontend Engineering · **Domain:** Forms & Interactions · **Level:** foundation · **~35 min**

**Who this is for:** Frontend Engineers, Full-Stack Developers, Design Engineers, UI Developers

## When to Use This Skill

Single-column flow, inline validation timing, error recovery, and keyboard-complete submission.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. One column, visible labels above fields, optional marked never hidden
2. Validate on blur not every keystroke; confirm success on submit only
3. Errors placed adjacent to field, described in aria-describedby, focus moved to first
4. Preserve all entered data through any validation failure
5. Show password toggle + input masking appropriate to sensitivity
6. Test tab-order and Enter-to-submit with zero mouse

## Common Pitfalls

- Aggressive red X's on first keystroke punishing typos
- Session loss wiping a half-completed application

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill forms-interactions-form-ux-accessibility
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill forms-interactions-form-ux-accessibility -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills