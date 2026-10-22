---
name: forms-interactions-infinite-scroll-done-right
description: "IntersectionObserver paging, scroll restoration, footer access, and escape hatches."
---
# Ship infinite scroll without trapping users

> IntersectionObserver paging, scroll restoration, footer access, and escape hatches.

**Track:** 🎨 Frontend Engineering · **Domain:** Forms & Interactions · **Level:** intermediate · **~25 min**

**Who this is for:** Frontend Engineers, Full-Stack Developers, Design Engineers, UI Developers

## When to Use This Skill

IntersectionObserver paging, scroll restoration, footer access, and escape hatches.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Trigger next page well before bottom (rootMargin 600px+)
2. Preserve scroll position on back-navigation with cached pages
3. Always provide page-count or search alternative for power users
4. Virtualize lists past ~200 rendered rows
5. Announce loading states to screen readers politely
6. Cap total loaded items with explicit 'load more' fallback beyond threshold

## Common Pitfalls

- Footer unreachable as content keeps loading above it
- Back-button returning to top erasing browsing context

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill forms-interactions-infinite-scroll-done-right
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill forms-interactions-infinite-scroll-done-right -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills