export const track = {
  id: "veterinary-medicine",
  label: "Veterinary Medicine",
  icon: "🐾",
  gradient: "from-green-600 via-teal-500 to-cyan-400",
  ring: "ring-green-500/30",
  text: "text-green-300",
  blurb: "Clinical veterinary workflow, client communication, and practice operations with welfare first.",
  roles: ["Veterinarians", "Vet Techs", "Practice Managers", "Animal Welfare Teams"],
  domains: [
    {
      id: "clinical-vet",
      label: "Clinical Workflow",
      procedures: [
        {
          id: "vet-triage-protocol",
          title: "Triage patients by urgency, not arrival order",
          level: "foundation", minutes: 20,
          description: "Fast structured triage categories keeping emergencies ahead of the queue without chaos.",
          tags: ["triage", "emergencies", "workflow"],
          steps: [
            "Category 1 immediate: airway/breathing/circulation collapse, toxin ingestion, seizure",
            "Category 2 urgent: stable vitals but risk of deterioration within hours",
            "Category 3 routine can safely wait; communicate wait honestly with recheck plan",
            "Recheck waiting patients at defined intervals; deterioration upgrades category",
            "One team member owns the waiting room narrative during surges",
            "Log triage category vs outcome quarterly to validate thresholds"
          ],
          pitfalls: ["Owner volume overriding clinical urgency", "Category-2 patients forgotten in waiting rooms"]
        },
        {
          id: "estimate-consent-conversations",
          title: "Handle cost estimates and consent with clarity",
          level: "intermediate", minutes: 30,
          description: "Range-based estimates, decision tiers, and documented consent protecting animals and practices.",
          tags: ["clients", "ethics", "communication"],
          steps: [
            "Give ranges with what moves a case between low and high end",
            "Present tiered options (best / acceptable / palliative) without judgment",
            "Document declined diagnostics explicitly with risks explained",
            "Never let finances stay implicit — revisit if the case drifts from estimate",
            "Offer written take-home summaries of decisions and next steps",
            "Debrief emotionally hard conversations as a team"
          ],
          pitfalls: ["Estimates quoted as fixed prices then 'surprised'", "Judgment-laden delivery pushing clients away from care entirely"]
        }
      ]
    },
    {
      id: "practice-ops",
      label: "Practice Operations",
      procedures: [
        {
          id: "controlled-drug-log",
          title: "Keep controlled drug logs audit-proof",
          level: "advanced", minutes: 25,
          description: "Dual-signature logging, running balances, and discrepancy response meeting regulatory scrutiny.",
          tags: ["compliance", "controlled-substances", "records"],
          steps: [
            "Every in/out entry dual-signed with date, patient, dose, running balance",
            "Physical count reconciles against log balance on defined schedule, initialed",
            "Any discrepancy reported internally same day and investigated with timeline",
            "Access limited to licensed staff; keys/locks accountability assigned",
            "Wastage witnessed, recorded, and signed by both parties always",
            "Mock inspection annually using your own logs cold"
          ],
          pitfalls: ["Balance column arithmetic errors compounding unnoticed", "Single-person counts normalizing quiet diversion"]
        },
        {
          slug: "zoonotic-safety-briefing",
          id: "zoonotic-briefing",
          title: "Brief zoonotic and bite-prevention safety routinely",
          level: "foundation", minutes: 15,
          description: "Handling precautions, PPE triggers, and incident reporting protecting staff and public health.",
          tags: ["safety", "zoonosis", "staff"],
          steps: [
            "Flag suspected infectious cases at booking; isolate on arrival path",
            "Species-specific handling training refreshed for all new staff week one",
            "PPE rules per scenario (suspect ringworm, parvo, rabies-suspect) posted visibly",
            "Bite/scratch protocol: immediate wound care + report + follow-up owner notified",
            "Quarterly review of incidents shaping handling-policy updates",
            "Pregnant/immunocompromised staff task adjustments planned respectfully"
          ],
          pitfalls: ["'Friendly-looking' animals skipped restraint protocols", "Scratches logged nowhere until infection forces it"]
        }
      ]
    }
  ]
};
