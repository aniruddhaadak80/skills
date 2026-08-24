export const EXTRA_DOMAINS = {
  "technical-writing": [
    {
      id: "docs-operations",
      label: "Docs Operations",
      procedures: [
        {
          id: "docs-metrics-instrumentation",
          title: "Instrument docs so improvements are measurable",
          level: "intermediate", minutes: 30,
          description: "Search analytics, feedback widgets, and journey tracking driving docs roadmaps with evidence.",
          tags: ["metrics", "analytics", "documentation"],
          steps: [
            "Log site search queries with zero-results as content backlog",
            "Per-page 👍/👎 with optional reason; route negatives to owners weekly",
            "Track page-to-next-action conversion (did reader succeed?)",
            "Correlate support tickets with missing/failed doc journeys monthly",
            "Report docs health quarterly: freshness %, satisfaction trend, deflection value",
            "Never A/B content changes without enough traffic to matter"
          ],
          pitfalls: ["Vanity pageviews rewarding SEO bait over task success", "Feedback widget collecting dust with no triage owner"]
        }
      ]
    }
  ],
  "qa-testing": [
    {
      id: "test-foundations",
      label: "Test Foundations",
      procedures: [
        {
          id: "test-data-management",
          title: "Manage test data without production leaks",
          level: "advanced", minutes: 35,
          description: "Synthetic generation, masked subsets, and refresh pipelines keeping tests realistic and legal.",
          tags: ["test-data", "privacy", "fixtures"],
          steps: [
            "Prefer synthetic generators seeded for reproducibility over prod copies",
            "Where real data needed: mask irreversibly, subset minimally, document lineage",
            "Version datasets with test code; breaking data changes break loudly in CI",
            "Unique-per-run entities prevent cross-test interference by construction",
            "Purge stale environments on schedule; storage isn't free forever",
            "Audit quarterly: no PII in any non-prod environment, verified not assumed"
          ],
          pitfalls: ["Prod database dumps cloned to every laptop", "Shared 'QA account' state mutated into permanent brokenness"]
        },
        {
          id: "mobile-testing-basics",
          title: "Test mobile apps across the fragmentation minefield",
          level: "intermediate", minutes: 35,
          description: "Device matrix selection, interruption/resume testing, and network-condition realism.",
          tags: ["mobile", "devices", "testing"],
          steps: [
            "Pick matrix from actual user analytics (top devices × OS versions covering 80%)",
            "Test interruptions always: calls, notifications, backgrounding mid-flow",
            "Emulate hostile networks: 3G, high-latency, flaky reconnects",
            "Verify permission denials degrade gracefully, not fatally",
            "Check OS-upgrade path and deep-link survival after updates",
            "Real devices for touch/haptics/camera; emulators only for breadth"
          ],
          pitfalls: ["Flagship-device-only testing missing the median user's phone", "Push-notification flows untested against revoked permissions"]
        }
      ]
    }
  ],
  "startup-founders": [
    {
      id: "founder-fundamentals",
      label: "Founder Fundamentals",
      procedures: [
        {
          id: "co-founder-alignment-charter",
          title: "Align co-founders before conflict finds you",
          level: "foundation", minutes: 40,
          description: "Written charters covering equity, roles, decisions, exits — awkward conversations as insurance.",
          tags: ["co-founders", "equity", "governance"],
          steps: [
            "Document equity split with vesting (4y/1y cliff) via lawyer-drafted agreements",
            "Define decision domains: who owns product/fundraising/hiring calls solo",
            "Agree deadlock mechanism before deadlock exists",
            "Set salary policy explicitly even if 'everyone equal, minimal'",
            "Schedule monthly founder retro separate from ops meetings",
            "Revisit charter at every major milestone; amend in writing only"
          ],
          pitfalls: ["50/50 splits with no deadlock breaker freezing companies", "Verbal role assumptions diverging under first real stress"]
        },
        {
          id: "cap-table-literacy",
          title: "Read your cap table like an investor does",
          level: "intermediate", minutes: 30,
          description: "Ownership math through rounds: dilution, option pools, liquidation preferences in plain terms.",
          tags: ["cap-table", "fundraising", "equity"],
          steps: [
            "Model each round's dilution BEFORE term sheets arrive",
            "Understand liquidation preference multiples and participation rights fully",
            "Maintain realistic option-pool top-ups inside pre-money negotiation",
            "Track 4-year vesting for all founder shares from day one",
            "Simulate exit scenarios at various prices; see who actually gets paid",
            "Use cap-table software from first SAFE — spreadsheets rot dangerously"
          ],
          pitfalls: ["Participating-preferred surprises consuming common at modest exits", "Option pool expansion discovered post-signing"]
        }
      ]
    }
  ],
  "legal-compliance": [
    {
      id: "open-source-law",
      label: "Open Source Legal",
      procedures: [
        {
          id: "license-selection-strategy",
          title: "Choose open-source licenses strategically",
          level: "intermediate", minutes: 30,
          description: "Permissive vs copyleft vs source-available tradeoffs matched to project goals.",
          tags: ["licensing", "open-source", "strategy"],
          steps: [
            "Define what you want others to do/not do with your code first",
            "MIT/Apache-2.0 for maximal adoption; Apache adds patent grant + NOTICE",
            "Copyleft (GPL/AGPL) when protecting downstream openness matters more than spread",
            "Consider dual-licensing or CLAs if commercialization is planned",
            "Add LICENSE + copyright headers consistently from commit one",
            "Review dependency licenses for compatibility before every release"
          ],
          pitfalls: ["AGPL adopted casually then blocking enterprise deals unexpectedly", "License files absent while README claims MIT mysteriously"]
        }
      ]
    }
  ],
  "scientific-research": [
    {
      id: "review-craft",
      label: "Peer Review Craft",
      procedures: [
        {
          id: "rebuttal-response-craft",
          title: "Write rebuttals that flip reviewer votes",
          level: "advanced", minutes: 40,
          description: "Point-by-point discipline, new-evidence prioritization, and tone that concedes gracefully.",
          tags: ["peer-review", "publications", "rebuttals"],
          steps: [
            "Open with summary of changes made, not grievances about scores",
            "Address EVERY point; skipping one reads as conceding it",
            "Prioritize new experiments/data over rhetorical argument",
            "Concede valid criticisms explicitly — credibility compounds",
            "Quote reviewer concerns verbatim above each response",
            "Enforce page limits ruthlessly: clarity beats completeness"
          ],
          pitfalls: ["Defensive tone converting neutral reviewers to enemies", "Promising future work instead of showing current evidence"]
        }
      ]
    }
  ]
};
