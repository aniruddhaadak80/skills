---
name: oss-pr-landing
description: Lands merged pull requests in large open-source repositories efficiently — triage, issue selection, minimal-diff discipline, maintainer communication, and review follow-through. Use when contributing to an open-source project, opening a PR to someone else's repo, or reviving a stalled PR.
---

# OSS PR Landing

A repeatable workflow for getting pull requests merged in large, busy open-source repos — optimized for signal over volume.

## When to Use This Skill

- First-time or repeated contributions to a major repo (thousands of issues/PRs)
- Deciding WHAT to contribute, not just how to code it
- A PR has gone quiet and needs revival
- Hackathon-style contribution sprints (Hacktoberfest etc.) where quality gates matter

## The Numbers Rule

Volume without merges is noise. Optimize the merge rate: one well-scoped PR that merges beats ten drive-by typo PRs. Track your own `merged ÷ opened` ratio per repo.

## Steps

### 1. Pick the right issue

Priority order:

1. Issues labeled `good first issue` / `help wanted` with no assignee and recent maintainer activity
2. Bugs you can reproduce yourself (reproduction = 50% of the fix)
3. Docs gaps you hit while using the project (fastest merge class)
4. Feature requests where a maintainer has said "PRs welcome" — never unrequested features on roadmap items

Before starting, comment claiming the issue briefly ("Working on this, approach would be X — happy to adjust"). This prevents duplicate work.

### 2. Read the repo's contract

- CONTRIBUTING.md / AGENTS.md / PR template — follow literally
- Recent merged PRs (`git log --oneline -30`) to learn commit-message style and scope norms
- CI config to know which checks will run

### 3. Branch small, diff smaller

```bash
git checkout -b fix/<issue-number>-short-slug
```

Rules that keep reviews fast:

- One logical change per PR; split refactors from fixes
- Match existing code style exactly — zero drive-by reformatting
- Add/update tests when the repo has them; a fix without a test often stalls
- Keep the diff focused enough that a maintainer can review it in one sitting

### 4. Open the PR like a maintainer would want

Fill the template completely. Lead with:

1. **What** broke / what's missing (one sentence)
2. **Why** this approach
3. **Proof**: reproduction before → after, test output, screenshots for UI
4. Link the issue with "Fixes #<n>"

### 5. Drive the review loop

- Respond to every review comment, even just with a 👍 + fix commit
- Prefer push-over-force-push while under active review; force-push only after asking or when rebasing is required
- If CI fails, fix within the same day — stale red PRs get closed
- If silent for ~2 weeks, ping politely once referencing the original issue; maintainers triage in bursts

### 6. After merge

Confirm authorship survived the merge (squash/cherry-pick should keep you as author). Log the contribution: repo, PR number, what it fixed. This becomes verified history for bios and audits.

## Anti-Patterns

- Opening a PR without reading contributing docs
- Giant PRs mixing feature + refactor + formatting
- Arguing style points the linter should decide
- Abandoning a PR after first review round
- Mass-opening low-value PRs across many repos for badge counts
