---
name: vercel-token-deploy
description: "Authenticate Vercel CLI via a stored token instead of browser OAuth — the reliable path when clock drift breaks login flows. Use when deploying, linking projects, or scripting CI-style pushes."
---
# Deploy to Vercel with token-based CLI auth

> Authenticate Vercel CLI via a stored token instead of browser OAuth — the reliable path when clock drift breaks login flows. Use when deploying, linking projects, or scripting CI-style pushes.

**Track:** ☁️ DevOps & Cloud · **Domain:** Incidents & Edge Deploys · **Level:** intermediate · **~15 min**

**Who this is for:** DevOps Engineers, SREs, Cloud Architects, Platform Engineers

## When to Use This Skill

Authenticate Vercel CLI via a stored token instead of browser OAuth — the reliable path when clock drift breaks login flows. Use when deploying, linking projects, or scripting CI-style pushes.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Read the token from local storage at runtime into a shell variable only
2. Never echo, log, commit, or write the token into any file
3. Link once per project with vercel link --yes --project <name> --token $tok
4. Ship production with vercel deploy --prod --yes --token $tok
5. Prefer git push auto-deploys for repos already linked to GitHub integration
6. Scope team with --scope when the token spans multiple teams

## Common Pitfalls

- Browser login loops caused by PC clock skew — use tokens exclusively
- Tokens pasted into terminal history via inline export

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill vercel-token-deploy
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill vercel-token-deploy -g
```

**Link project**
```bash
vercel link --yes --project <name> --token $VERCEL_TOKEN
```

**Production deploy**
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills