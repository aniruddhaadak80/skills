// scripts/sign-skills.mjs
//
// Ed25519 signature manifest for generated skills.
//
// What this does
// ---------------
//  - Hashes every `skills/<slug>/SKILL.md` with SHA-256 (deterministic; the
//    generator already emits stable output — see scripts/generate.mjs).
//  - Signs each digest with an Ed25519 private key.
//  - Writes `skills-manifest.json` at the repo root, containing one entry
//    per skill: `{ slug, sha256, signature, publicKey }`.
//  - Also writes the same public key to `skills-public-key.pem` so consumers
//    can pin it out of band.
//
// Key management
// ---------------
//  - On first run with no key, a new Ed25519 keypair is generated and the
//    private key is written to `.skills-signing-key` (which .gitignore must
//    exclude). This is fine for local development and for proving the
//    pipeline; production maintainers should rotate the key into GitHub
//    Actions secrets and feed it via `SKILLS_SIGNING_KEY` (base64 raw
//    32-byte seed).
//  - The public key is committed alongside the manifest, so a downstream
//    consumer can verify any historic manifest without consulting an
//    external service.
//
// Why Ed25519
// -----------
//  - Deterministic, fast, compact (64-byte signature, 32-byte key).
//  - Available in Node.js `crypto` since 16.x via `KeyObject` from
//    `crypto.generateKeyPairSync('ed25519')` — no external dependency.
//
// Usage
// -----
//  npm run sign            # generate or load key, then sign all skills
//  SKILLS_SIGNING_KEY=…   # override with a base64 raw seed (CI)
//  npm run verify          # verify skills-manifest.json against the public key

import { createHash, generateKeyPairSync, createPrivateKey, createPublicKey, sign, randomBytes } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const manifestPath = join(root, "skills-manifest.json");
const pubKeyPath = join(root, "skills-public-key.pem");
const privKeyPath = join(root, ".skills-signing-key");

const KEY_ENV = "SKILLS_SIGNING_KEY";

function loadOrCreatePrivateKey() {
  // CI path: an operator pre-seeds the raw 32-byte seed via env var.
  if (process.env[KEY_ENV]) {
    const seed = Buffer.from(process.env[KEY_ENV], "base64");
    if (seed.length !== 32) {
      throw new Error(`${KEY_ENV} must decode to 32 bytes, got ${seed.length}`);
    }
    return createPrivateKey({ key: seed, format: "der", type: "pkcs8", });
  }
  // Local dev path: reuse the persisted key, or mint a new one.
  if (existsSync(privKeyPath)) {
    return createPrivateKey(readFileSync(privKeyPath));
  }
  console.warn(`[sign-skills] no signing key found; generating a new Ed25519 keypair at ${privKeyPath}`);
  console.warn("[sign-skills] add this file to .gitignore. Use SKILLS_SIGNING_KEY for CI.");
  const { privateKey, publicKey } = generateKeyPairSync("ed25519");
  // Export the private key in PKCS#8 PEM so it round-trips.
  writeFileSync(privKeyPath, privateKey.export({ format: "pem", type: "pkcs8" }), { mode: 0o600 });
  writeFileSync(pubKeyPath, publicKey.export({ format: "pem", type: "spki" }));
  return privateKey;
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function listSkills() {
  if (!existsSync(skillsDir)) return [];
  return readdirSync(skillsDir)
    .filter((name) => statSync(join(skillsDir, name)).isDirectory())
    .filter((name) => existsSync(join(skillsDir, name, "SKILL.md")))
    .sort();
}

function main() {
  if (!existsSync(skillsDir)) {
    console.error(`[sign-skills] skills directory not found at ${skillsDir}`);
    console.error("[sign-skills] run `node scripts/generate.mjs` first to expand the catalogue.");
    process.exit(1);
  }
  const privateKey = loadOrCreatePrivateKey();
  const publicKey = createPublicKey(privateKey);

  // Persist the public key (PEM, SPKI) so it travels with the repo.
  const pubPem = publicKey.export({ format: "pem", type: "spki" }).toString("utf8");
  writeFileSync(pubKeyPath, pubPem);

  const slugs = listSkills();
  if (!slugs.length) {
    console.error("[sign-skills] no SKILL.md files found; nothing to sign.");
    process.exit(1);
  }

  const entries = slugs.map((slug) => {
    const skillPath = join(skillsDir, slug, "SKILL.md");
    const bytes = readFileSync(skillPath);
    const digest = sha256(bytes);
    const sig = sign(null, Buffer.from(digest, "hex"), privateKey);
    return {
      slug,
      file: `skills/${slug}/SKILL.md`,
      sha256: digest,
      signature: sig.toString("base64"),
      algorithm: "ed25519",
    };
  });

  const manifest = {
    version: 1,
    algorithm: "ed25519",
    publicKey: pubPem,
    publicKeyPath: "skills-public-key.pem",
    generatedAt: new Date().toISOString(),
    notes: "Reproducible: digests depend only on SKILL.md bytes. generatedAt is informational; verify() ignores it.",
    count: entries.length,
    entries,
  };

  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.log(`[sign-skills] signed ${entries.length} skills → ${manifestPath}`);
  console.log(`[sign-skills] public key → ${pubKeyPath}`);
}

main();
