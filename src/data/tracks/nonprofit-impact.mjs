export const track = {
  id: "nonprofit-impact",
  label: "Nonprofit & Impact",
  icon: "🌍",
  gradient: "from-teal-600 via-green-500 to-lime-400",
  ring: "ring-teal-500/30",
  text: "text-teal-300",
  blurb: "Theory of change, donor stewardship, program measurement, and board effectiveness.",
  roles: ["Nonprofit Leaders", "Program Managers", "Fundraisers", "Board Members"],
  domains: [
    {
      id: "strategy-measurement",
      label: "Strategy & Measurement",
      procedures: [
        {
          id: "theory-of-change-map",
          title: "Map a theory of change stakeholders believe",
          level: "intermediate", minutes: 40,
          description: "Inputs to long-term outcomes with assumptions surfaced and testable, not poster decoration.",
          tags: ["theory-of-change", "strategy", "impact"],
          steps: [
            "Start from the long-term outcome in beneficiaries' terms, not activity counts",
            "Work backwards: preconditions required at each prior step",
            "State EVERY assumption explicitly with evidence strength rating",
            "Identify the riskiest assumption — that's your first evaluation target",
            "Define indicators per link, mixing output + outcome measures",
            "Review annually against reality; revise proudly, not reluctantly"
          ],
          pitfalls: ["Logic models listing activities while calling them outcomes", "Assumptions invisible until evaluation 'fails' mysteriously"]
        },
        {
          id: "impact-measurement-framework",
          title: "Measure impact without drowning programs",
          level: "advanced", minutes: 45,
          description: "Lightweight data collection embedded in delivery producing credible outcome claims.",
          tags: ["measurement", "m-and-e", "outcomes"],
          steps: [
            "Pick 5-8 indicators max tied to theory-of-change links",
            "Embed collection into existing touchpoints; separate surveys die",
            "Baseline before program contact wherever feasible",
            "Pair quantitative outcomes with two qualitative depth stories",
            "Report negative and null findings honestly — funders trust this",
            "Calculate cost-per-outcome once baseline exists; revisit yearly"
          ],
          pitfalls: ["Counting attendance as impact", "Data collected for funders never used by programs"]
        }
      ]
    },
    {
      id: "fundraising-governance",
      label: "Fundraising & Governance",
      procedures: [
        {
          id: "donor-stewardship-tiers",
          title: "Steward donors by relationship tier",
          level: "intermediate", minutes: 35,
          description: "Segmented thank-you speed, reporting rhythm, and upgrade paths treating donors as partners.",
          tags: ["donors", "stewardship", "fundraising"],
          steps: [
            "Thank within 48 hours for everyone; major gifts get a call from leadership",
            "Segment by capacity × affinity, not just last gift size",
            "Report impact BEFORE next ask, on a promised rhythm kept",
            "Invite mid-tier into insider experiences (site visits, briefings) deliberately",
            "Track second-gift conversion as the health metric that matters most",
            "Lapse analysis quarterly: what changed before giving stopped?"
          ],
          pitfalls: ["Silence between asks read as indifference", "Major donor treated identically to email-list donor"]
        },
        {
          id: "board-effectiveness-audit",
          title: "Audit board effectiveness honestly",
          level: "foundation", minutes: 30,
          description: "Roles, composition, meeting design, and give/get expectations aligned to actual strategy needs.",
          tags: ["governance", "boards", "leadership"],
          steps: [
            "Map current skills vs strategy needs (finance? legal? community voice?)",
            "Clarify fiduciary vs advisory roles in writing for every member",
            "Design meetings for decisions: consent agendas, pre-reads, one big question",
            "Set explicit give/get expectations asked at recruitment, revisited annually",
            "Run self-assessment yearly with anonymous input",
            "Recruit to gaps with real role descriptions, not warm-body fills"
          ],
          pitfalls: ["Boards micromanaging operations while skipping fiduciary duty", "Meeting time consumed by staff reports over decisions"]
        }
      ]
    }
  ]
};
