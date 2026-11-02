---
name: rag-eval-multilingual-stack-node
description: "Build a multilingual RAG evaluation report in Node.js when you need reproducible per-language retrieval metrics and release gates; start with the dependency-free fixture and replace synthetic annotations with native-reviewed judgments."
---
# Evaluate RAG quality across languages (Node.js)

> Build a multilingual RAG evaluation report in Node.js when you need reproducible per-language retrieval metrics and release gates; start with the dependency-free fixture and replace synthetic annotations with native-reviewed judgments.

**Track:** 🤖 AI Engineering · **Domain:** RAG Pipelines · **Level:** advanced · **~40 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Build a multilingual RAG evaluation report in Node.js when you need reproducible per-language retrieval metrics and release gates; start with the dependency-free fixture and replace synthetic annotations with native-reviewed judgments.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Map query, document, and answer languages plus locales; freeze native-written questions with graded passage relevance, accepted answers, and insufficient-evidence cases before tuning.
2. Run node examples/rag-eval-multilingual/evaluate.mjs from a checkout with Node.js 20+; inspect the Spanish, Japanese, and Hindi-English cases in cases.json, keeping the synthetic label intact.
3. Replace the fixture with held-out cases in the same JSON shape; preserve IDs, evidence spans, locale, and answer language. Record ordered retrieval results, answers, and citations from a pinned pipeline run.
4. Ask native reviewers to annotate groundedness (1-5), locale fit, actual answer language, and abstention; leave groundedness unscored for questions without supporting evidence.
5. Inspect Recall@5 and graded nDCG@10 per language pair; reject duplicate or unknown IDs and exclude questions without relevant passages from retrieval denominators.
6. Check response contract rates for language, locale, relevant citations, and abstention. Have native speakers judge citation entailment and code-switching; deterministic checks alone cannot establish semantic correctness.
7. Compare macro averages, sample-weighted averages, and worst pairs; require the configured minimum number of answerable cases in every critical language pair.
8. Compare baseline and candidate on identical case IDs; assess regressions with paired bootstrap intervals and archive pinned run versions. Compute intervals and calibrate judges separately from this example.
9. Save JSON output with node examples/rag-eval-multilingual/evaluate.mjs --input ./native-reviewed-cases.json > multilingual-report.json; review per-case failures and language-pair summaries.
10. Run with --enforce-gates in CI after replacing the synthetic fixture and calibrating native annotations; require exit status zero for every critical language pair.

## Common Pitfalls

- Treating synthetic fixture annotations as measured model quality or native-speaker review
- Counting repeated retrieval IDs twice and inflating recall
- Scoring correct abstentions as retrieval misses or perfect groundedness answers
- Accepting a high sample-weighted average while a smaller language pair fails its own gates

## Success Signals

- Recall@5 at least 85% per critical language pair with at least 30 answerable cases per pair
- Native-reviewed groundedness average at least 4.3/5 per query/document language pair
- Response contract pass rate at least 95% per language pair, including correct abstention

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill rag-eval-multilingual-stack-node
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill rag-eval-multilingual-stack-node -g
```

**Run the synthetic example (repository checkout required)**
```bash
node examples/rag-eval-multilingual/evaluate.mjs
```

**Enforce gates on your native-reviewed dataset**
```bash
node examples/rag-eval-multilingual/evaluate.mjs --input ./native-reviewed-cases.json --enforce-gates
```

**Install the Node.js variant from this checkout**
```bash
npx skills add . --skill rag-eval-multilingual-stack-node --agent codex --yes --copy
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills