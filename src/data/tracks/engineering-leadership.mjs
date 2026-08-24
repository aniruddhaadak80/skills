export const track = {
  id: "engineering-leadership",
  label: "Engineering Leadership",
  icon: "🧭",
  gradient: "from-indigo-500 via-violet-500 to-purple-500",
  ring: "ring-indigo-500/30",
  text: "text-indigo-400",
  blurb: "Managing engineers, running teams, hiring, planning, and open-source stewardship.",
  roles: ["Engineering Managers", "Tech Leads", "Staff Engineers", "CTOs"],
  domains: [
    {
      id: "people-management",
      label: "People Management",
      procedures: [
        {
          id: "one-on-ones",
          title: "Run one-on-ones that build trust",
          level: "foundation", minutes: 25,
          description: "Weekly direct-report meetings owned by them: growth, blockers, feedback — not status updates.",
          tags: ["management", "1on1", "feedback"],
          steps: [
            "Their agenda first; status belongs in tools not this meeting",
            "Ask growth questions monthly: what do you want to learn next quarter?",
            "Deliver small feedback within 48h of observation, privately",
            "Track recurring themes across weeks; patterns need structural fixes",
            "Skip-meeting check: if nothing to discuss, cancel honestly",
            "Quarterly: review their goals explicitly in the slot"
          ],
          pitfalls: ["1:1s degraded into sprint demos", "Feedback saved for performance season"]
        },
        {
          id: "performance-calibration",
          title: "Calibrate performance reviews fairly",
          level: "advanced", minutes: 45,
          description: "Evidence-based reviews with bias checks and consistent leveling across teams.",
          tags: ["performance", "reviews", "fairness"],
          steps: [
            "Collect evidence continuously, not from last-month memory",
            "Score against written level expectations, not peer comparison",
            "Check for bias patterns: recency, likability, visibility of work",
            "Calibrate across managers with anonymized examples",
            "Separate compensation conversations from growth conversations",
            "No surprises rule: anything in the review was said when observed"
          ],
          pitfalls: ["Rockstar-effect inflating visible work over critical invisible work", "Reviews as annual surprise attack"]
        }
      ]
    },
    {
      id: "team-process",
      label: "Team Process",
      procedures: [
        {
          id: "sprint-ceremonies-audit",
          title: "Audit your agile ceremonies ruthlessly",
          level: "intermediate", minutes: 30,
          description: "Keep rituals that produce decisions; delete the rest or shorten them.",
          tags: ["agile", "process", "meetings"],
          steps: [
            "Timebox audit: cost each ceremony × attendees × frequency annually",
            "Standups answer three things only: done, next, blocked",
            "Planning consumes estimates only where they change decisions",
            "Retro produces max two tracked actions with owners",
            "Async-first updates replace broadcast meetings",
            "Re-audit quarterly; ceremony creep is real"
          ],
          pitfalls: ["Ceremonies performed for process-compliance optics", "Estimation debates longer than implementation"]
        },
        {
          id: "tech-debt-strategy",
          title: "Manage tech debt as a portfolio",
          level: "advanced", minutes: 35,
          description: "Classify debt by interest rate, allocate fixed capacity, and tie paydown to business risk.",
          tags: ["tech-debt", "strategy", "maintenance"],
          steps: [
            "Inventory debts with interest rate: how much slower/costlier per month?",
            "Tag principal risk: what breaks if this component fails?",
            "Allocate 15-20% sprint capacity permanently, protected",
            "Bundle paydown with adjacent feature work where paths cross",
            "Kill dead code aggressively; deletion is the cheapest fix",
            "Report debt burn-down alongside features to leadership"
          ],
          pitfalls: ["Debt weeks that become bug-fix weeks", "Rewrite fantasies instead of incremental strangling"]
        }
      ]
    },
    {
      id: "hiring",
      label: "Hiring",
      procedures: [
        {
          id: "structured-interviews",
          title: "Run structured interviews with scorecards",
          level: "intermediate", minutes: 40,
          description: "Same questions, rubric scoring, independent write-ups before debrief — predictive and fair.",
          tags: ["hiring", "interviewing", "talent"],
          steps: [
            "Derive 4-5 competencies from actual job outcomes",
            "Write question sets per competency with follow-up probes",
            "Score on behavioral anchors (1-5 descriptions) immediately after",
            "Interviewers submit written scores before any group discussion",
            "Debrief discusses evidence against competencies only",
            "Audit funnel quarterly for stage-level drop-off biases"
          ],
          pitfalls: ["Brainteasers measuring trivia tolerance", "Group-think debriefs anchored by loudest voice"]
        },
        {
          id: "candidate-experience",
          title: "Design a candidate experience worth talking about",
          level: "intermediate", minutes: 25,
          description: "Fast loops, real communication, respect for time — your employer brand compounds here.",
          tags: ["hiring", "employer-brand"],
          steps: [
            "Publish salary range and process map in the job post",
            "Total loop under 3 weeks; feedback within 2 days every stage",
            "Take-home capped at 3 hours or paid work-sample alternative",
            "Every rejection includes one specific kind sentence",
            "Onboarding starts at offer-accept: day-one access checklist",
            "Survey candidates post-loop; act on top complaint"
          ],
          pitfalls: ["Ghosting after final rounds nuking Glassdoor scores", "Five interviewers asking the same resume questions"]
        }
      ]
    },
    {
      id: "open-source-stewardship",
      label: "Open Source Stewardship",
      procedures: [
        {
          id: "maintainer-triage",
          title: "Triage issues like a sustainable maintainer",
          level: "intermediate", minutes: 30,
          description: "Labels, templates, and response SLAs keeping the queue trustworthy without burnout.",
          tags: ["open-source", "triage", "community"],
          steps: [
            "Install issue templates forcing repro steps and versions",
            "Label within 48h: type, area, priority, good-first-issue",
            "Close unreproducible issues politely with a checklist ask",
            "Pin a contributing guide with PR conventions and CLA status",
            "Batch triage twice weekly; notifications are not a workflow",
            "Recruit trusted contributors toward triage permissions"
          ],
          pitfalls: ["Maintainer as single point of failure for every decision", "Issue queue growing unbounded until contributors leave"]
        },
        {
          slug: "oss-pr-landing",
          authored: true,
          id: "pr-landing-playbook",
          title: "Land merged PRs in large OSS repositories",
          level: "intermediate", minutes: 30,
          description: "A merge-rate-first contribution workflow: issue selection, minimal diffs, review follow-through. Use when contributing to someone else's repo, opening PRs upstream, or reviving stalled pull requests.",
          tags: ["open-source", "pull-requests", "contribution"],
          commands: [{ label: "Find good first issues", cmd: 'gh search issues --repo <owner>/<repo> "good first issue" --state open' }],
          steps: [
            "Pick labeled issues with recent maintainer activity; claim in a comment",
            "Read CONTRIBUTING.md, AGENTS.md, and ten recent merged commits first",
            "Branch per issue; one logical change per PR",
            "Include tests matching repo conventions; keep diff reviewable in one sitting",
            "Open with Fixes #n, proof of behavior before/after, test output",
            "Answer every review comment same-day; ping politely once after two silent weeks"
          ],
          pitfalls: ["Unrequested feature PRs to roadmap items", "Drive-by reformatting bloating diffs"]
        }
      ]
    }
  ]
};
