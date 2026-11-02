import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { evaluateDataset } from "./evaluate.mjs";

const fixture = JSON.parse(readFileSync(new URL("./cases.json", import.meta.url), "utf8"));
function datasetFor(...indexes) {
  const dataset = structuredClone(fixture);
  dataset.cases = indexes.map((index) => structuredClone(fixture.cases[index]));
  return dataset;
}

test("multilingual fixture preserves the canonical three language pairs and rejects production readiness", () => {
  const report = evaluateDataset(fixture);
  assert.equal(report.total_cases, 8);
  assert.deepEqual(report.per_pair.map((pair) => pair.pair), ["es->en", "hi->en", "ja->ja"]);
  assert.equal(report.release_gate_pass, false);
  assert.ok(report.gate_failures.some((failure) => failure.includes("Synthetic")));
});

test("retrieval metrics honor the top-five and top-ten cutoffs", () => {
  const dataset = datasetFor(0);
  const distractors = Array.from({ length: 10 }, (_, index) => `distractor-${index}`);
  dataset.passages.push(...distractors.map((id) => ({ id, language: "en", text: "Irrelevant evidence" })));
  dataset.cases[0].result.retrieved_ids = [...distractors.slice(0, 5), "returns-spain-en"];
  const sixth = evaluateDataset(dataset).cases[0];
  assert.equal(sixth.recall_at_5, 0);
  assert.ok(Math.abs(sixth.ndcg_at_10 - 1 / Math.log2(7)) < 1e-12);
  dataset.cases[0].result.retrieved_ids = [...distractors, "returns-spain-en"];
  assert.equal(evaluateDataset(dataset).cases[0].ndcg_at_10, 0);
});

test("nDCG uses graded relevance and penalizes a less-relevant passage ranked first", () => {
  const dataset = datasetFor(0);
  dataset.cases[0].relevance = { "returns-spain-en": 3, "returns-us-en": 1 };
  dataset.cases[0].result.retrieved_ids = ["returns-us-en", "returns-spain-en"];
  const score = evaluateDataset(dataset).cases[0];
  assert.equal(score.recall_at_5, 1);
  const expected = (1 + 7 / Math.log2(3)) / (7 + 1 / Math.log2(3));
  assert.ok(Math.abs(score.ndcg_at_10 - expected) < 1e-12);
  assert.ok(score.ndcg_at_10 < 1);
});

test("insufficient-evidence cases are excluded from recall and groundedness but score abstention", () => {
  const report = evaluateDataset(datasetFor(0, 6, 7));
  assert.equal(report.per_pair[0].recall_at_5, 1);
  assert.equal(report.per_pair[0].groundedness, 5);
  assert.equal(report.per_pair[0].abstention_accuracy, 0.5);
  assert.equal(report.cases[1].recall_at_5, null);
  assert.equal(report.cases[1].groundedness, null);
});

test("macro averages expose small failing slices independently of sample mix", () => {
  const dataset = datasetFor(2, 3);
  dataset.cases.push(...Array.from({ length: 7 }, (_, index) => ({
    ...structuredClone(dataset.cases[1]),
    id: `extra-ja-${index}`
  })));
  const report = evaluateDataset(dataset);
  assert.equal(report.macro_average.recall_at_5, 0.5);
  assert.equal(report.sample_weighted_average.recall_at_5, 8 / 9);
  assert.equal(report.worst_pair.recall_at_5.pair, "es->en");
});

test("a correct retrieval cannot hide wrong-language or regional response failures", () => {
  const report = evaluateDataset(datasetFor(1, 5));
  for (const row of report.cases) {
    assert.equal(row.recall_at_5, 1);
    assert.equal(row.response_contract_pass_rate, 0);
  }
  assert.equal(report.cases[1].groundedness, 5);
});

test("duplicate and unknown retrieval IDs cannot inflate metrics", () => {
  for (const ids of [["returns-spain-en", "returns-spain-en"], ["unknown-passage"]]) {
    const dataset = datasetFor(0);
    dataset.cases[0].result.retrieved_ids = ids;
    assert.throws(() => evaluateDataset(dataset), /known and unique/);
  }
});

test("empty answers and citations outside retrieved context fail the response contract", () => {
  const empty = datasetFor(0);
  empty.cases[0].result.answer = " ";
  assert.equal(evaluateDataset(empty).cases[0].response_contract_pass_rate, 0);
  const uncitedContext = datasetFor(0);
  uncitedContext.cases[0].result.retrieved_ids = ["returns-us-en"];
  assert.equal(evaluateDataset(uncitedContext).cases[0].response_contract_pass_rate, 0);
});

test("release gates require adequate samples even when every observed score passes", () => {
  const dataset = datasetFor(0);
  dataset.synthetic = false;
  assert.equal(evaluateDataset(dataset).release_gate_pass, false);
  dataset.gates.min_answerable_per_pair = 1;
  assert.equal(evaluateDataset(dataset).release_gate_pass, true);
  dataset.gates.recall_at_5 = 1.1;
  assert.throws(() => evaluateDataset(dataset), /Invalid release gate/);
});

test("the CLI reports the fixture successfully but fails enforced release gates", () => {
  const script = fileURLToPath(new URL("./evaluate.mjs", import.meta.url));
  const demo = spawnSync(process.execPath, [script], { encoding: "utf8" });
  assert.equal(demo.status, 0, demo.stderr);
  assert.equal(JSON.parse(demo.stdout).total_cases, 8);
  const enforced = spawnSync(process.execPath, [script, "--enforce-gates"], { encoding: "utf8" });
  assert.equal(enforced.status, 1, enforced.stderr);
  assert.equal(JSON.parse(enforced.stdout).release_gate_pass, false);
});
