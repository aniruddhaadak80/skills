export const track = {
  id: "hospitality-travel",
  label: "Hospitality & Travel",
  icon: "🏨",
  gradient: "from-amber-500 via-orange-400 to-yellow-300",
  ring: "ring-amber-500/30",
  text: "text-amber-400",
  blurb: "Guest experience craft, service recovery, itinerary design, and revenue-aware operations.",
  roles: ["Hotel & Restaurant Managers", "Travel Designers", "Guest Experience Teams"],
  domains: [
    {
      id: "guest-experience",
      label: "Guest Experience",
      procedures: [
        {
          id: "service-recovery-flow",
          title: "Turn service failures into loyalty",
          level: "intermediate", minutes: 25,
          description: "Fast acknowledgment, empowered staff, proportionate recovery, and follow-up converting complaints.",
          tags: ["service-recovery", "complaints", "loyalty"],
          steps: [
            "Acknowledge within minutes; speed matters more than perfection",
            "Empower frontline staff with recovery budget up to defined limits, no approvals needed",
            "Recover proportionately AND personally — handwritten beats generic upgrade",
            "Fix root cause before the guest departs when possible",
            "Follow up next day with named person, not survey blast",
            "Log failure taxonomy weekly; recurring classes get process fixes"
          ],
          pitfalls: ["Recovery slower than the original failure", "Empowerment rhetoric with approval queues in practice"]
        },
        {
          id: "itinerary-design-craft",
          title: "Design itineraries that feel effortless",
          level: "intermediate", minutes: 35,
          description: "Energy pacing, transfer buffers, and one anchor per day building trips travelers rave about.",
          tags: ["itineraries", "travel-design", "planning"],
          steps: [
            "One anchor experience per day; everything else supports it",
            "Respect jet lag and energy curves for first 48 hours especially",
            "Buffer transfers by measured local reality, not map estimates",
            "Pre-book the unmissable, leave afternoons flexible for weather/mood",
            "Include food logic near activities, not across town",
            "Deliver as scannable day cards with offline maps and confirmation numbers"
          ],
          pitfalls: ["Five 'highlights' per day exhausting everyone", "Tight connections built on best-case traffic"]
        },
        {
          id: "review-response-system",
          title: "Respond to reviews strategically",
          level: "foundation", minutes: 20,
          description: "Templates + genuine specifics turning public reviews into trust assets.",
          tags: ["reviews", "reputation", "communication"],
          steps: [
            "Respond to every review within 48h — positive ones too",
            "Negative: acknowledge specific issue, no excuses, state concrete fix done",
            "Positive: name the staff moment they mentioned; reinforce specifically",
            "Never argue facts publicly; take disputes offline with contact route",
            "Mine monthly themes into operations fixes; mention improvements later ('you asked, we changed')",
            "Track rating trend against response latency"
          ],
          pitfalls: ["Copy-paste replies visible from space", "Defensiveness on legitimate complaints going screenshot-viral"]
        }
      ]
    },
    {
      id: "revenue-operations",
      label: "Revenue Operations",
      procedures: [
        {
          id: "dynamic-pricing-basics",
          title: "Apply revenue management without alienating guests",
          level: "advanced", minutes: 40,
          description: "Demand-based pricing with fences, monitoring, and fairness optics protecting brand.",
          tags: ["pricing", "revenue-management", "hotels"],
          steps: [
            "Segment demand: business vs leisure vs event windows behave differently",
            "Set rate tiers with honest fence differences (flexibility, view, timing)",
            "Review pickup pace weekly against same-time-last-year and comp sets",
            "Adjust on leading indicators (search volume, booking pace), not panic",
            "Cap surge multiples; price gouging headlines outlast the revenue",
            "Post-mortem every high-demand window: captured vs left-on-table"
          ],
          pitfalls: ["Static pricing leaving peak revenue unfunded", "Loyalty members seeing worse rates than strangers"]
        },
        {
          id: "shift-briefing-ritual",
          title: "Run shift briefings that actually prepare teams",
          level: "foundation", minutes: 15,
          description: "Five-minute structured briefings covering arrivals, VIPs, issues, and focus metric.",
          tags: ["operations", "briefings", "teams"],
          steps: [
            "Same format daily: arrivals/VIPs, groups, known issues, yesterday's lesson, today's focus",
            "Name specific guests needing extra care with their context",
            "Surface maintenance/aesthetic issues visible to guests today",
            "One service focus theme per shift, not twelve",
            "Close with questions invited explicitly",
            "Rotate who leads so knowledge spreads beyond managers"
          ],
          pitfalls: ["Briefings becoming schedule-readings", "VIP context living only in the GM's head"]
        }
      ]
    }
  ]
};
