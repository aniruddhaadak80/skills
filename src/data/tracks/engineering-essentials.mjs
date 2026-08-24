const S = {
  node: { label: "Node.js", adds: ["Profile with --cpu-prof and clinic; inspect event-loop lag", "Guard against blocking calls in hot paths with async worker offload"] },
  python: { label: "Python", adds: ["Profile with py-spy and cProfile; watch the GIL on CPU-bound paths", "Pin environments via lockfiles; verify wheels exist for your platforms"] },
  go: { label: "Go", adds: ["Run pprof profiles; check goroutine leaks with goleak", "Enforce vet/lint gates; keep error wrapping with %w intact"] },
  rust: { label: "Rust", adds: ["Let the borrow checker guide design; resist RefCell escapes", "Benchmark criterion suites for hot paths before optimizing"] },
  java: { label: "Java/JVM", adds: ["Tune GC logs review into routine; watch allocation pressure", "Use JFR recordings for production-safe continuous profiling"] },
  dotnet: { label: ".NET", adds: ["Review GC modes per workload type (workstation/server)", "Benchmark with BenchmarkDotNet; beware allocation in loops"] },
  kotlin: { label: "Kotlin", adds: ["Leverage coroutines structured concurrency; cancel scopes deliberately", "Watch Kotlin/Native memory model differences in multiplatform code"] },
  swift: { label: "Swift", adds: ["Adopt Swift Concurrency (async/await, actors) for data-race safety", "Profile Instruments templates: Time Profiler + Allocations together"] },
  php: { label: "PHP", adds: ["Run static analysis (PHPStan/Psalm) at max level in CI", "Profile request cycles with Xdebug + cachegrind on real routes"] },
  ruby: { label: "Ruby", adds: ["Profile with rack-mini-profiler in dev and rbspy in prod", "Watch object churn per request; freeze frozen string literals"] },
  elixir: { label: "Elixir", adds: ["Inspect supervision trees and mailbox depths via :observer", "Benchmark with Benchee; watch BEAM scheduler reductions"] },
  cpp: { label: "C++", adds: ["Sanitizer builds (ASan/UBSan) in CI before perf tuning", "Profile with perf/VTune; watch cache lines and allocations"] },
  scala: { label: "Scala", adds: ["Profile with async-profiler; watch GC pressure from allocations", "Enforce scalafmt/scalafix gates; mind closure capture costs"] },
  dart: { label: "Dart/Flutter", adds: ["Profile with DevTools timeline; watch jank frames on real devices", "Mind isolate boundaries — no shared mutable state across them"] }
};

