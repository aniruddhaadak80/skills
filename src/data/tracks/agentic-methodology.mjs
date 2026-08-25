export const track = {
  id: "agentic-methodology",
  label: "Agentic Methodology",
  icon: "🔄",
  gradient: "from-teal-500 via-cyan-500 to-sky-400",
  ring: "ring-teal-500/30",
  text: "text-teal-300",
  blurb: "Disciplined workflows for agent-driven development: design gates, TDD, subagent dispatch, verification.",
  roles: ["Agent Power Users", "AI-Native Engineers", "Teams Shipping With Agents", "Solo Builders"],
  domains: [
    {
      id: "design-gates",
      label: "Design Gates",
      procedures: [
        {
          id: "socratic-brainstorming",
          title: "Brainstorm with the agent before any code",
          level: "foundation", minutes: 25,
          description: "Socratic refinement: one question at a time, alternatives with tradeoffs, segment-confirmed design docs.",
          tags: ["brainstorming", "design", "workflow"],
          steps: [
            "State the rough idea in two sentences; let the agent ask ONE question at a time",
            "Demand 2-3 alternative approaches WITH tradeoffs before accepting any",
            "Review the emerging design in 200-word segments; approve or redirect each",
            "Kill every feature that survives no YAGNI challenge — cut ruthlessly",
            "Commit the final design as a dated document the implementation will reference",
            "Refuse to let implementation start until you can restate the design unaided"
          ],
          pitfalls: ["Vibes-based approval of walls of text never segmented", "Feature creep smuggled in during 'small clarifications'"]
        },
        {
          id: "implementation-plan-writing",
          title: "Write plans a context-free agent could execute",
          level: "intermediate", minutes: 35,
          description: "Bite-sized tasks (2-5 min each) with exact file paths, complete specs, and per-task verification steps.",
          tags: ["planning", "workflow", "delegation"],
          steps: [
            "Split work into tasks completable in 2-5 minutes by a fresh agent",
            "Each task lists exact file paths and complete expected content — zero-context assumption",
            "Attach a verification step per task: command + expected observable output",
            "Order tasks so every dependency precedes its consumer; flag exceptions loudly",
            "Include the 'why' once at plan top; tasks carry only the 'what'",
            "Dry-run read: could an eager junior with no project context follow task #7 alone?"
          ],
          pitfalls: ["Tasks referencing 'as discussed' knowledge agents don't have", "Verification steps like 'check it works' proving nothing"]
        }
      ]
    },
    {
      id: "execution-discipline",
      label: "Execution Discipline",
      procedures: [
        {
          id: "tdd-red-green-refactor",
          title: "Enforce red-green-refactor with hard gates",
          level: "intermediate", minutes: 30,
          description: "Failing test first, watch it fail, minimal code, watch it pass, commit — no code born before tests.",
          tags: ["tdd", "testing", "discipline"],
          steps: [
            "Write the failing test FIRST; run it and watch it fail for the right reason",
            "Forbid any production code until a test demonstrably fails",
            "Write the MINIMAL code to pass; resist gold-plating between greens",
            "Refactor only on green; keep the cycle under ten minutes",
            "Commit at every green — granular history is your undo log",
            "Delete any production code discovered written before its test"
          ],
          pitfalls: ["Tests written after code confirming implementation details instead of behavior", "'I'll add tests later' accumulating as invisible debt"]
        },
        {
          id: "subagent-dispatch-discipline",
          title: "Dispatch subagents with fresh-context discipline",
          level: "advanced", minutes: 40,
          description: "Fresh implementer per task, brief files as single source of truth, two-stage review, capped fix loops.",
          tags: ["subagents", "orchestration", "quality"],
          steps: [
            "Extract each task's brief to its own file; the brief is the ONLY requirements source",
            "Dispatch a FRESH subagent per task — context pollution breeds confident errors",
            "Require two-stage review per task: spec compliance first, then code quality",
            "Cap fix loops at three resumes; beyond that, fresh agent + more capable model",
            "Batch trivially-same-shaped small edits into ONE dispatch, reviewed as one diff",
            "Keep a findings ledger: parked minors get adjudicated, never silently dropped"
          ],
          pitfalls: ["Session-model inheritance silently spending premium tokens on mechanical tasks", "Fix loops where the same blind implementer retries identical failures"]
        },
        {
          id: "verification-before-completion",
          title: "Verify before claiming done — evidence over claims",
          level: "foundation", minutes: 20,
          description: "Fresh-command proof for every completion claim; 'it should work' is a confession.",
          tags: ["verification", "honesty", "workflow"],
          steps: [
            "Run the actual verification command fresh at claim time, not from memory",
            "Paste real output into the completion report — truncated honestly if long",
            "Re-test edge cases named in the original task, not just the happy path",
            "Distinguish 'compiles', 'tests pass', and 'works' as three separate proofs",
            "If anything remains unverified, say exactly what and why — never gloss",
            "Treat any 'should' in your own status report as an unfinished task marker"
          ],
          pitfalls: ["Agents declaring success on stale terminal output", "Confident summaries laundering unverified assumptions"]
        }
      ]
    },
    {
      id: "branch-isolation",
      label: "Branch Isolation",
      procedures: [
        {
          id: "git-worktree-isolation",
          title: "Isolate parallel work with git worktrees",
          level: "intermediate", minutes: 25,
          description: "Separate directories per branch letting agents work concurrently without stepping on each other.",
          tags: ["git", "worktrees", "parallel"],
          steps: [
            "Create worktrees per workstream: git worktree add ../feat-x -b feat-x",
            "Install dependencies inside EACH worktree; they do not share node_modules",
            "Assign one agent per worktree; forbid cross-worktree checkouts mid-run",
            "Name worktree dirs after branches; delete immediately after merge",
            "Prune stale worktrees monthly: git worktree prune plus manual sweep",
            "Never create a worktree INSIDE another repository's working tree"
          ],
          pitfalls: ["Assuming installed deps carry across worktrees", "Two agents editing the same file via different worktrees then merging blindly"]
        },
        {
          id: "receiving-code-review-gracefully",
          title: "Receive agent code review without ego or obedience",
          level: "foundation", minutes: 20,
          description: "Verify claims, push back with evidence when wrong, apply instantly when right.",
          tags: ["code-review", "collaboration", "feedback"],
          steps: [
            "Reproduce or locate every claim before acting; reviewers are fallible too",
            "Push back on incorrect findings with specific evidence, not vibes",
            "Apply correct findings immediately even when delivery stings",
            "Separate style preferences from correctness issues; route accordingly",
            "Thank-and-correct publicly; never argue tone over substance",
            "Track which reviewer classes catch what; calibrate future trust"
          ],
          pitfalls: ["Obediently implementing wrong suggestions because review felt authoritative", "Defensive dismissal of valid criticals"]
        }
      ]
    }
  ]
};
