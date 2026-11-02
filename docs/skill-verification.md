# Skill Verification (Ed25519 signatures)

This document describes how the skill catalogue published from this repo is
cryptographically signed and how downstream consumers verify a `SKILL.md`
file before trusting it.

> Status: **proposal / MVP** — tracks issue #278.

## Goals

1. **Tamper evidence.** An agent that loads `SKILL.md` from a fork or a cache
   can detect if the file was modified after the maintainer signed it.
2. **Provenance.** The signature pins the skill to a specific maintainer
   key; a downstream manifest can list which maintainer signed which skill.
3. **Reproducibility.** The signing input depends only on the bytes of
   `SKILL.md`. Running `generate.mjs` and `sign-skills.mjs` twice on the
   same source tree must produce the same digest (the generator already
   drops timestamps from `skills-index.json` for the same reason).
4. **No new dependencies.** Uses Node.js built-in `crypto` only.

## Design

### Key management

- The maintainer holds an **Ed25519** private key. The corresponding
  public key is committed at `skills-public-key.pem` (SPKI PEM).
- For local development, `scripts/sign-skills.mjs` mints a keypair at
  `.skills-signing-key` on first run and adds it to `.gitignore`.
- For CI, the maintainer feeds the raw 32-byte seed via the
  `SKILLS_SIGNING_KEY` environment variable (base64). GitHub Actions
  encrypted secrets are the recommended transport.

### Manifest

`skills-manifest.json` (repo root) contains:

```jsonc
{
  "version": 1,
  "algorithm": "ed25519",
  "publicKey": "-----BEGIN PUBLIC KEY-----\n…\n-----END PUBLIC KEY-----\n",
  "generatedAt": "2026-10-23T17:30:00.000Z",  // informational only
  "count": 312,
  "entries": [
    {
      "slug": "agent-memory-agent-memory-tiers",
      "file": "skills/agent-memory-agent-memory-tiers/SKILL.md",
      "sha256": "ab12…",
      "signature": "base64…",                    // Ed25519 over sha256 digest
      "algorithm": "ed25519"
    }
    // …
  ]
}
```

`generatedAt` is included for human inspection only; `verify-skills.mjs`
ignores it so two runs of `sign-skills.mjs` against the same source tree
produce equivalent manifests up to that timestamp.

### Verification

```
node scripts/verify-skills.mjs
```

The verifier:

1. Reads `skills-manifest.json` and reconstructs the public key from the
   embedded PEM.
2. For every `skills/<slug>/SKILL.md` on disk, hashes the file with
   SHA-256 and compares against the manifest's `sha256`.
3. Verifies the Ed25519 signature against the public key.
4. Fails the run if:
   - a skill on disk is missing from the manifest,
   - a manifest entry has no matching file on disk,
   - any digest differs, or
   - any signature fails verification.

### Trust chains (future work)

The MVP signs every skill with the same maintainer key. A future revision
will introduce a per-author signature layer:

- Each contributor commits a `skills/<slug>/AUTHOR.sig` (Ed25519 over the
  same `sha256`), signed with a key whose public half appears in the
  contributor's profile (`AUTHORS.json`).
- The maintainer's manifest signature then covers the file bytes *and*
  the author signature, so the maintainer vouches that the listed author
  signed the bytes they reviewed.

This keeps the MVP small while leaving room for delegated authorship.

## CLI

| Command | What it does |
|---|---|
| `npm run sign`   | (Re)sign every skill and write `skills-manifest.json` |
| `npm run verify` | Verify all skills against the manifest; non-zero exit on failure |

## FAQ

**Why not sign the canonical source in `src/data/` instead of the generated `SKILL.md`?**
The generated file is what an agent actually loads. Signing the source
would require every consumer to also run the generator and trust the
generator. Signing the artifact closes the loop without that dependency.

**Why Ed25519 and not RSA or ECDSA?**
Ed25519 has a 64-byte signature, a 32-byte key, deterministic signing
(no side-channel via nonce reuse), and is available in Node.js's built-in
`crypto` since 16.x. RSA-PSS would require more code, a larger signature,
and is increasingly discouraged for new designs.

**What happens if the maintainer key is rotated?**
The new public key is committed alongside the new manifest. Historic
manifests remain verifiable against the public key embedded inside them,
so rotation does not invalidate prior releases.

**Why is `generatedAt` included at all?**
For human inspection of when a manifest was produced. Verifiers ignore it
so re-running the signer on the same tree produces an equivalent manifest.
