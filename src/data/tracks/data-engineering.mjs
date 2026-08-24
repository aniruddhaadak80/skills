export const track = {
  id: "data-engineering",
  label: "Data Engineering",
  icon: "🛢️",
  gradient: "from-cyan-500 via-teal-500 to-emerald-400",
  ring: "ring-cyan-500/30",
  text: "text-cyan-400",
  blurb: "Pipelines, warehouses, streaming, and data quality engineering that analysts can trust.",
  roles: ["Data Engineers", "Analytics Engineers", "Platform Data Teams"],
  domains: [
    {
      id: "pipelines-batch",
      label: "Batch Pipelines",
      procedures: [
        {
          id: "pipeline-idempotency",
          title: "Make batch pipelines rerunnable by design",
          level: "intermediate", minutes: 35,
          description: "Idempotent stages, partitioned writes, and backfill strategies so failures heal instead of corrupt.",
          tags: ["etl", "idempotency", "orchestration"],
          steps: [
            "Key every write by logical date/partition; overwrite partitions, never append blind",
            "Design stages to be safely re-executable from any point of failure",
            "Separate extraction, transformation, loading with checkpoints between",
            "Backfill = same code, different parameter — prove it in staging first",
            "Emit per-run metrics: rows in/out, duration, null-rates into a meta table",
            "Alert on freshness SLA breach before stakeholders notice stale dashboards"
          ],
          pitfalls: ["append-only loads duplicating on retry", "One giant DAG task failing everything for one bad record"]
        },
        {
          id: "schema-evolution-contracts",
          title: "Evolve schemas without breaking consumers",
          level: "advanced", minutes: 40,
          description: "Schema contracts, compatibility modes, and deprecation flows across pipeline boundaries.",
          tags: ["schema", "contracts", "governance"],
          steps: [
            "Publish schema contracts per dataset with owner + compatibility mode (backward default)",
            "CI-validate producer changes against registered contracts",
            "Add columns nullable-first; never repurpose existing fields silently",
            "Rename via add-new → dual-write → migrate → drop-old, with telemetry at each step",
            "Notify consumer list (derived from query logs) before breaking changes",
            "Archive old schema versions; make lineage queryable"
          ],
          pitfalls: ['"Temporary" column reuse changing meaning mid-history', "Producers shipping struct changes on Friday evenings"]
        },
        {
          slug: "data-quality-tests-warehouse",
          id: "dq-tests-warehouse",
          title: "Test warehouse data like software",
          level: "intermediate", minutes: 30,
          description: "Freshness, uniqueness, referential, and business-invariant checks wired into orchestration.",
          tags: ["data-quality", "testing", "warehouse"],
          variants: {
            snowflake: { id: "snowflake", label: "Snowflake", adds: ["Leverage streams/tasks for change-driven tests", "Watch warehouse credits: schedule heavy tests off-peak"] },
            bigquery: { id: "bigquery", label: "BigQuery", adds: ["Use partition pruning in test queries to control scan costs", "Assert on _TABLE_METADATA row counts cheaply"] },
            databricks: { id: "databricks", label: "Databricks/Delta", adds: ["Use Delta EXPECTATIONS for inline quality gates", "Track table properties for freshness metadata"] }
          },
          description: "Layered data quality tests that block bad data from reaching downstream consumers.",
          tags: ["data-quality", "testing"],
          steps: [
            "Tier 0 volume/freshness: row counts within expected bands per partition",
            "Tier 1 structural: uniqueness of keys, nullability, referential integrity",
            "Tier 2 business invariants: revenue reconciles, statuses in enum sets",
            "Fail loudly at tier matching blast radius; warn below it",
            "Store test results historically to catch slow drift trends",
            "Review false-positive rate monthly; noisy tests get ignored"
          ],
          pitfalls: ["Tests only in BI layer where nobody sees red", "100% pass-rate suites proving nothing was tested"]
        }
      ]
    },
    {
      id: "streaming-modeling",
      label: "Streaming & Modeling",
      procedures: [
        {
          id: "stream-processing-windows",
          title: "Choose windowing and watermarks correctly",
          level: "advanced", minutes: 40,
          description: "Event-time vs processing-time decisions, late-data handling, and exactly-once semantics.",
          tags: ["streaming", "kafka", "flink"],
          steps: [
            "Timestamp on event time extracted from payload, not arrival",
            "Set watermark delay from measured lateness distribution p99, not guesswork",
            "Decide allowed-lateness policy: update vs side-output for stragglers",
            "Key by cardinality you can hold state for; watch idle-key eviction",
            "Verify exactly-once end-to-end through failure injection tests",
            "Monitor watermark lag as the primary stream health metric"
          ],
          pitfalls: ["Processing-time windows rewriting history on replays", "Unbounded state growth from high-cardinality keys"]
        },
        {
          id: "dimensional-modeling-refresh",
          title: "Apply dimensional modeling pragmatically",
          level: "intermediate", minutes: 35,
          description: "Facts, dimensions, SCD strategy, and grain declarations serving analytics for years.",
          tags: ["modeling", "kimball", "analytics"],
          steps: [
            "Declare the grain of every fact table in its documentation header",
            "Conform shared dimensions across facts before building marts",
            "Pick SCD type deliberately: type-2 for history that matters, nothing else",
            "Prefer wide tables for specific products over generic mega-marts",
            "Add surrogate keys where natural keys churn",
            "Model for the top 10 analyst questions; revisit quarterly"
          ],
          pitfalls: ["Mixed-grain fact tables producing wrong aggregates forever", "Type-1 updates silently erasing history compliance needed"]
        }
      ]
    }
  ]
};
