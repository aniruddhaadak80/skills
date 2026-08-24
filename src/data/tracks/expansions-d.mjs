export const EXTRA_DOMAINS = {
  "devops-cloud": [
    {
      id: "engineering-economics",
      label: "Engineering Economics",
      procedures: [
        {
          id: "cloud-cost-monitoring-finops",
          title: "Run FinOps before finance finds the invoice",
          level: "intermediate", minutes: 35,
          description: "Tagging discipline, unit-economics dashboards, and anomaly alerts keeping cloud spend explainable.",
          tags: ["finops", "cost", "cloud"],
          steps: [
            "Enforce tag schema at provisioning time; untagged resources quarantined",
            "Report cost per product/feature/unit — totals alone change nothing",
            "Alert on absolute AND percentage anomalies within 24h detection window",
            "Right-size reviews quarterly using utilization data, not vendor recommendations blindly",
            "Credit commitments purchased after 60 days of stable baseline usage",
            "Publish savings leaderboard internally; celebrate engineers who delete things"
          ],
          pitfalls: ["Reserved purchases locking three-year regret", "Cost visibility arriving monthly when damage is already done"]
        },
        {
          id: "runbook-craft",
          title: "Write runbooks that work at 3am",
          level: "foundation", minutes: 25,
          description: "Symptom-indexed, copy-paste-ready procedures with verification steps and escalation exits.",
          tags: ["runbooks", "operations", "documentation"],
          steps: [
            "Index by SYMPTOM the on-call observes, not internal component names",
            "Every command copy-pasteable with expected output shown beside it",
            "Include decision points: if X then do Y else escalate to Z with link",
            "State blast radius of each destructive step explicitly before it appears",
            "Test runbooks during calm drills quarterly; stale steps kill trust",
            "Owner named per runbook; review date visible at top"
          ],
          pitfalls: ["Architecture essays where triage steps belong", "Commands referencing hostnames that stopped existing months ago"]
        }
      ]
    }
  ],
  "cybersecurity": [
    {
      id: "human-layer",
      label: "Human Layer",
      procedures: [
        {
          id: "security-champions-program",
          title: "Launch a security champions program",
          level: "intermediate", minutes: 35,
          description: "Embedded team advocates with training, authority, and recognition multiplying security capacity.",
          tags: ["champions", "culture", "devsecops"],
          steps: [
            "Recruit one volunteer per product team; never assign unwilling conscripts",
            "Give real training budget plus direct channel to security team",
            "Delegate concrete authority: approve low-risk exceptions, veto dangerous deps",
            "Meet biweekly as a guild; rotate case studies between teams",
            "Recognize contributions in performance cycles formally",
            "Measure coverage by teams-covered and issues-caught-left-shift"
          ],
          pitfalls: ["Champions becoming uncredited extra workload, burning them out", "Program dying when founding champion changes teams"]
        }
      ]
    }
  ],
  "data-science": [
    {
      id: "critical-consumption",
      label: "Critical Consumption",
      procedures: [
        {
          id: "ab-test-reading-checklist",
          title: "Read other people's A/B tests critically",
          level: "intermediate", minutes: 25,
          description: "Validity checklist catching underpowered tests, peeking, and metric tricks in published results.",
          tags: ["experimentation", "critical-thinking", "statistics"],
          steps: [
            "Check sample size math against claimed effect size first",
            "Look for stopping rules: when did they decide it was over?",
            "Verify primary metric matches headline claim exactly",
            "Inspect guardrails: what degraded while the winner won?",
            "Segment sanity: does the effect survive obvious subgroups?",
            "Estimate business impact yourself from raw numbers provided"
          ],
          pitfalls: ["Headline metrics switched post-hoc from preregistered ones", "Relative percentages hiding absolute effects near zero"]
        }
      ]
    }
  ],
  "product-management": [
    {
      id: "feedback-systems",
      label: "Feedback Systems",
      procedures: [
        {
          id: "user-feedback-triage-system",
          title: "Triage user feedback into signal, not noise",
          level: "intermediate", minutes: 30,
          description: "Structured capture, revenue-weighted pattern analysis, and closed-loop responses feeding roadmaps.",
          tags: ["feedback", "voice-of-customer", "prioritization"],
          steps: [
            "Centralize all channels into one tagged repository weekly minimum",
            "Tag by theme + severity + account value; verbatims preserved always",
            "Weight patterns by reach × severity, not loudest voice frequency",
            "Close the loop with reporters when their item ships — retention gold",
            "Review top themes monthly against roadmap; justify divergences in writing",
            "Purge 'build everything' conclusions by forcing rank-ordering exercises"
          ],
          pitfalls: ["Feedback collected into voids, training users to stop talking", "Enterprise squeaky wheels overriding quiet majority signals"]
        }
      ]
    }
  ],
  "engineering-leadership": [
    {
      id: "leadership-rhythms",
      label: "Leadership Rhythms",
      procedures: [
        {
          id: "skip-level-meetings",
          title: "Run skip-levels that surface truth",
          level: "intermediate", minutes: 25,
          description: "Psychologically safe formats hearing unfiltered reality two layers down without undermining managers.",
          tags: ["skip-levels", "management", "communication"],
          steps: [
            "Explain purpose to BOTH manager and report beforehand — no secret meetings",
            "Ask forward-looking questions: what should change, what's confusing",
            "Never action individual complaints without consent to attribute",
            "Batch systemic themes back to managers as patterns, not accusations",
            "Cover everyone across two quarters, not just the vocal volunteers",
            "Track whether surfaced issues actually die or get fixed"
          ],
          pitfalls: ["Skip-levels as manager-performance stings discovered later", "Insight collection without any visible follow-through"]
        },
        {
          id: "incident-comms-leadership",
          title: "Communicate during incidents as a leader",
          level: "advanced", minutes: 30,
          description: "Stakeholder cadence, uncertainty honesty, and blame avoidance setting organizational tone.",
          tags: ["incidents", "communication", "leadership"],
          steps: [
            "Acknowledge fast even with zero root-cause information",
            "Separate customer messaging from internal technical updates",
            "Never speculate causes publicly before investigation confirms",
            "Shield engineers from status meeting demands mid-mitigation",
            "Deliver blameless framing immediately — names leak, careers burn",
            "Post-mortem summary published within 72h while memory is fresh"
          ],
          pitfalls: ["Leaders demanding ETAs engineers cannot honestly give", "First blameful reaction poisoning all future reporting"]
        }
      ]
    }
  ],
  "people-hr": [
    {
      id: "hiring-quality",
      label: "Hiring Quality",
      procedures: [
        {
          id: "interview-debrief-facilitation",
          title: "Facilitate hiring debriefs that decide well",
          level: "intermediate", minutes: 25,
          description: "Independent scoring first, evidence-based discussion, and bias callouts structured into the meeting.",
          tags: ["debrief", "hiring", "decisions"],
          steps: [
            "Collect written independent scores BEFORE anyone speaks aloud",
            "Start with strongest disagreement cases, not easiest consensus",
            "Require behavioral evidence citations for every claim made",
            "Name decision rules upfront: unanimous vs majority vs veto",
            "Assign devil's advocate explicitly for borderline candidates",
            "Record outcome rationale verbatim for future calibration audits"
          ],
          pitfalls: ["Loudest interviewer anchoring the whole room instantly", "'Cultural fit' used as uncritiquable rejection reason"]
        }
      ]
    }
  ],
  "frontend-engineering": [
    {
      id: "collaboration-flows",
      label: "Collaboration Flows",
      procedures: [
        {
          id: "design-handoff-receiving",
          title: "Receive design handoffs without rework loops",
          level: "intermediate", minutes: 25,
          description: "Pre-build alignment on states, breakpoints, and motion specs eliminating mid-sprint surprises.",
          tags: ["handoff", "design-collaboration"],
          steps: [
            "Walk designs asking: empty/loading/error/partial states for EACH screen",
            "Confirm breakpoint behaviors explicitly; assume nothing scales gracefully",
            "Agree interaction specs: durations, easing, what animates vs snaps",
            "Flag technically-risky elements BEFORE estimation, not during build",
            "Get accessibility intent stated: focus order, live regions, contrast decisions",
            "Screenshot-agree the checklist; revisit at review together"
          ],
          pitfalls: ["Hover states invented by developers at review time", "Redlines covering happy paths only"]
        }
      ]
    }
  ],
  "backend-engineering": [
    {
      id: "resilience-patterns",
      label: "Resilience Patterns",
      procedures: [
        {
          id: "graceful-degradation-design",
          title: "Design degradation users forgive",
          level: "advanced", minutes: 40,
          description: "Feature-tier fallbacks, circuit breakers, and honest UI states keeping core journeys alive during partial failure.",
          tags: ["resilience", "circuit-breakers", "fallbacks"],
          steps: [
            "Rank features by criticality; define degraded-mode behavior per tier now",
            "Wrap non-critical dependencies in circuit breakers with half-open probing",
            "Serve cached/stale content with honest timestamps over hard failures",
            "Disable expensive features automatically under load-shed pressure",
            "Surface degraded states subtly-but-honestly; silence breeds distrust",
            "Chaos-test degradation paths deliberately, not just happy paths"
          ],
          pitfalls: ["Everything depends on everything so nothing degrades gracefully", "Fallback content so stale it misleads decision-making"]
        }
      ]
    }
  ],
  "technical-writing": [
    {
      id: "standards-governance",
      label: "Standards & Governance",
      procedures: [
        {
          id: "style-guide-creation",
          title: "Create a style guide writers actually follow",
          level: "intermediate", minutes: 35,
          description: "Decision-recorded standards, linted enforcement, and exception paths keeping voice consistent at scale.",
          tags: ["style-guide", "standards", "consistency"],
          steps: [
            "Codify existing best decisions rather than inventing ideals nobody meets",
            "Automate enforceable rules in linters; document only what tools can't catch",
            "Cover the top confusion areas: terminology, capitalization, numbers, tone",
            "Provide quick-reference card alongside full guide",
            "Route disputes through documented amendment process, not arguments",
            "Review annually against actual writer friction points observed"
          ],
          pitfalls: ["500-line guides consulted by no one ever", "Rules contradicting each other across chapters"]
        }
      ]
    }
  ],
  "scientific-research": [
    {
      id: "research-data-stewardship",
      label: "Data Stewardship",
      procedures: [
        {
          id: "data-management-plans",
          title: "Write data management plans funders approve",
          level: "intermediate", minutes: 30,
          description: "Collection, storage, sharing, and preservation commitments matching both science and compliance.",
          tags: ["dmp", "data-governance", "funding"],
          steps: [
            "Describe data types with realistic volumes and formats at collection stage",
            "Specify storage, backup, and security per sensitivity classification",
            "Commit to sharing tiers honoring ethics approvals and consent scopes",
            "Name repositories with sustainability track records, not personal sites",
            "Budget data management costs INTO the grant explicitly",
            "Revisit the plan at every milestone; funders increasingly check"
          ],
          pitfalls: ["'All data will be shared' promises ethics approval forbids", "Plans written post-hoc for grants long spent"]
        }
      ]
    }
  ],
  "construction-built-env": [
    {
      id: "subcontractor-management",
      label: "Subcontractor Management",
      procedures: [
        {
          id: "subcontractor-prequalification",
          title: "Prequalify subcontractors beyond lowest price",
          level: "intermediate", minutes: 30,
          description: "Safety records, financial health, capacity truth, and reference depth preventing downstream failures.",
          tags: ["prequalification", "procurement", "risk"],
          steps: [
            "Score safety history (EMR/TRIR trends) with minimum thresholds firm",
            "Verify financial capacity for the package size; bonding capacity checked",
            "Confirm actual crew availability for your dates, not theoretical rosters",
            "Call three recent references about SIMILAR scope specifically",
            "Site walk included before bid for anything existing-conditions dependent",
            "Requalify annually; last year's good performer may be this year's risk"
          ],
          pitfalls: ["Lowest-bid winners vanishing mid-package financially", "References curated by the subcontractor accepted unverified"]
        }
      ]
    }
  ]
};
