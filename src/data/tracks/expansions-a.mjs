export const EXTRA_DOMAINS = {
  "ai-engineering": [
    {
      id: "voice-multimodal",
      label: "Voice & Multimodal",
      procedures: [
        {
          id: "voice-agent-latency",
          title: "Engineer voice agents under latency ceilings",
          level: "advanced", minutes: 45,
          description: "Streaming ASR, incremental TTS, and barge-in handling keeping conversation feel under 800ms response.",
          tags: ["voice", "latency", "streaming"],
          steps: [
            "Stream ASR partials; begin intent processing before final transcript",
            "Generate TTS sentence-by-sentence; never wait for full completion text",
            "Implement barge-in: cancel playback within 200ms of user speech onset",
            "Pre-fetch likely responses during user silence gaps",
            "Measure end-of-user-speech to first-audio-byte as the only latency that matters",
            "Test with real telephony jitter, not studio conditions"
          ],
          pitfalls: ["Full turn-taking waits making agents feel robotic-dead", "Echo without proper cancellation re-triggering the agent"]
        },
        {
          id: "multimodal-eval-design",
          title: "Evaluate multimodal outputs beyond vibes",
          level: "advanced", minutes: 40,
          description: "Task-grounded scoring for image/chart/document understanding with calibrated human baselines.",
          tags: ["evals", "multimodal", "vision"],
          steps: [
            "Define extractable ground truth per input type (chart→data table)",
            "Score extraction tasks deterministically before LLM-judging anything",
            "Include adversarial inputs: low-res, occluded, wrong-language documents",
            "Calibrate judge agreement against 50 human-labeled samples",
            "Report per-modality results separately; averages hide blindness",
            "Version test image sets like code — URLs rot"
          ],
          pitfalls: ["Judges rewarding fluent descriptions over factual accuracy", "Test sets degrading via hotlinked image death"]
        }
      ]
    },
    {
      id: "agent-memory",
      label: "Agent Memory",
      procedures: [
        {
          id: "memory-architecture-tiers",
          title: "Design tiered memory for persistent agents",
          level: "advanced", minutes: 45,
          description: "Working, episodic, and semantic memory tiers with promotion/forgetting policies that stay coherent.",
          tags: ["agents", "memory", "architecture"],
          steps: [
            "Keep working memory as curated context window, not raw transcript",
            "Write episodic summaries at session boundaries with salience scores",
            "Promote recurring facts to semantic store only after N corroborations",
            "Implement forgetting: decay scores, TTL on stale entries",
            "Give agents explicit memory-write tools with structured schemas",
            "Audit memory contents monthly for PII and contradiction buildup"
          ],
          pitfalls: ["Everything stored forever until retrieval drowns in noise", "Contradictory memories surfacing whichever was written last"]
        },
        {
          id: "context-window-budgeting",
          title: "Budget long-context windows deliberately",
          level: "intermediate", minutes: 30,
          description: "Priority-ranked context assembly with measured attention degradation at depth.",
          tags: ["context", "long-context", "prompts"],
          steps: [
            "Rank content classes by decision-relevance; measure, don't assume",
            "Place critical instructions at start AND end; middle is weakest",
            "Compress history progressively: verbatim → summary → one-line pointers",
            "Track needle-in-haystack performance at YOUR actual context lengths",
            "Set hard caps per source type to prevent single-source domination",
            "Log what fit vs what was cut for every production request class"
          ],
          pitfalls: ["Trusting '128k context' marketing at 120k utilization", "Retrieval dumps filling windows with unranked chunks"]
        }
      ]
    }
  ],
  "frontend-engineering": [
    {
      id: "forms-interactions",
      label: "Forms & Interactions",
      procedures: [
        {
          id: "form-ux-accessibility",
          title: "Build forms people complete without rage",
          level: "foundation", minutes: 35,
          description: "Single-column flow, inline validation timing, error recovery, and keyboard-complete submission.",
          tags: ["forms", "ux", "accessibility"],
          steps: [
            "One column, visible labels above fields, optional marked never hidden",
            "Validate on blur not every keystroke; confirm success on submit only",
            "Errors placed adjacent to field, described in aria-describedby, focus moved to first",
            "Preserve all entered data through any validation failure",
            "Show password toggle + input masking appropriate to sensitivity",
            "Test tab-order and Enter-to-submit with zero mouse"
          ],
          pitfalls: ["Aggressive red X's on first keystroke punishing typos", "Session loss wiping a half-completed application"]
        },
        {
          id: "optimistic-ui-patterns",
          title: "Apply optimistic UI where it pays",
          level: "intermediate", minutes: 30,
          description: "Instant feedback with rollback semantics for mutations users can verify visually.",
          tags: ["optimistic-ui", "mutations", "ux"],
          steps: [
            "Reserve optimism for actions easily undone or near-certain to succeed",
            "Snapshot prior state; rollback cleanly on failure with explanation",
            "Mark pending items visually subtle but honestly (opacity, spinner row)",
            "Queue conflicting mutations per resource; serialize don't interleave",
            "Reconcile server truth on refocus/reconnect — optimism isn't authority",
            "Skip optimism entirely for payments and irreversible operations"
          ],
          pitfalls: ["Optimistic likes that silently vanish teaching users nothing works", "Rollbacks losing concurrently-typed adjacent data"]
        },
        {
          id: "infinite-scroll-done-right",
          title: "Ship infinite scroll without trapping users",
          level: "intermediate", minutes: 25,
          description: "IntersectionObserver paging, scroll restoration, footer access, and escape hatches.",
          tags: ["pagination", "scroll", "performance"],
          steps: [
            "Trigger next page well before bottom (rootMargin 600px+)",
            "Preserve scroll position on back-navigation with cached pages",
            "Always provide page-count or search alternative for power users",
            "Virtualize lists past ~200 rendered rows",
            "Announce loading states to screen readers politely",
            "Cap total loaded items with explicit 'load more' fallback beyond threshold"
          ],
          pitfalls: ["Footer unreachable as content keeps loading above it", "Back-button returning to top erasing browsing context"]
        }
      ]
    }
  ],
  "backend-engineering": [
    {
      id: "traffic-control",
      label: "Traffic Control",
      procedures: [
        {
          id: "rate-limiting-strategies",
          title: "Rate-limit APIs without breaking good clients",
          level: "intermediate", minutes: 35,
          description: "Algorithm selection, key dimensioning, and honest 429s with Retry-After that clients obey.",
          tags: ["rate-limiting", "reliability", "api"],
          steps: [
            "Choose algorithm per shape: token bucket for bursts, sliding window for fairness",
            "Key by API-key then user then IP cascade; document precedence",
            "Return 429 with Retry-After AND remaining-headers always",
            "Publish limits in docs and headers; surprises are support tickets",
            "Whitelist health checks and internal callers explicitly",
            "Load-test limiter itself; it becomes the new bottleneck"
          ],
          pitfalls: ["Global limit keyed by shared NAT IP punishing offices", "Limiters deployed without client libraries respecting them"]
        },
        {
          id: "outbound-webhooks-reliability",
          title: "Send webhooks partners can rely on",
          level: "advanced", minutes: 35,
          description: "Signed, ordered, retried outbound events with replay endpoints ending integration misery.",
          tags: ["webhooks", "integrations", "reliability"],
          steps: [
            "Sign payloads (HMAC + timestamp) and publish verification snippets per language",
            "Retry with exponential backoff up to 24h; disable after sustained failure with email",
            "Deliver event-id for dedupe; tolerate receiver requesting replay window",
            "Order guarantees documented honestly (per-resource sequence, global none)",
            "Provide static-IP egress or allowlist guidance for firewalled receivers",
            "Dashboard showing delivery status per endpoint per event type"
          ],
          pitfalls: ["Unsigned payloads forcing receivers to accept spoofed events", "Retries hammering receivers that return 500 during deploys"]
        }
      ]
    },
    {
      id: "data-movement",
      label: "Data Movement",
      procedures: [
        {
          id: "export-pipeline-design",
          title: "Build data exports users actually download",
          level: "intermediate", minutes: 30,
          description: "Async generation, progress signaling, chunked streaming, and format honesty.",
          tags: ["exports", "async", "files"],
          steps: [
            "Generate async with job status endpoint; sync exports die at scale",
            "Stream files chunked; avoid building multi-GB buffers in memory",
            "Honor requested schema exactly; silent column renames break downstream parsers",
            "Cap rows per file with manifest for continuation",
            "Expire artifacts with signed URLs; clean storage on schedule",
            "Include generated-at + filters-used metadata inside the export itself"
          ],
          pitfalls: ["CSV injection from unsanitized formula-leading cells", "Exports blocking web workers and stalling the whole app"]
        }
      ]
    }
  ],
  "devops-cloud": [
    {
      id: "platform-tooling",
      label: "Platform Tooling Choices",
      procedures: [
        {
          id: "observability-stack-setup",
          title: "Stand up an observability stack that fits",
          level: "intermediate", minutes: 40,
          description: "Vendor-vs-self-hosted decisions wired to cardinality budgets and team reality.",
          tags: ["monitoring", "tooling", "observability"],
          variants: {
            grafana: { id: "grafana", label: "Grafana LGTM", adds: ["Run Loki log aggregation with retention tiers", "Manage dashboards-as-code via provisioning configs"] },
            datadog: { id: "datadog", label: "Datadog", adds: ["Set index filters early; custom metrics pricing explodes quietly", "Use terraform provider for monitors as code"] },
            newrelic: { id: "newrelic", label: "New Relic", adds: ["Structure NRQL alerts against golden signals", "Watch user-month billing model against team growth"] }
          },
          description: "Choose and wire an observability platform matching team size, budget, and cardinailty discipline.",
          tags: ["monitoring", "tooling"],
          steps: [
            "Inventory must-have signals: traces? logs? RUM? profiles?",
            "Budget cardinality: labels cost money forever; tag deliberately",
            "Wire OpenTelemetry SDKs vendor-neutrally to preserve exit options",
            "Alert routing into on-call tool with runbook links mandatory",
            "Provision dashboards per service template, not artisanal snowflakes",
            "Review spend monthly against signal-value; prune unused streams"
          ],
          pitfalls: ["Full-fidelity everything ingested at eye-watering invoice", "Dashboards nobody opens while pages fire into voids"]
        },
        {
          id: "backup-restore-testing",
          title: "Test backups by restoring them on schedule",
          level: "advanced", minutes: 40,
          description: "RPO/RTO definitions, automated restore drills, and integrity checks turning backups into recoverability.",
          tags: ["backups", "disaster-recovery", "drills"],
          steps: [
            "Define RPO/RTO per system with business sign-off, in writing",
            "Automate restores into isolated environment on schedule (weekly minimum for critical DBs)",
            "Verify data integrity post-restore, not just job-success flags",
            "Time full recovery end-to-end; compare against declared RTO honestly",
            "Encrypt backups with separately-managed keys; test key-loss scenario",
            "Rotate restore-drill evidence into compliance artifacts automatically"
          ],
          pitfalls: ["Green backup jobs restoring to unrecoverable corruption", "Backups encrypted with keys stored on the same failing server"]
        }
      ]
    }
  ],
  cybersecurity: [
    {
      id: "cloud-config-audit",
      label: "Cloud Config Audit",
      procedures: [
        {
          id: "cloud-config-audit-basics",
          title: "Audit cloud account configurations systematically",
          level: "intermediate", minutes: 40,
          description: "CSPM-style checks across identity, network exposure, logging, and encryption with severity triage.",
          tags: ["cloud", "audit", "cspm"],
          variants: {
            aws: { id: "aws", label: "AWS", adds: ["Check IAM role trust policies for wildcard external accounts", "Verify CloudTrail multi-region + org trail enabled"] },
            gcp: { id: "gcp", label: "GCP", adds: ["Review IAM bindings for primitive roles (owner/editor)", "Confirm audit logs sinks exported outside project"] },
            azure: { id: "azure", label: "Azure", adds: ["Audit subscription-level RBAC assignments vs management groups", "Check diagnostic settings flowing to central Log Analytics"] }
          },
          description: "Structured cloud configuration review catching the misconfigurations attackers scan for first.",
          tags: ["cloud", "audit"],
          steps: [
            "Inventory public exposure: buckets, shares, snapshots, load balancers",
            "Verify encryption-at-rest defaults everywhere including backups",
            "Check network paths: 0.0.0.0/0 security groups, public subnets for databases",
            "Confirm central logging exists and is tamper-resistant",
            "Triage findings by exploitability × data-sensitivity; fix internet-facing criticals this week",
            "Codify checks into scheduled scans so drift gets caught automatically"
          ],
          pitfalls: ["One-time audits certifying perpetually-drifting accounts", "Criticals tracked in spreadsheets until they age out of memory"]
        }
      ]
    },
    {
      id: "program-security",
      label: "Security Program",
      procedures: [
        {
          id: "vendor-risk-assessment",
          title: "Assess vendor risk before data leaves",
          level: "intermediate", minutes: 35,
          description: "Tiered questionnaires, evidence requests, and ongoing monitoring proportionate to data exposure.",
          tags: ["vendor-risk", "third-party", "compliance"],
          steps: [
            "Tier vendors by data sensitivity × operational dependency",
            "Tier-1 gets evidence: SOC2/ISO certs read critically, pen-test summaries, DPA review",
            "Check subprocessor chains — your risk extends to their vendors",
            "Contract terms: breach notification windows, audit rights, exit/data-return",
            "Monitor continuously for vendor breaches affecting your stack",
            "Register everything in a living third-party inventory with review dates"
          ],
          pitfalls: ["Questionnaire theater: self-attested 'yes' treated as assurance", "Shadow SaaS adopted by teams bypassing the process entirely"]
        },
        {
          id: "secure-sdlc-gates",
          title: "Install secure-SDLC gates developers respect",
          level: "advanced", minutes: 40,
          description: "Shift-left automation, threat-model triggers, and exception governance embedded in normal flow.",
          tags: ["sdlc", "devsecops", "gates"],
          steps: [
            "Gate merges on SAST/secret-scanning/dependency-criticals with tuned rulesets",
            "Trigger lightweight threat models by change-type (new authn, payments, file handling)",
            "Make secure defaults the easy path: templates, paved-road libraries",
            "Exceptions time-boxed with owner + compensating control, centrally visible",
            "Measure gate noise monthly; tune detectors instead of training workarounds",
            "Champions program: embed security-skilled engineers inside product teams"
          ],
          pitfalls: ["Gates so noisy devs route around them within a sprint", "Threat models performed only when auditors ask"]
        }
      ]
    }
  ],
  "data-science": [
    {
      id: "communication-viz",
      label: "Communication & Visualization",
      procedures: [
        {
          id: "executive-data-storytelling",
          title: "Tell data stories executives act on",
          level: "intermediate", minutes: 30,
          description: "Headline-first structure, one-chart-one-message discipline, and pre-wired decisions.",
          tags: ["storytelling", "communication", "dashboards"],
          steps: [
            "Open with the decision needed, not methodology ancestry",
            "One chart = one message; headline states the takeaway sentence",
            "Pre-wire key stakeholders before any meeting; no ambush reveals",
            "Quantify recommendation impact ranges with assumptions listed",
            "Anticipate the three hardest questions; have backup slides ready",
            "End with owner + date on next step, minuted"
          ],
          pitfalls: ["Chart dumps requiring audiences to do analyst work", "Buried lede: conclusion arriving at slide 14"]
        },
        {
          id: "dashboard-design-principles",
          title: "Design dashboards people check daily",
          level: "foundation", minutes: 25,
          description: "Audience-first layout, five-second answers, and maintenance ownership preventing dashboard rot.",
          tags: ["dashboards", "visualization"],
          steps: [
            "Name the audience and their one recurring question before opening tools",
            "Top-left = most important number with comparison (vs last week/target)",
            "Color meaning consistent: red=bad everywhere, never decorative",
            "Every tile links to investigation path (drill-down or query)",
            "Assign an owner responsible for accuracy and retirement",
            "Delete tiles unused for 90 days — dashboards are gardens"
          ],
          pitfalls: ["Kitchen-sink grids serving nobody's actual decision", "Broken tiles persisting for months signalling abandonment"]
        }
      ]
    }
  ],
  "product-management": [
    {
      id: "monetization",
      label: "Monetization",
      procedures: [
        {
          id: "pricing-packaging-basics",
          title: "Design pricing and packaging customers understand",
          level: "intermediate", minutes: 40,
          description: "Value-metric selection, tier fences, and upgrade psychology tested against real buying behavior.",
          tags: ["pricing", "packaging", "saas"],
          steps: [
            "Pick value metric aligned to customer's own success (per seat, usage, outcomes)",
            "Three tiers max; middle anchored to target segment",
            "Fence by capability value, never artificial crippling",
            "Grandfather existing customers through changes with clear timelines",
            "Test willingness-to-pay qualitatively (van Westendorp) before quantitative rollout",
            "Review packaging quarterly against sales objections and upgrade logs"
          ],
          pitfalls: ["Pricing copied from competitors serving different segments", "Usage-based billing surprise invoices destroying trust"]
        }
      ]
    },
    {
      id: "stakeholder-alignment",
      label: "Stakeholder Alignment",
      procedures: [
        {
          id: "roadmap-communication-cadence",
          title: "Communicate roadmaps without creating promises",
          level: "intermediate", minutes: 25,
          description: "Confidence-tiered updates, decision logs, and expectation resets that survive leadership churn.",
          tags: ["roadmap", "communication", "stakeholders"],
          steps: [
            "Publish on fixed cadence regardless of news quality — silence breeds rumors",
            "Tag items Now/Next/Later with confidence percentages stated",
            "Maintain decision log linking asks → outcomes → rationale",
            "Translate between audiences: exec summary ≠ engineering detail ≠ customer view",
            "Reset expectations immediately when reality shifts; late bad news compounds",
            "Archive old versions; roadmap revisionism destroys credibility"
          ],
          pitfalls: ["Dates leaked from internal docs becoming external commitments", "Roadmap decks diverging from what engineering believes"]
        }
      ]
    }
  ],
  "people-hr": [
    {
      id: "performance-growth",
      label: "Performance & Growth",
      procedures: [
        {
          id: "pip-conducted-fairly",
          title: "Conduct performance improvement plans fairly",
          level: "advanced", minutes: 40,
          description: "Clear criteria, genuine support, documented checkpoints protecting everyone's dignity and legal position.",
          tags: ["performance", "pip", "management"],
          steps: [
            "Confirm PIP is genuinely performance, not personality or preemptive layoff",
            "Define measurable success criteria achievable by a competent performer",
            "Offer real resources: coaching, training, workload adjustment",
            "Weekly documented check-ins; no surprise-ending ambushes",
            "Outcome honored either direction: extension, success, or respectful exit",
            "HR review of documentation BEFORE presenting anything to employee"
          ],
          pitfalls: ["PIPs as paperwork theater preceding predetermined termination", "Criteria vague enough that success is undefinable"]
        },
        {
          id: "remote-work-policy-design",
          title: "Design remote-work policies from operating reality",
          level: "intermediate", minutes: 30,
          description: "Location tiers, collaboration hours, equipment stipends, and outcome-based trust mechanics.",
          tags: ["remote", "policy", "hybrid"],
          steps: [
            "Classify roles by location-flexibility honestly tied to actual work needs",
            "Define core collaboration windows across timezones; protect them fiercely",
            "Specify equipment/security stipends and home-office expectations",
            "Replace presence-surveillance with outcome measurement explicitly",
            "Document tax/compliance constraints per country before promising anywhere",
            "Review policy against attrition and engagement data twice yearly"
          ],
          pitfalls: ["'Remote-friendly' culture where proximity still decides promotions", "Stealth productivity monitoring poisoning trust irrecoverably"]
        }
      ]
    }
  ]
};
