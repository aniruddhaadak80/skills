export const track = {
  id: "agriculture-agtech",
  label: "Agriculture & AgTech",
  icon: "🌾",
  gradient: "from-lime-500 via-green-500 to-emerald-400",
  ring: "ring-lime-500/30",
  text: "text-lime-300",
  blurb: "Crop planning, input stewardship, farm data, and sustainable intensification practice.",
  roles: ["Farm Managers", "Agronomists", "AgTech Builders", "Supply Sustainability Teams"],
  domains: [
    {
      id: "crop-planning",
      label: "Crop Planning",
      procedures: [
        {
          id: "rotation-plan-design",
          title: "Design crop rotations that build, not mine, soil",
          level: "intermediate", minutes: 35,
          description: "Diversity windows, pest-cycle breaks, and nutrient balancing across multi-year plans.",
          tags: ["rotation", "soil", "agronomy"],
          steps: [
            "Map fields with soil test history; group by capability not habit",
            "Sequence to break pest/disease cycles (host-free windows) per crop family",
            "Balance nutrient export: legumes precede high-N demand crops",
            "Include cover crops where windows allow; quantify biomass goals",
            "Plan machinery/labor feasibility across the rotation honestly",
            "Review yields and soil organic trends annually against plan intent"
          ],
          pitfalls: ["Economics of one season quietly collapsing rotation diversity", "Cover crops seeded without termination logistics planned"]
        },
        {
          id: "input-stewardship-records",
          title: "Steward inputs with application records that protect you",
          level: "foundation", minutes: 25,
          description: "Label-compliant applications, buffer respect, and complete traceability from purchase to harvest.",
          tags: ["inputs", "compliance", "traceability"],
          steps: [
            "Read the label as law: rates, REI/PHI, buffers recorded before purchase fits use",
            "Log every application: product, rate, area, conditions, operator, equipment",
            "Calibrate sprayers on schedule; keep calibration certificates",
            "Respect pre-harvest intervals in scheduling — harvest plan checks PHI automatically",
            "Store records ≥ regulatory minimums, backed up offsite",
            "Buyer/residue questionnaires answered FROM records, not memory"
          ],
          pitfalls: ["PHI violations discovered by buyers' residue tests", "Records reconstructed 'from memory' before audits"]
        }
      ]
    },
    {
      id: "farm-data-tech",
      label: "Farm Data & Tech",
      procedures: [
        {
          id: "yield-map-analysis",
          title: "Analyze yield maps without fooling yourself",
          level: "advanced", minutes: 35,
          description: "Cleaning sensor artifacts, multi-year patterns, and trial-backed decisions from precision data.",
          tags: ["precision-ag", "data", "analysis"],
          steps: [
            "Clean yield monitor data: delays, overlaps, moisture sensor calibration drift",
            "Normalize across years by relative performance within hybrid/variety",
            "Look for stable low/high zones across ≥3 seasons before acting on zones",
            "Validate one management change with strip trials, not whole-field swings",
            "Keep agronomic interpretation ahead of technology purchases",
            "Archive raw data; processing methods improve but originals are irreplaceable"
          ],
          pitfalls: ["Single-season maps driving permanent zone investments", "Moisture calibration errors masquerading as yield differences"]
        },
        {
          id: "water-scheduling-efficiency",
          title: "Schedule irrigation on data instead of habit",
          level: "intermediate", minutes: 30,
          description: "Soil moisture sensing, evapotranspiration budgets, and efficiency tracking protecting both yield and water rights.",
          tags: ["irrigation", "water", "efficiency"],
          steps: [
            "Place sensors by zone representativeness and root depth of the crop stage",
            "Budget water from ET references + crop coefficients, adjusted locally",
            "Define trigger thresholds per growth stage; document deviations",
            "Check distribution uniformity annually; fix the worst emitters first",
            "Record pumping hours vs applied depth; losses reveal leaks/scheduling gaps",
            "Season review: yield per ML as the efficiency headline"
          ],
          pitfalls: ["Irrigating to calendar regardless of rainfall reality", "Uniformity problems blamed on scheduling"]
        }
      ]
    }
  ]
};
