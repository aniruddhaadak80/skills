---
name: specs-technical-design-docs
description: "Decision-ready technical design docs with real options, visible trade-off arithmetic, and a dated decision log that teams sign off on instead of re-litigating in chat. Use before multi-team implementation work."
---
# Write technical design docs that ship

> Decision-ready technical design docs with real options, visible trade-off arithmetic, and a dated decision log that teams sign off on instead of re-litigating in chat. Use before multi-team implementation work.

**Track:** 📋 Product Management · **Domain:** Specs & Launch · **Level:** advanced · **~40 min**

**Who this is for:** Product Managers, Product Owners, Founders, Product Analysts

## When to Use This Skill

Decision-ready technical design docs with real options, visible trade-off arithmetic, and a dated decision log that teams sign off on instead of re-litigating in chat. Use before multi-team implementation work.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. State the problem and the binding constraint in two sentences before proposing any structure; a doc that opens with a diagram sells a solution nobody approved
2. Write two or three genuine options against the same evaluation criteria — effort, blast radius, reversibility, operational cost — and state the recommendation
3. Show the arithmetic on every number (rows scanned, calls per page, bytes per tenant) so reviewers check the math instead of trusting it
4. Name the failure modes per option: what breaks at ten times the volume, what breaks when a dependency is down, what breaks during rollback
5. Record the decision, the decider, and the date in a decision log; supersede sections by striking them through so the history survives
6. List the open questions with an owner and a deadline, and collect explicit sign-off from each affected team before implementation starts

## Common Pitfalls

- The design doc written after the implementation, describing the decision the team already made in a chat thread
- One option presented as inevitable, so reviewers approve instead of thinking and the decision log is theatre

## Success Signals

- Design doc approved by every affected team before implementation starts
- Zero architecture decisions recorded only in chat threads
- Open questions closed within five working days

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill specs-technical-design-docs
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill specs-technical-design-docs -g
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills