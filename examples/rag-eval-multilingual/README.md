# Multilingual RAG evaluation example

This dependency-free Node.js 20+ example accompanies `rag-eval-multilingual`
and its `rag-eval-multilingual-stack-node` variant. Run it from a repository
checkout; installing the skill alone does not copy this example directory.

All passages, questions, model outputs, and annotations in [cases.json](cases.json)
are **synthetic**. They illustrate failure cases, not production measurements or
native-speaker validation. The eight cases are deliberately too small to pass
the configured release gates.

| Scenario | Language pair | Failure the cases expose |
|---|---|---|
| Spanish support questions over an English knowledge base | `es -> en` | Missing a relevant passage or citing the US policy for a shipment to Spain |
| Japanese FAQs and answers without whitespace boundaries | `ja -> ja` | Why English whitespace-based answer matching is inappropriate |
| Hindi-English code-switched password questions | `hi -> en` | Allowing technical loanwords while rejecting an answer entirely in English |

Two additional Spanish cases contrast a correct abstention with an invented
answer when the corpus contains no supporting passage.

## Run the example

```bash
node examples/rag-eval-multilingual/evaluate.mjs
npm test
```

The evaluator prints JSON containing per-case and per-language-pair metrics,
macro and sample-weighted averages, the worst pair for each metric, and gate
failures. Demo mode exits successfully even though `release_gate_pass` is false.
Sample weighting reflects this fixture's case mix, not production traffic.

```bash
node examples/rag-eval-multilingual/evaluate.mjs --enforce-gates
```

This command intentionally exits with status **1**: synthetic data, insufficient
sample counts, and the included failure cases cannot establish release readiness.

## Use real evaluation results

1. Copy `cases.json` to `native-reviewed-cases.json` at the repository root.
2. Replace its passages and cases with a held-out, native-reviewed evaluation
   set. Retain case IDs, query/document/answer languages, locale, accepted answers,
   evidence spans, graded relevance labels, and pinned run versions.
3. Record the actual retrieved IDs in rank order, answer, and citation IDs from
   your pipeline. Use integer relevance grades from 0 (irrelevant) to 3 (highly
   relevant); unknown or duplicate retrieved/cited IDs are rejected.
4. Have native reviewers annotate the actual `answer_language`, `groundedness`
   (1-5), `locale_fit`, and `abstained`. For questions with no supporting passage,
   set `answerable` to false, leave `relevance` empty, and set `groundedness` to
   null. The evaluator uses these annotations; it does not generate them.
5. Set `synthetic` to false only after replacing the fixture. Keep at least 30
   answerable cases per critical language pair and add insufficient-evidence
   cases separately. Adjust the initial gates using your pilot and risk profile.
6. Run and archive the report:

```bash
node examples/rag-eval-multilingual/evaluate.mjs --input ./native-reviewed-cases.json > multilingual-report.json
node examples/rag-eval-multilingual/evaluate.mjs --input ./native-reviewed-cases.json --enforce-gates
```

## Metric definitions and limits

- **Recall@5:** relevant IDs in the first five results divided by all positively
  labeled relevant IDs for each answerable question.
- **nDCG@10:** ranked gain `(2^grade - 1) / log2(rank + 1)` through rank 10,
  divided by the ideal ordering of the relevance labels. Rank starts at 1.
- **Groundedness:** mean supplied native-review score over answerable cases.
- **Response contract rate:** a non-empty answer in the requested language with
  locale fit, plus a relevant citation from retrieved context and no abstention
  for answerable cases; require abstention when evidence is absent.
- **Abstention accuracy:** fraction of insufficient-evidence cases that abstain.
- **Macro average:** equal weight for each language pair with a defined score;
  unscored pairs are reported and fail enforced gates. Recall and groundedness
  exclude insufficient-evidence cases instead of assigning artificial scores.

A relevant citation ID does not prove that the answer is entailed by its source.
Native review or a calibrated multilingual judge must assess entailment, cultural
fit, completeness, and language labels. This example does not implement a RAG
pipeline, language identification, lexical/semantic answer metrics, LLM judging,
or bootstrap confidence intervals. Use the main skill's workflow for those checks.

Compare a baseline and candidate on the same held-out questions and language
pairs, with paired bootstrap intervals, before making a production release
decision. Point estimates and a small fixture are not statistical evidence.

## Related skills and research

- [Main evaluation skill](../../skills/rag-eval-multilingual/SKILL.md)
- [Node.js variant](../../skills/rag-eval-multilingual-stack-node/SKILL.md)
- [Multilingual launch playbook](../../skills/playbook-ai-engineering-rag-multilingual-launch/SKILL.md)
- [MEMERAG](https://aclanthology.org/2025.acl-long.1101/)
- [NoMIRACL](https://aclanthology.org/2024.findings-emnlp.730/)
