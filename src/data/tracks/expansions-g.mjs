export const EXTRA_DOMAINS = {
  "ai-engineering": [
    {
      id: "model-efficiency",
      label: "Model Efficiency",
      procedures: [
        {
          id: "quantization-strategy-selection",
          title: "Select quantization strategies without wrecking quality",
          level: "advanced", minutes: 50,
          description: "PTQ vs QAT tradeoffs, per-layer sensitivity analysis, and eval gates protecting downstream task accuracy.",
          tags: ["quantization", "inference", "optimization"],
          steps: [
            "Baseline full-precision on YOUR eval suite; record per-task deltas as contract",
            "Quantize post-training first (INT8/FP8); measure sensitive layers via per-layer KL divergence",
            "Keep outlier layers (first/last, attention sinks) higher precision when regressions cluster",
            "Escalate to QAT only where PTQ gaps exceed product tolerance",
            "Benchmark throughput AND memory at target batch sizes — wins must be real end-to-end",
            "Re-quantize per model refresh; never assume transfer across checkpoints"
          ],
          pitfalls: ["Perplexity used alone while downstream classification collapses", "Kernel speedups measured on shapes production never runs"]
        },
        {
          id: "kv-cache-optimization",
          title: "Optimize KV cache for long-context serving",
          level: "advanced", minutes: 45,
          description: "Paged attention, prefix reuse, and eviction policies turning long-context from cost center into feature.",
          tags: ["kv-cache", "inference", "serving"],
          steps: [
            "Measure KV footprint per token per layer; size GPU pools from p99 sequences",
            "Enable paged/block-managed allocation eliminating fragmentation stalls",
            "Cache shared prefixes (system prompts, documents) across requests explicitly",
            "Set eviction by recency-and-reference; never evict mid-generation blocks",
            "Offload cold caches to CPU/NVMe only with measured recall latency budget",
            "Alert on cache hit-rate drops — they signal routing or versioning bugs"
          ],
          pitfalls: ["Prefix invalidated by trivial prompt-template edits", "Eviction during beam search corrupting output mid-stream"]
        },
        {
          id: "distillation-pipeline-design",
          title: "Distill large-model capability into deployable students",
          level: "advanced", minutes: 55,
          description: "Teacher selection, data generation governance, and student eval harnesses preserving target behaviors.",
          tags: ["distillation", "training", "efficiency"],
          steps: [
            "Choose teachers by TARGET task performance, not general leaderboard fame",
            "Generate training data under diversity quotas; dedupe near-copies ruthlessly",
            "Filter student training data THROUGH the teacher's own confidence + verifiers",
            "Hold out real production traffic samples as untouched eval gold",
            "Compare student vs teacher on failure cases, not just aggregate metrics",
            "Document data provenance fully — licensing questions arrive later"
          ],
          pitfalls: ["Students memorizing teacher artifacts including hallucinations", "Eval contamination inflating distillation 'success'"]
        }
      ]
    },
    {
      id: "agent-platform",
      label: "Agent Platform Engineering",
      procedures: [
        {
          id: "agent-tracing-standards",
          title: "Standardize agent observability with tracing spans",
          level: "advanced", minutes: 40,
          description: "OpenTelemetry-aligned span taxonomies for LLM calls, tool executions, and handoffs enabling real debugging.",
          tags: ["tracing", "otel", "agents", "observability"],
          steps: [
            "Define span hierarchy: session → plan → step → tool-call → sub-calls",
            "Attach token counts, costs, model versions, and prompt hashes to every span",
            "Propagate trace context across queues/services so retries stay linked",
            "Sample intelligently: 100% of errors/tool-failures, fraction of successes",
            "Build the 'why did it do that' query: input hash → exact prompts retrieved",
            "Version span schema; dashboards break silently otherwise"
          ],
          pitfalls: ["Each framework's proprietary format trapping traces in silos", "PII flowing into trace storage without scrubbing"]
        },
        {
          id: "tool-permission-matrix",
          title: "Govern agent tool access with permission matrices",
          level: "advanced", minutes: 40,
          description: "Role-scoped tool grants, parameter-level policies, and audit trails making agent autonomy insurable.",
          tags: ["agents", "security", "governance"],
          steps: [
            "Inventory every tool × action class; classify read/write/irreversible",
            "Bind permissions to agent ROLES, not individual deployments ad hoc",
            "Enforce parameter constraints server-side (amount caps, allowlisted targets)",
            "Require dual approval workflows for irreversible classes in prod",
            "Log grant changes separately from usage; both auditable immutably",
            "Red-team the matrix quarterly: can role combos escalate?"
          ],
          pitfalls: ["Wildcard grants copied between environments 'temporarily'", "Parameter validation living only in prompts"]
        }
      ]
    }
  ],
    "backend-engineering": [
      {
        id: "distributed-systems",
        label: "Distributed Systems",
        procedures: [
          {
            id: "consistency-model-selection",
            title: "Choose consistency models per data class deliberately",
            level: "advanced", minutes: 45,
            description: "Strong vs bounded-staleness vs eventual mapped to business harm scenarios, not fashion.",
            tags: ["consistency", "architecture", "distributed"],
            steps: [
              "List data classes with concrete stale-read harm examples in money terms",
              "Default everything eventual; upgrade ONLY classes failing the harm test",
              "For upgrades prefer session/bounded-staleness before paying strong-consistency latency",
              "Document chosen model per entity in architecture decision records",
              "Design compensations for eventual paths (idempotent corrections, reconciliation)",
              "Test partition behavior deliberately; verify degraded modes match documentation"
            ],
            pitfalls: ["Strong consistency everywhere 'for safety', latency budgets destroyed", "Eventual everywhere 'for scale', double-charges discovered by finance"]
          },
          {
            id: "multi-region-data-topology",
            title: "Design multi-region data topologies honestly",
            level: "advanced", minutes: 50,
            description: "Residency, replication lag, failover semantics, and write-conflict strategy before the second region exists.",
            tags: ["multi-region", "residency", "failover"],
            steps: [
              "Map residency requirements per dataset BEFORE topology; law constrains design",
              "Pick write topology: single-primary simplicity vs multi-primary conflict reality",
              "Model cross-region latency into user journeys region-by-region",
              "Define failover triggers, RTO/RPO per tier, and split-brain prevention mechanism",
              "Rehearse regional evacuation with production-scale data annually",
              "Instrument per-region error/latency separately; averages hide one dead region"
            ],
            pitfalls: ["Multi-primary chosen then conflicts resolved by whoever writes last", "Failover tested with empty databases only"]
          },
          {
            id: "event-sourcing-pragmatics",
            title: "Adopt event sourcing without the graveyard mistakes",
            level: "advanced", minutes: 45,
            description: "Command/event separation, upcasting discipline, and projection rebuild strategies that survive year three.",
            tags: ["event-sourcing", "architecture", "cqrs"],
            steps: [
              "Store commands' resulting EVENTS as truth; never store mutable state alongside",
              "Version events immutably; upcast old versions at read boundaries only",
              "Build projections as disposable rebuilds from the stream — test rebuilds regularly",
              "Snapshot aggressively enough that replays don't take hours",
              "Keep event payloads primitively typed; rich behavior belongs in handlers",
              "Answer 'why did state change' queries from streams — that's the payoff"
            ],
            pitfalls: ["Events named after tables (UserUpdated) carrying no business meaning", "Schema changes editing history instead of adding versions"]
          }
        ]
      }
    ],
    "devops-cloud": [
      {
        id: "platform-delivery",
        label: "Platform & Delivery",
        procedures: [
          {
            id: "golden-path-paved-road",
            title: "Ship golden paths teams choose voluntarily",
            level: "advanced", minutes: 45,
            description: "Template repositories, self-service scaffolding, and paved-road adoption measured by pull not push.",
            tags: ["platform-engineering", "dx", "templates"],
            steps: [
              "Extract patterns from your BEST team's setup, not committee ideals",
              "Scaffold new services with security/observability/CI included by default",
              "Make the golden path faster than doing it manually — adoption follows friction",
              "Keep templates owned and versioned; breaking changes get changelogs + migration notes",
              "Measure voluntary adoption % as THE platform metric",
              "Sunset parallel snowflake infrastructure loudly once parity reached"
            ],
            pitfalls: ["Mandated platforms competing with engineers' escape hatches", "Templates frozen at launch decaying into anti-patterns"]
          },
          {
            id: "capacity-planning-forecasting",
            title: "Plan capacity from growth curves, not incidents",
            level: "advanced", minutes: 40,
            description: "Headroom policies, load-shed tiers defined calmly, and procurement lead times respected.",
            tags: ["capacity", "planning", "scaling"],
            steps: [
              "Forecast demand from sales pipeline + seasonality, reviewed monthly",
              "Set headroom policy per tier (e.g., 40% at peak) with alert thresholds below it",
              "Load-test at forecast+headroom levels, not last year's peak",
              "Pre-negotiate procurement/reservation lead times into planning calendars",
              "Define load-shed ladder in advance: which features drop first, who decides",
              "Post-incident capacity reviews update curves and buffers formally"
            ],
            pitfalls: ["Capacity added reactively at 95% utilization", "Shed-ladder improvised during the outage it was meant for"]
          }
        ]
      }
    ],
    cybersecurity: [
      {
        id: "detection-operations",
        label: "Detection Operations",
        procedures: [
          {
            id: "detcode-testing",
            title: "Test detections like code with unit + integration suites",
            level: "advanced", minutes: 45,
            description: "Atomic test fixtures, expected-fire assertions, and regression packs keeping detection debt visible.",
            tags: ["detection-as-code", "testing", "ci"],
            steps: [
              "Every rule ships with fixture events that MUST fire + MUST-NOT-fire neighbors",
              "Run rule suites against synthetic telemetry in CI on every change",
              "Track rule precision/recall over time like code coverage trends",
              "Version rules semantically; logic changes bump minor, tuning patches",
              "Quarantine flaky environment-dependent rules visibly, fix root cause",
              "Report suite health to leadership: rules tested %, drift count"
            ],
            pitfalls: ["Rules edited live in SIEM UIs diverging from repo truth", "Fixtures rotting until they validate nothing anymore"]
          },
          {
            id: "threat-intel-operationalization",
            title: "Operationalize threat intel instead of hoarding it",
            level: "advanced", minutes: 40,
            description: "Relevance filtering, indicator decay, and hunt/detection integration converting feeds into actions.",
            tags: ["threat-intel", "cti", "workflow"],
            steps: [
              "Score sources by relevance to YOUR stack; unsubscribe from noise",
              "Auto-expire indicators by type-typical lifetimes (domains days, hashes years)",
              "Route intel to consumers: IOCs→matching, TTPs→hunting, actors→risk registers",
              "Measure operationalized percentage — intel touched within SLA",
              "Close loop: false-positive-heavy sources get demoted automatically",
              "Feed confirmed hits back to sharing communities you consume from"
            ],
            pitfalls: ["Ten thousand stale IPs blocking nothing but log space", "Intel reports read and archived without any detection change"]
          }
        ]
      }
    ]
};
