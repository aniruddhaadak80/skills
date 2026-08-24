export const EXTRA_DOMAINS = {
  "hospitality-travel": [
    {
      id: "loyalty-design",
      label: "Loyalty Design",
      procedures: [
        {
          id: "loyalty-program-basics",
          title: "Design loyalty programs guests actually use",
          level: "intermediate", minutes: 35,
          description: "Earn-burn balance, experiential rewards, and liability tracking beyond discount-card clichés.",
          tags: ["loyalty", "retention", "rewards"],
          steps: [
            "Reward frequency AND margin contribution, not spend alone",
            "Include experiential redemptions costing little but remembered forever",
            "Keep earn rules simple enough to explain in one sentence",
            "Track breakage honestly; runaway liability eventually bites",
            "Give members recognition moments money can't buy (upgrades at capacity)",
            "Measure member visit-frequency lift against matched non-members"
          ],
          pitfalls: ["Points so hard to redeem members treat program as marketing noise", "Discounting loyal customers into margin oblivion"]
        }
      ]
    }
  ],
  insurance: [
    {
      id: "claims-experience",
      label: "Claims Experience",
      procedures: [
        {
          id: "claims-comms-cadence",
          title: "Communicate through claims without radio silence",
          level: "foundation", minutes: 20,
          description: "Proactive status rhythms, plain-language updates, and expectation resets during long investigations.",
          tags: ["communication", "claims", "service"],
          steps: [
            "Set contact cadence at claim opening and keep it even with no news",
            "Plain-language status: what's done, what's pending, who owns next step",
            "Reset expectations BEFORE deadlines slip, never after",
            "One named owner per claim; handoffs announced personally",
            "Log every contact attempt; patterns feed process fixes",
            "Close with summary of what was paid, why, and how to dispute"
          ],
          pitfalls: ["Silence interpreted as denial driving complaint escalation", "Ownership lost in shift handoffs mid-investigation"]
        }
      ]
    }
  ],
  "freelance-business": [
    {
      id: "client-lifecycle",
      label: "Client Lifecycle",
      procedures: [
        {
          id: "client-onboarding-checklist",
          title: "Onboard clients like a product company",
          level: "foundation", minutes: 25,
          description: "Structured kickoff, access collection, comms rhythm, and success definition starting engagements right.",
          tags: ["onboarding", "process", "clients"],
          steps: [
            "Kickoff agenda: goals, stakeholders, decision process, comms channels",
            "Collect ALL accesses before start date via secure checklist",
            "Set weekly update template + response-time expectations mutually",
            "Define what 'done' means for phase one in writing",
            "Introduce them to your process doc; boundaries stated kindly",
            "30-day check comparing delivered vs promised explicitly"
          ],
          pitfalls: ["Week-one chaos from missing credentials and unclear owners", "Success criteria discovered at invoice time"]
        }
      ]
    }
  ],
  "technical-writing": [
    {
      id: "product-copy",
      label: "Product Copy",
      procedures: [
        {
          id: "microcopy-error-messages",
          title: "Write microcopy that helps instead of blames",
          level: "foundation", minutes: 20,
          description: "Error messages, empty states, and button labels engineered for user recovery.",
          tags: ["ux-writing", "errors", "microcopy"],
          steps: [
            "Error formula: what happened + why + what to do now — no blame words",
            "Buttons state outcomes ('Save draft') not vague verbs ('OK')",
            "Empty states teach: what will live here + how to fill it",
            "Never expose internal codes alone; translate for humans",
            "Keep strings short enough for translation expansion (+30%)",
            "Test copy with five users confused by something else entirely"
          ],
          pitfalls: ["'Something went wrong' as complete error communication", "Cute jokes at users' most frustrated moment"]
        }
      ]
    }
  ],
  "ux-research": [
    {
      id: "rapid-methods",
      label: "Rapid Methods",
      procedures: [
        {
          id: "guerrilla-usability-testing",
          title: "Run guerrilla usability tests that still count",
          level: "foundation", minutes: 20,
          description: "Fast hallway/café testing with tight tasks and honest limits about what the data supports.",
          tags: ["usability", "rapid-research", "testing"],
          steps: [
            "Test ONE flow with 5 participants; depth beats breadth here",
            "Script tasks identical for everyone; improvise probes only",
            "Time-box sessions to 10 minutes respecting volunteers",
            "Note severity immediately after each session while fresh",
            "Stop when three consecutive users succeed — you learned it",
            "Report as directional evidence, never statistical proof"
          ],
          pitfalls: ["Leading participants past obstacles to finish the sample", "Generalizing café demographics to your entire audience"]
        }
      ]
    }
  ]
};
