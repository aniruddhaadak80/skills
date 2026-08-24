export const track = {
  id: "supply-chain-logistics",
  label: "Supply Chain & Logistics",
  icon: "🚚",
  gradient: "from-stone-500 via-zinc-400 to-slate-300",
  ring: "ring-stone-500/30",
  text: "text-stone-300",
  blurb: "Demand planning, inventory policy, supplier management, and disruption resilience.",
  roles: ["Supply Planners", "Logistics Managers", "Procurement", "Operations Analysts"],
  domains: [
    {
      id: "planning-inventory",
      label: "Planning & Inventory",
      procedures: [
        {
          id: "demand-baseline-forecast",
          title: "Build a demand baseline you can beat",
          level: "intermediate", minutes: 35,
          description: "Cleanse history, segment by variability, and benchmark naive forecasts before fancy models.",
          tags: ["forecasting", "demand-planning"],
          steps: [
            "Cleanse history: mark stockouts, promotions, one-time events explicitly",
            "Segment SKUs by ABC volume × XYZ variability — different methods per class",
            "Benchmark naive (last period / same-period-last-year) first, always",
            "Only adopt complex methods that beat naive on YOUR data out-of-sample",
            "Forecast at the grain decisions are made; aggregate for reporting only",
            "Track bias separately from accuracy; systematic over/under is fixable"
          ],
          pitfalls: ["Promotional spikes trained into base demand forever", "MAPE worship while every forecast runs systematically high"]
        },
        {
          id: "safety-stock-policy",
          title: "Set safety stock from service targets and real variability",
          level: "intermediate", minutes: 30,
          description: "Statistical buffers per SKU-class matching stated service levels and lead-time truth.",
          tags: ["inventory", "safety-stock", "service-level"],
          steps: [
            "Get REAL lead times: quoted vs actual distribution, not PO text",
            "Set service levels deliberately by segment (A items higher than C)",
            "Compute buffers from demand AND lead-time variability together",
            "Review exceptions monthly: expedites and stockouts reveal policy misses",
            "Cap total buffer investment; trade service level against working capital explicitly",
            "Recalculate quarterly; yesterday's volatility isn't tomorrow's"
          ],
          pitfalls: ["One blanket weeks-of-supply rule across all SKUs", "Buffers hiding chronic supplier reliability problems"]
        },
        {
          id: "disruption-playbook",
          title: "Write a disruption playbook before you need it",
          level: "advanced", minutes: 40,
          description: "Pre-ranked responses to supplier/port/demand shocks with decision authority mapped.",
          tags: ["resilience", "risk", "continuity"],
          steps: [
            "Map single-source dependencies and their revenue exposure honestly",
            "Pre-qualify alternates for critical single-sourced inputs NOW",
            "Define trigger thresholds per scenario with named decision owners",
            "Rank responses: buffer draw-down → alternate source → allocation → price action",
            "Rehearse one scenario annually as tabletop with data available",
            "Post-event review updates thresholds and contacts list"
          ],
          pitfalls: ["Contact lists outdated when the port actually closes", "Playbooks written post-crisis and never tested"]
        }
      ]
    },
    {
      id: "suppliers-freight",
      label: "Suppliers & Freight",
      procedures: [
        {
          id: "supplier-scorecards",
          title: "Manage suppliers with balanced scorecards",
          level: "intermediate", minutes: 30,
          description: "OTIF, quality, responsiveness, and cost trends driving development or exit decisions.",
          tags: ["supplier-management", "procurement", "scorecards"],
          steps: [
            "Measure OTIF (on-time in-full) from need date, not promised date",
            "Add quality PPM and corrective-action response time to the card",
            "Weight dimensions by category strategy, not one-size formula",
            "Share scorecards with suppliers quarterly — surprises are failures",
            "Tie score bands to concrete consequences: volume growth or exit path",
            "Track trend direction; one bad quarter ≠ chronic underperformer"
          ],
          pitfalls: ["Scorecards measuring only price variance", "Top offenders kept because switching is annoying"]
        },
        {
          id: "freight-cost-audit",
          title: "Audit freight costs beyond invoice approval",
          level: "foundation", minutes: 25,
          description: "Accessorial charges, mode mix, and lane benchmarking recovering recurring overspend.",
          tags: ["freight", "logistics", "cost-reduction"],
          steps: [
            "Reconcile invoices against rated quotes automatically where possible",
            "Pareto accessorials: detention and reweight usually dominate recoverables",
            "Analyze mode misuse: air freight that missed a boat by two days",
            "Benchmark top lanes against market indices quarterly",
            "Fix root causes: packaging specs reducing dim-weight rewrites",
            "Claim recoverable charges within carrier contract windows religiously"
          ],
          pitfalls: ["Approving invoices without rate verification ever", "Accessorials treated as noise rather than signal"]
        }
      ]
    }
  ]
};
