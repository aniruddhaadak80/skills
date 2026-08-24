export const track = {
  id: "healthcare-clinical",
  label: "Healthcare & Clinical",
  icon: "🏥",
  gradient: "from-rose-600 via-red-500 to-orange-500",
  ring: "ring-red-500/30",
  text: "text-red-400",
  blurb: "Clinical workflows, quality improvement, health informatics, and patient-communication craft.",
  roles: ["Nurses", "Physicians", "Clinical Managers", "Health Informaticists"],
  domains: [
    {
      id: "clinical-workflow",
      label: "Clinical Workflow",
      procedures: [
        {
          id: "shift-handoff-isbar",
          title: "Run structured shift handoffs with ISBAR",
          level: "foundation", minutes: 20,
          description: "Transfer patient care using Identify-Situation-Background-Assessment-Recommendation so nothing critical drops between shifts.",
          tags: ["handoff", "safety", "communication"],
          steps: [
            "Identify: name, age, location, attending team for each patient",
            "Situation: current diagnosis and reason for admission in one sentence",
            "Background: relevant history, allergies, code status, isolation needs",
            "Assessment: latest vitals trends and your clinical concern level",
            "Recommendation: pending tasks, watch-fors, escalation thresholds",
            "Receiver reads back action items before closing each handoff"
          ],
          pitfalls: ["Social chat interleaved with handoff losing structure", "Vague watch-fors like 'if worse, call' without thresholds"]
        },
        {
          id: "med-rec-reconciliation",
          title: "Reconcile medications across transitions of care",
          level: "intermediate", minutes: 30,
          description: "Build one verified medication list at every admission, transfer, and discharge.",
          tags: ["medications", "transitions", "safety"],
          steps: [
            "Take best-possible medication history from patient plus pharmacy records",
            "Clarify discrepancies with prescriber before transcribing orders",
            "Flag high-risk meds (anticoagulants, insulin, opioids) for double-check",
            "Document intentional changes vs errors distinctly in the record",
            "Counsel at discharge with teach-back on changed medications",
            "Send reconciled list to the next provider AND community pharmacy"
          ],
          pitfalls: ["Copy-forward lists propagating stopped medications", "Herbals/OTC never asked about, interacting with new scripts"]
        },
        {
          id: "deterioration-escalation",
          title: "Escalate deterioration early with objective triggers",
          level: "intermediate", minutes: 25,
          description: "Use early-warning scores and defined thresholds so concern becomes action without hesitation cost.",
          tags: ["deterioration", "escalation", "ews"],
          steps: [
            "Track early-warning score trend, not single readings",
            "Set personal trigger: score X or rise Y means senior review within Z minutes",
            "Present escalation in ISBAR with the numbers that triggered you",
            "Document time of concern, who notified, response received",
            "If response inadequate, use chain-of-command explicitly — policy protects this",
            "Debrief after events: what threshold would have fired earlier?"
          ],
          pitfalls: ["Normalizing gradual overnight decline across serial readings", "Waiting for rounds when criteria already met"]
        }
      ]
    },
    {
      id: "quality-informatics",
      label: "Quality & Informatics",
      procedures: [
        {
          id: "quality-improvement-cycle",
          title: "Lead a PDSA quality improvement cycle",
          level: "intermediate", minutes: 40,
          description: "Small tested changes over big launches: plan-do-study-act cycles with measurable process metrics.",
          tags: ["quality-improvement", "pdsa", "process"],
          steps: [
            "Define problem with baseline data over sufficient weeks, not anecdotes",
            "Pick ONE process change with a clear mechanism story",
            "Plan: who measures what, when, predicted effect written beforehand",
            "Do: pilot on one unit or one week; protect the experiment",
            "Study: compare run-chart against baseline; look for special-cause variation",
            "Act: adopt, adapt, or abandon honestly; document decision"
          ],
          pitfalls: ["Changing three things simultaneously, unlearnable results", "Sustainability ignored after the pilot enthusiasm fades"]
        },
        {
          id: "cdss-alert-review",
          title: "Tune clinical decision support alerts responsibly",
          level: "advanced", minutes: 40,
          description: "Reduce alert fatigue by measuring override reasons and retiring low-value interrupts.",
          tags: ["cdss", "alerts", "informatics"],
          steps: [
            "Pull override rates and documented reasons per alert type",
            "Rank alerts by override rate × potential harm if heeded",
            "Retire or narrow firing conditions of alerts overridden >90% safely",
            "A/B tiered severity: interruptive only where harm is real",
            "Monitor post-change for missed-event signals with named owner",
            "Review the whole alert panel quarterly like a formulary"
          ],
          pitfalls: ["Adding new alerts without retiring any, ever", "Interruptive warnings for documentation minutiae"]
        },
        {
          id: "patient-teach-back",
          title: "Teach-back patient education that lands",
          level: "foundation", minutes: 20,
          description: "Confirm understanding by asking patients to explain back — without making it a quiz.",
          tags: ["education", "communication", "health-literacy"],
          steps: [
            "Chunk teaching to one concept at a time in plain language",
            "Replace jargon: 'water pill' not 'diuretic', numbers with what they mean",
            "Ask 'I want to check I explained well — how will you take this at home?'",
            "Re-explain differently (not louder) whatever came back wrong",
            "Provide one-page written summary at 6th-grade reading level",
            "Involve caregiver present for the final teach-back round"
          ],
          pitfalls: ["'Any questions?' treated as comprehension verification", "Handing printed sheets instead of confirming understanding"]
        }
      ]
    }
  ]
};
