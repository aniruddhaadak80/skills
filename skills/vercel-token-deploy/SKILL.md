---
name: vercel-token-deploy
description: Deploys projects to Vercel using a pre-authenticated token file instead of browser OAuth login. Use when deploying to Vercel, linking a project, or when `vercel login` fails or hangs — especially on machines with clock drift that breaks the OAuth browser flow.
---

# Vercel Token-Based Deploy

Deploy to Vercel without interactive login by reading a non-expiring token from a local file at runtime.

## When to Use This Skill

- Deploying any project to Vercel from the CLI
- `vercel login` opens a browser but auth never completes (common on PCs with fast-drifting clocks — the token exchange expires before it lands)
- CI-style, non-interactive deploys where prompts would hang

## Security Rules (non-negotiable)

1. NEVER print the token to stdout, logs, or terminal output.
2. NEVER write it into any repo file, config file, `.env` committed to git, or documentation.
3. NEVER commit anything containing it. Read it only at runtime into a shell variable.

## Steps

### 1. Locate the token

The convention is a plain-text file whose **last line** is the token:

```powershell
$tok = (Get-Content "$env:USERPROFILE\.vercel\agent-token.txt" | Select-Object -Last 1).Trim()
```

Adjust the path if the token lives elsewhere. Never echo `$tok`.

### 2. Link the project (once per project)

```powershell
vercel link --yes --project <project-name> --token $tok
```

This writes `.vercel/project.json` locally. Ensure `.vercel/` is gitignored.

### 3. Deploy to production

```powershell
vercel deploy --prod --yes --token $tok
```

For preview deploys, drop `--prod`.

### 4. Alternative: push-to-deploy

If the repo is already linked through the GitHub integration, a plain `git push` auto-deploys and no token is needed at all.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Error: Invalid token` | Re-read the file; check the last line is the token with no trailing whitespace |
| Login page spins forever | Clock drift — do not retry browser login; use this token method exclusively |
| "No existing credentials found" | You forgot `--token $tok` on that specific command |
| Wrong team deployed | Pass `--scope <team-scope>` alongside `--token` |

## Notes

- CLI v59+ supports `--token` on every subcommand (`link`, `deploy`, `ls`, `logs`, `env`).
- Prefer `git push` for repos already wired to the GitHub integration; reserve explicit `--token` deploys for new projects and one-off previews.
