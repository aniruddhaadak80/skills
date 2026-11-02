# Security Policy

## Reporting a vulnerability

Please report security issues privately via GitHub's built-in
**Report a vulnerability** flow:

1. Go to the **Security** tab of this repository.
2. Click **Report a vulnerability**.
3. Describe the issue, the affected file(s), and a reproduction if
   possible.

Do **not** open a public issue for security reports. Reports are
acknowledged within 72 hours and a fix or mitigation is coordinated
before public disclosure.

## Skill verification (Ed25519 signatures)

Generated `SKILL.md` files are signed by the maintainer's Ed25519 key.
See [docs/skill-verification.md](docs/skill-verification.md) for the full
design. To verify a checkout:

```
node scripts/verify-skills.mjs
```

The verifier exits non-zero if any skill on disk is missing from
`skills-manifest.json`, has a different SHA-256, or fails signature
verification against the public key embedded in the manifest.

## Signing key

The maintainer's Ed25519 public key is published at
`skills-public-key.pem` (SPKI PEM). A new key is generated automatically
on first local run of `scripts/sign-skills.mjs` for development; CI
releases use the `SKILLS_SIGNING_KEY` secret (base64 raw 32-byte seed).

If the signing key is compromised, the maintainer rotates it, commits
the new public key alongside a new manifest, and signs the new manifest
with a one-time attestation from the prior key. Historic manifests remain
verifiable against the public key embedded inside them.
