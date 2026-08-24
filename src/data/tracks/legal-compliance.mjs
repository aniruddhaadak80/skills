export const track = {
  id: "legal-compliance",
  label: "Legal & Compliance",
  icon: "⚖️",
  gradient: "from-yellow-500 via-amber-500 to-orange-500",
  ring: "ring-yellow-500/30",
  text: "text-yellow-400",
  blurb: "Contract review, privacy compliance, and IP hygiene for technical teams. Educational workflows, not legal advice.",
  roles: ["Legal Ops", "Privacy Officers", "Compliance Teams", "Founders", "Engineers"],
  domains: [
    {
      id: "privacy-data",
      label: "Privacy & Data Protection",
      procedures: [
        {
          id: "data-mapping-gdpr",
          title: "Map personal data flows for GDPR readiness",
          level: "intermediate", minutes: 45,
          description: "Inventory of what personal data exists, where it flows, on what basis — the foundation of every privacy program.",
          tags: ["gdpr", "privacy", "data-mapping"],
          steps: [
            "Inventory systems holding personal data with owners per store",
            "Classify data categories: identity, behavioral, special categories",
            "Document lawful basis per processing purpose; no 'legitimate interest' dumping",
            "Map cross-border transfers with safeguard mechanisms noted",
            "Record retention periods and deletion mechanics per category",
            "Review the map quarterly and at every new integration"
          ],
          pitfalls: ["Shadow SaaS tools missing from the map entirely", "Retention 'indefinite' defaults in databases"],
          kpis: ["100% systems mapped with owners", "Zero unmapped processors"]
        },
        {
          id: "dsar-response-flow",
          title: "Answer data subject requests within deadlines",
          level: "intermediate", minutes: 35,
          description: "Intake, verification, retrieval, and response workflow meeting statutory clocks without panic.",
          tags: ["dsar", "privacy", "process"],
          steps: [
            "Stand up one intake channel logging request date automatically",
            "Verify identity proportionate to data sensitivity",
            "Search ALL systems from your data map, including backups policies",
            "Redact third-party personal data before release",
            "Respond within one month (GDPR), documenting extensions if complex",
            "Log every request + outcome as audit evidence"
          ],
          pitfalls: ["Email archives forgotten in searches", "Free-form responses creating new compliance issues"]
        },
        {
          id: "privacy-by-design-review",
          title: "Run privacy reviews inside feature development",
          level: "advanced", minutes: 30,
          description: "Shift privacy questions into design docs so answers shape architecture, not patches.",
          tags: ["privacy-by-design", "dpiat", "product"],
          steps: [
            "Add privacy section to PRD template: data collected, purpose, retention",
            "Trigger full assessment when new data categories or sharing emerge",
            "Prefer client-side computation when feasible over collecting raw data",
            "Minimize: collect only fields a defined purpose consumes",
            "Wire consent flags into actual code paths, not just UI copy",
            "Re-assess when vendors change subprocessor chains"
          ],
          pitfalls: ["Consent banners lying about actual SDK behavior", "Analytics collecting more than documented"]
        }
      ]
    },
    {
      id: "contracts-ip",
      label: "Contracts & IP",
      procedures: [
        {
          id: "msa-redline-triage",
          title: "Triage vendor MSA redlines fast",
          level: "intermediate", minutes: 40,
          description: "Deal-breaker checklist separating acceptable edits from escalations in vendor paper.",
          tags: ["contracts", "negotiation", "vendors"],
          steps: [
            "Fix your walk-away list first: liability cap, indemnity scope, data rights",
            "Compare against playbook positions; mark green/yellow/red per clause",
            "Escalate only reds with proposed alternative language ready",
            "Check auto-renewal and price-escalation clauses explicitly",
            "Verify assignment/change-of-control terms against acquisition plans",
            "Store executed versions searchable by clause type"
          ],
          pitfalls: ["Unlimited liability accepted via boilerplate oversight", "Vendor-owned feedback clauses covering YOUR improvements"]
        },
        {
          id: "ip-assignment-hygiene",
          title: "Keep IP assignment clean across contributors",
          level: "foundation", minutes: 25,
          description: "Employer agreements, contractor IP clauses, and open-source license discipline protecting company assets.",
          tags: ["ip", "open-source", "licensing"],
          steps: [
            "Every contributor signs IP assignment or proper license grant pre-work",
            "Track open-source usage per repo with license compatibility notes",
            "Ban copyleft-incompatible imports into proprietary components via CI checks",
            "Record third-party assets (fonts, images) with license proofs",
            "Audit contractor deliverables for embedded unlicensed dependencies",
            "Maintain NOTICE files accurately for distributed software"
          ],
          pitfalls: ["GPL code linked into SaaS proprietary services", "'Work made for hire' assumptions without written assignments"]
        }
      ]
    }
  ]
};
