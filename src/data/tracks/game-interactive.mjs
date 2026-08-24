export const track = {
  id: "game-interactive",
  label: "Game & Interactive Dev",
  icon: "🎮",
  gradient: "from-indigo-400 via-blue-400 to-sky-300",
  ring: "ring-indigo-500/30",
  text: "text-indigo-300",
  blurb: "Gameplay systems, performance budgets, live-ops, and player-experience craft.",
  roles: ["Game Developers", "Technical Designers", "Live-Ops Engineers", "Indie Devs"],
  domains: [
    {
      id: "gameplay-systems",
      label: "Gameplay Systems",
      procedures: [
        {
          id: "game-feel-tuning",
          title: "Tune game feel with parameter discipline",
          level: "intermediate", minutes: 35,
          description: "Juice systems — input buffering, coyote time, screen feedback — tuned via live-adjustable parameters.",
          tags: ["game-feel", "juice", "tuning"],
          steps: [
            "Expose movement/combat parameters to a runtime debug panel",
            "Add input buffering (100-150ms) before touching anything else",
            "Add coyote time (~100ms) and jump buffering for platformers immediately",
            "Layer feedback per action: animation, sound, particle, camera nudge, hitstop",
            "Tune one parameter set at a time; record clips comparing before/after",
            "Playtest with controller AND touch/keyboard; feel differs per input"
          ],
          pitfalls: ["Hardcoded magic numbers nobody dares retune", "Juice added after systems freeze, breaking balance"]
        },
        {
          id: "save-system-design",
          title: "Design save systems that survive updates",
          level: "intermediate", minutes: 30,
          description: "Versioned, forward-compatible saves with migration paths protecting player progress.",
          tags: ["save-data", "architecture", "live-ops"],
          steps: [
            "Serialize data by key-value schema with explicit version field",
            "Write migrations as ordered transforms; never assume latest on load",
            "Keep save atomic: write temp + rename to avoid corruption on crash",
            "Cloud-sync conflict policy defined (newest-wins vs merge) and tested",
            "Back up previous save slot automatically before migrating",
            "Test loading every historical version in CI nightly"
          ],
          pitfalls: ["Binary blobs unreadable after class renames", "Corrupted-save reports traced to mid-write power loss"]
        }
      ]
    },
    {
      id: "performance-liveops",
      label: "Performance & Live-Ops",
      procedures: [
        {
          id: "frame-budget-profiling",
          title: "Hold frame budgets under real content load",
          level: "advanced", minutes: 40,
          description: "Per-system millisecond budgets enforced from prototype through ship on target hardware.",
          tags: ["performance", "profiling", "optimization"],
          steps: [
            "Set frame budget per platform (e.g., 16.6ms console / 33ms mobile) day one",
            "Allocate sub-budgets: rendering, gameplay logic, physics, UI, audio",
            "Profile weekly on MINIMUM-spec hardware, not dev machines",
            "Fix the top offender only; re-measure; repeat — no speculative optimization",
            "Track draw calls, GC spikes, and load times in CI perf snapshots",
            "Gate releases on budget regressions beyond agreed tolerance"
          ],
          pitfalls: ["Smooth on flagship phones, slideshow on median hardware", "GC death spirals from per-frame allocations"]
        },
        {
          id: "live-event-pipeline",
          title: "Ship live-ops events without client patches",
          level: "advanced", minutes: 45,
          description: "Server-driven event configuration, remote flags, and staged rollouts keeping content fresh safely.",
          tags: ["live-ops", "remote-config", "operations"],
          steps: [
            "Model events as server config consumed by generic client systems",
            "Validate configs against schema + simulation harness before publish",
            "Stage rollout: internal → 5% players → full, with kill switch per feature",
            "Monitor KPIs during events in real-time dashboard with alert thresholds",
            "Rehearse emergency shutdown path quarterly like fire drill",
            "Post-mortem each event: participation, revenue, bug classes, config errors"
          ],
          pitfalls: ["'Small' hotfix patches required per event, defeating live-ops", "Timezones ignored, events ending at wrong local hour"]
        }
      ]
    }
  ]
};
