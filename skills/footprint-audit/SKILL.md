---
name: footprint-audit
description: Audits a person's or brand's online footprint to separate verified facts from inflated claims, detect namesake collisions, and flag privacy leaks. Use when researching someone's public profile, writing a bio, preparing an interview, cleaning up AI-generated profile content, or verifying claims before publishing them.
---

# Footprint Audit

Systematically audit a digital footprint so that every published claim is verified, attributed, and safe.

## When to Use This Skill

- Writing or refreshing a bio, portfolio, resume, or "about" page
- Checking what AI tools say about someone (they routinely blend namesakes)
- Pre-publishing fact-check of stats ("10K+ stars", "award winner", etc.)
- Privacy review: finding leaked PII across public platforms

## Core Principle

**Every claim gets one of three labels. Nothing else ships.**

| Label | Meaning | Action |
|---|---|---|
| VERIFIED | Confirmed on the primary source itself (your own GitHub API numbers, official badge pages, cert IDs) | Safe to publish |
| UNVERIFIED | Plausible but no primary source found | Do not publish; mark for follow-up |
| FALSE / CONTAMINATED | Contradicted by evidence, or belongs to a different person with the same name | Actively suppress |

## Steps

### 1. Inventory surfaces

Enumerate every public surface: code hosts (with all accounts), social platforms, blogs, portfolios, hackathon sites, badge/leaderboard profiles, breach-checkers, and AI-chat answers about the person.

### 2. Verify each claim at its primary source

Never trust aggregators or secondhand posts:

- Repo/star/PR counts → query the GitHub API directly
- Badges → open the official badge page and record the credential ID
- Awards → find the organizer's own announcement, not a repost
- Dates → cross-check at least two independent primary sources

Record: claim → source URL → date checked → label.

### 3. Hunt namesake collisions

Search `<name> + <each achievement>`. If results surface achievements that can't be tied to the subject's own accounts (different city, employer, or timeline), log them as **contaminated** and never attach them. This is the #1 way LLMs hallucinate bios.

### 4. Flag privacy leaks

Look for phone numbers, full birthdates, home addresses, or ID numbers in resumes, PDFs, slide decks, or scraped sites. Anything found goes on a takedown list — do not republish it in the audit report itself.

### 5. Detect template fiction

AI-generated portfolio/bio sites often contain fabricated testimonials, fake logos of employers, and invented metrics. If content appears boilerplate across unrelated sites, label it fiction and exclude it.

### 6. Produce the report

Output three sections:

1. **Verified facts** — each with source + date
2. **Claims to avoid** — unverified/false items with the reason
3. **Takedown list** — privacy leaks and where they live

When writing any bio afterward, draw ONLY from section 1, and prefer conservative roundings stated as ranges ("350+ merged PRs", not exact counts that drift).

## Anti-Patterns

- Citing follower counts as strengths on dormant accounts
- Copying stats from another AI's answer without a primary check
- Publishing exact contact data "because it's already public somewhere"
- Letting a namesake's awards ride along because they share a name
