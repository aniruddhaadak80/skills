export const track = {
  id: "freelance-business",
  label: "Freelance & Business",
  icon: "💼",
  gradient: "from-purple-500 via-pink-500 to-rose-500",
  ring: "ring-purple-500/30",
  text: "text-purple-400",
  blurb: "Proposals, pricing, client management, and contracts for independent professionals.",
  roles: ["Freelancers", "Consultants", "Agencies", "Independent Developers"],
  domains: [
    {
      id: "winning-clients",
      label: "Winning Clients",
      procedures: [
        {
          id: "proposal-that-closes",
          title: "Write proposals that close without discounting",
          level: "intermediate", minutes: 35,
          description: "Outcome-first structure, option pricing, and risk reversal moving decisions forward.",
          tags: ["proposals", "sales", "pricing"],
          steps: [
            "Mirror their words for problem statement before any solution talk",
            "Present outcome and business impact, not deliverable lists",
            "Offer three options anchoring middle as intended choice",
            "State price confidently after value; never apologize in writing",
            "Include scope fences and change-request process explicitly",
            "Set decision deadline with reason; follow up twice max"
          ],
          pitfalls: ["Hourly itemization inviting line-item negotiation", "Free strategy dumped into RFP replies"]
        },
        {
          id: "positioning-niche",
          title: "Position into a profitable niche",
          level: "foundation", minutes: 30,
          description: "Specific expertise × audience × outcome claims commanding premium rates.",
          tags: ["positioning", "branding", "strategy"],
          steps: [
            "Fill formula: 'I help [audience] achieve [outcome] through [means]'",
            "Validate niche pays: find three competitors charging well already",
            "Rewrite profiles/bio to niche voice everywhere consistently",
            "Collect proof artifacts: case studies, before/after metrics",
            "Publish niche-specific content answering buyer questions",
            "Review annually; niches mature and shift"
          ],
          pitfalls: ["Generalist positioning competing on price alone", "Niche picked where YOU like work but buyers don't pay"]
        },
        {
          slug: "freelance-scoping",
          id: "project-scoping",
          title: "Scope projects clearly",
          level: "intermediate", minutes: 35,
          description: "Scopes and statements of work that fix the outcome, the deliverables, the assumptions, and the exclusions before the work starts, so gaps never become arguments. Use when writing an estimate, a scope, or a statement of work.",
          tags: ["scope", "contracts", "freelance"],
          steps: [
            "Define the outcome the client is buying in one sentence, then list only the deliverables that prove that outcome was delivered",
            "Write the assumptions as explicit statements — the client provides the data by day three — so a miss becomes a known trigger instead of an argument",
            "List the exclusions explicitly, because what is not included settles more disputes than what is",
            "Attach a delivery calendar with dates, review windows, and what a client delay does to each downstream date",
            "Name the change process in the document: how a request gets priced, who approves it, and how the timeline moves",
            "Get the client to restate the scope in their own words in writing before you start, because silence here becomes a dispute later"
          ],
          pitfalls: [
            "Scoping by listing tasks when the client is buying an outcome, then getting held to the task list",
            "Leaving client responsibilities out, so their delay surfaces later as your missed deadline"
          ],
          kpis: ["Every engagement starts with a written scope the client restated in their own words", "Zero projects started without documented exclusions", "Change requests priced and approved before work starts, not invoiced after"]
        }
      ]
    },
    {
      id: "client-delivery",
      label: "Client Delivery",
      procedures: [
        {
          id: "scope-change-control",
          title: "Control scope creep professionally",
          level: "intermediate", minutes: 25,
          description: "Change requests, written confirmations, and tradeoff framing protecting margins and relationships.",
          tags: ["scope", "contracts", "communication"],
          steps: [
            "SOW lists explicit exclusions, not just inclusions",
            "Log every 'small favor' request in a visible tracker",
            "Respond to creep with options: add budget, swap scope, or phase later",
            "Confirm any verbal changes in same-day recap email",
            "Re-baseline timeline visibly when scope changes materially",
            "Debrief post-project: where creep entered, plug that door"
          ],
          pitfalls: ["Absorbing 'quick fixes' until resentment explodes", "Change requests raised at invoice time"]
        },
        {
          id: "pricing-for-value",
          title: "Price on value with floor discipline",
          level: "advanced", minutes: 30,
          description: "Rate math from costs + target income, value anchors, and walk-away floors.",
          tags: ["pricing", "rates", "negotiation"],
          steps: [
            "Compute cost floor: expenses + taxes + non-billable time ÷ billable hours",
            "Research market band for your niche's outcomes, not hours",
            "Anchor to value created: revenue gained or cost removed estimates",
            "Raise rates each time pipeline exceeds capacity sustainably",
            "Never discount price; reduce scope instead when pressured",
            "Track effective hourly rate per project; prune loss leaders"
          ],
          pitfalls: ["Competitor-undercutting spirals to unsustainability", "Senior expertise priced off junior hour tables"]
        }
      ]
    }
  ]
};
