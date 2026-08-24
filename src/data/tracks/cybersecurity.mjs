export const track = {
  id: "cybersecurity",
  label: "Cybersecurity",
  icon: "🔐",
  gradient: "from-red-500 via-orange-500 to-amber-400",
  ring: "ring-red-500/30",
  text: "text-red-400",
  blurb: "Application security, cloud hardening, and incident response that keep systems boring.",
  roles: ["Security Engineers", "AppSec", "DevSecOps", "Compliance Teams"],
  domains: [
    {
      id: "application-security",
      label: "Application Security",
      procedures: [
        {
          id: "threat-model-feature",
          title: "Threat model a feature before building it",
          level: "intermediate", minutes: 40,
          description: "STRIDE-lite walkthrough producing mitigations wired into tickets before code exists.",
          tags: ["threat-modeling", "appsec"],
          steps: [
            "Diagram the feature: actors, data flows, trust boundaries, stores",
            "Walk STRIDE per boundary: spoofing, tampering, repudiation, info-disclosure, DoS, elevation",
            "Rank findings by likelihood × impact; top items get design changes",
            "Write mitigations as acceptance criteria in implementation tickets",
            "Add abuse cases to the test plan alongside functional cases",
            "Revisit the model when architecture shifts, not just annually"
          ],
          pitfalls: ["Threat models as one-time compliance theater", "Trusting internal services implicitly across boundaries"]
        },
        {
          id: "secure-code-review",
          title: "Security-review code with a repeatable checklist",
          level: "intermediate", minutes: 35,
          description: "Focused pass over authz, injection, secrets, and deserialization on risky diffs.",
          tags: ["code-review", "appsec", "owasp"],
          steps: [
            "Check authorization at object level: can user A read/write user B's records?",
            "Trace all external input into queries/commands/paths for injection sinks",
            "Scan diffs for hardcoded secrets; verify new config uses secret manager",
            "Flag unsafe deserialization and eval-adjacent constructs",
            "Verify security headers and CORS changes are intentional, not permissive defaults",
            "Document accepted risks inline with ticket references"
          ],
          pitfalls: ["IDOR missed because tests only use one user", "'Temporary' debug endpoints reaching production"]
        },
        {
          id: "secrets-hygiene",
          title: "Enforce secrets hygiene end to end",
          level: "foundation", minutes: 25,
          description: "Generation, storage, rotation, and leak response for credentials humans inevitably touch.",
          tags: ["secrets", "keys", "rotation"],
          steps: [
            "Generate long random secrets via managers; ban hand-invented passwords",
            "Inject at runtime from vault/KMS; forbid .env commits with real values",
            "Pre-commit hooks scanning for high-entropy strings and known key formats",
            "Rotate on schedule AND immediately after any suspected exposure",
            "Scope every key least-privilege; prefer short-lived credentials",
            "Practice the leak playbook: revoke → rotate → audit access → postmortem"
          ],
          pitfalls: ["Rotated old keys never actually revoked", "Service accounts sharing one god-mode credential"]
        }
      ]
    },
    {
      id: "cloud-hardening",
      label: "Cloud Hardening",
      procedures: [
        {
          id: "iam-least-privilege",
          title: "Right-size IAM to least privilege",
          level: "advanced", minutes: 45,
          description: "Start scoped-down, expand only with evidence from real denied actions.",
          tags: ["iam", "cloud", "zero-trust"],
          steps: [
            "Inventory every identity: humans, services, CI roles, third parties",
            "Replace wildcards with explicit actions gathered from access logs",
            "Separate duties: deploy role cannot read databases",
            "MFA enforced for console humans; no long-lived access keys",
            "Set permission boundaries so escalation paths are capped",
            "Quarterly access reviews with auto-expiring grants"
          ],
          pitfalls: ["Admin roles 'temporarily' granted during setup, forever", "CI pipelines holding prod-write credentials"]
        },
        {
          id: "patch-cadence",
          title: "Run a patch cadence that actually closes windows",
          level: "intermediate", minutes: 30,
          description: "Triage vulnerabilities by exploitability and ship patches within defined SLAs.",
          tags: ["patching", "vulnerability-management"],
          steps: [
            "Aggregate findings from scanners, dependabots, and CISA feeds weekly",
            "Classify by exploitability × exposure; internet-facing criticals patch in 72h",
            "Automate dependency bumps with test-gated PRs",
            "Maintain golden base images patched monthly",
            "Track mean-time-to-patch per severity; report trend to leadership",
            "Keep an exception register with expiries, not permanent waivers"
          ],
          pitfalls: ["Scanner noise drowning real risk; tune detections", "Patching libraries while base images rot"]
        }
      ]
    },
    {
      id: "incident-response-security",
      label: "Security Incident Response",
      procedures: [
        {
          id: "breach-first-hour",
          title: "Execute the first hour of a suspected breach",
          level: "advanced", minutes: 30,
          description: "Contain, preserve evidence, and communicate without tipping off or destroying forensics.",
          tags: ["incident-response", "forensics"],
          steps: [
            "Activate the IR channel; start a timestamped scribe log immediately",
            "Preserve evidence BEFORE aggressive remediation (snapshots, memory dumps)",
            "Contain: revoke sessions/keys, isolate affected hosts, block indicators",
            "Determine blast radius: what data, which accounts, what timeframe",
            "Engage legal/compliance early for notification obligations (e.g., 72h GDPR)",
            "Brief executives with facts-not-speculation updates hourly"
          ],
          pitfalls: ["Wiping compromised machines destroying evidence", "Silent handling violating breach-notification laws"],
          variants: {
            ransomware: { id: "ransomware", label: "Ransomware scenario", adds: ["Isolate backups and verify offline copies intact before any recovery", "Never negotiate or pay without legal + law-enforcement consultation"] }
          }
        },
        {
          id: "phishing-defense-program",
          title: "Stand up phishing defense beyond training videos",
          level: "intermediate", minutes: 30,
          description: "Technical controls + easy reporting + blameless drills reducing real click-through damage.",
          tags: ["phishing", "social-engineering", "awareness"],
          steps: [
            "Enforce MFA everywhere, preferring phishing-resistant methods (FIDO2)",
            "Deploy DMARC with enforcement; monitor failing sources",
            "One-click report button feeding a monitored mailbox",
            "Simulate quarterly; measure report-rate not just click-rate",
            "Auto-quarantine messages matching reported patterns",
            "Blameless follow-ups: fix the process that made the lure plausible"
          ],
          pitfalls: ["Shaming clickers, teaching people to hide clicks", "SMS OTP treated as phishing-resistant"]
        }
      ]
    }
  ]
};
