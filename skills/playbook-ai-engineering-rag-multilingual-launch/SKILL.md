---
name: playbook-ai-engineering-rag-multilingual-launch
description: "Launch multilingual retrieval-augmented answers with native-reviewed evidence, per-language quality gates, and reproducible evaluation reports."
---
# Playbook: Gate a multilingual RAG launch

> Launch multilingual retrieval-augmented answers with native-reviewed evidence, per-language quality gates, and reproducible evaluation reports.

**Track:** 🗺️ AI Engineering · **Domain:** Journey Playbooks · **Level:** journey · **~140 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Launch multilingual retrieval-augmented answers with native-reviewed evidence, per-language quality gates, and reproducible evaluation reports.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Journey Steps

1. Step 1 — Design a chunking strategy for retrieval: start with "Profile source documents: length distribution, headings, tables, code blocks"
2. Step 2 — Implement hybrid keyword + vector search: start with "Stand up a lexical index (BM25) alongside your vector index on the same chunks"
3. Step 3 — Evaluate RAG quality across languages: start with "Map query, document, and answer languages plus locales; cover Spanish questions over English sources, unsegmented Japanese FAQs, and Hindi-English code-switching where these match your users."
4. Step 4 — Evaluate RAG quality across languages (Node.js): start with "Map query, document, and answer languages plus locales; freeze native-written questions with graded passage relevance, accepted answers, and insufficient-evidence cases before tuning."
5. How it fits together: Freeze passage IDs and language metadata, compare hybrid retrieval per language pair, then calibrate native answer rubrics. Replace the Node.js fixture's synthetic cases before enforcing gates. Block launch when any critical pair regresses despite aggregate gains.

### Referenced Skills

- `rag-pipelines-chunking-strategy`
- `rag-pipelines-hybrid-search`
- `rag-eval-multilingual`
- `rag-eval-multilingual-stack-node`

## Commands

**Install all referenced skills**
```bash
npx skills add aniruddhaadak80/skills --skill rag-pipelines-chunking-strategy && npx skills add aniruddhaadak80/skills --skill rag-pipelines-hybrid-search && npx skills add aniruddhaadak80/skills --skill rag-eval-multilingual && npx skills add aniruddhaadak80/skills --skill rag-eval-multilingual-stack-node
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills