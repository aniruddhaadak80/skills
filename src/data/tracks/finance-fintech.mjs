export const track = {
  id: "finance-fintech",
  label: "Finance & Fintech",
  icon: "💰",
  gradient: "from-green-500 via-emerald-500 to-lime-400",
  ring: "ring-emerald-500/30",
  text: "text-emerald-400",
  blurb: "Payment systems, risk controls, reconciliation, and financial modeling discipline.",
  roles: ["Fintech Engineers", "Financial Analysts", "Risk Teams", "Controllers"],
  domains: [
    {
      id: "payments-engineering",
      label: "Payments Engineering",
      procedures: [
        {
          id: "ledger-design-double-entry",
          title: "Design a double-entry ledger that balances forever",
          level: "advanced", minutes: 45,
          description: "Immutable journal entries, balanced postings, and derived balances keeping money math provable.",
          tags: ["ledger", "payments", "accounting"],
          steps: [
            "Model money as immutable journal entries; never UPDATE amounts",
            "Enforce sum(debits) = sum(credits) per transaction at DB level",
            "Store original currency + rate snapshot per entry, not converted-only",
            "Derive balances from entries; materialize views for speed, recompute nightly",
            "Reconcile internal ledger to processor reports daily with diff alerts",
            "Freeze periods: no edits into closed accounting periods, adjustments are new entries"
          ],
          pitfalls: ["Mutable balance columns drifting from entry truth", "FX conversion applied twice across services"]
        },
        {
          id: "webhook-reliability-payments",
          title: "Process payment webhooks reliably",
          level: "intermediate", minutes: 35,
          description: "Idempotent handlers, signature checks, and replay safety for provider callbacks.",
          tags: ["webhooks", "payments", "reliability"],
          steps: [
            "Verify signatures first; reject before any parsing side effects",
            "Persist raw event immediately, acknowledge fast, process async",
            "Deduplicate on event ID; assume providers retry aggressively",
            "Handle out-of-order events via state machine per payment object",
            "Backfill job reconciles missed webhooks against provider API hourly",
            "Alert on processing lag and dead-letter depth, not just failures"
          ],
          pitfalls: ["Business logic inside webhook handler timing out mid-write", "Trusting event arrival order for status transitions"]
        },
        {
          id: "reconciliation-flow",
          title: "Build daily reconciliation that catches drift",
          level: "intermediate", minutes: 35,
          description: "Three-way match between internal ledger, processor settlement, and bank statements.",
          tags: ["reconciliation", "finance-ops"],
          steps: [
            "Normalize all three sources to one canonical schema with IDs preserved",
            "Match on reference IDs first, then fuzzy-match residuals by amount+date window",
            "Categorize breaks: timing, fees missing, duplicates, true mismatches",
            "Auto-resolve known-benign classes (settlement T+1) with aging limits",
            "Route aged breaks to humans with full context attached",
            "Publish break-rate trend weekly; sudden spikes mean upstream change"
          ],
          pitfalls: ["Manual spreadsheet reconciliation hiding systemic issues", "Fee lines unmatched forever, polluting true mismatch counts"]
        }
      ]
    },
    {
      id: "risk-modeling",
      label: "Risk & Modeling",
      procedures: [
        {
          id: "fraud-rules-vs-model",
          title: "Layer fraud rules under an ML model sensibly",
          level: "advanced", minutes: 40,
          description: "Deterministic guardrails plus scored models with human review queues tuned by loss vs friction.",
          tags: ["fraud", "risk", "ml"],
          steps: [
            "Start with hard rules for non-negotiables (sanctions, velocity caps)",
            "Score remaining traffic with a model trained on confirmed labels only",
            "Define review queue capacity; set threshold to match it, not aspiration",
            "Measure false-positive friction cost alongside fraud loss prevented",
            "Champion-challenger rule/model changes in shadow mode first",
            "Feed analyst outcomes back into labels weekly, closing the loop"
          ],
          pitfalls: ["Blocking based on proxy features discriminating protected groups", "Thresholds tuned once and forgotten as patterns shift"]
        },
        {
          id: "financial-model-hygiene",
          title: "Keep financial models auditable",
          level: "foundation", minutes: 30,
          description: "Structure assumptions, flows, and outputs so anyone can trace every number.",
          tags: ["modeling", "excel", "analysis"],
          steps: [
            "Separate inputs / calculations / outputs into distinct sections or sheets",
            "One assumption cell referenced everywhere; no hardcoded duplicates",
            "Color convention: blue inputs, black formulas, green cross-links",
            "Sanity-check row: units, period alignment, growth vs inflation consistency",
            "Stress test: flex the two biggest drivers ±30% and observe covenants",
            "Version with changelog tab; archive prior versions read-only"
          ],
          pitfalls: ["Circularity hacks breaking recalculation", "Someone typing over a formula cell during a busy close"]
        },
        {
          id: "unit-economics-tracking",
          title: "Instrument unit economics honestly",
          level: "intermediate", minutes: 30,
          description: "Per-order/per-user contribution margin including hidden costs investors will find anyway.",
          tags: ["unit-economics", "metrics", "finance"],
          steps: [
            "Define the unit precisely (order? active user? subscription-month?)",
            "Include payment fees, support allocation, refunds/chargebacks in COGS",
            "Segment margin by cohort and channel; blended averages lie",
            "Track CAC payback months separately from LTV ratios",
            "Reconcile product analytics revenue to finance books monthly",
            "Revisit contribution margins quarterly as pricing and costs move"
          ],
          pitfalls: ["Gross revenue celebrated while contribution is negative", "Refund/chargeback losses excluded from dashboards"]
        }
      ]
    }
  ]
};
