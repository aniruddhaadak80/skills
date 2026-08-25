export const EXTRA_DOMAINS = {
  "ml-research": [
    {
      id: "inference-optimization",
      label: "Inference Optimization",
      procedures: [
        {
          id: "speculative-decoding-tuning",
          title: "Tune speculative decoding without regressing quality",
          level: "advanced", minutes: 45,
          description: "Drafter selection, acceptance-rate monitoring, and batch-interaction effects in production serving.",
          tags: ["speculative-decoding", "inference", "llm"],
          steps: [
            "Match drafter to target on YOUR distribution; measure acceptance rate per task class",
            "Tune speculation length by observed acceptance — longer drafts waste on rejection",
            "Watch batching interaction: gains shrink as batch size fills GPUs",
            "Verify output distribution equivalence against target-only sampling",
            "Re-evaluate whenever either model updates; pairs drift together",
            "Track tokens-per-second AND cost-per-token separately; they optimize differently"
          ],
          pitfalls: ["Acceptance rates from benchmarks failing on domain jargon", "Quality regressions hidden inside 'equivalent' temperature settings"]
        },
        {
          id: "scaling-law-interpretation",
          title: "Read scaling-law claims like a practitioner",
          level: "advanced", minutes: 35,
          description: "Compute budgets, data-wall caveats, and extrapolation ranges separating signal from slide-ware.",
          tags: ["scaling-laws", "strategy", "analysis"],
          steps: [
            "Check the compute range fitted — extrapolation beyond it is faith, not math",
            "Ask what's held constant: data quality? architecture? tokenizer?",
            "Convert claimed multipliers into YOUR training-budget currency honestly",
            "Note whether inference cost was counted; many 'efficient' models aren't",
            "Demand error bars or seed variance on fitted exponents",
            "Update decisions only when curves cross within your reachable budget"
          ],
          pitfalls: ["Chinchilla-optimal quoted for inference-dominated deployments", "Data-quality assumptions inherited from web-scrape era"]
        }
      ]
    }
  ],
  "frontend-engineering": [
    {
      id: "rendering-strategy",
      label: "Rendering Strategy",
      procedures: [
        {
          id: "rendering-mode-selection",
          title: "Select rendering modes per route deliberately",
          level: "advanced", minutes: 40,
          description: "Static/ISR/SSR/streaming/client mapped to freshness needs, personalization, and TTFB budgets.",
          tags: ["ssr", "isr", "streaming", "architecture"],
          steps: [
            "Classify routes: content volatility × personalization × interactivity",
            "Default static/ISR for public volatile-slow content with tag revalidation",
            "Reserve SSR for truly per-request data; stream shells for perceived speed",
            "Never client-fetch server-known data out of habit — that's a waterfall",
            "Document choice per route table; mixed strategies confuse debugging",
            "Measure TTFB+LCP per mode on real routes after each framework upgrade"
          ],
          pitfalls: ["Whole-app SPA conversion losing SEO overnight", "ISR windows serving stale prices beyond business tolerance"]
        },
        {
          id: "web-workers-architecture",
          title: "Move heavy work off the main thread properly",
          level: "advanced", minutes: 45,
          description: "Worker pool sizing, transferable payloads, and Comlink-style RPC keeping UI at 60fps.",
          tags: ["web-workers", "performance", "architecture"],
          steps: [
            "Profile first: identify tasks blocking main thread >50ms consistently",
            "Pool workers = hardwareConcurrency minus reserve; reuse, don't spawn per task",
            "Transfer ArrayBuffers instead of structured-cloning large payloads",
            "Design message protocol versioned — workers update independently of pages",
            "Fallback to main-thread execution behind feature detection for old browsers",
            "Guard against worker startup latency for tiny tasks — often net-negative"
          ],
          pitfalls: ["PostMessage cloning multi-MB datasets negating compute savings", "Workers importing entire app bundles via accidental transitive imports"]
        }
      ]
    }
  ],
  "data-engineering": [
    {
      id: "lakehouse-streaming",
      label: "Lakehouse & Streaming",
      procedures: [
        {
          id: "microbatch-streaming-hybrid",
          title: "Blend streaming and batch where each belongs",
          level: "advanced", minutes: 45,
          description: "Lambda-to-Kappa migrations, microbatch cadences, and consistency contracts across paths.",
          tags: ["lambda", "kappa", "streaming"],
          steps: [
            "Audit which consumers actually need seconds-fresh vs minutes-fresh truth",
            "Consolidate logic into one stream processor where latency allows (Kappa direction)",
            "Keep batch for heavy history recomputes; document boundary contracts",
            "Unify schemas across paths or drift WILL create divergent truths",
            "Watermark strategy consistent between live and backfill processing",
            "Reconciliation job compares paths continuously; alert divergence early"
          ],
          pitfalls: ["Two codebases implementing subtly different business logic forever", "Backfills overwriting streaming results with stale semantics"]
        },
        {
          id: "open-table-format-selection",
          title: "Choose and operate open table formats deliberately",
          level: "advanced", minutes: 40,
          description: "Iceberg/Delta/Hudi tradeoffs, compaction strategy, and catalog governance preventing metadata debt.",
          tags: ["iceberg", "delta-lake", "lakehouse"],
          steps: [
            "Select by engine ecosystem fit and vendor-neutral catalog support first",
            "Define compaction/optimize cadence per table by write pattern",
            "Set snapshot retention policies balancing time-travel needs vs storage burn",
            "Govern the catalog: naming, ownership, staging-to-prod promotion flows",
            "Test schema evolution paths actually used (add column vs type widening)",
            "Monitor metadata file counts — small-file problems metastasize into query planning"
          ],
          pitfalls: ["Every-write commits leaving thousands of tiny metadata files", "Time-travel retention zero making recovery impossible"]
        }
      ]
    }
  ],
  "engineering-leadership": [
    {
      id: "staff-plus-track",
      label: "Staff+ Operating Models",
      procedures: [
        {
          id: "staff-eng-operating-model",
          title: "Operate as a staff engineer without becoming a bottleneck",
          level: "advanced", minutes: 45,
          description: "Scope selection, influence-through-artifacts, and force-multiplication rhythms for individual contributors.",
          tags: ["staff-engineer", "career", "influence"],
          steps: [
            "Pick one org-level problem per quarter; decline everything else explicitly",
            "Write decision documents others execute — code is your worst multiplier",
            "Maintain apprenticeship: two engineers growing toward your current scope",
            "Schedule recurring alignment with peer staff across teams",
            "Measure success by decisions improved, not lines or tickets touched",
            "Escalate systemic blockers once, then build the mechanism preventing recurrence"
          ],
          pitfalls: ["Hero-debugging everything while org-level debt compounds", "Strategy docs nobody reads because teams weren't involved"]
        },
        {
          id: "tech-strategy-doc-craft",
          title: "Write tech strategy documents that get funded",
          level: "advanced", minutes: 50,
          description: "Current-state honesty, bets with falsifiable outcomes, and resourcing asks tied to business narratives.",
          tags: ["strategy", "writing", "planning"],
          steps: [
            "Open with business context in executives' language, quantified pressure points",
            "Present 2-3 strategic bets with explicit what-we-stop-doing tradeoffs",
            "Each bet carries success metrics + review date + kill criteria upfront",
            "Resource ask maps line-items to bets; no orphan headcount requests",
            "Circulate draft to skeptics privately first; incorporate visibly",
            "Present decisions needed today separately from information-only sections"
          ],
          pitfalls: ["Technology-first documents searching for a business rationale", "Everything-priority strategies funding nothing"]
        }
      ]
    }
  ],
  "biotech-pharma": [
    {
      id: "computational-validation",
      label: "Computational Validation",
      procedures: [
        {
          id: "assay-simulation-validation",
          title: "Validate computational biology pipelines against wet-lab truth",
          level: "advanced", minutes: 45,
          description: "Benchmark design, discordance investigation, and acceptance thresholds bridging silico and bench.",
          tags: ["validation", "bioinformatics", "benchmarking"],
          steps: [
            "Define gold-standard comparisons achievable in-house (orthogonal assays)",
            "Run pipeline vs assay on shared samples spanning expected difficulty range",
            "Investigate every discordance class before adjusting either side",
            "Set acceptance thresholds BEFORE seeing comparison results",
            "Version reference materials; drift invalidates longitudinal comparisons",
            "Publish internal validation reports citable during regulatory interactions"
          ],
          pitfalls: ["Thresholds tuned post-hoc until pipeline looks good", "Single-time-point validations extrapolated to all conditions"]
        }
      ]
    }
  ]
};
