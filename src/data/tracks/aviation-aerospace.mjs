export const track = {
  id: "aviation-aerospace",
  label: "Aviation & Aerospace Ops",
  icon: "✈️",
  gradient: "from-blue-600 via-sky-500 to-cyan-300",
  ring: "ring-blue-500/30",
  text: "text-blue-300",
  blurb: "Flight operations discipline: checklists, crew resource management, SMS, and maintenance rigor.",
  roles: ["Pilots", "Flight Ops", "Safety Managers", "Maintenance Engineers", "Aviation PMs"],
  domains: [
    {
      id: "flight-discipline",
      label: "Flight Discipline",
      procedures: [
        {
          id: "checklist-culture",
          title: "Use checklists as culture, not compliance",
          level: "foundation", minutes: 25,
          description: "Challenge-response execution, no-interruption rules, and sterile cockpit below 10,000ft.",
          tags: ["checklists", "safety-culture", "crm"],
          steps: [
            "Execute challenge-response verbally: both pilots verify each item",
            "Any interruption restarts the checklist from the top — always",
            "Sterile cockpit below 10,000ft: operational talk only, no exceptions for VIPs",
            "Never memory-substitute flows for published checklist items",
            "Report checklist deviations in SMS without fear — data beats shame",
            "Update checklists through your change process when procedures change"
          ],
          pitfalls: ["Muscle-memory 'do-verify' skipping actual verification", "Checklist interrupted by ATC and never restarted"]
        },
        {
          id: "go-no-go-decision",
          title: "Decide go/no-go with structured risk gates",
          level: "intermediate", minutes: 30,
          description: "Personal minimums, IMSAFE self-check, and pre-defined abort criteria beating get-there-itis.",
          tags: ["decision-making", "risk", "weather"],
          steps: [
            "Complete IMSAFE: illness, medication, stress, alcohol, fatigue, eating",
            "Score mission against written personal minimums BEFORE looking at desire",
            "Identify the two strongest pressure sources pushing toward go; neutralize verbally",
            "Define abort/diversion criteria and alternate options in advance",
            "Brief the decision out loud — spoken reasoning catches flaws",
            "Post-flight: log decision quality, not just outcome"
          ],
          pitfalls: ["Minimums flexing downward with experience inflation", "Outcome bias teaching wrong lessons from lucky flights"]
        }
      ]
    },
    {
      id: "sms-maintenance",
      label: "SMS & Maintenance",
      procedures: [
        {
          id: "safety-report-flow",
          title: "Operate a just-culture safety reporting flow",
          level: "advanced", minutes: 35,
          description: "Confidential reporting, non-punitive classification, and visible fixes keeping the pipeline alive.",
          tags: ["sms", "just-culture", "reporting"],
          steps: [
            "Multiple reporting channels including truly anonymous option",
            "Classify events: human error (coach) / at-risk behavior (coach+remove temptation) / reckless (discipline)",
            "Acknowledge every report within 48h even if investigation pending",
            "Publish sanitized lessons learned widely — visibility drives future reports",
            "Track corrective actions to closure with named owners",
            "Measure leading indicators (reports filed) not just accident counts"
          ],
          pitfalls: ["Reports disappearing into voids, killing future candor", "Punishing honest error reports behind 'accountability' language"]
        },
        {
          id: "maintenance-error-defense",
          title: "Defend against maintenance error systematically",
          level: "intermediate", minutes: 30,
          description: "Task interruption protocols, independent inspections, and tool control closing classic error chains.",
          tags: ["maintenance", "human-factors", "quality"],
          steps: [
            "Interruption protocol: mark the task, never resume from memory (dirty-finger rule)",
            "Independent inspection required for critical/duplicate-inspection items",
            "Tool and hardware control: shadow boards + end-of-task reconciliation",
            "Record discrepancies in writing immediately; verbal-only handoffs forbidden",
            "Shift turnover via written log plus verbal walkthrough of open items",
            "Mine error reports yearly for training themes by task type"
          ],
          pitfalls: ["'Almost done' tasks resumed incorrectly after distraction", "Duplicate inspections signed by the person who did the work"]
        }
      ]
    }
  ]
};
