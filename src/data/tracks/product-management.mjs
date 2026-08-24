export const track = {
  id: "product-management",
  label: "Product Management",
  icon: "📋",
  gradient: "from-amber-500 via-yellow-500 to-lime-400",
  ring: "ring-amber-500/30",
  text: "text-amber-400",
  blurb: "Discovery, prioritization, specs, and launch craft that turn insight into shipped value.",
  roles: ["Product Managers", "Product Owners", "Founders", "Product Analysts"],
  domains: [
    {
      id: "discovery",
      label: "Discovery & Research",
      procedures: [
        {
          id: "customer-interviews",
          title: "Interview customers without leading them",
          level: "foundation", minutes: 30,
          description: "Past-behavior questions, silence discipline, and synthesis habits that surface real problems.",
          tags: ["discovery", "user-research", "interviews"],
          steps: [
            "Recruit for recent relevant experience ('last time you…'), not demographics",
            "Ask about past behavior and specific episodes; avoid hypotheticals",
            "Follow the 'why' chain five deep past stated solutions",
            "Embrace silence after answers; people fill it with truth",
            "Take verbatim quotes; paraphrase kills signal",
            "Synthesize within 24h: patterns, surprises, verbatims, next questions"
          ],
          pitfalls: ["Pitching your idea mid-interview for validation", "Ten interviews all confirming the loudest customer"]
        },
        {
          id: "opportunity-sizing",
          title: "Size opportunities honestly",
          level: "intermediate", minutes: 30,
          description: "Bottom-up TAM math with explicit assumptions anyone can audit.",
          tags: ["strategy", "market-sizing"],
          steps: [
            "Build bottom-up: segments × reach rate × conversion × price",
            "List every assumption with source and confidence rating",
            "Cross-check with one independent method (top-down or value-based)",
            "Present ranges with sensitivity on the two shakiest assumptions",
            "Separate 'market exists' from 'we can reach them' explicitly",
            "Date-stamp the analysis; markets move"
          ],
          pitfalls: ["1% of China logic presented as sizing", "Confusing total market with reachable segment"]
        }
      ]
    },
    {
      id: "prioritization-roadmap",
      label: "Prioritization & Roadmaps",
      procedures: [
        {
          id: "roadmap-outcomes",
          title: "Build outcome-based roadmaps",
          level: "intermediate", minutes: 35,
          description: "Communicate problems and metrics per quarter, leaving solution space for teams.",
          tags: ["roadmap", "strategy", "okrs"],
          steps: [
            "Structure by quarter → outcome metric → problem statements, not feature lists",
            "Attach each bet to a company-level objective explicitly",
            "Mark confidence: now/next/later with evidence tags",
            "Reserve ~20% capacity for unplanned learning and debt",
            "Review monthly against leading indicators; kill zombie bets",
            "Share externally-safe version with customers to reset expectations"
          ],
          pitfalls: ["Gantt charts of features pretending certainty", "Roadmap as promise archive nobody revisits"]
        },
        {
          id: "prioritization-framework-fit",
          title: "Choose a prioritization framework that fits your stage",
          level: "foundation", minutes: 25,
          description: "RICE vs cost-of-delay vs simple-now-list: pick per team maturity and decision cadence.",
          tags: ["prioritization", "frameworks"],
          steps: [
            "Inventory current backlog candidates with owners attached",
            "Early stage: rank by founder judgment + one metric; speed beats ceremony",
            "Scale stage: RICE with calibrated effort from eng estimates",
            "Platform investments: cost-of-delay thinking over point scores",
            "Cap WIP explicitly; priorities without capacity are fiction",
            "Recalibrate scores quarterly against realized outcomes"
          ],
          pitfalls: ["Precision theater: scores to three decimals on guesses", "Framework outputs ignored when HiPPO speaks"]
        }
      ]
    },
    {
      id: "specs-launch",
      label: "Specs & Launch",
      procedures: [
        {
          id: "prd-one-page",
          title: "Write a one-page PRD engineers love",
          level: "foundation", minutes: 40,
          description: "Problem, users, success metrics, scope fences, and open questions on one page.",
          tags: ["prd", "writing", "spec"],
          steps: [
            "Lead with problem statement and target user's current workaround",
            "Define success metrics with baseline numbers and targets",
            "List in-scope v1 and explicitly out-of-scope items",
            "Specify edge cases and non-functional requirements (perf, a11y, privacy)",
            "Keep an open-questions section with owners and due dates",
            "Review with engineering before finalizing; incorporate feasibility push-back"
          ],
          pitfalls: ["Solution mockups posing as requirements", "Success metrics undefined until post-launch retro"]
        },
        {
          id: "launch-checklist",
          title: "Run launches with a go/no-go checklist",
          level: "intermediate", minutes: 30,
          description: "Coordinated release across support, marketing, legal, and engineering with rollback plans.",
          tags: ["launch", "go-to-market", "coordination"],
          steps: [
            "Freeze scope two weeks out; bug-fix-only policy",
            "Verify analytics events fire correctly in staging AND preview",
            "Support briefed with FAQ, known issues, escalation path",
            "Legal/privacy sign-off for anything touching personal data",
            "Rollback plan rehearsed: flags off or previous version restore",
            "Schedule T+1 and T+7 metric reviews before celebrating"
          ],
          pitfalls: ["Analytics broken on day one making results unreadable", "Support discovering features from user tickets"]
        }
      ]
    }
  ]
};
