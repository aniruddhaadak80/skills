export const track = {
  id: "food-beverage",
  label: "Food & Beverage Ops",
  icon: "🍽️",
  gradient: "from-orange-500 via-red-400 to-amber-400",
  ring: "ring-orange-500/30",
  text: "text-orange-400",
  blurb: "Kitchen consistency, food safety compliance, menu engineering, and service flow.",
  roles: ["Chefs", "F&B Managers", "Restaurant Owners", "Catering Leads"],
  domains: [
    {
      id: "kitchen-consistency",
      label: "Kitchen Consistency",
      procedures: [
        {
          id: "recipe-standardization",
          title: "Standardize recipes so dish #1000 equals dish #1",
          level: "foundation", minutes: 30,
          description: "Weighted specs, plating photos, and prep par levels making quality independent of who cooks.",
          tags: ["recipes", "consistency", "kitchen"],
          steps: [
            "Spec every recipe by WEIGHT, not volume; include yields and waste factors",
            "Photograph the plate from guest's view; annotate components clockwise",
            "Define prep par levels per station per daypart",
            "Cost each recipe precisely including garnish and oil absorption",
            "Blind taste-test against spec monthly across shifts",
            "Version recipes like code: change log with taster sign-off"
          ],
          pitfalls: ['"A pinch" specs dying with the chef who wrote them', "Photos of impossible styling no line cook can replicate at rush"]
        },
        {
          id: "food-safety-log-discipline",
          title: "Run food safety logs inspectors respect",
          level: "intermediate", minutes: 25,
          description: "Temperature logs, cooling records, and corrective actions forming an audit-ready HACCP trail.",
          tags: ["food-safety", "haccp", "compliance"],
          steps: [
            "Map critical control points per menu; log temps at defined frequencies",
            "Cooling records show time/temp curves meeting standards, with probe placement noted",
            "Corrective actions documented WHEN taken, signed by who took them",
            "Calibrate thermometers weekly with ice-point method, logged",
            "Rehearse the inspector walkthrough quarterly using your own logs",
            "Digital or paper — one system of record, no shadow clipboards"
          ],
          pitfalls: ["Backfilled logs that contradict delivery timestamps", "Same thermometer reading 10°F off for months"]
        },
        {
          id: "menu-engineering-cycle",
          title: "Engineer the menu on data, not vibes",
          level: "intermediate", minutes: 40,
          description: "Popularity × margin matrix driving placement, pricing, and cull decisions each season.",
          tags: ["menu", "pricing", "profitability"],
          steps: [
            "Classify items: stars (high-high), plowhorses (popular-low margin), puzzles, dogs",
            "Reposition stars to golden zones; rename/rephoto puzzles before cutting",
            "Test price moves ±5% on plowhorses before dramatic changes",
            "Cull dogs ruthlessly but keep one 'traffic anchor' if it drives visits",
            "Watch ingredient crossover — cutting one dish may strand inventory",
            "Repeat analysis every season with same metrics for trend honesty"
          ],
          pitfalls: ["Menu redesigns driven by chef boredom instead of matrix", "Margin math ignoring waste and prep labor"]
        }
      ]
    },
    {
      id: "service-flow",
      label: "Service Flow",
      procedures: [
        {
          id: "rush-prep-mise",
          title: "Prepare for rushes with mise discipline",
          level: "foundation", minutes: 20,
          description: "Forecast-based prep lists, station maps, and recovery roles turning surges into choreography.",
          tags: ["operations", "prep", "rush"],
          steps: [
            "Prep from reservation/forecast data + same-day-last-year, written as station lists",
            "Par-check backups for the three fastest-moving items before doors",
            "Assign a float role per shift whose only job is bottlenecks",
            "86-list communicated verbally AND posted; update instantly",
            "Debrief after every rush: what ran out, what died on the pass",
            "Track prep waste vs stockouts; both are planning failures"
          ],
          pitfalls: ["Prepping to storage capacity instead of forecast", "Float role evaporating into regular tasks at first pressure"]
        },
        {
          id: "allergen-communication",
          title: "Handle allergen requests safely end to end",
          level: "advanced", minutes: 20,
          description: "Server-kitchen-ticket-expo chain of custody making allergy meals trustworthy.",
          tags: ["allergens", "safety", "service"],
          steps: [
            "Servers capture allergen + severity verbatim, repeat back to guest",
            "Verbal handoff PLUS ticket flag to kitchen; expo confirms both",
            "Dedicated pans/utensils for severe allergies — cross-contact is the killer",
            "Manager spot-verifies allergy plates during service",
            "Deliver allergy plates personally with verbal confirmation",
            "Log every allergy ticket; near-misses reviewed weekly without blame"
          ],
          pitfalls: ["'I think it has nuts in it' answers reaching guests", "Same fryer for gluten-free and everything else"]
        }
      ]
    }
  ]
};
