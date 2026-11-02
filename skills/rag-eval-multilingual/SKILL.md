---
name: rag-eval-multilingual
description: "Evaluate multilingual RAG before changing retrievers, models, or prompts: measure language-specific answer quality, cross-lingual retrieval, and cultural fit with native-reviewed rubrics."
---
# Evaluate RAG quality across languages

> Evaluate multilingual RAG before changing retrievers, models, or prompts: measure language-specific answer quality, cross-lingual retrieval, and cultural fit with native-reviewed rubrics.

**Track:** 🤖 AI Engineering · **Domain:** RAG Pipelines · **Level:** advanced · **~40 min**

**Who this is for:** AI Engineers, ML Engineers, LLM App Developers, Agent Builders

## When to Use This Skill

Evaluate multilingual RAG before changing retrievers, models, or prompts: measure language-specific answer quality, cross-lingual retrieval, and cultural fit with native-reviewed rubrics.
Use it whenever a matching task appears in conversation — the agent loads these instructions on demand.

## Steps

1. Map query, document, and answer languages plus locales; cover Spanish questions over English sources, unsegmented Japanese FAQs, and Hindi-English code-switching where these match your users.
2. Freeze 30-50 native-written questions per critical query/document language pair outside tuning data; record locale, answer language, graded passage relevance, evidence, accepted answers, and answerability. Include missing and misleading evidence.
3. Ask native speakers to review gold answers and local rubrics against source evidence; resolve regional terminology, dates, currencies, units, and honorifics. Include naturally authored questions alongside reviewed translations.
4. Pin corpus, chunking, embedding, retriever, generator, prompt, judge, and decoding versions; run baseline and candidate on identical questions. Log retrieved IDs and languages, answers, citations, cost, and latency.
5. Measure Recall@5 as relevant passages in the top five divided by all labeled relevant passages; calculate graded nDCG@10 per language pair. Exclude questions without relevant passages from retrieval metrics and assess abstention separately.
6. Compare direct multilingual retrieval with query translation on the same corpus; verify compatible query/passage encoders. Have bilingual reviewers inspect translated entities, transliterations, code-switching, and ranking changes.
7. Normalize Unicode while preserving meaningful accents and negation; use language-aware token F1. For Chinese, Japanese, or Thai, supplement lexical scores with character-level and multilingual semantic metrics calibrated against native judgments.
8. Score groundedness, relevance, completeness, and locale fit separately using native-language rubrics: 1 = incorrect, 3 = partial, 5 = fully correct. Calibrate an independent judge on at least 20 native-reviewed answers per output language and adjudicate disagreements.
9. Check answer language and citation entailment, allowing approved loanwords and product names; require abstention without sufficient evidence. Have native reviewers classify retrieval, generation, and judge failures, including regional policy errors and culturally inappropriate phrasing.
10. Report sample counts, equal-weight macro averages, worst language pairs, traffic-weighted results, and paired bootstrap confidence intervals. Set per-language pilot gates, block meaningful regressions despite aggregate gains, and add adjudicated failures to the suite.

## Common Pitfalls

- An English-heavy aggregate hiding a recall collapse for a lower-volume language pair
- Whitespace tokenization penalizing valid Japanese or Thai answers, or accent stripping changing the meaning of an answer
- Translating every question and answer into English before judging, hiding code-switching and culturally incorrect phrasing
- A fluent translation receiving a high score even though its citation supports another region's policy
- An uncalibrated judge scoring languages inconsistently or treating a correct insufficient-evidence abstention as a failure

## Success Signals

- Initial pilot gate: Recall@5 at least 85% for every critical answerable language pair, with sample counts and 95% confidence intervals reported
- Initial pilot gate: native-calibrated groundedness average at least 4.3/5 in every supported answer language, with no meaningful drop from baseline
- Initial pilot gate: at least 95% of answers pass native-reviewed language and locale checks, including appropriate abstention on insufficient-evidence cases

## Commands

**Install with skills CLI**
```bash
npx skills add aniruddhaadak80/skills --skill rag-eval-multilingual
```

**Install globally**
```bash
npx skills add aniruddhaadak80/skills --skill rag-eval-multilingual -g
```

**Install from a local checkout (run at repository root)**
```bash
npx skills add . --skill rag-eval-multilingual --agent codex --yes --copy
```

---

Part of [aniruddhaadak80/skills](https://github.com/aniruddhaadak80/skills) · Browse all at https://skills.sh/aniruddhaadak80/skills