export const track = {
  id: "engineering-essentials",
  label: "Engineering Essentials",
  icon: "🧰",
  gradient: "from-slate-400 via-zinc-400 to-stone-400",
  ring: "ring-zinc-500/30",
  text: "text-zinc-300",
  blurb: "Universal engineering craft — debugging, reviews, refactoring, profiling — tuned per language stack.",
  roles: ["All Software Engineers"],
  domains: [
    {
      id: "debug-craft",
      label: "Debugging Craft",
      procedures: [
        {
          id: "systematic-bug-hunt",
          title: "Hunt bugs systematically",
          level: "foundation", minutes: 30,
          description: "Reproduce, bisect, hypothesize, verify — the method that beats random poking under deadline pressure.",
          tags: ["debugging", "methodology"],
          steps: [
            "Reproduce deterministically first; flaky repro = flaky fix",
            "Write failing test capturing the bug before touching source",
            "Bisect history or code path until minimal failing case remains",
            "Form ONE hypothesis, predict its observable, then check",
            "Fix root cause, not nearest symptom; add regression test",
            "Document the hunt briefly for future searchers"
          ],
          pitfalls: ["Shotgun changes stacking unknown unknowns", "Fixing symptoms while root cause ships elsewhere"],
          variants: S
        },
        {
          id: "production-debugging",
          title: "Debug production without stopping the world",
          level: "advanced", minutes: 40,
          description: "Safe live diagnosis using flags, traces, and snapshots instead of restart roulette.",
          tags: ["debugging", "production", "observability"],
          steps: [
            "Correlate user report to trace IDs through gateway → service → data layer",
            "Capture state non-invasively: heap/profile snapshots over process restarts",
            "Enable dynamic log levels temporarily rather than redeploying",
            "Test hypotheses against staging replicas of prod data shape",
            "Timebox live debugging; mitigate via rollback/flag if past window",
            "Write postmortem linking timeline to evidence artifacts"
          ],
          pitfalls: ["Restarting away evidence mid-diagnosis", "Debugging against sanitized data missing the trigger shape"],
          variants: S
        }
      ]
    },
    {
      id: "code-quality",
      label: "Code Quality",
      procedures: [
        {
          id: "code-review-checklist",
          title: "Review code like a senior engineer",
          level: "foundation", minutes: 25,
          description: "Review order, comment quality, and scope discipline making PRs fast and kind.",
          tags: ["code-review", "quality", "collaboration"],
          steps: [
            "Read description and tests FIRST to learn intent",
            "Check correctness and security before style nits",
            "Comment questions/observations vs required-changes distinctly",
            "Keep nitpicks batched as one optional pass",
            "Approve explicitly when remaining items are optional",
            "Aim same-day first response; latency kills momentum"
          ],
          pitfalls: ["Style wars the formatter should own", "LGTM rubber-stamps on 2000-line diffs"],
          variants: S
        },
        {
          id: "refactor-safely",
          title: "Refactor without breaking behavior",
          level: "intermediate", minutes: 35,
          description: "Characterization tests, small mechanical steps, and clean-cut commits keeping refactors boring.",
          tags: ["refactoring", "legacy-code"],
          steps: [
            "Pin current behavior with characterization tests where gaps exist",
            "Plan steps each leaving tests green; commit per step",
            "Prefer mechanical moves (extract, inline, rename) over clever rewrites",
            "Keep behavior changes in separate PRs from structure moves",
            "Measure complexity delta honestly; stop when readability peaks",
            "Leave the campsite cleaner but don't rebuild the forest"
          ],
          pitfalls: ["Big-bang rewrites losing hidden behaviors", "'While I'm here' feature creep inside refactor PRs"],
          variants: S
        },
        {
          id: "performance-profiling",
          title: "Profile before optimizing",
          level: "intermediate", minutes: 35,
          description: "Measure hot paths with real data shapes, optimize measured bottlenecks, verify wins.",
          tags: ["performance", "profiling"],
          steps: [
            "Define target metric: p95 latency? memory ceiling? throughput?",
            "Build benchmark using PRODUCTION-shaped data volumes",
            "Profile CPU + memory + allocations; identify top three offenders",
            "Optimize one offender at a time; re-measure after each change",
            "Check second-order effects: cache misses, GC pressure, lock contention",
            "Record before/after numbers in the PR for future archaeologists"
          ],
          pitfalls: ["Optimizing intuition while profile shows I/O waits", "Micro-benchmarks on toy data lying about production"],
          variants: S
        }
      ]
    },
    {
      id: "collab-workflow",
      label: "Collaboration Workflow",
      procedures: [
        {
          id: "git-discipline",
          title: "Practice git discipline teams thank you for",
          level: "foundation", minutes: 25,
          description: "Commit hygiene, branch strategy, and recovery skills preventing shared-repo disasters.",
          tags: ["git", "workflow"],
          steps: [
            "Atomic commits: one logical change, imperative message with why",
            "Branch names carry ticket refs: feat/123-short-slug",
            "Rebase local before PR; merge only via repo's chosen strategy",
            "Master interactive rebase, reflog rescue, and bisect fluently",
            "Never rewrite shared branches; force-push with lease only when agreed",
            "Tag releases and keep changelog in sync mechanically"
          ],
          pitfalls: ["git push --force default aliasing over teammates", "Thousand-line 'WIP' commits nobody can review"],
          variants: S
        },
        {
          id: "async-communication",
          title: "Communicate asynchronously like a distributed-native",
          level: "intermediate", minutes: 20,
          description: "Written updates, decision records, and meeting hygiene across timezones.",
          tags: ["communication", "remote", "writing"],
          steps: [
            "Default to written updates with context links over synchronous asks",
            "Structure messages: decision needed / FYI / blocked, upfront",
            "Record decisions in ADRs searchable later, not chat scrolls",
            "Set response-time expectations per channel explicitly",
            "Meetings need agenda + owner + written outcome or get cancelled",
            "Over-communicate status during incidents and crunch weeks"
          ],
          pitfalls: ["Decisions living only in someone's DMs", "Meeting-recurrence zombie invites"]
        }
      ]
    }
  ]
};
