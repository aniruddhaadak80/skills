export const track = {
  id: "ecommerce-retail",
  label: "E-commerce & Retail",
  icon: "🛍️",
  gradient: "from-emerald-500 via-teal-400 to-cyan-400",
  ring: "ring-emerald-500/30",
  text: "text-emerald-300",
  blurb: "Storefront conversion, merchandising, inventory turns, and returns as a profit lever.",
  roles: ["E-commerce Managers", "Merchandisers", "Retail Operators", "DTC Founders"],
  domains: [
    {
      id: "conversion-merchandising",
      label: "Conversion & Merchandising",
      procedures: [
        {
          id: "pdp-conversion-audit",
          title: "Audit product pages for conversion leaks",
          level: "intermediate", minutes: 35,
          description: "Above-fold promise, objection handling, trust signals, and friction mapping per template.",
          tags: ["conversion", "pdp", "audit"],
          steps: [
            "Above fold answers: what is it, who's it for, why this one — in 3 seconds",
            "Gallery shows scale/use cases, not just studio angles",
            "Objections answered inline near decision points (sizing near size selector)",
            "Shipping/returns cost visible BEFORE checkout surprise",
            "Mobile-first scroll test: would YOU buy on a phone one-handed?",
            "Fix leaks by expected impact before running new traffic"
          ],
          pitfalls: ["Beautiful hero videos pushing buy-button below fold on mobile", "Return policy discovered at payment step"]
        },
        {
          id: "checkout-friction-strip",
          title: "Strip friction from checkout surgically",
          level: "advanced", minutes: 40,
          description: "Step-by-step abandonment analysis with field-level fixes and measured recovery rates.",
          tags: ["checkout", "funnel", "optimization"],
          steps: [
            "Funnel each step; identify the single worst drop-off first",
            "Kill every non-essential field; defer account creation to post-purchase",
            "Show total cost early; surprise shipping is the #1 killer",
            "Express payments (wallet) above manual card entry",
            "Error states say exactly what and where, preserving entered data",
            "A/B one change at a time with adequate sample before declaring victory"
          ],
          pitfalls: ["Redesigning everything simultaneously, learning nothing", "Guest checkout hidden behind tiny link"]
        }
      ]
    },
    {
      id: "inventory-returns",
      label: "Inventory & Returns",
      procedures: [
        {
          id: "stockout-prevention-calendar",
          title: "Prevent stockouts on heroes with a calendar rhythm",
          level: "intermediate", minutes: 25,
          description: "Velocity-based reorder points plus promo calendar awareness keeping best-sellers in stock.",
          tags: ["inventory", "planning", "stockouts"],
          steps: [
            "Compute reorder points from actual sales velocity + supplier lead times",
            "Overlay promo/email calendar onto stock projections BEFORE campaigns launch",
            "Flag heroes dipping below 3 weeks cover automatically weekly",
            "Negotiate safety consignment or faster lane for top-5 SKUs",
            "Post-mortem every stockout: revenue lost, what signal was missed",
            "Track in-stock rate as the north star over inventory turnover alone"
          ],
          pitfalls: ["Promotions scheduled against inventory nobody checked", "Reorder points set once at launch and forgotten"]
        },
        {
          id: "returns-profit-lever",
          title: "Turn returns from cost center into signal",
          level: "advanced", minutes: 35,
          description: "Reason-coded return analysis feeding product fixes, PDP content, and policy tuning.",
          tags: ["returns", "analytics", "reverse-logistics"],
          steps: [
            "Code every return reason at source; 'changed mind' hides fixable classes",
            "Correlate reasons with SKUs: sizing issues mean PDP/chart problem",
            "Publish honest sizing guidance from YOUR return data, not vendor charts",
            "Test keep-it refunds for low-value items vs reverse logistics cost",
            "Watch serial-returner patterns; act fairly but firmly",
            "Report prevented-returns value alongside refund costs monthly"
          ],
          pitfalls: ["Returns processed fast but never analyzed", "Free returns marketed without margin math done"]
        }
      ]
    }
  ]
};
