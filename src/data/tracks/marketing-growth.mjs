export const track = {
  id: "marketing-growth",
  label: "Marketing & Growth",
  icon: "📣",
  gradient: "from-orange-400 via-amber-400 to-yellow-300",
  ring: "ring-orange-500/30",
  text: "text-orange-400",
  blurb: "Positioning, content engines, lifecycle funnels, and campaign measurement that compounds.",
  roles: ["Growth Marketers", "Content Strategists", "Lifecycle Marketers", "Founders"],
  domains: [
    {
      id: "positioning-content",
      label: "Positioning & Content",
      procedures: [
        {
          id: "messaging-hierarchy",
          title: "Build a messaging hierarchy from customer language",
          level: "intermediate", minutes: 35,
          description: "One-liner → proof pillars → objection handling, mined verbatim from real buyer words.",
          tags: ["messaging", "positioning", "copywriting"],
          steps: [
            "Harvest verbatims: sales calls, reviews, support tickets, churn surveys",
            "Cluster by desired outcome, not feature vocabulary",
            "Draft one-liner: for WHO who struggle with WHAT, we deliver OUTCOME unlike ALTERNATIVE",
            "Support with three proof pillars, each backed by evidence artifact",
            "List top objections with honest counters — including when NOT to buy",
            "Test on 5 cold visitors: can they repeat what you do in their words?"
          ],
          pitfalls: ["Internal jargon customers never use", "Claim soup: nine benefits competing for the headline"]
        },
        {
          id: "content-engine-compounding",
          title: "Run a content engine that compounds",
          level: "intermediate", minutes: 40,
          description: "Topic clusters, refresh cycles, and distribution loops turning articles into an asset base.",
          tags: ["content-marketing", "seo", "distribution"],
          steps: [
            "Map pillar topics to buyer journey stages; own 2-3 pillars deeply",
            "Interlink cluster content to pillar hubs deliberately",
            "Ship on cadence you can sustain for a year, not a sprint month",
            "Distribute each piece 5 ways: newsletter, socials, communities, repurposed clips, syndication",
            "Refresh top decile performers quarterly instead of always creating new",
            "Track assisted conversions, not last-click vanity"
          ],
          pitfalls: ["Publishing into the void without distribution loops", "Chasing volume until topical authority dilutes"]
        }
      ]
    },
    {
      id: "lifecycle-campaigns",
      label: "Lifecycle & Campaigns",
      procedures: [
        {
          id: "lifecycle-email-flows",
          title: "Architect lifecycle email flows that respect inboxes",
          level: "intermediate", minutes: 35,
          description: "Onboarding, activation, retention, win-back sequences triggered by behavior not calendars alone.",
          tags: ["email", "lifecycle", "automation"],
          steps: [
            "Map triggers to behavioral milestones (signed up, invited team, went quiet)",
            "Onboarding sequence drives to ONE activation action per email",
            "Branch content by role/use-case data already collected",
            "Sunset rules: disengage non-openers after N touches to protect deliverability",
            "Win-back offers differ from onboarding offers — test separately",
            "Review flow metrics monthly: open→click→conversion per step"
          ],
          pitfalls: ["Daily nurture cadence training people to unsubscribe", "One generic drip pretending all users are identical"]
        },
        {
          id: "campaign-measurement-plan",
          title: "Design campaign measurement before launching",
          level: "foundation", minutes: 30,
          description: "Hypothesis, KPI tree, tracking implementation, and readout date committed upfront.",
          tags: ["analytics", "campaigns", "attribution"],
          steps: [
            "Write hypothesis: audience X + message Y through channel Z yields metric delta",
            "Define primary KPI and guardrails (unsubscribe rate, CAC ceiling)",
            "Implement UTM taxonomy documented centrally — no freeform tags",
            "Verify tracking fires correctly BEFORE spend starts",
            "Set minimum sample/duration for any conclusion; note it in calendar",
            "Readout includes confidence statement and next-test proposal"
          ],
          pitfalls: ["Post-hoc channel credit claimed from correlation", "Tracking broken discovered at readout time"]
        }
      ]
    }
  ]
};
