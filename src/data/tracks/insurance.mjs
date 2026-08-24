export const track = {
  id: "insurance",
  label: "Insurance Operations",
  icon: "☂️",
  gradient: "from-sky-600 via-blue-500 to-cyan-400",
  ring: "ring-sky-500/30",
  text: "text-sky-300",
  blurb: "Claims handling, underwriting discipline, and policy service that balances care with control.",
  roles: ["Claims Adjusters", "Underwriters", "Insurance Ops", "Brokers"],
  domains: [
    {
      id: "claims-handling",
      label: "Claims Handling",
      procedures: [
        {
          id: "fnol-to-resolution",
          title: "Drive claims from FNOL to fair resolution fast",
          level: "intermediate", minutes: 40,
          description: "Structured intake, coverage verification, documentation, and settlement discipline.",
          tags: ["claims", "adjusting", "process"],
          steps: [
            "Capture FNOL completely: who/what/when/where plus policy number verification",
            "Verify coverage BEFORE promising anything; reserve set on facts not optimism",
            "Build evidence file: statements, photos, reports, expert inputs as needed",
            "Communicate status proactively at defined intervals even when nothing moved",
            "Settle on documented valuation; document every deviation from guideline",
            "Close-out review: subrogation flags, recovery chances, lesson tags"
          ],
          pitfalls: ["Coverage surprises surfacing after promises made", "Reserves set once and never revisited as facts develop"]
        },
        {
          id: "fraud-indicator-triage",
          title: "Screen claims for fraud indicators fairly",
          level: "advanced", minutes: 35,
          description: "Objective indicator checklists routing to SIU without profiling or delay-by-suspicion.",
          tags: ["fraud", "siu", "ethics"],
          steps: [
            "Apply written indicator lists consistently; score, don't vibe",
            "Route to SIU only above threshold — suspicion is not a delay justification",
            "Document indicators factually; never record conclusions in notes",
            "Track SIU referral hit-rate to keep indicators honest",
            "Protect legitimate claimants' experience metrics separately",
            "Retrain indicator sets annually against confirmed fraud patterns"
          ],
          pitfalls: ["Slow-walking claims via endless 'investigation' without indicators", "Indicators proxying for protected characteristics"]
        }
      ]
    },
    {
      id: "underwriting-service",
      label: "Underwriting & Service",
      procedures: [
        {
          id: "underwriting-file-discipline",
          title: "Underwrite with complete, defensible files",
          level: "intermediate", minutes: 35,
          description: "Risk factors documented, deviations approved, and pricing rationale surviving audits years later.",
          tags: ["underwriting", "risk", "documentation"],
          steps: [
            "Complete the risk checklist per line; gaps documented as 'not available', not skipped",
            "Every deviation from standard rates carries approver + rationale inline",
            "Notes state facts and sources; opinions labeled as opinions",
            "Re-underwrite triggers defined: material change events listed per policy",
            "Sample own files quarterly against guidelines before audit does",
            "Feed loss experience back into guideline updates formally"
          ],
          pitfalls: ["Oral approvals living outside the file", "Renewals rolling forward without re-checking exposure changes"]
        },
        {
          id: "renewal-retain-win",
          title: "Run renewals that retain good risks",
          level: "foundation", minutes: 25,
          description: "Early outreach, transparent change explanation, and save motions for wavering accounts.",
          tags: ["renewals", "retention", "service"],
          steps: [
            "Start renewal review 60+ days out; no last-minute surprise premiums",
            "Explain premium changes by driver (losses? market? exposure growth?)",
            "Flag accounts with shopping signals for proactive save conversations",
            "Prepare alternatives within appetite BEFORE the call, not after objections",
            "Document competitive losses with reasons feeding product fixes",
            "Measure retention by segment; investigate anomalies both directions"
          ],
          pitfalls: ["Renewal notices as the first touch", "Matching any competitor quote without re-underwriting"]
        }
      ]
    }
  ]
};
