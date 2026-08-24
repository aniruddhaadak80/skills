export const track = {
  id: "data-science",
  label: "Data Science & Analytics",
  icon: "📊",
  gradient: "from-emerald-500 via-green-500 to-teal-400",
  ring: "ring-emerald-500/30",
  text: "text-emerald-400",
  blurb: "Exploration, statistics, experimentation, and visualization that turn data into decisions.",
  roles: ["Data Scientists", "Analysts", "Research Scientists", "Product Analysts"],
  domains: [
    {
      id: "exploratory-analysis",
      label: "Exploratory Analysis",
      procedures: [
        {
          id: "dataset-health-check",
          title: "Run a dataset health check before modeling",
          level: "foundation", minutes: 30,
          description: "Profile distributions, missingness, leakage risks, and unit sanity before trusting any result.",
          tags: ["eda", "data-quality"],
          units: true,
          steps: [
            "Check shape, dtypes, and unique counts; flag columns failing expectations",
            "Plot distributions for numeric columns; eyeball impossible values",
            "Quantify missingness patterns: MCAR vs structured gaps telling stories",
            "Hunt leakage: fields created after outcome timestamps",
            "Verify joins didn't fan-out rows silently (count before/after)",
            "Write a one-page data dictionary others can trust"
          ],
          pitfalls: ["Aggregating across mixed currencies/timezones", "Imputing before understanding why data is missing"]
        },
        {
          id: "correlation-causation",
          title: "Avoid correlation traps in stakeholder analyses",
          level: "intermediate", minutes: 25,
          description: "Stress-test relationships with confounder thinking and simple falsification checks.",
          tags: ["statistics", "causal-inference"],
          steps: [
            "Ask what could drive both variables; list top three confounders",
            "Stratify or control for obvious confounders and see if effect survives",
            "Run falsification tests: effect should vanish under placebo splits",
            "Frame findings as associations unless design supports causality",
            "Pre-register hypotheses for decisions that matter",
            "Communicate uncertainty ranges, never naked point estimates"
          ],
          pitfalls: ["Simpson's paradox flipping conclusions after segmentation", "Post-hoc story fitting presented as discovery"]
        },
        {
          id: "cohort-funnel-analysis",
          title: "Build cohort and funnel analyses that hold up",
          level: "intermediate", minutes: 35,
          description: "Segment users by acquisition period and trace retention/funnels without sampling traps.",
          tags: ["analytics", "retention", "product"],
          steps: [
            "Define cohorts by first meaningful action, not signup alone",
            "Choose observation windows honestly; censor incomplete periods",
            "Normalize funnels per-entry so step conversion is comparable",
            "Segment by platform before concluding; mixed traffic misleads",
            "Visualize retention curves with cohort overlay to spot shifts",
            "Annotate charts with launches/incidents explaining inflections"
          ],
          pitfalls: ["Comparing cohorts with unequal maturity windows", "Counting bots as activated users"]
        }
      ]
    },
    {
      id: "experimentation",
      label: "Experimentation & A/B Testing",
      procedures: [
        {
          id: "ab-test-design",
          title: "Design an A/B test you can trust",
          level: "intermediate", minutes: 35,
          description: "Power the test upfront, guard metrics, and commit to decision rules before peeking.",
          tags: ["ab-testing", "statistics", "product"],
          steps: [
            "Define one primary metric with minimum detectable effect from business value",
            "Compute required sample size for 80% power at α=0.05 two-sided",
            "Randomize at user level with sticky assignment across sessions",
            "Add guardrail metrics: latency, error rate, unsubscribe, revenue per user",
            "Commit to runtime and decision rule BEFORE launch; no mid-flight goalposts",
            "Log the design doc; results include confidence intervals not just p-values"
          ],
          pitfalls: ["Peeking daily and stopping at first significance", "Underpowered tests 'proving' null effects"],
          kpis: ["100% of launched tests with pre-registered designs", "SRM check passing (sample ratio mismatch)"]
        },
        {
          id: "metric-definition-contracts",
          title: "Write metric definitions as contracts",
          level: "intermediate", minutes: 30,
          description: "One canonical definition per metric, versioned and documented, killing dashboard wars.",
          tags: ["metrics", "governance", "analytics-engineering"],
          steps: [
            "Create a metric catalog entry per KPI: formula, grain, filters, owner",
            "Specify inclusion/exclusion rules explicitly (bots, refunds, internal staff)",
            "Implement once in the semantic layer; dashboards reference it",
            "Version definitions; changelog when business logic changes",
            "Backfill check: recompute last 12 months after any change",
            "Review catalog quarterly; archive dead metrics loudly"
          ],
          pitfalls: ["'Active users' meaning three things in three dashboards", "Revenue defined differently between finance and product"]
        }
      ]
    },
    {
      id: "ml-modeling",
      label: "Modeling Practice",
      procedures: [
        {
          id: "baseline-first-modeling",
          title: "Baseline before you boost",
          level: "foundation", minutes: 25,
          description: "Ship trivial baselines (mean, logistic, linear) to price complexity honestly.",
          tags: ["ml", "modeling", "baselines"],
          steps: [
            "Predict the prior/majority class; record its metric as floor",
            "Fit one linear/logistic model with sane regularization",
            "Add one gradient-boosted model only if it beats baseline materially",
            "Compare on identical splits and preprocessing pipelines",
            "Quantify lift in business terms, not just AUC deltas",
            "Deploy the simplest model within epsilon of the best"
          ],
          pitfalls: ["Deep nets on tabular data losing to logistic regression", "Metrics improving while business outcomes don't"]
        },
        {
          id: "leakage-prevention",
          title: "Prevent data leakage in ML pipelines",
          level: "advanced", minutes: 35,
          description: "Split-aware preprocessing, temporal boundaries, and feature provenance keeping offline gains real online.",
          tags: ["ml", "validation", "leakage"],
          steps: [
            "Split temporally when production predicts the future",
            "Fit scalers/imputers/encoders inside folds only, never full data",
            "Ban features unavailable at prediction timestamp (audit with data team)",
            "Group correlated rows (same user/device) into same split side",
            "Track feature computation code versions with model artifacts",
            "Validate: offline-vs-online correlation checked each release"
          ],
          pitfalls: ["Random shuffles leaking user histories across train/test", "Target encoding fit on full dataset"]
        }
      ]
    }
  ]
};
