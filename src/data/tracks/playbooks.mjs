export const PLAYBOOKS = [
  {
    trackId: "ai-engineering",
    items: [
      { id: "rag-launch", title: "Launch a RAG feature end to end", goal: "Take retrieval-augmented answers from empty repo to evaluated production feature.", uses: ["rag-pipelines-chunking-strategy", "rag-pipelines-hybrid-search", "rag-pipelines-eval-rag-quality", "inference-mlops-latency-budgeting"], guidance: "Sequence matters: chunking decisions gate retrieval quality; evals gate launch. Do not skip golden-set creation even under deadline." },
      { id: "agent-safety", title: "Harden an agent before giving it tools", goal: "Ship an autonomous agent whose failure modes are cheap, visible, and reversible.", uses: ["agents-tool-design", "agents-agent-loop-guardrails", "inference-mlops-prompt-injection-defense"], guidance: "Design tools and guardrails together; retrofitting safety after autonomy is how headlines happen." },
      { id: "cost-rescue", title: "Cut LLM costs without quality collapse", goal: "Reduce monthly inference spend measurably while keeping answer quality within tolerance.", uses: ["inference-mlops-llm-cost-controls", "prompt-engineering-structured-output", "inference-mlops-latency-budgeting"], guidance: "Instrument first. Every routing/caching decision needs per-unit cost visibility or you're flying blind." }
    ]
  },
  {
    trackId: "frontend-engineering",
    items: [
      { id: "perf-rescue", title: "Rescue a slow frontend", goal: "Move a lagging app's Core Web Vitals into green without a rewrite.", uses: ["web-performance-core-web-vitals", "web-performance-image-pipeline", "web-performance-js-bundle-diet"], guidance: "Field data first, always. Fix LCP before INP before CLS — perceived speed compounds." },
      { id: "design-system-bootstrap", title: "Bootstrap a design system that sticks", goal: "Stand up tokens, primitives, and docs a team actually adopts.", uses: ["css-design-systems-design-tokens", "css-design-systems-responsive-layout-system", "css-design-systems-animation-craft"], guidance: "Tokens before components. A system nobody consumes is decoration." },
      { id: "a11y-pass", title: "Make an existing app accessible", goal: "Reach keyboard-complete, screen-reader-navigable flows on core journeys.", uses: ["accessibility-a11y-audit-pass", "accessibility-semantic-first-markup"], guidance: "Audit → triage criticals → fix patterns not pages. Patterns prevent the next audit finding everything again." }
    ]
  },
  {
    trackId: "backend-engineering",
    items: [
      { id: "api-v2", title: "Ship an API v2 safely", goal: "Introduce breaking API improvements while every existing client keeps working.", uses: ["api-design-rest-resource-modeling", "api-design-api-versioning-migration", "databases-zero-downtime-migrations"], guidance: "Expand-contract thinking applies to both schema AND endpoint surface. Parallel-run is the whole game." },
      { id: "db-perf", title: "Fix database performance under load", goal: "Cut p95 query times on a growing table set before the next traffic spike.", uses: ["databases-query-optimization", "caching-queues-cache-strategy-layers", "databases-schema-design-basics"], guidance: "Measure → index → cache, in that order. Caching a bad query hides it until invalidation day." },
      { id: "payments-safe", title: "Take payments without duplicates", goal: "Process money mutations with idempotency guarantees and clean audit trails.", uses: ["api-design-idempotency-keys", "auth-security-input-validation-zod", "caching-queues-background-jobs"], guidance: "Money endpoints get idempotency keys, validation schemas, and job-based side effects. No exceptions." }
    ]
  },
  {
    trackId: "devops-cloud",
    items: [
      { id: "ci-from-zero", title: "Stand up CI/CD from zero", goal: "Every PR tested, every merge deployable, every deploy reversible — in week one.", uses: ["ci-cd-pipeline-stages", "ci-cd-deploy-strategies", "containers-dockerfile-production"], guidance: "Fast feedback beats comprehensive coverage initially. Fail cheap, then deepen." },
      { id: "observability-boot", title: "Get observability before you need it", goal: "Golden signals, structured logs, and alerting wired before the first 3am page.", uses: ["observability-golden-signals", "observability-structured-logging", "incidents-vercel-incident-response-flow"], guidance: "SLOs from user journeys, alerts on burn rates. Practice the incident flow before the incident." },
      { id: "iac-adoption", title: "Adopt infrastructure-as-code incrementally", goal: "Bring existing cloud infra under versioned, reviewed management without downtime.", uses: ["infrastructure-as-code-terraform-module-design", "infrastructure-as-code-state-management"], guidance: "Import one resource class at a time starting with stateless pieces. State hygiene from day zero." }
    ]
  },
  {
    trackId: "cybersecurity",
    items: [
      { id: "appsec-baseline", title: "Establish an AppSec baseline", goal: "From nothing to systematic threat modeling, secrets hygiene, and review gates.", uses: ["application-security-threat-model-feature", "application-security-secrets-hygiene", "application-security-secure-code-review"], guidance: "Secrets first (fastest win), threat models next (cheapest prevention), reviews last (ongoing habit)." },
      { id: "cloud-hardening-sprint", title: "Harden cloud accounts in a sprint", goal: "Close the common cloud misconfiguration classes auditors and attackers both look for.", uses: ["cloud-hardening-iam-least-privilege", "cloud-hardening-patch-cadence"], guidance: "Inventory identities before touching policies. Least privilege without inventory breaks production." },
      { id: "ir-readiness", title: "Get incident-response ready", goal: "A team that has rehearsed breach first-hour steps and communication templates.", uses: ["incident-response-security-breach-first-hour", "incident-response-security-phishing-defense-program"], guidance: "Rehearse tabletop quarterly. The first hour is muscle memory, not reading comprehension." }
    ]
  },
  {
    trackId: "data-science",
    items: [
      { id: "analysis-trust", title: "Produce an analysis stakeholders trust", goal: "From raw tables to defensible findings with documented caveats.", uses: ["exploratory-analysis-dataset-health-check", "exploratory-analysis-correlation-causation", "experimentation-metric-definition-contracts"], guidance: "Health check before insight. One canonical metric definition prevents the follow-up war." },
      { id: "first-ab-test", title: "Run your first trustworthy A/B test", goal: "A correctly powered experiment with pre-committed decision rules.", uses: ["experimentation-ab-test-design", "exploratory-analysis-cohort-funnel-analysis"], guidance: "Sample size math BEFORE launch. Peeking destroys more experiments than bugs do." },
      { id: "ml-to-prod", title: "Take a model from notebook to production", goal: "Leakage-free validation and deployment-ready artifacts.", uses: ["ml-modeling-baseline-first-modeling", "ml-modeling-leakage-prevention"], guidance: "Baselines price complexity. Leakage checks protect the offline-online gap that surprises everyone once." }
    ]
  },
  {
    trackId: "product-management",
    items: [
      { id: "zero-to-spec", title: "From idea to engineering-ready spec", goal: "Validated problem turned into a one-page PRD engineers respect.", uses: ["discovery-customer-interviews", "prioritization-roadmap-opportunity-sizing", "specs-launch-prd-one-page"], guidance: "Interviews feed sizing feeds the PRD. Skipping discovery makes the PRD fiction." },
      { id: "launch-week", title: "Execute a coordinated launch week", goal: "Cross-functional release with support readiness, analytics verified, and rollback armed.", uses: ["specs-launch-launch-checklist", "prioritization-roadmap-roadmap-outcomes"], guidance: "Freeze early. Analytics verification is the most-skipped step and the most-regretted." },
      { id: "roadmap-reset", title: "Reset a stale roadmap", goal: "Quarterly outcome-based roadmap replacing the feature promise list.", uses: ["prioritization-roadmap-roadmap-outcomes", "prioritization-roadmap-prioritization-framework-fit"], guidance: "Kill zombie bets publicly. Roadmaps earn trust by subtraction as much as addition." }
    ]
  },
  {
    trackId: "engineering-leadership",
    items: [
      { id: "new-em-first90", title: "New engineering manager: first 90 days", goal: "Trust built, cadences running, one visible improvement shipped per month.", uses: ["people-management-one-on-ones", "team-process-sprint-ceremonies-audit", "team-process-tech-debt-strategy"], guidance: "Listen before changing. Ceremony audits in month two land better than in week one." },
      { id: "hire-loop-build", title: "Build a hiring loop that predicts success", goal: "Structured interviews with scorecards producing consistent, defensible signals.", uses: ["hiring-structured-interviews", "hiring-candidate-experience"], guidance: "Competencies derive from actual job outcomes. Candidate experience is employer brand." },
      { id: "oss-project-open", title: "Open-source an internal project well", goal: "A repository strangers can adopt: governance, docs, and triage from day one.", uses: ["open-source-stewardship-maintainer-triage", "technical-writing-docs-systems-diataxis-audit"], guidance: "Triage SLAs and docs types decide whether stars convert into contributors." }
    ]
  },
  {
    trackId: "people-hr",
    items: [
      { id: "role-hire", title: "Fill a role with quality and speed", goal: "Inclusive JD → bias-guarded screening → structured loop → great candidate experience.", uses: ["recruiting-jd-writing-inclusive", "recruiting-screening-bias-guards", "onboarding-offboarding-day-one-onboarding"], guidance: "The pipeline leaks at unstructured stages. Scorecards and rubrics plug them." },
      { id: "joiner-leaver", title: "Own the full joiner-to-leaver lifecycle", goal: "Day-one productivity and secure, humane exits with zero orphaned access.", uses: ["onboarding-offboarding-day-one-onboarding", "onboarding-offboarding-graceful-offboarding"], guidance: "Access provisioning and revocation are security events. Treat them with change-management rigor." },
      { id: "trust-loops", title: "Rebuild employee trust after rough patches", goal: "Visible listening → committed action → closed loops restoring survey participation.", uses: ["policy-engagement-engagement-pulse-loops", "policy-engagement-online-footprint-audit"], guidance: "One shipped action per cycle outweighs any comms campaign." }
    ]
  },
  {
    trackId: "biotech-pharma",
    items: [
      { id: "ngs-analysis", title: "Deliver an NGS analysis package", goal: "QC-passed, versioned, inspection-ready sequencing results with provenance.", uses: ["bioinformatics-seq-qc-pipeline", "bioinformatics-variant-calling-sop", "lab-informatics-protocol-versioning"], guidance: "Reference builds and tool versions recorded everywhere. Future-you and auditors both say thanks." },
      { id: "sample-lineage", title: "Achieve full sample traceability", goal: "Any result traces to origin sample through every derivation event.", uses: ["lab-informatics-eln-sample-lineage", "lab-informatics-protocol-versioning"], guidance: "IDs and event logging at entry beat reconciliation archaeology later." },
      { id: "inspection-prep", title: "Prepare for a GxP inspection", goal: "Documentation, audit trails, and staff narratives inspection-day ready.", uses: ["regulatory-clinical-gxp-documentation", "regulatory-clinical-clinical-data-cleanliness" ], guidance: "Rehearse request-to-record retrieval. Speed of retrieval IS the inspection impression." }
    ]
  },
  {
    trackId: "legal-compliance",
    items: [
      { id: "privacy-program", title: "Stand up a privacy program baseline", goal: "Data map, DSAR flow, and privacy-by-design triggers operating within one quarter.", uses: ["privacy-data-data-mapping-gdpr", "privacy-data-dsar-response-flow", "privacy-data-privacy-by-design-review"], guidance: "The map powers everything. Build it first and keep it living." },
      { id: "vendor-paper", title: "Triage vendor contracts at scale", goal: "Playbook-driven redline handling keeping legal review fast and consistent.", uses: ["contracts-ip-msa-redline-triage", "contracts-ip-ip-assignment-hygiene"], guidance: "Walk-away lists written before reading vendor paper prevents anchoring." },
      { id: "oss-compliance", title: "Get open-source compliance straight", goal: "License inventory and CI gates preventing copyleft surprises in proprietary code.", uses: ["contracts-ip-ip-assignment-hygiene", "engineering-leadership-open-source-stewardship-maintainer-triage"], guidance: "Automate license scanning at dependency-add time, not release time." }
    ]
  },
  {
    trackId: "scientific-research",
    items: [
      { id: "study-lifecycle", title: "Run a study from design to archive", goal: "Powered design → controlled execution → reproducible analysis → citable record.", uses: ["study-design-power-analysis-first", "study-design-control-condition-design", "reproducibility-computational-reproducibility", "reproducibility-electronic-lab-notebook"], guidance: "Preregistration and controls cost hours now and save the paper later." },
      { id: "paper-submission", title: "Take results to submission", goal: "Figure-led manuscript drafted efficiently and internally reviewed.", uses: ["publication-grants-paper-writing-order", "reproducibility-computational-reproducibility"], guidance: "Figures first, intro last. Reproducibility package doubles as reviewer confidence builder." },
      { id: "grant-cycle", title: "Survive a grant cycle", goal: "Reviewed proposal narrative aligned aims-to-budget submitted stress-free.", uses: ["publication-grants-grant-proposal-narrative", "reproducibility-electronic-lab-notebook"], guidance: "Preliminary data leads. Internal review two weeks before deadline is non-negotiable." }
    ]
  },
  {
    trackId: "startup-founders",
    items: [
      { id: "idea-to-mvp", title: "Idea to tested MVP in six weeks", goal: "Riskiest assumption isolated, smallest build shipped, honest signal collected.", uses: ["validation-mvp-mvp-scope-cutting", "validation-mvp-problem-validation-signals"], guidance: "Scope cuts are the product. Concierge versions count as MVPs." },
      { id: "seed-ready", title: "Become seed-round ready", goal: "Narrative deck, traction metrics, and growth loop story investors probe cleanly.", uses: ["growth-fundraising-founder-narrative-deck", "growth-fundraising-first-growth-loop"], guidance: "One compounding loop beats five flat channels. Honest numbers survive diligence; inflated ones die there." },
      { id: "first-engineers", title: "Hire your first engineers well", goal: "Founding-team hires assessed on outcomes with candidate experience intact.", uses: ["engineering-leadership-hiring-structured-interviews", "engineering-leadership-hiring-candidate-experience"], guidance: "Work-sample trials over brainteasers. Founding hires compound culture either direction." }
    ]
  },
  {
    trackId: "qa-testing",
    items: [
      { id: "automation-from-zero", title: "Start test automation that lasts", goal: "Pyramid-balanced suite with stable selectors gating deploys reliably.", uses: ["test-strategy-test-pyramid-balance", "automation-e2e-maintainable-selectors-playwright", "automation-flaky-test-elimination"], guidance: "Selector strategy decided day one saves months. Smoke suite first, depth later." },
      { id: "flake-cleanup", title: "Clean up a flaky test swamp", goal: "CI trusted again: quarantine live, root causes classed, red means broken.", uses: ["automation-flaky-test-elimination", "test-strategy-risk-based-testing"], guidance: "Quarantine restores trust immediately; root-causing keeps it." },
      { id: "release-confidence", title: "Build release confidence rituals", goal: "Exploratory sessions and readiness gates making go/no-go boring.", uses: ["exploratory-release-session-based-exploratory", "exploratory-release-release-readiness-review"], guidance: "Charters make exploration rigorous; gates make decisions defensible." }
    ]
  },
  {
    trackId: "freelance-business",
    items: [
      { id: "client-acquisition", title: "Land better clients this quarter", goal: "Niche positioning feeding proposals that close at healthy rates.", uses: ["winning-clients-positioning-niche", "winning-clients-proposal-that-closes", "client-delivery-pricing-for-value"], guidance: "Positioning precedes pricing. Premium claims need niche proof artifacts." },
      { id: "delivery-machine", title: "Deliver projects without margin bleed", goal: "Scope control and communication rhythms protecting profit and relationships.", uses: ["client-delivery-scope-change-control", "client-delivery-pricing-for-value"], guidance: "Same-day recap emails are your contract enforcement mechanism." },
      { id: "rate-raise", title: "Raise rates sustainably", goal: "Floor math, value anchors, and migration scripts moving existing clients up.", uses: ["client-delivery-pricing-for-value", "winning-clients-proposal-that-closes"], guidance: "Never discount; rescope. Track effective hourly rate per client quarterly." }
    ]
  },
  {
    trackId: "technical-writing",
    items: [
      { id: "docs-overhaul", title: "Overhaul a neglected docs site", goal: "Sorted page types, working pipelines, and freshness signals readers trust again.", uses: ["docs-systems-diataxis-audit", "docs-systems-docs-as-code-workflow", "dev-content-changelog-users-read"], guidance: "Sort types before rewriting anything. Half the mess resolves itself once modes separate." },
      { id: "api-docs-ship", title: "Ship API documentation developers praise", goal: "Copy-paste-working references with tested examples and honest errors sections.", uses: ["api-reference-endpoint-doc-pattern", "api-reference-tutorial-craft"], guidance: "CI-tested examples separate good API docs from decorative ones." },
      { id: "content-engine", title: "Run a developer-content engine", goal: "Story-driven posts and changelogs compounding into audience and trust.", uses: ["dev-content-debugging-story-post", "dev-content-changelog-users-read"], guidance: "Method over drama in stories; outcomes over commits in changelogs." }
    ]
  },
  {
    trackId: "engineering-essentials",
    items: [
      { id: "legacy-onboarding", title: "Onboard onto a legacy codebase fast", goal: "Mental model built through safe probes, tests, and first merged fix within two weeks.", uses: ["debug-craft-systematic-bug-hunt-node", "code-quality-refactor-safely-python", "collab-workflow-git-discipline-go"], guidance: "Pick any stack variant matching the codebase. Characterization tests are your map." },
      { id: "quality-sprint", title: "Run a quality improvement sprint", goal: "Measurable code health gains: coverage gaps, hot spots, and review debt addressed.", uses: ["code-quality-code-review-checklist-rust", "code-quality-performance-profiling-java", "debug-craft-production-debugging-dotnet"], guidance: "Choose targets by risk × churn. One theme per sprint; quality sprints fail by diffusion." },
      { id: "incident-learning", title: "Learn from production incidents properly", goal: "Blameless retro turning each incident into systemic fixes, not scar tissue.", uses: ["debug-craft-production-debugging-python", "collab-workflow-async-communication-node"], guidance: "Timeline from evidence, actions with owners, and a follow-up review date." }
    ]
  },
  {
    trackId: "healthcare-clinical",
    items: [
      { id: "safe-transitions", title: "Make care transitions bulletproof", goal: "Handoffs, medication reconciliation, and escalation thresholds operating as one system.", uses: ["clinical-workflow-shift-handoff-isbar", "clinical-workflow-med-rec-reconciliation", "clinical-workflow-deterioration-escalation"], guidance: "Most preventable harm concentrates at transitions — standardize all three together." },
      { id: "quality-project", title: "Lead your first quality improvement project", goal: "A measurable process change sustained beyond the pilot window.", uses: ["quality-informatics-quality-improvement-cycle", "quality-informatics-cdss-alert-review"], guidance: "Baseline data before change; run-chart after. Sustainment is the real finish line." },
      { id: "patient-edu", title: "Upgrade patient education outcomes", goal: "Teach-back embedded in routine discharge and education flows.", uses: ["quality-informatics-patient-teach-back", "clinical-workflow-med-rec-reconciliation"], guidance: "Pair teach-back with reconciled med lists at discharge — readmission prevention compounds." }
    ]
  },
  {
    trackId: "finance-fintech",
    items: [
      { id: "payments-launch", title: "Launch money movement safely", goal: "Double-entry ledger, reliable webhooks, and daily reconciliation live before scale.", uses: ["payments-engineering-ledger-design-double-entry", "payments-engineering-webhook-reliability-payments", "payments-engineering-reconciliation-flow"], guidance: "Ledger correctness is non-negotiable day one; everything else can iterate around it." },
      { id: "risk-baseline", title: "Stand up a fraud defense baseline", goal: "Rules for non-negotiables, scored model, review queue, and feedback loop running.", uses: ["risk-modeling-fraud-rules-vs-model", "finance-fintech-unit-economics-tracking"], guidance: "Measure friction cost alongside fraud loss or you'll optimize into blocking good customers." },
      { id: "model-audit-ready", title: "Get models audit-ready", goal: "Assumptions traceable and unit economics defensible under diligence.", uses: ["risk-modeling-financial-model-hygiene", "risk-modeling-unit-economics-tracking"], guidance: "Auditors follow references, not vibes. One assumption cell per driver." }
    ]
  },
  {
    trackId: "education-learning",
    items: [
      { id: "course-launch", title: "Ship an online course that gets finished", goal: "Objective-aligned modules produced, accountability mechanics live, completion measured.", uses: ["instructional-design-learning-objectives-measurable", "instructional-design-course-production-online", "classroom-assessment-rubric-construction"], guidance: "Objectives gate assessments gate modules. Build backwards from the transformation promised." },
      { id: "lesson-system", title: "Build a repeatable lesson system", goal: "Every lesson planned on attention rhythms with misconception responses ready.", uses: ["instructional-design-lesson-plan-craft", "classroom-assessment-behavior-system-design"], guidance: "Prevent management problems through engagement design, not willpower." },
      { id: "fair-assessment", title: "Grade fairly at scale", goal: "Rubrics calibrated, blind scoring practiced, distributions analyzed each cycle.", uses: ["classroom-assessment-rubric-construction", "instructional-design-learning-objectives-measurable"], guidance: "If a criterion never differentiates, delete it — rubrics are measurement instruments." }
    ]
  },
  {
    trackId: "ux-research",
    items: [
      { id: "discovery-sprint", title: "Run a two-week discovery sprint", goal: "Usability findings plus survey baseline synthesized into ranked recommendations.", uses: ["research-methods-usability-test-script", "research-methods-survey-instrument-quality", "research-methods-synthesis-affinity"], guidance: "Sequence matters: tests reveal behavior, surveys quantify prevalence, synthesis ties them." },
      { id: "evidence-culture", title: "Build an evidence-driven design culture", goal: "Critique rituals and journey maps grounding decisions in user reality.", uses: ["design-practice-design-review-run", "design-practice-journey-mapping-service"], guidance: "Reviews cite evidence; maps get revisited. Rituals beat posters." },
      { id: "research-ops-light", title: "Set up lightweight research ops", goal: "Reusable scripts, participant pools, and insight repositories compounding across studies.", uses: ["research-methods-usability-test-script", "research-methods-synthesis-affinity"], guidance: "Templates + tagged repository = institutional memory most teams never build." }
    ]
  },
  {
    trackId: "sales-success",
    items: [
      { id: "founder-selling", title: "Founder-led selling playbook", goal: "Discovery discipline and honest pipeline from first customer conversations.", uses: ["discovery-deal-discovery-call-framework", "discovery-deal-pipeline-hygiene-review", "discovery-deal-objection-reframe"], guidance: "Founders over-demo. Discovery ratios and exit criteria keep deals real." },
      { id: "pipeline-rescue", title: "Rescue a stalled pipeline", goal: "Honest re-qualification, slippage reviews, and rebuilt forecast credibility.", uses: ["discovery-deal-pipeline-hygiene-review", "retention-expansion-qbr-that-expands"], guidance: "Delete zombie deals first. Clean pipe reveals the true problem." },
      { id: "retention-engine", title: "Install a retention engine", goal: "Health signals firing interventions months before renewal dates.", uses: ["retention-expansion-churn-risk-signal-system", "retention-expansion-qbr-that-expands"], guidance: "Signals need playbooks need owners. All three or nothing fires." }
    ]
  },
  {
    trackId: "data-engineering",
    items: [
      { id: "warehouse-zero", title: "Warehouse from zero to trusted", goal: "Contracted schemas, tested tables, dimensional models analysts rely on.", uses: ["pipelines-batch-schema-evolution-contracts", "pipelines-batch-dq-tests-warehouse-snowflake", "streaming-modeling-dimensional-modeling-refresh"], guidance: "Pick the DQ variant matching your platform. Contracts precede consumers." },
      { id: "pipeline-reliability", title: "Make pipelines boring again", goal: "Rerunnable stages, freshness SLAs, and alert fatigue eliminated.", uses: ["pipelines-batch-pipeline-idempotency", "pipelines-batch-dq-tests-warehouse-bigquery"], guidance: "Idempotency converts failures from incidents into retries." },
      { id: "streaming-hardening", title: "Harden a streaming platform", goal: "Correct event-time semantics with bounded state and monitored watermarks.", uses: ["streaming-modeling-stream-processing-windows", "pipelines-batch-pipeline-idempotency"], guidance: "Watermark lag tells the truth; dashboards lag it." }
    ]
  },
  {
    trackId: "marketing-growth",
    items: [
      { id: "messaging-reset", title: "Reset positioning from customer truth", goal: "Verbatim-mined hierarchy live across site, decks, and ads within a month.", uses: ["positioning-content-messaging-hierarchy", "lifecycle-campaigns-campaign-measurement-plan"], guidance: "Steal the words customers already use; test comprehension cold." },
      { id: "content-flywheel", title: "Spin up the content flywheel", goal: "Cluster strategy shipping weekly with distribution loops and refresh cycles.", uses: ["positioning-content-content-engine-compounding", "lifecycle-campaigns-lifecycle-email-flows"], guidance: "Sustainable cadence beats viral sprints. Refreshes outperform novelties." },
      { id: "lifecycle-overhaul", title: "Overhaul lifecycle marketing", goal: "Behavior-triggered flows replacing calendar blasts, deliverability protected.", uses: ["lifecycle-campaigns-lifecycle-email-flows", "lifecycle-campaigns-campaign-measurement-plan"], guidance: "Sunset aggressively. Deliverability is the asset; every send spends it." }
    ]
  },
  {
    trackId: "game-interactive",
    items: [
      { id: "vertical-slice", title: "Nail the vertical slice", goal: "One minute of gameplay proving fun, budget, and pipeline before full production.", uses: ["gameplay-systems-game-feel-tuning", "performance-liveops-frame-budget-profiling"], guidance: "Slice proves the core loop on min-spec hardware. Everything else follows." },
      { id: "live-event-launch", title: "Launch your first live event", goal: "Server-configured event shipped through staged rollout with kill switch rehearsed.", uses: ["performance-liveops-live-event-pipeline", "gameplay-systems-save-system-design"], guidance: "Rehearse the shutdown path. Live-ops maturity is measured by incident response." },
      { id: "perf-rescue-game", title: "Rescue a frame-rate crisis", goal: "Budgets allocated, profiling cadence installed, top offenders fixed measurably.", uses: ["performance-liveops-frame-budget-profiling", "gameplay-systems-game-feel-tuning"], guidance: "Profile on median player hardware. Fix #1 only, then re-measure." }
    ]
  }
];
