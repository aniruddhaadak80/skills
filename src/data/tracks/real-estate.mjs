export const track = {
  id: "real-estate",
  label: "Real Estate",
  icon: "🏘️",
  gradient: "from-lime-600 via-emerald-500 to-teal-400",
  ring: "ring-lime-500/30",
  text: "text-lime-400",
  blurb: "Deal analysis, listing craft, market comps, and client representation done ethically.",
  roles: ["Agents", "Investors", "Property Managers", "Analysts"],
  domains: [
    {
      id: "deal-analysis",
      label: "Deal Analysis",
      procedures: [
        {
          id: "property-underwriting-checklist",
          title: "Underwrite a rental property in one pass",
          level: "intermediate", minutes: 40,
          description: "Income, expense reality, financing, and downside cases producing a defensible go/no-go.",
          tags: ["underwriting", "rentals", "analysis"],
          steps: [
            "Verify income with leases + market rents, not seller pro-forma",
            "Budget expenses honestly: taxes, insurance, capex reserves, vacancy allowance",
            "Model financing at TODAY's rates plus 100bps stress",
            "Compute cash-flow after ALL costs; ignore appreciation in year-1 math",
            "Run downside case: vacancy doubles, major capex hits — survivable?",
            "Write investment thesis memo; if you can't defend it, pass"
          ],
          pitfalls: ["Seller pro-formas accepted as underwriting", "Capex 'surprises' that any roof/HVAC inspection predicted"]
        },
        {
          id: "comps-analysis-rigorous",
          title: "Pull comps that actually justify price",
          level: "foundation", minutes: 25,
          description: "Comparable selection by similarity and recency, adjusted transparently.",
          tags: ["comps", "valuation", "market"],
          steps: [
            "Filter to same submarket within 0.5mi and 90 days where inventory allows",
            "Match on bed/bath/GLA/lot first; style second",
            "Adjust for condition differences with documented per-item estimates",
            "Drop outlier sales unexplained by visible factors",
            "Weight closest-and-newest heaviest; show the grid",
            "State confidence range; thin comp sets widen it honestly"
          ],
          pitfalls: ["Cherry-picked high comps justifying wishful list prices", "Foreclosures mixed silently into arms-length sets"]
        },
        {
          slug: "renovation-roi-triage",
          id: "reno-roi",
          title: "Triage renovations by ROI before spending",
          level: "intermediate", minutes: 30,
          description: "Cost-vs-value ranking separating value-adding work from personal-preference spending.",
          tags: ["renovation", "roi", "flipping"],
          steps: [
            "Fix safety/functionality first: they gate every sale regardless of ROI tables",
            "Rank cosmetic work by local cost-vs-value report data",
            "Get three contractor bids minimum; verify licenses and timelines",
            "Hold a 15% contingency on every scope, non-negotiable",
            "Stage the two rooms photography sells: kitchen and primary bath decisions",
            "Track actuals vs estimate per line for your next deal's calibration"
          ],
          pitfalls: ["Over-improving past neighborhood ceiling price", "Scope creep via 'while we're at it' change orders"]
        }
      ]
    },
    {
      id: "clients-listings",
      label: "Clients & Listings",
      procedures: [
        {
          id: "listing-copy-that-sells",
          title: "Write listings buyers actually click",
          level: "foundation", minutes: 20,
          description: "Lead with lifestyle outcome, structure scannable facts, and never oversell the flaws away.",
          tags: ["copywriting", "listings", "marketing"],
          steps: [
            "Headline = strongest verifiable hook (view, lot, layout) not 'stunning'",
            "First paragraph paints morning/evening living there specifically",
            "Facts block scannable: beds/baths/GLA/year/lot/parking up top",
            "Replace adjectives with evidence ('granite' beats 'luxurious')",
            "Disclose known issues plainly — trust converts better than surprise",
            "Pair every room photo order with matching copy sequence"
          ],
          pitfalls: ["Adjective soup saying nothing checkable", "Hiding flaws that inspections surface anyway, torching deals"]
        },
        {
          id: "buyer-representation-discipline",
          title: "Represent buyers with fiduciary discipline",
          level: "intermediate", minutes: 30,
          description: "Needs discovery, honest property assessments, and negotiation advocacy documented properly.",
          tags: ["buyers", "ethics", "negotiation"],
          steps: [
            "Discovery beyond budget: timeline, must-haves, deal-breakers, decision process",
            "Preview properties against THEIR criteria; reject mismatches proactively",
            "Point out cons as readily as pros — reputation compounds over decades",
            "Prepare offers from comps YOU verified, not asking-price anchoring",
            "Negotiate repairs with contractor quotes attached, not vibes",
            "Document advice given; agency means records"
          ],
          pitfalls: ["Steering toward own listings over fit", "Waiving inspections without explaining specific risks"]
        }
      ]
    }
  ]
};
