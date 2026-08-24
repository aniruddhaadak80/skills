export const track = {
  id: "qa-testing",
  label: "QA & Testing",
  icon: "🧪",
  gradient: "from-teal-500 via-emerald-500 to-green-500",
  ring: "ring-teal-500/30",
  text: "text-teal-400",
  blurb: "Test strategy, automation pyramids, exploratory craft, and release confidence.",
  roles: ["QA Engineers", "SDETs", "Test Automation Engineers", "Developers"],
  domains: [
    {
      id: "test-strategy",
      label: "Test Strategy",
      procedures: [
        {
          id: "test-pyramid-balance",
          title: "Balance the test pyramid for your app",
          level: "foundation", minutes: 30,
          description: "Allocate unit/integration/e2e counts by feedback speed and failure diagnosability.",
          tags: ["testing", "pyramid", "strategy"],
          steps: [
            "Default ratio: ~70% unit, ~20% integration, ~10% e2e — adjust per risk",
            "Push logic coverage down; keep e2e for critical user journeys only",
            "Integration tests own API contracts and database interactions",
            "One smoke e2e suite under 5 min gates every deploy",
            "Delete redundant tests asserting the same behavior at multiple levels",
            "Review distribution quarterly as architecture evolves"
          ],
          pitfalls: ["Ice-cream-cone suites: thousands of slow UI tests", "Unit tests mocking everything, testing nothing real"]
        },
        {
          id: "risk-based-testing",
          title: "Prioritize testing by risk, not habit",
          level: "intermediate", minutes: 25,
          description: "Failure likelihood × impact matrix focusing effort where bugs hurt most.",
          tags: ["risk", "prioritization", "qa"],
          steps: [
            "List modules; score failure probability from change frequency + complexity",
            "Score business impact: money paths, data integrity, legal exposure first",
            "Matrix top-right quadrant gets deepest coverage and fastest fixes",
            "New features inherit high risk scores until proven stable",
            "Revisit after every incident; incidents reveal mis-scored areas",
            "Publish the matrix so devs understand review depth expectations"
          ],
          pitfalls: ["Equal test depth everywhere = shallow where it matters", "Legacy untouched code tested ritually"]
        }
      ]
    },
    {
      id: "automation",
      label: "Test Automation",
      procedures: [
        {
          id: "flaky-test-elimination",
          title: "Eliminate flaky tests systematically",
          level: "advanced", minutes: 40,
          description: "Quarantine, root-cause classes, and stabilization patterns restoring CI trustworthiness.",
          tags: ["flaky-tests", "ci", "reliability"],
          steps: [
            "Auto-detect flakiness via retry-pass detection; report rate weekly",
            "Quarantine flaky tests immediately — a red CI must mean something",
            "Root-cause by class: timing/sleep → explicit waits; order-dependence → isolation",
            "Fix test-data collisions with unique-per-run factories",
            "Stabilize environment noise: ports, clocks, network mocks",
            "Burn down quarantine weekly; two-strikes rule for chronic offenders"
          ],
          pitfalls: ["Auto-retry hiding flake instead of surfacing it", "Deleting flaky tests silently losing coverage"]
        },
        {
          id: "e2e-maintainable-selectors",
          title: "Write E2E tests that survive redesigns",
          level: "intermediate", minutes: 35,
          description: "User-visible locators, page objects done right, and assertions on outcomes not implementation.",
          tags: ["e2e", "playwright", "selectors"],
          variants: {
            playwright: { id: "pw", label: "Playwright", adds: ["Prefer getByRole/getByLabel over CSS/XPath chains", "Use web-first assertions auto-waiting instead of sleeps"] },
            cypress: { id: "cypress", label: "Cypress", adds: ["Avoid conditional control-flow; command determinism wins", "Intercept network for deterministic state setup"] }
          },
          description: "Selector strategy and structure choices keeping end-to-end suites maintainable through UI churn.",
          tags: ["e2e", "maintainability"],
          steps: [
            "Locate elements by accessible role/name — resilient AND forces a11y",
            "Ban generated class names and nth-child position selectors",
            "Model flows in helpers once; tests read as user intent scripts",
            "Assert observable outcomes (row appears) over DOM internals",
            "Seed state via APIs/fixtures, never UI-only setup chains",
            "Keep each spec independent: any subset passes on fresh context"
          ],
          pitfalls: ["Page objects becoming second app full of logic", "Chained UI setups breaking one hop upstream"]
        }
      ]
    },
    {
      id: "exploratory-release",
      label: "Exploratory & Release",
      procedures: [
        {
          id: "session-based-exploratory",
          title: "Run session-based exploratory testing",
          level: "intermediate", minutes: 35,
          description: "Charter-driven timeboxed sessions producing documented findings, not random clicking.",
          tags: ["exploratory-testing", "sessions", "qa"],
          steps: [
            "Write charters: 'Explore X with Y focus using Z resources'",
            "Timebox 60-90 min sessions; split if unfocused",
            "Log notes live: what tried, what observed, questions raised",
            "Debrief findings into tickets immediately with repro steps",
            "Vary personas/data/environment per session rotation",
            "Track charter coverage to expose unexplored corners"
          ],
          pitfalls: ["Exploratory as unplanned filler when automation lags", "Findings lost in prose nobody triages"]
        },
        {
          id: "release-readiness-review",
          title: "Gate releases with a readiness review",
          level: "foundation", minutes: 25,
          description: "Checklist verdicts across quality signals making go/no-go boring and defensible.",
          tags: ["release", "gates", "process"],
          steps: [
            "Collect: automated pass rates, open severity counts, perf deltas",
            "Verify rollback plan exists and was rehearsed this cycle",
            "Confirm monitoring dashboards updated for new surfaces",
            "Legal/support/comms sign-offs for customer-visible changes",
            "Decision recorded with dissent noted — no silent overrides",
            "Post-release retro compares predicted vs actual issues"
          ],
          pitfalls: ["Go/no-go theater after decision already made upstream", "Severity-3 backlog blocking honest signal reading"]
        }
      ]
    }
  ]
};
