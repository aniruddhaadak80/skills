export const EXTRA_DOMAINS = {
  "engineering-essentials": [
    {
      id: "diagnostic-foundations",
      label: "Diagnostic Foundations",
      procedures: [
        {
          id: "http-api-debugging",
          title: "Debug HTTP APIs methodically",
          level: "foundation", minutes: 25,
          description: "Request-level forensics: headers, status semantics, timing, and auth layers isolated step by step.",
          tags: ["http", "debugging", "api"],
          steps: [
            "Reproduce with curl/httpie outside your app — isolate client vs server",
            "Read status codes literally: 4xx yours, 5xx theirs, 3xx follow redirects explicitly",
            "Diff working vs failing requests header-by-header; auth and content-type first",
            "Trace DNS→TLS→TTFB timings to locate network-layer stalls",
            "Check response bodies for error envelopes even inside 200s",
            "Capture evidence (verbose output) before changing anything"
          ],
          pitfalls: ["Postman-vs-curl discrepancies from auto-set headers", "Proxies/VPNs silently rewriting requests mid-flight"]
        },
        {
          id: "database-triage-basics",
          title: "Triage 'the database is slow' alarms",
          level: "intermediate", minutes: 30,
          description: "Structured first-response: load vs lock vs query-plan diagnosis under pressure.",
          tags: ["databases", "debugging", "triage"],
          steps: [
            "Classify first: connection exhaustion, lock waits, CPU, IO wait, or single bad query",
            "Check active queries ordered by duration; kill nothing without recording its text",
            "Compare current plan vs known-good for suspect queries",
            "Correlate deploys/migrations/batch jobs against symptom onset time",
            "Mitigate (timeout, queue depth, read replica shift) before root-causing fully",
            "Write the incident note while terminal history still exists"
          ],
          pitfalls: ["Restarting the primary destroying diagnostic evidence", "Adding indexes during incident without load testing"]
        },
        {
          id: "codebase-reading-strategy",
          title: "Read unfamiliar codebases strategically",
          level: "foundation", minutes: 25,
          description: "Entry-point tracing, test-first reading, and boundary mapping building accurate mental models fast.",
          tags: ["onboarding", "reading-code", "legacy"],
          steps: [
            "Run the test suite first — tests are executable documentation of intent",
            "Trace one real request end-to-end from entry point outward",
            "Map module boundaries by imports; draw what you learn immediately",
            "Read git log around files you touch for historical 'why' context",
            "Note unknowns as questions; batch-ask humans after self-study attempt",
            "Ship a tiny fix early — momentum beats comprehensive understanding first"
          ],
          pitfalls: ["Reading alphabetically instead of along execution paths", "Asking questions answerable by ten minutes of tracing"]
        }
      ]
    }
  ],
  "marketing-growth": [
    {
      id: "organic-search",
      label: "Organic Search",
      procedures: [
        {
          id: "seo-technical-audit",
          title: "Audit technical SEO before writing more content",
          level: "intermediate", minutes: 40,
          description: "Crawlability, indexation, Core Web Vitals, and structured data checked in priority order.",
          tags: ["seo", "technical", "audit"],
          steps: [
            "Verify indexability: robots.txt, meta noindex leftovers, canonical correctness",
            "Fix redirect chains and orphan pages via full crawl analysis",
            "Confirm sitemap accuracy against indexed reality in Search Console",
            "Pass CWV thresholds on templates receiving organic traffic",
            "Implement structured data where rich results genuinely apply",
            "Prioritize fixes by traffic-weighted impact, not audit-tool severity defaults"
          ],
          pitfalls: ["Staging noindex accidentally shipped to production", "Content produced onto templates Google cannot render"]
        }
      ]
    }
  ],
  "customer-support": [
    {
      id: "metrics-quality",
      label: "Metrics & Quality",
      procedures: [
        {
          id: "support-metrics-framework",
          title: "Design support metrics that measure the right thing",
          level: "intermediate", minutes: 30,
          description: "Balanced SLA/CSAT/FCR/CES frameworks avoiding metric gaming through paired indicators.",
          tags: ["metrics", "sla", "operations"],
          steps: [
            "Pair every speed metric with quality metric (FT time ↔ FCR)",
            "Set SLAs per severity tier from customer commitments, not aspirations",
            "Measure CSAT post-resolution with effort-score alternative for complex cases",
            "Report first-contact-resolution honestly; define 'resolved' strictly",
            "Review metric-gaming vectors quarterly with agents themselves",
            "Publish team dashboards transparently; hidden metrics breed distrust"
          ],
          pitfalls: ["Closing tickets fast to hit handle-time targets", "CSAT surveys only after easy wins skewing samples"]
        }
      ]
    }
  ],
  "ecommerce-retail": [
    {
      id: "discovery-experience",
      label: "Discovery Experience",
      procedures: [
        {
          id: "site-search-merchandising",
          title: "Make site search find what merchandisers mean",
          level: "intermediate", minutes: 35,
          description: "Query understanding, synonym control, zero-result recovery, and curated placements.",
          tags: ["search", "merchandising", "conversion"],
          steps: [
            "Analyze top queries with zero results weekly — inventory or synonym gap?",
            "Build synonym sets from real customer language including misspellings",
            "Curate first-row results for head terms; algorithm alone isn't strategy",
            "Show partial matches with honest 'no exact match' messaging",
            "Merch seasonal collections into search ahead of campaigns",
            "Track search-to-purchase conversion vs browse separately forever"
          ],
          pitfalls: ["Exact-match-only engines losing plural/synonym queries", "Promoted products irrelevant to query training users to ignore results"]
        }
      ]
    }
  ],
  "education-learning": [
    {
      id: "modern-classroom",
      label: "Modern Classroom",
      procedures: [
        {
          id: "ai-classroom-policy-design",
          title: "Design AI-use policies students understand",
          level: "intermediate", minutes: 30,
          description: "Assignment-tiered AI permissions, process documentation, and assessment redesign over surveillance.",
          tags: ["ai", "policy", "assessment"],
          steps: [
            "Tier every assignment: AI-free / AI-assisted-disclosed / AI-required",
            "Teach prompt literacy as course content, not contraband",
            "Redesign assessments AI can't shortcut: oral defenses, process portfolios",
            "Document disclosure format students use when AI contributed",
            "Model good AI use publicly on your own prep materials",
            "Revise policy each term as capabilities shift; version it visibly"
          ],
          pitfalls: ["Detection-tool false accusations punishing innocent students", "Bans pushing usage underground where learning never happens"]
        }
      ]
    }
  ],
  "sales-success": [
    {
      id: "demo-craft",
      label: "Demo Craft",
      procedures: [
        {
          id: "product-demo-craft",
          title: "Deliver demos buyers remember",
          level: "intermediate", minutes: 30,
          description: "Discovery-linked narratives, their-data rehearsals, and objection-proof sequencing.",
          tags: ["demos", "sales", "presentation"],
          steps: [
            "Open restating THEIR discovery priorities; demo answers those only",
            "Rehearse with sample data shaped like their business, never generic placeholder data",
            "Sequence: their pain first, wow moment second, feature tour last (or never)",
            "Pre-handle top objections live ('you might ask about exports…')",
            "Leave-behind references the demo story for internal champions",
            "Log which moments generated questions; that's your buying-signal map"
          ],
          pitfalls: ["Feature tours answering questions nobody asked", "Demo environments breaking exactly during flagship moments"]
        }
      ]
    }
  ],
  "localization-i18n": [
    {
      id: "localization-ops",
      label: "Localization Operations",
      procedures: [
        {
          id: "tms-workflow-setup",
          title: "Set up translation management workflows",
          level: "intermediate", minutes: 35,
          description: "CAT/TMS pipelines, string freezes, and cost controls making localization routine not heroic.",
          tags: ["tms", "workflow", "vendors"],
          steps: [
            "Connect repo-to-TMS sync so keys flow automatically both directions",
            "Enforce string freeze windows before release branches cut",
            "Route content types appropriately: UI strings ≠ marketing ≠ legal",
            "Configure translation memory + glossary enforcement in CAT tooling",
            "Track wordage velocity and cost per locale monthly",
            "Test localized builds before merge, not after release notes go out"
          ],
          pitfalls: ["Late-string drops bypassing translation entirely", "TM reuse ignored, paying repeatedly for identical sentences"]
        }
      ]
    }
  ],
  "career-development": [
    {
      id: "network-visibility",
      label: "Network & Visibility",
      procedures: [
        {
          id: "authentic-networking-system",
          title: "Network authentically as an introvert-friendly system",
          level: "foundation", minutes: 30,
          description: "Give-first outreach cadences, public artifact sharing, and relationship CRM habits that compound.",
          tags: ["networking", "career", "relationships"],
          steps: [
            "Reach out with specific genuine value or question — never naked asks",
            "Maintain lightweight CRM: who, context, last touch, next natural reason",
            "Reconnect cadence quarterly for warm ties; personalization beats automation",
            "Share work-in-public artifacts regularly so opportunities find YOU",
            "Attend fewer events but follow up within 48h every time",
            "Measure conversations started, not business cards collected"
          ],
          pitfalls: ["Transactional outreach visible from the subject line", "Networking only when desperately job-hunting"]
        }
      ]
    }
  ],
  "finance-fintech": [
    {
      id: "open-banking",
      label: "Open Banking",
      procedures: [
        {
          id: "open-banking-integrations",
          title: "Integrate open banking APIs reliably",
          level: "advanced", minutes: 45,
          description: "Consent flows, provider fragmentation handling, and reconciliation-ready transaction ingestion.",
          tags: ["open-banking", "integrations", "plaid"],
          steps: [
            "Design consent UX setting refresh expectations honestly upfront",
            "Abstract provider differences behind internal canonical schema day one",
            "Handle re-auth flows gracefully — credentials change constantly",
            "Dedupe transactions across providers with stable identity hashing",
            "Categorize with fallback chains: rules → ML → unknown bucket review",
            "Monitor provider incidents publicly; users blame you regardless"
          ],
          pitfalls: ["Provider-specific data models leaking into product logic everywhere", "Silent consent expiry showing users empty dashboards mysteriously"]
        }
      ]
    }
  ],
  "healthcare-clinical": [
    {
      id: "telehealth-ops",
      label: "Telehealth Operations",
      procedures: [
        {
          id: "telehealth-workflow-setup",
          title: "Run telehealth visits that clinically satisfy",
          level: "intermediate", minutes: 30,
          description: "Pre-visit tech checks, structured remote exams, documentation parity, and escalation ladders.",
          tags: ["telehealth", "workflow", "remote-care"],
          steps: [
            "Tech-check patients before visit day; failures reschedule gracefully",
            "Open with identity/location verification per licensure requirements",
            "Structure guided self-exam maneuvers with camera positioning coaching",
            "Document modality limitations explicitly in the clinical record",
            "Define in-person conversion triggers before starting the visit",
            "Close with written visit summary sent through secure channel"
          ],
          pitfalls: ["Platform failures consuming half the appointment slot", "Remote exams documented as complete physicals dishonestly"]
        }
      ]
    }
  ]
};
