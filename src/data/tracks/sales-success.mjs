export const track = {
  id: "sales-success",
  label: "Sales & Customer Success",
  icon: "🤝",
  gradient: "from-lime-500 via-green-400 to-emerald-300",
  ring: "ring-lime-500/30",
  text: "text-lime-400",
  blurb: "Consultative selling, discovery calls, pipeline hygiene, and retention playbooks.",
  roles: ["Account Executives", "Customer Success Managers", "Sales Engineers", "Founders Selling"],
  domains: [
    {
      id: "discovery-deal",
      label: "Discovery & Deals",
      procedures: [
        {
          id: "discovery-call-framework",
          title: "Run discovery that surfaces real buying motives",
          level: "foundation", minutes: 30,
          description: "Question ladders from situation to impact to cost-of-inaction, with talk-ratio discipline.",
          tags: ["sales", "discovery", "qualification"],
          steps: [
            "Open with agenda contract: their goals, your questions, next-step decision at end",
            "Climb ladder: current state → why now → attempted fixes → cost of status quo",
            "Quantify impact in THEIR metric (hours lost, revenue delayed)",
            "Keep talk ratio ≤40%; silence is a discovery tool",
            "Test budget/authority indirectly through process questions ('who else weighs in?')",
            "Close with mutual action plan draft, not a generic 'send you info'"
          ],
          pitfalls: ["Demo-dumping before problem is quantified", "Accepting 'interesting' as forward motion"]
        },
        {
          id: "pipeline-hygiene-review",
          title: "Review pipeline with honest hygiene standards",
          level: "intermediate", minutes: 25,
          description: "Stage-exit criteria, next-step currency, and slippage detection keeping forecasts real.",
          tags: ["pipeline", "forecast", "process"],
          steps: [
            "Define exit criteria per stage; deals without them get downgraded automatically",
            "Every open deal carries dated next step; no next step = stalled flag",
            "Track stage-conversion and cycle-time by segment monthly",
            "Flag slipped-close-date deals for win/loss review regardless of outcome",
            "Forecast three numbers: commit / best-case / worst-case with rationale",
            "Remove wishful deals ruthlessly; clean pipe beats fat pipe"
          ],
          pitfalls: ["Happy-ears stage inflation before quarter end", "Dead deals parked forever muddying conversion metrics"]
        },
        {
          id: "objection-reframe",
          title: "Handle objections without groveling or dodging",
          level: "intermediate", minutes: 20,
          description: "Acknowledge → clarify → reframe to the underlying concern → evidence → confirm resolution.",
          tags: ["objections", "negotiation", "communication"],
          steps: [
            "Acknowledge genuinely; defensiveness kills trust instantly",
            "Clarify what's UNDER the stated objection (price often means unproven value)",
            "Reframe against the cost of the status quo they already quantified",
            "Offer specific evidence matched to objection type (case study, trial, SLA)",
            "Confirm the objection is resolved explicitly before moving on",
            "Log objections verbatim weekly — they're roadmap gold"
          ],
          pitfalls: ["Instant discounting as reflex response to price pushback", "Arguing the objection away instead of exploring it"]
        }
      ]
    },
    {
      id: "retention-expansion",
      label: "Retention & Expansion",
      procedures: [
        {
          id: "churn-risk-signal-system",
          title: "Build a churn-risk signal system",
          level: "advanced", minutes: 35,
          description: "Leading indicators, health scores, and intervention triggers acting before renewal panic.",
          tags: ["churn", "customer-success", "retention"],
          steps: [
            "Interview churned customers; extract 5 leading behavioral signals",
            "Weight signals into transparent health score (usage depth, support tone, champions leaving)",
            "Set intervention playbook per risk tier with owners and SLAs",
            "Trigger executive outreach on champion-departure signal specifically",
            "Measure save-rate per intervention type; prune theater",
            "Feed outcomes back into score weights quarterly"
          ],
          pitfalls: ["Black-box scores CSMs don't trust or use", "Renewal-week scramble replacing year-round signals"]
        },
        {
          id: "qbr-that-expands",
          title: "Run business reviews that expand accounts",
          level: "intermediate", minutes: 30,
          description: "Value-delivery narratives with customer metrics turning renewals into growth conversations.",
          tags: ["qbr", "expansion", "account-management"],
          steps: [
            "Open with THEIR goals restated; measure everything against them",
            "Show adoption vs success benchmarks with concrete usage stories",
            "Quantify delivered value in customer's own KPIs, co-owned numbers",
            "Surface untapped use cases mapped to unmet goals",
            "Propose next-quarter success plan requiring specific commitments",
            "Multi-thread: new stakeholders present every review"
          ],
          pitfalls: ["Feature-update decks nobody reads", "Single-threaded relationships evaporating on champion exit"]
        }
      ]
    }
  ]
};
