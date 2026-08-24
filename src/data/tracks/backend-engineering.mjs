export const track = {
  id: "backend-engineering",
  label: "Backend Engineering",
  icon: "⚙️",
  gradient: "from-blue-500 via-cyan-500 to-teal-400",
  ring: "ring-blue-500/30",
  text: "text-blue-400",
  blurb: "APIs, databases, caching, queues, and auth that stay fast and correct under load.",
  roles: ["Backend Engineers", "API Developers", "Platform Engineers", "Full-Stack Developers"],
  domains: [
    {
      id: "api-design",
      label: "API Design",
      procedures: [
        {
          id: "rest-resource-modeling",
          title: "Model REST resources without leaking internals",
          level: "foundation", minutes: 30,
          description: "Design stable resource-oriented endpoints with deliberate error contracts and pagination.",
          tags: ["rest", "api", "http"],
          steps: [
            "List nouns (resources) from the domain; map verbs to HTTP methods",
            "Pluralize collections; nest at most one level for ownership",
            "Standardize errors as {code, message, details} with correct status codes",
            "Paginate every collection by cursor; never offset past 10k rows",
            "Version in the URL path from v1; document deprecation policy",
            "Publish an OpenAPI spec and generate clients from it"
          ],
          pitfalls: ["RPC-in-disguise endpoints like /getUserData", "Leaking column names and internal IDs in payloads"],
          variants: {
            graphql: { id: "graphql", label: "GraphQL flavor", adds: ["Schema-first types; expose one query root per aggregate", "Enforce depth and complexity limits; disable introspection in prod if needed"] },
            rpc: { id: "rpc", label: "gRPC services", adds: ["Define proto packages with backward-compatible field numbering", "Map gRPC status codes to HTTP at the gateway"] }
          }
        },
        {
          id: "idempotency-keys",
          title: "Make writes safe with idempotency keys",
          level: "intermediate", minutes: 30,
          description: "Accept retried mutations gracefully by keying operations so duplicates return the original result.",
          tags: ["reliability", "payments", "api"],
          steps: [
            "Require an Idempotency-Key header on POST payments, orders, and signups",
            "Store key + request hash + response in a table with TTL cleanup",
            "On replay with same payload, return stored response with replayed flag",
            "On same key different payload, reject with 422 conflict",
            "Expire keys after 24-48h depending on client retry windows",
            "Load-test double-submit behavior before launch week"
          ],
          pitfalls: ["Keying only by user ID, colliding legitimate new requests", "Storing responses forever without TTL or encryption"]
        },
        {
          id: "api-versioning-migration",
          title: "Migrate API versions without breaking clients",
          level: "advanced", minutes: 40,
          description: "Run two versions in parallel, observe usage, and sunset safely with real telemetry.",
          tags: ["versioning", "migration"],
          steps: [
            "Ship vN+1 alongside vN behind the same gateway; no big-bang cutover",
            "Tag responses with version header so bug reports are attributable",
            "Instrument per-client version adoption; email laggards with deadlines",
            "Keep a contract test suite pinned per version in CI",
            "Announce sunset twice: 90 days and 14 days before shutdown",
            "Return 410 with migration guide URL after the date, not silent 404s"
          ],
          pitfalls: ["Silent breaking changes hidden inside 'minor' fixes", "Sunsetting before the top-3 consumers migrate"]
        }
      ]
    },
    {
      id: "databases",
      label: "Databases",
      procedures: [
        {
          id: "schema-design-basics",
          title: "Design schemas for change",
          level: "foundation", minutes: 35,
          description: "Normalize enough to stay consistent, denormalize deliberately where reads demand it.",
          tags: ["sql", "schema", "data-modeling"],
          steps: [
            "Identify entities and relationships; write 10 queries you must answer well",
            "Normalize to 3NF by default; document any intentional denormalization",
            "Use UUIDs or bigint PKs; never emails or natural keys",
            "Add created_at/updated_at with DB-level defaults on every table",
            "Constrain with FKs, CHECKs, and NOT NULL — let the DB defend integrity",
            "Review growth estimates: which table hits 100M rows first, plan partitioning now"
          ],
          pitfalls: ["Soft-delete columns complicating every unique constraint", "Storing money as float instead of integer minor units"],
          variants: {
            postgres: { id: "postgres", label: "PostgreSQL", adds: ["Prefer text with CHECK over varchar(n) unless limits are contractual", "Use partial indexes for hot filtered subsets"] },
            mongo: { id: "mongodb", label: "MongoDB", adds: ["Model around access patterns: embed what reads together", "Validate with JSON Schema at the driver level"] },
            mysql: { id: "mysql", label: "MySQL", adds: ["Pick InnoDB with utf8mb4; watch index length limits", "Beware implicit type coercion in joins"] }
          }
        },
        {
          id: "query-optimization",
          title: "Optimize the slow queries actually hurting you",
          level: "intermediate", minutes: 35,
          description: "Find top offenders from real traffic, read plans, add targeted indexes, verify improvements.",
          tags: ["performance", "sql", "indexes"],
          steps: [
            "Pull top-10 queries by total time from pg_stat_statements or slow log",
            "Read EXPLAIN (ANALYZE) for each; find seq scans on growing tables",
            "Index to match predicates AND sorts (composite order matters)",
            "Cover hot read paths with covering indexes where sensible",
            "Re-measure p95 after deploy; drop indexes that nobody uses",
            "Guard CI against new seq-scan regressions on core tables"
          ],
          pitfalls: ["Indexing every column 'just in case', tanking write throughput", "Functions wrapping indexed columns, silently disabling them"]
        },
        {
          id: "zero-downtime-migrations",
          title: "Run zero-downtime schema migrations",
          level: "advanced", minutes: 40,
          description: "Expand-contract deployments so schema changes ship without locking tables or breaking running code.",
          tags: ["migrations", "deployments", "sql"],
          steps: [
            "Expand: add nullable columns/tables first; deploy code writing both paths",
            "Backfill in batches with sleep/throttling; monitor replication lag",
            "Switch reads to the new shape behind a flag; verify parity metrics",
            "Contract: remove old columns only after N days of clean telemetry",
            "Never rename or drop during peak; schedule low-traffic windows",
            "Test every migration against a production-size snapshot first"
          ],
          pitfalls: ["CREATE INDEX without CONCURRENTLY blocking writes", "Deploying code that assumes new column before migration runs"]
        }
      ]
    },
    {
      id: "caching-queues",
      label: "Caching & Queues",
      procedures: [
        {
          id: "cache-strategy-layers",
          title: "Layer caching with explicit invalidation",
          level: "intermediate", minutes: 35,
          description: "Decide what caches where (CDN, app, Redis) and how entries die so staleness stays bounded.",
          tags: ["caching", "redis", "cdn"],
          steps: [
            "Classify data: immutable (cache forever), mutable-TTL, never-cache (money)",
            "Cache at CDN for anonymous GETs with stale-while-revalidate",
            "Memoize expensive computed objects in-process with short TTL",
            "Use Redis for shared cross-instance state; set TTLs on everything",
            "Invalidate by key pattern on write events, not manual flushes",
            "Monitor hit-rate per layer; below 60% means wrong layer or wrong keys"
          ],
          pitfalls: ["Caching authenticated responses at shared CDN edge", "Thundering herd on expiry without jitter or locks"]
        },
        {
          id: "background-jobs",
          title: "Build trustworthy background job processing",
          level: "intermediate", minutes: 35,
          description: "Queue async work with retries, dead-letters, and observability so failures surface instead of vanishing.",
          tags: ["queues", "async", "reliability"],
          steps: [
            "Make handlers idempotent; assume at-least-once delivery",
            "Set exponential backoff with jitter; cap retries at sane counts",
            "Dead-letter poison messages with full context for triage",
            "Separate queues by latency class and priority; prevent head-of-line blocking",
            "Emit metrics: depth, age of oldest job, success rate, duration percentiles",
            "Alert on oldest-job-age, not just queue depth"
          ],
          pitfalls: ["Long jobs blocking a shared queue of quick tasks", "Silent retries masking a permanently failing handler"]
        }
      ]
    },
    {
      id: "auth-security",
      label: "Auth & Security Basics",
      procedures: [
        {
          id: "session-auth-hardening",
          title: "Harden session authentication",
          level: "intermediate", minutes: 35,
          description: "Cookies, rotation, and revocation done right for server-rendered apps.",
          tags: ["auth", "sessions", "cookies"],
          steps: [
            "Store session ID in HttpOnly, Secure, SameSite=Lax cookies",
            "Rotate session IDs on login and privilege change",
            "Keep server-side session records enabling instant revocation",
            "Expire idle sessions; re-authenticate before sensitive actions",
            "Rate-limit login and reset endpoints per IP and per account",
            "Log auth events to an append-only trail with device metadata"
          ],
          pitfalls: ["JWTs in localStorage inviting XSS token theft", "No server-side revocation after 'logout everywhere' requests"]
        },
        {
          id: "input-validation-zod",
          title: "Validate all external input at the boundary",
          level: "foundation", minutes: 25,
          description: "Parse, don't validate: coerce untrusted input into typed values once at the edge.",
          tags: ["validation", "security"],
          steps: [
            "Define schemas per endpoint covering body, query, params, headers",
            "Reject unknown fields by default; allowlists beat blocklists",
            "Coerce types explicitly; fail closed on ambiguity",
            "Return field-level errors machines can render",
            "Reuse the same schemas for client-side forms where possible",
            "Fuzz one nasty payload corpus against public endpoints in CI"
          ],
          pitfalls: ["Validating in UI but trusting raw req.body server-side", "Mass assignment from spreads straight into ORM updates"]
        }
      ]
    }
  ]
};
