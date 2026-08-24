export const track = {
  id: "construction-built-env",
  label: "Construction & Built Environment",
  icon: "🏗️",
  gradient: "from-yellow-500 via-amber-600 to-stone-500",
  ring: "ring-amber-600/30",
  text: "text-amber-400",
  blurb: "Site safety, schedule and cost control, quality inspection, and subcontractor coordination.",
  roles: ["Project Engineers", "Site Managers", "Cost Estimators", "Contractors"],
  domains: [
    {
      id: "site-execution",
      label: "Site Execution",
      procedures: [
        {
          id: "toolbox-talk-craft",
          title: "Run toolbox talks that change behavior",
          level: "foundation", minutes: 15,
          description: "Five-minute task-specific safety briefings with worker voice and documented attendance.",
          tags: ["safety", "briefings", "culture"],
          steps: [
            "Topic matches TODAY's actual tasks, not generic monthly themes",
            "Two minutes max presentation, three minutes worker input on hazards",
            "Name specific controls for the day's top two risks",
            "Capture signatures; follow up yesterday's near-miss if any",
            "Rotate who leads — supervisors AND trades",
            "Track themes quarterly; repeated topics mean systemic fixes needed"
          ],
          pitfalls: ["Read-aloud regulatory scripts with zero engagement", "Attendance sheets as the only deliverable"]
        },
        {
          slug: "schedule-recovery-plan",
          id: "schedule-recovery",
          title: "Recover a slipping construction schedule",
          level: "advanced", minutes: 45,
          description: "Critical-path truth, look-ahead replanning, and recovery options priced honestly.",
          tags: ["schedule", "recovery", "planning"],
          steps: [
            "Rebuild true critical path from field reality, not baseline fiction",
            "Quantify delay causes against contract entitlement separately from recovery",
            "Look-ahead 3 weeks: every activity has labor, materials, access confirmed",
            "Recovery menu: resequence / overtime / additional crew / scope re-phase — each costed",
            "Negotiate recovery plan WITH subs who must execute it",
            "Weekly variance review with same metrics; kill optimism bias with data"
          ],
          pitfalls: ["Overtime 'solutions' that lower productivity below baseline", "Recovery plans announced to subs instead of built with them"]
        },
        {
          id: "itp-quality-inspections",
          title: "Drive quality with inspection test plans",
          level: "intermediate", minutes: 35,
          description: "Hold points, witness points, and documented ITPs preventing rework discovery too late.",
          tags: ["quality", "inspection", "itp"],
          steps: [
            "ITP per work package: activities, acceptance criteria, hold/witness points mapped",
            "Notify inspectors per contract notice periods; never bury holds",
            "Record results same-day with photos keyed to location references",
            "Non-conformances tracked to closure with disposition (repair/rework/accept)",
            "Trend NCR types monthly; repeat classes get process fixes not re-training alone",
            "Close-out book compiled continuously, not at handover panic"
          ],
          pitfalls: ["Covered work inspected via memory and promises", "Hold points waived verbally under schedule pressure"]
        }
      ]
    },
    {
      id: "cost-contracts",
      label: "Cost & Contracts",
      procedures: [
        {
          id: "estimate-takeoff-discipline",
          title: "Produce estimates that survive construction",
          level: "intermediate", minutes: 40,
          description: "Quantity takeoffs, productivity rates, risk allowances, and bid review gates.",
          tags: ["estimating", "bids", "cost"],
          steps: [
            "Take off quantities from issued-for-construction drawings only, revision-stamped",
            "Apply productivity rates from YOUR historical data where possible",
            "Price escalation exposure explicitly for long-duration packages",
            "Risk register items each carry quantified allowance or explicit exclusion",
            "Peer review gate before submit: two challenge questions minimum",
            "Post-bid learning loop: estimate vs actual fed back by division"
          ],
          pitfalls: ["Pricing from superseded drawing revisions", "Allowances hidden inside line items nobody can audit"]
        }
      ]
    }
  ]
};
