export const track = {
  id: "hospitality-fnb-wine",
  label: "Beverage & Bar Program",
  icon: "🍸",
  gradient: "from-rose-500 via-red-400 to-orange-400",
  ring: "ring-rose-500/30",
  text: "text-rose-300",
  blurb: "Bar program design, pour consistency, inventory control, and responsible service.",
  roles: ["Bar Managers", "Bartenders", "Beverage Directors", "Sommeliers"],
  domains: [
    {
      id: "bar-program",
      label: "Bar Program",
      procedures: [
        {
          id: "cocktail-spec-cards",
          title: "Build cocktail spec cards that survive staff turnover",
          level: "foundation", minutes: 25,
          description: "Weighted builds, glassware, garnish, and timing specs keeping drinks identical across bartenders.",
          tags: ["cocktails", "consistency", "specs"],
          steps: [
            "Spec in ml/oz by weight where possible; batch what you can legally and safely",
            "One card per drink: build order, technique, glass, garnish, target pour time",
            "Photo reference of finished drink at service lighting",
            "Cost per pour including waste factor; price to target margin band",
            "Blind taste across bartenders monthly; recalibrate palates",
            "Seasonal menu rotates; core classics stay frozen"
          ],
          pitfalls: ['"A splash" builds drifting per bartender', "Free-pouring without periodic jigger audits"]
        },
        {
          id: "bar-inventory-control",
          title: "Control bar inventory against shrinkage honestly",
          level: "intermediate", minutes: 35,
          description: "Counting rhythm, variance thresholds, and systems distinguishing theft from waste from error.",
          tags: ["inventory", "shrinkage", "control"],
          steps: [
            "Count by weight (scale) for spirits; eyeball counts hide 20% variance",
            "Set variance tolerance per category; investigate beyond threshold, not below",
            "Track comps/spills/waste separately with signatures — they're not mysteries",
            "Reconcile POS pours vs depletion weekly; patterns reveal causes",
            "Lock high-value bottles with par-level accountability per shift",
            "Never accuse on one cycle; trends plus evidence or nothing"
          ],
          pitfalls: ["Full-inventory counts only quarterly, variance forever mysterious", "Waste logging so punishing it goes underground"]
        },
        {
          id: "responsible-service-flow",
          title: "Run responsible service without killing hospitality",
          level: "advanced", minutes: 20,
          description: "Pace monitoring, water/food pacing tactics, and refusal scripts that preserve dignity.",
          tags: ["responsible-service", "safety", "compliance"],
          steps: [
            "Monitor pace per table/guest as a team responsibility, not one server's burden",
            "Slow service proactively: water refills, food suggestions, course spacing",
            "Refusal script ready: private, firm, offer alternatives, involve manager early",
            "Document incidents same-night factually for license protection",
            "Know your jurisdiction's cutoffs and transport-duty obligations cold",
            "Debrief near-misses to sharpen the team's shared radar"
          ],
          pitfalls: ["Nobody wanting to be the one who says stop", "Refusals delivered publicly turning safety into confrontation"]
        }
      ]
    }
  ]
};
