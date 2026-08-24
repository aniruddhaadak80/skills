export const track = {
  id: "customer-support",
  label: "Customer Support",
  icon: "💬",
  gradient: "from-cyan-500 via-sky-400 to-blue-400",
  ring: "ring-cyan-500/30",
  text: "text-cyan-300",
  blurb: "Support operations: ticket craft, knowledge systems, escalation judgment, and QA loops.",
  roles: ["Support Engineers", "CX Leads", "Helpdesk Teams", "Technical Account Managers"],
  domains: [
    {
      id: "ticket-excellence",
      label: "Ticket Excellence",
      procedures: [
        {
          id: "empathy-first-responses",
          title: "Write support replies that de-escalate",
          level: "foundation", minutes: 25,
          description: "Acknowledge → diagnose → act → verify structure with tone that survives angry Mondays.",
          tags: ["communication", "de-escalation", "writing"],
          steps: [
            "First sentence reflects THEIR stake ('your checkout being down is serious')",
            "Never blame user or system in the same breath as apologizing",
            "State what you DID, not just what they should try",
            "Give one clear next step, not five options ending in question marks",
            "Close with verification path if the fix doesn't hold",
            "Re-read as the customer before sending; delete internal jargon"
          ],
          pitfalls: ["Template walls where sentence two ignores sentence one's problem", "'Per our policy' as an opening move"]
        },
        {
          id: "diagnostic-question-trees",
          title: "Diagnose with question trees, not guesswork",
          level: "intermediate", minutes: 30,
          description: "Branching diagnostics per issue class reaching root cause in minimum round-trips.",
          tags: ["troubleshooting", "efficiency"],
          steps: [
            "For top-10 issue types, write decision trees with observable checkpoints",
            "Ask for evidence (screenshot, console, request ID) with each branch, never upfront interrogations",
            "One question per reply; batched questions get partially answered",
            "Record which branch resolved; prune dead branches monthly",
            "Escalation handoff includes tree position so customers never repeat themselves",
            "Convert recurring terminal branches into proactive product fixes"
          ],
          pitfalls: ["Shotgun checklists of ten things to try in order", "Trees living in veterans' heads only"]
        },
        {
          slug: "kb-article-loop",
          id: "knowledge-loop",
          title: "Close the loop from tickets to knowledge base",
          level: "intermediate", minutes: 30,
          description: "Every resolved pattern becomes a KB article; every article deflects future tickets measurably.",
          tags: ["knowledge-base", "deflection", "process"],
          steps: [
            "Tag tickets that needed a nonexistent article — queue them for writing",
            "Write from the customer's search phrase, not internal terminology",
            "Structure: symptom → quick fix → why it happens → when to escalate",
            "Link new articles in macro responses; measure deflection per view",
            "Prune/update top-20 articles quarterly against current product UI",
            "Celebrate deflection numbers alongside CSAT — both matter"
          ],
          pitfalls: ["KB as dusty archive nobody updates after releases", "Articles written to satisfy audits rather than searches"]
        }
      ]
    },
    {
      id: "support-ops",
      label: "Support Operations",
      procedures: [
        {
          id: "escalation-judgment",
          title: "Escalate with judgment, not fear",
          level: "intermediate", minutes: 20,
          description: "Clear severity ladder and warm-handoff standards protecting both customers and engineers.",
          tags: ["escalation", "severity", "handoff"],
          steps: [
            "Severity = customer impact × scope × urgency, written as a matrix",
            "Warm handoffs: intro context in channel, stay reachable for 24h",
            "Escalate data-loss/security instantly regardless of customer size",
            "Set expectations WITH the customer before escalating internally",
            "Track escalations back: were they preventable classes?",
            "No silent escalations — someone always owns customer comms"
          ],
          pitfalls: ["Escalating everything upward, engineering trust eroding", "Cold ticket tosses losing critical context"]
        },
        {
          id: "support-qa-scorecards",
          title: "QA support quality without demoralizing agents",
          level: "advanced", minutes: 35,
          description: "Calibrated rubric sampling, coaching-first reviews, and trend tracking over gotcha auditing.",
          tags: ["quality-assurance", "coaching", "metrics"],
          steps: [
            "Rubric: accuracy, completeness, tone, process adherence — weighted by issue class",
            "Sample randomly PLUS all low-CSAT tickets; calibrate reviewers monthly",
            "Review as coaching conversation with self-assessment first",
            "Trend agent scores over time; never rank publicly on single weeks",
            "Feed systemic findings into product/KB, not just individual coaching",
            "Track inter-rater agreement; drift means rubric needs revision"
          ],
          pitfalls: ["QA as surveillance producing defensive writing styles", "Perfect scores for polite wrong answers"]
        }
      ]
    }
  ]
};
