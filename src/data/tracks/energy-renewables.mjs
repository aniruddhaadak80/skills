export const track = {
  id: "energy-renewables",
  label: "Energy & Renewables",
  icon: "🔋",
  gradient: "from-yellow-400 via-lime-400 to-emerald-400",
  ring: "ring-yellow-500/30",
  text: "text-yellow-300",
  blurb: "Solar/storage project workflows, performance monitoring, and grid-interconnection discipline.",
  roles: ["Solar Engineers", "Energy Analysts", "Project Developers", "O&M Teams"],
  domains: [
    {
      id: "project-development",
      label: "Project Development",
      procedures: [
        {
          slug: "solar-site-feasibility",
          id: "site-feasibility",
          title: "Run a solar site feasibility screen",
          level: "intermediate", minutes: 40,
          description: "Resource, interconnection, permitting, and economics screened in order of deal-killer risk.",
          tags: ["solar", "feasibility", "development"],
          steps: [
            "Screen interconnection FIRST: queue position, capacity headroom, upgrade cost estimates",
            "Assess resource data quality (measured vs modeled) and shading geometry",
            "Verify land control options and zoning/permitting pathway realistically",
            "Model economics with P50 production, current incentives, and downside tariff cases",
            "Rank fatal flaws before nice-to-haves; walk early when screens fail",
            "Document assumptions versioned — feasibility memos get re-litigated"
          ],
          pitfalls: ["Falling in love with great sites the grid cannot serve", "Modeled resource accepted without measured validation"]
        },
        {
          id: "production-model-integrity",
          title: "Keep production models honest",
          level: "advanced", minutes: 35,
          description: "P50/P90 discipline, loss-tree transparency, and as-built model updates protecting projections.",
          tags: ["modeling", "pvsyst", "finance"],
          steps: [
            "Build loss tree explicitly: soiling, temperature, availability, clipping, line losses",
            "Quote P50 for engineering, P90 for financing; never blur them",
            "Update models with as-built equipment and measured first-year data",
            "Compare predicted vs actual monthly; investigate >5% persistent deviations",
            "Document every assumption change between model versions",
            "Feed O&M findings back into loss assumptions fleet-wide"
          ],
          pitfalls: ["Cherry-picking sunny months as 'performance proof'", "Models frozen at financial close despite field reality"]
        },
        {
          id: "commissioning-checklist",
          title: "Commission systems with sign-off rigor",
          level: "intermediate", minutes: 30,
          description: "Test sequences, punch lists, and turnover documentation preventing day-one surprises.",
          tags: ["commissioning", "quality", "handover"],
          steps: [
            "Verify installation against stamped design before energization tests",
            "Run test sequence per spec: continuity, insulation, polarity, then live tests",
            "Record string-level baselines — they're your degradation reference forever",
            "Punch-list every deficiency with owner + deadline before turnover",
            "Training handoff to O&M includes docs, credentials, and monitoring walkthrough",
            "Archive commissioning package searchable by future troubleshooting"
          ],
          pitfalls: ["Energizing on partial inspections under schedule pressure", "String baselines never recorded, degradation unknowable"]
        }
      ]
    },
    {
      id: "operations-monitoring",
      label: "Operations & Monitoring",
      procedures: [
        {
          id: "performance-alert-triage",
          title: "Triage solar performance alerts by revenue impact",
          level: "intermediate", minutes: 25,
          description: "Alert prioritization from energy-loss math, not alarm noise, with dispatch thresholds.",
          tags: ["monitoring", "o-and-m", "triage"],
          steps: [
            "Convert each alert to estimated kW-loss × tariff = $/day priority",
            "Group inverter/string faults by root-cause signature before dispatch",
            "Set dispatch thresholds: immediate / next-truck / next-scheduled visit",
            "Validate fixes by post-repair production against weather-adjusted expectation",
            "Track repeat-offender sites for systemic causes (soiling? critters? PID?)",
            "Review false-alarm rate quarterly; tune monitoring rules accordingly"
          ],
          pitfalls: ["Truck rolls prioritized by loudest customer instead of dollars", "Weather unadjusted comparisons triggering phantom alerts"]
        },
        {
          id: "storage-cycling-strategy",
          title: "Operate storage within warranty and market reality",
          level: "advanced", minutes: 35,
          description: "Cycle management balancing degradation costs against arbitrage and resilience value.",
          tags: ["battery", "storage", "optimization"],
          steps: [
            "Model degradation cost per cycle at CURRENT replacement prices",
            "Dispatch only when expected spread clears cycle cost plus margin",
            "Reserve capacity commitments (backup contracts) take precedence over arbitrage",
            "Monitor cell imbalance trends; schedule balancing maintenance proactively",
            "Log every cycle with SOC windows feeding warranty compliance records",
            "Re-optimize strategy quarterly as tariffs and degradation curves evolve"
          ],
          pitfalls: ["Free-cycling for pennies spreads burning warranty cycles", "Backup reserve silently drained by morning arbitrage"]
        }
      ]
    }
  ]
};
