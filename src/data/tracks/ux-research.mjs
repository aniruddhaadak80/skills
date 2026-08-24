export const track = {
  id: "ux-research",
  label: "UX Research & Design",
  icon: "🧠",
  gradient: "from-sky-400 via-cyan-400 to-teal-300",
  ring: "ring-sky-500/30",
  text: "text-sky-400",
  blurb: "Usability studies, research synthesis, design systems thinking, and evidence-driven product design.",
  roles: ["UX Researchers", "Product Designers", "Design Leads", "Service Designers"],
  domains: [
    {
      id: "research-methods",
      label: "Research Methods",
      procedures: [
        {
          id: "usability-test-script",
          title: "Run usability tests that reveal truth",
          level: "foundation", minutes: 35,
          description: "Task-based sessions with neutral scripting, think-aloud discipline, and severity-rated findings.",
          tags: ["usability-testing", "user-research"],
          steps: [
            "Write tasks as goals ('pay this invoice'), never UI instructions ('click Billing')",
            "Pilot the script on a colleague; fix leading phrases",
            "Remind participants their failures are findings, not mistakes",
            "Probe silence: 'what are you thinking?' beats helping",
            "Rate issues post-session: severity × frequency, quotes attached",
            "Deliver top-5 ranked fixes within 48h while fresh"
          ],
          pitfalls: ["Demonstrating the flow 'just to save time' contaminating results", "Testing with teammates who know the product"]
        },
        {
          id: "survey-instrument-quality",
          title: "Write surveys without garbage-in",
          level: "intermediate", minutes: 30,
          description: "Question construction, ordering effects, and response-scale discipline producing analyzable data.",
          tags: ["surveys", "quantitative-research"],
          steps: [
            "Draft research questions first; every item maps to one",
            "One idea per question; kill double-barrels ruthlessly",
            "Balanced scales with labeled midpoints; avoid agree-only sets",
            "Randomize option order where position bias lurks",
            "Add one attention-check and one open-ended for voice",
            "Pilot n=10, inspect distributions and timing before full send"
          ],
          pitfalls: ["Leading questions collecting confirmation, not data", "Ten-point scales nobody can meaningfully differentiate"]
        },
        {
          id: "synthesis-affinity",
          title: "Synthesize research without bias collapse",
          level: "advanced", minutes: 40,
          description: "Affinity mapping with evidence tagging separating observation from interpretation.",
          tags: ["synthesis", "analysis", "workshop"],
          steps: [
            "Extract observations verbatim onto atomic notes with source refs",
            "Cluster by pattern, NOT by person or session order",
            "Name clusters descriptively before interpretively",
            "Tag insight strength: single-source vs multi-user convergence",
            "Separate insights from recommendations explicitly",
            "Store the map; future decisions cite evidence lineage"
          ],
          pitfalls: ["Loudest stakeholder's pet theory shaping clusters", "Insights so general they justify any decision"]
        }
      ]
    },
    {
      id: "design-practice",
      label: "Design Practice",
      procedures: [
        {
          id: "design-review-run",
          title: "Run design reviews that improve work",
          level: "intermediate", minutes: 25,
          description: "Structured critique rituals: intent first, questions before solutions, owner decides.",
          tags: ["critique", "collaboration", "design-process"],
          steps: [
            "Designer opens with context, constraint, and specific feedback asks",
            "Reviewers describe observed effects before proposing changes",
            "Questions outnumber statements; 'what if' over 'you should'",
            "Timebox per artifact; park tangents visibly",
            "Owner records decisions and explicitly defers or accepts each thread",
            "Follow up next review on prior feedback resolution"
          ],
          pitfalls: ["HiPPO redesigns announced as feedback", "Reviews becoming taste debates without user grounding"]
        },
        {
          id: "journey-mapping-service",
          title: "Map journeys across service touchpoints",
          level: "intermediate", minutes: 40,
          description: "Current-state journey maps exposing emotional lows and operational handoff failures.",
          tags: ["journey-mapping", "service-design"],
          steps: [
            "Pick ONE persona + scenario with real data behind it",
            "Lay stages by user language, not internal process names",
            "Per stage: actions, thoughts, emotions curve, backend actors",
            "Mark handoffs between teams — pain concentrates there",
            "Quantify lows with support tickets/interviews evidence",
            "Prioritize fixes at emotion valleys × business impact"
          ],
          pitfalls: ["Idealized future-state maps pretending current pain away", "Maps as wall art never revisited"]
        }
      ]
    }
  ]
};
