import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const average = (values) => {
  const scored = values.filter((value) => value !== null);
  return scored.length ? scored.reduce((sum, value) => sum + value, 0) / scored.length : null;
};
const dcg = (grades) => grades.reduce(
  (sum, grade, rank) => sum + (2 ** grade - 1) / Math.log2(rank + 2),
  0
);

function scoreCase(item, passageIds) {
  const { result, relevance, answerable } = item;
  const { groundedness, locale_fit, abstained } = result.annotations;
  if (typeof answerable !== "boolean" || typeof locale_fit !== "boolean" || typeof abstained !== "boolean") {
    throw new Error(`${item.id}: answerability, locale fit, and abstention must be booleans`);
  }
  if (
    !item.query_language || !item.document_language
    || !item.required_answer_language || !result.answer_language
  ) {
    throw new Error(`${item.id}: query, document, requested, and actual answer languages are required`);
  }
  for (const [id, grade] of Object.entries(relevance)) {
    if (!passageIds.has(id) || !Number.isInteger(grade) || grade < 0 || grade > 3) {
      throw new Error(`${item.id}: relevance needs known passage IDs and integer grades from 0 to 3`);
    }
  }
  for (const ids of [result.retrieved_ids, result.citation_ids]) {
    if (
      !Array.isArray(ids) || ids.some((id) => !passageIds.has(id))
      || new Set(ids).size !== ids.length
    ) {
      throw new Error(`${item.id}: retrieved and cited IDs must be known and unique`);
    }
  }
  const relevant = Object.keys(relevance).filter((id) => relevance[id] > 0);
  if (answerable !== (relevant.length > 0)) {
    throw new Error(`${item.id}: answerability disagrees with relevance labels`);
  }
  const validGroundedness = answerable
    ? Number.isInteger(groundedness) && groundedness >= 1 && groundedness <= 5
    : groundedness === null;
  if (!validGroundedness) {
    throw new Error(`${item.id}: groundedness must be 1-5 for answerable cases and null otherwise`);
  }
  const ideal = dcg(Object.values(relevance).sort((a, b) => b - a).slice(0, 10));
  const citationPresent = result.citation_ids.some(
    (id) => relevance[id] > 0 && result.retrieved_ids.includes(id)
  );
  const contractPass = typeof result.answer === "string"
    && result.answer.trim().length > 0
    && result.answer_language === item.required_answer_language
    && locale_fit && (answerable ? !abstained && citationPresent : abstained);
  const recall = answerable
    ? result.retrieved_ids.slice(0, 5).filter((id) => relevance[id] > 0).length / relevant.length
    : null;
  const ndcg = answerable
    ? dcg(result.retrieved_ids.slice(0, 10).map((id) => relevance[id] || 0)) / ideal
    : null;

  return {
    id: item.id,
    pair: `${item.query_language}->${item.document_language}`,
    answerable,
    recall_at_5: recall,
    ndcg_at_10: ndcg,
    groundedness,
    response_contract_pass_rate: Number(contractPass),
    abstention_accuracy: answerable ? null : Number(abstained),
  };
}

const metrics = [
  "recall_at_5",
  "ndcg_at_10",
  "groundedness",
  "response_contract_pass_rate",
  "abstention_accuracy"
];
const summarize = (rows) => Object.fromEntries(
  metrics.map((metric) => [metric, average(rows.map((row) => row[metric]))])
);

export function evaluateDataset(dataset) {
  if (typeof dataset.synthetic !== "boolean" || !dataset.cases?.length || !dataset.passages?.length) {
    throw new Error("Provide a synthetic flag, non-empty cases, and passages");
  }
  const { gates } = dataset;
  if (!Number.isInteger(gates?.min_answerable_per_pair) || gates.min_answerable_per_pair < 1) {
    throw new Error("Invalid release gate configuration");
  }
  for (const [metric, minimum, maximum] of [
    ["recall_at_5", 0, 1],
    ["groundedness", 1, 5],
    ["response_contract_pass_rate", 0, 1]
  ]) {
    const threshold = gates[metric];
    if (!Number.isFinite(threshold) || threshold < minimum || threshold > maximum) {
      throw new Error("Invalid release gate configuration");
    }
  }
  const passageIds = new Set(dataset.passages.map((passage) => passage.id));
  if (
    passageIds.has(undefined) || passageIds.has("")
    || passageIds.size !== dataset.passages.length
    || dataset.cases.some((item) => !item.id)
    || new Set(dataset.cases.map((item) => item.id)).size !== dataset.cases.length
  ) {
    throw new Error("Passage and case IDs must be non-empty and unique");
  }
  const rows = dataset.cases.map((item) => scoreCase(item, passageIds));
  const pairs = [...new Set(rows.map((row) => row.pair))].sort();
  const perPair = pairs.map((pair) => {
    const cases = rows.filter((row) => row.pair === pair);
    return {
      pair,
      cases: cases.length,
      answerable_cases: cases.filter((row) => row.answerable).length,
      ...summarize(cases)
    };
  });
  const gateFailures = dataset.synthetic
    ? ["Synthetic fixtures cannot establish production release readiness"]
    : [];
  for (const pair of perPair) {
    if (pair.answerable_cases < gates.min_answerable_per_pair) {
      gateFailures.push(`${pair.pair}: ${pair.answerable_cases} answerable cases; need ${gates.min_answerable_per_pair}`);
    }
    for (const metric of ["recall_at_5", "groundedness", "response_contract_pass_rate"]) {
      if (pair[metric] === null || pair[metric] < gates[metric]) {
        gateFailures.push(`${pair.pair}: ${metric} below ${gates[metric]} or unscored`);
      }
    }
  }
  const worstPair = Object.fromEntries(metrics.map((metric) => {
    const scored = perPair
      .filter((pair) => pair[metric] !== null)
      .sort((a, b) => a[metric] - b[metric]);
    return [metric, scored.length ? { pair: scored[0].pair, score: scored[0][metric] } : null];
  }));
  return {
    synthetic: dataset.synthetic,
    run: dataset.run,
    total_cases: rows.length,
    per_pair: perPair,
    macro_average: summarize(perPair),
    sample_weighted_average: summarize(rows),
    worst_pair: worstPair,
    release_gate_pass: gateFailures.length === 0,
    gate_failures: gateFailures,
    cases: rows,
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try {
    let input = new URL("./cases.json", import.meta.url);
    let enforceGates = false;
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i++) {
      if (args[i] === "--enforce-gates") {
        enforceGates = true;
      } else if (args[i] === "--input" && args[i + 1] && !args[i + 1].startsWith("--")) {
        input = args[++i];
      } else {
        throw new Error("Usage: node evaluate.mjs [--input cases.json] [--enforce-gates]");
      }
    }
    const report = evaluateDataset(JSON.parse(readFileSync(input, "utf8")));
    console.log(JSON.stringify(report, null, 2));
    if (enforceGates && !report.release_gate_pass) process.exitCode = 1;
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
