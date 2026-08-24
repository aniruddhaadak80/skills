export const track = {
  id: "devops-cloud",
  label: "DevOps & Cloud",
  icon: "☁️",
  gradient: "from-sky-500 via-blue-500 to-indigo-500",
  ring: "ring-sky-500/30",
  text: "text-sky-400",
  blurb: "Containers, pipelines, infrastructure-as-code, observability, and calm incident response.",
  roles: ["DevOps Engineers", "SREs", "Cloud Architects", "Platform Engineers"],
  domains: [
    {
      id: "containers",
      label: "Containers",
      procedures: [
        {
          id: "dockerfile-production",
          title: "Write production-grade Dockerfiles",
          level: "intermediate", minutes: 30,
          description: "Multi-stage builds, slim bases, layer-order discipline, and non-root runtime for small secure images.",
          tags: ["docker", "containers"],
          steps: [
            "Start from slim/distroless variants pinned by digest, not :latest",
            "Order layers least-to-most volatile; lock dependency manifests first",
            "Multi-stage: build artifacts in builder, copy ONLY runtime needs",
            "Run as non-root USER; expose no debug ports by default",
            "Add HEALTHCHECK matching your orchestration's probe",
            "Scan images in CI; fail on critical CVEs with a waiver process"
          ],
          pitfalls: ["Copying node_modules across stages including dev deps", "apt-get upgrade layers busting cache every build"],
          kpis: ["Image size under 200MB typical service", "Zero critical CVEs shipped"]
        },
        {
          id: "compose-local-env",
          title: "Spin up reproducible local environments",
          level: "foundation", minutes: 25,
          description: "One command brings up app plus dependencies with seeded data and sane defaults.",
          tags: ["docker-compose", "dx"],
          steps: [
            "Compose file includes app, database, cache, queue with healthchecks",
            "Mount code for live reload; keep volumes out of production paths",
            "Seed scripts run automatically on first boot, idempotent after",
            ".env.example documents every variable; fail fast on missing ones",
            "Pin service versions; document the one-command README entry",
            "Add make targets: up, down, logs, reset-db"
          ],
          pitfalls: ["Ports colliding with other projects; parameterize via env", "Seed data drifting from production shapes"]
        }
      ]
    },
    {
      id: "ci-cd",
      label: "CI/CD",
      procedures: [
        {
          id: "pipeline-stages",
          title: "Structure a fast, honest CI pipeline",
          level: "intermediate", minutes: 35,
          description: "Stage ordering that fails cheap and fast: lint → unit → build → integration → deploy gates.",
          tags: ["ci", "github-actions", "testing"],
          steps: [
            "Fail cheapest first: format+lint under 2 minutes before anything heavy",
            "Parallelize independent suites; cache dependencies by lockfile hash",
            "Run builds with strict env mirroring production",
            "Gate deploys on required checks only; no manual memory of 'it passed locally'",
            "Upload artifacts (coverage, bundles) visible in PR checks",
            "Keep total pipeline under 10 min p95; split flaky suites out for quarantine"
          ],
          pitfalls: ["Everything sequential behind one slow integration suite", "Cache keys ignoring lockfiles causing phantom dependency bugs"],
          kpis: ["p95 pipeline under 10 minutes", "Flake rate below 1%"]
        },
        {
          id: "deploy-strategies",
          title: "Choose and execute deploy strategies",
          level: "advanced", minutes: 35,
          description: "Rolling, blue-green, canary: pick per risk profile and wire automated rollback triggers.",
          tags: ["deployment", "rollbacks", "canary"],
          steps: [
            "Default to rolling with readiness gates for stateless services",
            "Canary risky changes: 5% traffic, auto-halt on error-rate delta",
            "Blue-green for schema-sensitive releases needing instant revert",
            "Every deploy ships with a one-command rollback rehearsed quarterly",
            "Verify post-deploy: synthetic checks plus error-budget burn alerting",
            "Record release notes linking PRs for audit trails"
          ],
          pitfalls: ["Migrations entangled with app deploys violating expand-contract", "Rollback tested for the first time during an incident"]
        }
      ]
    },
    {
      id: "infrastructure-as-code",
      label: "Infrastructure as Code",
      procedures: [
        {
          id: "terraform-module-design",
          title: "Design Terraform modules people reuse",
          level: "intermediate", minutes: 40,
          description: "Composable modules with typed variables, sensible defaults, and outputs that compose upward.",
          tags: ["terraform", "iac"],
          steps: [
            "One module = one architectural decision (a network, a service, a store)",
            "Type every variable; constrain with validation blocks",
            "Defaults for 80% cases; no secret values as defaults ever",
            "Outputs expose only what callers genuinely consume",
            "Tag resources uniformly: env, owner, repo, cost-center",
            "Version modules semver; changelog breaking moves loudly"
          ],
          pitfalls: ["Copy-pasted 800-line root modules nobody dares touch", "count vs for_each migrations destroying remote state"]
        },
        {
          id: "state-management",
          title: "Manage IaC state safely as a team",
          level: "intermediate", minutes: 30,
          description: "Remote state with locking, environment isolation, and least-privilege access so nobody corrupts prod.",
          tags: ["terraform", "state", "collaboration"],
          steps: [
            "Remote backends with locking enabled; never local state for shared infra",
            " Separate state per environment and blast-radius boundary",
            "Plan applies through CI with reviewed plan artifacts",
            "Restrict who can apply to prod; everyone can plan against staging copies",
            "Backup state versions; rehearse recovery from zero",
            "Import legacy resources deliberately with documentation"
          ],
          pitfalls: ["Shared state across envs turning staging apply into prod apply", "-replace used casually against stateful resources"]
        }
      ]
    },
    {
      id: "observability",
      label: "Observability",
      procedures: [
        {
          id: "golden-signals",
          title: "Instrument the four golden signals",
          level: "intermediate", minutes: 35,
          description: "Latency, traffic, errors, saturation per service with SLO thresholds that map to user pain.",
          tags: ["monitoring", "metrics", "slo"],
          steps: [
            "Emit RED metrics per endpoint: rate, errors, duration histograms",
            "Track saturation of the true bottleneck (connections, queue depth, CPU steal)",
            "Define SLOs from user journeys, not server uptime vanity",
            "Burn-rate alerts on fast+slow windows to catch real incidents early",
            "Dashboards ordered by journey, not by org chart",
            "Review signal usefulness quarterly; delete dashboards nobody opens"
          ],
          pitfalls: ["CPU alerts while users suffer on queue lag", "Averages hiding p99 cliffs"]
        },
        {
          id: "structured-logging",
          title: "Adopt structured logging that answers questions",
          level: "foundation", minutes: 25,
          description: "JSON logs with trace correlation and disciplined fields you can actually query at 3am.",
          tags: ["logging", "debugging"],
          steps: [
            "Log JSON with timestamp, level, service, route, request_id, user_id",
            "Propagate trace IDs across services and into log lines",
            "Reserve ERROR for things needing action; INFO is default heartbeat",
            "Never log secrets or PII; enforce with lint rules and sampling reviews",
            "Sample high-volume debug logs; keep 100% of errors",
            "Practice one query drill: 'find all errors for this user yesterday'"
          ],
          pitfalls: ["String-interpolated logs unsearchable in aggregators", "Stack traces swallowed into single-line messages"]
        }
      ]
    },
    {
      id: "incidents-vercel",
      label: "Incidents & Edge Deploys",
      procedures: [
        {
          id: "incident-response-flow",
          title: "Run a calm incident response flow",
          level: "intermediate", minutes: 30,
          description: "Roles, comms cadence, and mitigation-first mindset that turns chaos into checklist.",
          tags: ["incident-response", "sre"],
          steps: [
            "Declare early; assign Incident Commander separate from fixers",
            "Mitigate first (rollback, feature-flag off), root-cause later",
            "Post status updates every 30 min even when 'still investigating'",
            "Log timeline entries with timestamps as decisions happen",
            "End with customer-facing summary plus internal blameless retro within 48h",
            "Convert every retro action item into tracked issues with owners"
          ],
          pitfalls: ["Hero debugging without comms, stakeholders blind", "Retro actions dying in a doc"]
        },
        {
          id: "edge-deploy-workflow",
          title: "Ship frontends via edge platforms safely",
          level: "foundation", minutes: 20,
          description: "Preview-per-PR, promotion flows, and env hygiene on platforms like Vercel/Netlify.",
          tags: ["vercel", "deployment", "frontend"],
          steps: [
            "Every PR gets a preview URL wired to ephemeral env vars",
            "Protect prod: deploys gated on checks, promotions explicit not accidental",
            "Keep secrets in platform env settings, never committed .env files",
            "Alias domains to immutable deployments for instant rollback",
            "Use tokens/CI for machine deploys; browser OAuth breaks on clock drift",
            "Watch function limits: cold starts, memory, execution caps per plan tier"
          ],
          pitfalls: ["Team sharing one account instead of scoped tokens", "Preview branches hitting production databases"]
        },
        {
          slug: "vercel-token-deploy",
          authored: true,
          id: "token-deploy-cli",
          title: "Deploy to Vercel with token-based CLI auth",
          level: "intermediate", minutes: 15,
          commands: [
            { label: "Link project", cmd: "vercel link --yes --project <name> --token $VERCEL_TOKEN" },
            { label: "Production deploy", cmd: "vercel deploy --prod --yes --token $VERCEL_TOKEN" }
          ],
          description: "Authenticate Vercel CLI via a stored token instead of browser OAuth — the reliable path when clock drift breaks login flows. Use when deploying, linking projects, or scripting CI-style pushes.",
          tags: ["vercel", "cli", "deployment"],
          steps: [
            "Read the token from local storage at runtime into a shell variable only",
            "Never echo, log, commit, or write the token into any file",
            "Link once per project with vercel link --yes --project <name> --token $tok",
            "Ship production with vercel deploy --prod --yes --token $tok",
            "Prefer git push auto-deploys for repos already linked to GitHub integration",
            "Scope team with --scope when the token spans multiple teams"
          ],
          pitfalls: ["Browser login loops caused by PC clock skew — use tokens exclusively", "Tokens pasted into terminal history via inline export"]
        }
      ]
    }
  ]
};
