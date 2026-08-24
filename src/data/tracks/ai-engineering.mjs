export const track = {
  id: "ai-engineering",
  label: "AI Engineering",
  icon: "🤖",
  gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
  ring: "ring-violet-500/30",
  text: "text-violet-400",
  blurb: "Ship reliable LLM systems: RAG, agents, evals, fine-tuning, and inference ops.",
  roles: ["AI Engineers", "ML Engineers", "LLM App Developers", "Agent Builders"],
  domains: [
    {
      id: "rag-pipelines",
      label: "RAG Pipelines",
      procedures: [
        {
          id: "chunking-strategy",
          title: "Design a chunking strategy for retrieval",
          level: "foundation", minutes: 25,
          description: "Choose chunk sizes, overlaps, and structure-aware splits so retrieved context actually helps the model answer.",
          tags: ["rag", "embeddings", "retrieval"],
          steps: [
            "Profile source documents: length distribution, headings, tables, code blocks",
            "Pick structural splitter first (headings/paragraphs) over fixed character cuts",
            "Set chunk size from your model's effective context budget minus prompt overhead",
            "Add 10-20% overlap so facts spanning boundaries survive retrieval",
            "Attach metadata per chunk: source title, section path, date, permissions",
            "Build 20 golden questions and measure retrieval hit-rate before scaling up"
          ],
          pitfalls: [
            "Fixed-size chunks that slice tables and lists into meaningless fragments",
            "Chunks larger than half the context window, starving the actual answer space",
            "No overlap, causing answers that cite half a sentence cut at a boundary"
          ],
          kpis: ["Recall@5 above 85% on golden set", "Median chunks-per-answer under 6"]
        },
        {
          id: "hybrid-search",
          title: "Implement hybrid keyword + vector search",
          level: "intermediate", minutes: 35,
          description: "Combine BM25-style lexical search with dense embeddings and fuse results so both rare terms and paraphrases are found.",
          tags: ["rag", "search", "bm25"],
          steps: [
            "Stand up a lexical index (BM25) alongside your vector index on the same chunks",
            "Embed queries with the same model and distance metric used at ingestion",
            "Retrieve top-k from both indexes with k at least double your final context size",
            "Fuse rankings with Reciprocal Rank Fusion (RRF), k=60 as default",
            "Optionally rerank fused candidates with a cross-encoder on top-50",
            "A/B against pure-vector on your golden questions; keep the winner per query class"
          ],
          pitfalls: ["Mixing similarity metrics between ingestion and query time", "Fusing raw scores instead of ranks across incompatible scales"],
          kpis: ["Hit-rate lift over best single retriever", "P95 retrieval latency under 300ms"]
        },
        {
          id: "eval-rag-quality",
          title: "Evaluate RAG answer quality automatically",
          level: "advanced", minutes: 45,
          description: "Score groundedness, relevance, and completeness with judge prompts plus deterministic checks wired into CI.",
          tags: ["evals", "quality", "ci"],
          steps: [
            "Freeze 30-100 test questions with known-good source passages",
            "Run deterministic checks first: citation present, answer not empty, no refusal",
            "Use an LLM judge with rubric scores 1-5 for groundedness and relevance",
            "Swap judge models occasionally; if two judges disagree widely, fix the rubric",
            "Log every eval artifact: question, chunks used, answer, scores, cost, latency",
            "Block merges when groundedness average drops more than 0.3 below baseline"
          ],
          pitfalls: ["Judging with the same model that generated the answer, inflating scores", "Evals only run manually, drifting from production reality"],
          kpis: ["Groundedness average 4.3+ of 5", "Eval suite runtime under 10 minutes"]
        }
      ]
    },
    {
      id: "agents",
      label: "AI Agents",
      procedures: [
        {
          id: "tool-design",
          title: "Design tools an agent can use reliably",
          level: "intermediate", minutes: 40,
          description: "Shape tool names, parameters, descriptions, and error messages so the agent calls the right tool with valid arguments.",
          tags: ["agents", "tools", "function-calling"],
          steps: [
            "One tool = one verb-noun responsibility; split anything doing two jobs",
            "Write parameter descriptions that state format and units explicitly",
            "Return structured errors the agent can self-correct from, never stack traces",
            "Make tools idempotent where possible; require confirmation flags for destructive ones",
            "Cap list results and paginate instead of dumping unbounded payloads",
            "Test with adversarial phrasings that should NOT trigger the tool"
          ],
          pitfalls: ["Overlapping tools forcing the model to guess between near-duplicates", "Boolean success returns hiding why a call failed"],
          kpis: ["Tool-call validity rate above 95%", "Zero destructive calls without confirmation"]
        },
        {
          id: "agent-loop-guardrails",
          title: "Add guardrails to autonomous agent loops",
          level: "advanced", minutes: 45,
          description: "Bound agent autonomy with step budgets, spend caps, human gates, and checkpointing so failures stay cheap and debuggable.",
          tags: ["agents", "safety", "orchestration"],
          steps: [
            "Set hard max-step and max-token budgets; treat exhaustion as a normal outcome",
            "Checkpoint full state after every step so runs resume or replay cleanly",
            "Require explicit human approval before irreversible external actions",
            "Detect loops: identical tool+args twice means intervene or abort",
            "Emit structured events per step for tracing and postmortems",
            "Run a canary suite of risky tasks nightly and alert on behavior drift"
          ],
          pitfalls: ["Unbounded retry loops burning budget on a failing subgoal", "Approving via broad allowlists instead of per-action gates"],
          kpis: ["Mean steps-to-completion trending down", "100% of destructive actions behind approval"]
        },
        {
          id: "multi-agent-handoffs",
          title: "Structure multi-agent handoffs",
          level: "advanced", minutes: 50,
          description: "Split work across specialized agents with typed handoff contracts so context survives delegation without ballooning.",
          tags: ["agents", "architecture"],
          steps: [
            "Give each agent one role, its own system prompt, and a minimal toolset",
            "Define handoff payloads as typed objects: goal, constraints, artifacts, done-criteria",
            "Pass summaries and pointers between agents, never full transcripts",
            "Keep an orchestrator that owns retries and escalation to humans",
            "Log which agent produced each artifact for attribution and debugging",
            "Load-test worst-case fan-out before enabling parallel subagents"
          ],
          pitfalls: ["Agents debating in circles because ownership is ambiguous", "Context bloat from forwarding entire conversation histories"]
        }
      ]
    },
    {
      id: "prompt-engineering",
      label: "Prompt Engineering",
      procedures: [
        {
          id: "system-prompt-arch",
          title: "Architect a maintainable system prompt",
          level: "foundation", minutes: 30,
          description: "Organize identity, rules, tools, and output contracts into sections that evolve without breaking behavior.",
          tags: ["prompts", "llm"],
          steps: [
            "Section order: identity, capabilities, hard rules, task guidance, output format, examples",
            "State hard rules as short imperatives; explain rationale only when it changes behavior",
            "Put the output contract last and show one canonical example",
            "Version the prompt like code; change one concern per revision",
            "Keep a regression set of 15 prompts run after every edit",
            "Delete anything that survived three revisions without effect"
          ],
          pitfalls: ["Conflicting rules buried mid-prompt that silently override each other", "Examples contradicting the stated format"],
          kpis: ["Regression pass rate 100% on releases", "Prompt length trending down"]
        },
        {
          id: "few-shot-selection",
          title: "Select few-shot examples that move accuracy",
          level: "intermediate", minutes: 30,
          description: "Choose and order examples covering edge cases so the model generalizes instead of copying surface patterns.",
          tags: ["prompts", "few-shot"],
          steps: [
            "Cover each output field's edge cases once: empty, unicode, long input, ambiguity",
            "Order examples easy-to-hard so difficulty ramps within context",
            "Match example format byte-for-byte to the required output format",
            "Prefer real production samples over invented ones",
            "Rotate in failure cases you fixed, turning regressions into teachers",
            "Measure: remove one example at a time, drop any whose removal costs nothing"
          ],
          pitfalls: ["Six near-identical easy examples teaching style but not judgment", "Whitespace mismatches between examples and instructions"],
          variants: {
            classification: { id: "cls", label: "Classification tasks", adds: ["Include one deliberately ambiguous item with the correct tie-break label", "Balance classes in examples; imbalance biases predictions"] },
            extraction: { id: "extr", label: "Extraction tasks", adds: ["Show null handling for missing fields explicitly", "Demonstrate normalization: dates, currencies, units"] }
          }
        },
        {
          id: "structured-output",
          title: "Guarantee structured outputs from LLMs",
          level: "intermediate", minutes: 35,
          description: "Get machine-parseable JSON reliably using schema-first prompting, constrained decoding, and repair loops.",
          tags: ["json", "structured-output", "reliability"],
          steps: [
            "Provide the JSON Schema in the prompt and ask for schema-valid output only",
            "Prefer provider-native structured-output or function-calling modes when available",
            "Set temperature low for extraction; reserve high temperature for ideation tasks",
            "Validate with a strict parser; reject unknown keys and wrong types",
            "On failure, re-ask once including the validation error verbatim",
            "Quarantine repeated failures to a dead-letter store for rubric fixes"
          ],
          pitfalls: ["Parsing with regex instead of a real schema validator", "Accepting markdown-fenced JSON silently breaking downstream parsers"]
        }
      ]
    },
    {
      id: "fine-tuning-adaptation",
      label: "Fine-tuning & Adaptation",
      procedures: [
        {
          id: "dataset-prep-sft",
          title: "Prepare supervised fine-tuning datasets",
          level: "advanced", minutes: 60,
          description: "Clean, deduplicate, and balance instruction-response pairs so fine-tuning learns behavior rather than noise.",
          tags: ["fine-tuning", "datasets", "training"],
          steps: [
            "Define the target behavior as 5 crisp capability statements before collecting data",
            "Deduplicate near-identical pairs; duplicates amplify artifacts",
            "Balance coverage across capabilities, lengths, and difficulty tiers",
            "Hold out 3% as an untouched eval split mirroring real traffic",
            "Scrub PII and secrets with automated scans plus human spot checks",
            "Start LoRA-scale: 500-2000 high-quality pairs beat 50k scraped ones"
          ],
          pitfalls: ["Training on outputs of the same model you are tuning, compounding errors", "Response style inconsistent across contributors"],
          kpis: ["Eval-split win-rate vs base model above 70%", "Zero PII findings in pre-flight scan"]
        },
        {
          id: "when-not-to-finetune",
          title: "Decide between prompting, RAG, and fine-tuning",
          level: "foundation", minutes: 20,
          description: "Pick the cheapest adaptation layer that solves the problem using a decision ladder.",
          tags: ["strategy", "architecture", "cost"],
          steps: [
            "Try prompt engineering first: most 'model gaps' are specification gaps",
            "If failures are missing knowledge, add retrieval, not weights",
            "If failures are format/tone/style consistency, consider light fine-tuning",
            "Estimate 12-month cost per option including maintenance, not just training",
            "Prototype the winner in one week; if gains are marginal, revert to cheaper tier",
            "Document the decision and revisit when base models jump a generation"
          ],
          pitfalls: ["Fine-tuning to inject facts that go stale within months", "Skipping the cheap baseline entirely"]
        }
      ]
    },
    {
      id: "inference-mlops",
      label: "Inference & MLOps",
      procedures: [
        {
          id: "latency-budgeting",
          title: "Budget LLM latency end to end",
          level: "intermediate", minutes: 30,
          description: "Allocate milliseconds across retrieval, prompting, generation, and streaming so p95 meets product targets.",
          tags: ["performance", "latency", "streaming"],
          steps: [
            "Trace one real request through every hop and record percentile timings",
            "Fix a p95 target from UX research, not infrastructure convenience",
            "Stream tokens to first-paint; perceived latency beats raw latency",
            "Cap retrieved context by latency cost, not just token count",
            "Cache stable prefixes: system prompts, few-shots, static context",
            "Alert when any hop exceeds 40% of total budget for an hour"
          ],
          pitfalls: ["Optimizing model choice while network hops dominate", "Non-streaming endpoints behind slow proxies"]
        },
        {
          id: "llm-cost-controls",
          title: "Control LLM spend without killing quality",
          level: "intermediate", minutes: 30,
          description: "Route by task complexity, cache aggressively, and enforce budgets so unit economics hold as usage grows.",
          tags: ["cost", "routing", "caching"],
          steps: [
            "Tag every request with feature and tenant for per-unit cost attribution",
            "Route simple tasks to small models using a trained classifier or heuristics",
            "Cache exact and semantic matches; measure hit-rate weekly",
            "Compress context: prune, summarize history, cap tool outputs",
            "Set per-key and per-tenant daily caps with graceful degradation paths",
            "Review the top ten most expensive prompts monthly and shrink them"
          ],
          pitfalls: ["Premium model answering 'is this email spam?'", "Semantic caches keyed too loosely, returning stale answers"]
        },
        {
          id: "prompt-injection-defense",
          title: "Defend pipelines against prompt injection",
          level: "advanced", minutes: 40,
          description: "Treat all retrieved content as untrusted input: isolate instructions from data, gate actions, and fuzz continuously.",
          tags: ["security", "agents", "prompt-injection"],
          steps: [
            "Separate instruction and data channels structurally, not just by prose",
            "Never grant the executor credentials beyond the current task's scope",
            "Gate outbound actions (email, payments, deletes) behind policy checks",
            "Strip or neutralize instruction-like patterns in retrieved documents",
            "Maintain an injection corpus from public benchmarks plus your own red-team finds",
            "Re-run the corpus in CI whenever prompts or tools change"
          ],
          pitfalls: ["Trusting PDFs or web pages as benign context", "Human-in-the-loop rubber-stamping high-volume approvals"]
        }
      ]
    }
  ]
};
