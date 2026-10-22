---
name: a11y-testing-axe-integration
description: "Wire axe-core into unit, component, and end-to-end suites so accessibility regressions fail the build instead of shipping. Use when adding accessibility gates to CI, triaging scan failures, or auditing pull requests."
---
# Automate accessibility testing with axe in CI

> Wire axe-core into unit, component, and end-to-end suites so accessibility regressions fail the build instead of shipping. Use when adding accessibility gates to CI, triaging scan failures, or auditing pull requests.

**Track:** 🎨 Frontend Engineering · **Domain:** Accessibility · **Level:** intermediate · **~35 min**

**Who this is for:** Frontend Engineers, Full-Stack Developers, Design Engineers, UI Developers

## When to Use This Skill

Wire axe-core into unit, component, and end-to-end suites so accessibility regressions fail the build instead of shipping. Use when adding accessibility gates to CI, triaging scan failures, or auditing pull requests.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Add axe to the test layer that already exists — jest-axe for components, @axe-core/playwright for browser flows — instead of standing up a second harness
2. Scan the real rendered DOM after layout settles, with animations disabled and fonts loaded; a scan before hydration tests an empty page
3. Keep the default rule set and disable rules only with a written reason recorded next to the rule
4. Fail the build on serious and critical impacts only; push moderate and minor findings into a tracked backlog or nobody reads the report
5. Tag every violation with the owning component and a tracking issue so a failure lands on a team, not on the whole org
6. Scan the deployed preview after merge as well — theme, font, and third-party widget failures never appear in local test DOMs

## Common Pitfalls

- Scanning a detached DOM fragment that never receives the real stylesheets: zero violations, zero meaning
- Suppressing rules one by one until the scan is green, with no owner and no expiry date on the suppression

## Success Signals

- Zero critical axe violations on every protected route
- Accessibility scan adds under 90s to the pull-request pipeline
- Violations older than 14 days trending to zero

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill a11y-testing-axe-integration
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill a11y-testing-axe-integration -g
```

**Scan a live page with the axe CLI**
```bash
npx @axe-core/cli https://staging.example.com --tags wcag2a,wcag2aa
```

**Run the accessibility specs**
```bash
npx playwright test e2e/a11y --reporter=list
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills