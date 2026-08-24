export const track = {
  id: "startup-founders",
  label: "Startup & Founders",
  icon: "🚀",
  gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
  ring: "ring-fuchsia-500/30",
  text: "text-fuchsia-400",
  blurb: "MVP shipping, validation, fundraising narratives, and early growth loops.",
  roles: ["Founders", "Indie Hackers", "Early Employees", "Solopreneurs"],
  domains: [
    {
      id: "validation-mvp",
      label: "Validation & MVP",
      procedures: [
        {
          id: "mvp-scope-cutting",
          title: "Cut MVP scope without cutting the point",
          level: "foundation", minutes: 25,
          description: "Identify the single riskiest assumption and build only what tests it.",
          tags: ["mvp", "lean", "scope"],
          steps: [
            "Write the riskiest assumption sentence: 'This works if…'",
            "List features; mark each as assumption-tester or decoration",
            "Cut decorations ruthlessly for v1 — even obvious-seeming ones",
            "Prefer concierge/manual versions over automation initially",
            "Define success signal BEFORE launch: threshold, timeframe, metric",
            "Timebox build to weeks not months; deadline forces clarity"
          ],
          pitfalls: ["Auth systems built before problem validation", "MVPs so minimal they cannot test the actual hypothesis"]
        },
        {
          id: "problem-validation-signals",
          title: "Read validation signals honestly",
          level: "intermediate", minutes: 25,
          description: "Distinguish politeness from pull using behavior-based criteria.",
          tags: ["validation", "customers", "signals"],
          steps: [
            "Count actions, not compliments: pre-orders, waitlist signups, LOIs",
            "Weight paid experiments over free interest every time",
            "Track unsolicited follow-ups; pull shows up unprompted",
            "Interview churned/declined prospects more than fans",
            "Set kill criteria upfront to fight sunk-cost bias",
            "Review signal log weekly; patterns beat anecdotes"
          ],
          pitfalls: ["Mom-test failures: friends saying it's nice", "Interpreting survey enthusiasm as demand"]
        }
      ]
    },
    {
      id: "growth-fundraising",
      label: "Growth & Fundraising",
      procedures: [
        {
          id: "founder-narrative-deck",
          title: "Build a founder narrative deck",
          level: "intermediate", minutes: 40,
          description: "12 slides answering investor questions in order: why now, why you, why this market.",
          tags: ["pitch-deck", "fundraising", "narrative"],
          steps: [
            "Slide order: problem, insight, solution, demo, market entry, business model, traction, team, ask",
            "Lead every slide with the headline takeaway sentence",
            "Traction slide uses honest numbers trending up, annotated spikes",
            "'Why now' needs a concrete shift: tech cost curve, regulation, behavior",
            "Ask slide: amount → milestones → runway math visible",
            "Appendix carries depth; main deck stays 12-15 slides"
          ],
          pitfalls: ["Feature tours instead of narrative arcs", "Vanity metrics (downloads) where revenue belongs"]
        },
        {
          id: "first-growth-loop",
          title: "Find your first repeatable growth loop",
          level: "advanced", minutes: 35,
          description: "One channel executed deeply beats five dabbling channels; instrument the loop end-to-end.",
          tags: ["growth", "marketing", "distribution"],
          steps: [
            "List candidate loops: SEO/content, communities, partnerships, referrals, PLU product hooks",
            "Pick one matching founder strengths + audience habitat",
            "Instrument full loop: touch → visit → signup → activation → share",
            "Run 4-week sprint with weekly output targets, review honestly",
            "Double down only when loop math shows compounding signs",
            "Kill or iterate; dabbling across channels is the failure mode"
          ],
          pitfalls: ["Channel-hopping weekly resetting all learning to zero", "Growth tactics before retention exists"]
        }
      ]
    }
  ]
};
