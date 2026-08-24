export const track = {
  id: "ml-research",
  label: "ML Research Engineering",
  icon: "🧮",
  gradient: "from-blue-500 via-cyan-400 to-teal-300",
  ring: "ring-blue-500/30",
  text: "text-blue-400",
  blurb: "Rigorous ML experimentation: reproductions, ablations, tracking, and honest benchmarking.",
  roles: ["Research Engineers", "ML Scientists", "PhD Researchers", "Applied Scientists"],
  domains: [
    {
      id: "experimentation-rigor",
      label: "Experimentation Rigor",
      procedures: [
        {
          id: "paper-reproduction-protocol",
          title: "Reproduce papers without drowning",
          level: "advanced", minutes: 50,
          description: "Staged reproduction from inference-first to full retrain with deviation journals.",
          tags: ["reproduction", "papers", "methodology"],
          steps: [
            "Stage 0: run authors' code if available; record environment verbatim",
            "Stage 1: reimplement inference on their checkpoint; compare outputs numerically",
            "Stage 2: retrain smallest configuration matching reported metrics ±noise band",
            "Journal EVERY deviation from paper text with suspected impact",
            "Contact authors once with specific questions — response rate rewards clarity",
            "Publish reproduction report regardless of outcome; negatives are valuable"
          ],
          pitfalls: ["Jumping straight to full-scale retraining", "Undocumented 'small' tweaks compounding into irreproducibility"]
        },
        {
          id: "ablation-design",
          title: "Design ablations that isolate contributions",
          level: "intermediate", minutes: 35,
          description: "One-factor-at-a-time with matched budgets separating real gains from tuning luck.",
          tags: ["ablations", "experimental-design"],
          steps: [
            "List claimed components; rank by novelty and implementation cost",
            "Baseline run repeated with 3+ seeds establishing variance floor",
            "Remove ONE component per run; keep all else byte-identical",
            "Match compute budgets across arms — bigger ablation runs cheat",
            "Report deltas WITH seed variance, not single-run point estimates",
            "Test interactions for top-2 components before final claims"
          ],
          pitfalls: ["Ablations run with different hyperparameter sweeps", "Seed cherry-picking turning noise into conclusions"]
        },
        {
          id: "experiment-tracking-hygiene",
          title: "Keep experiment tracking trustworthy",
          level: "foundation", minutes: 30,
          description: "Every run reproducible from logged config + code version + data snapshot reference.",
          tags: ["tracking", "mlops", "reproducibility"],
          steps: [
            "Log config automatically from source of truth, never hand-transcribed",
            "Attach git SHA + diff for uncommitted changes to every run",
            "Reference datasets by content hash or immutable version tag",
            "Name runs by hypothesis ID, not creative adjectives",
            "Tag runs: baseline / candidate / aborted / champion with promotion reasons",
            "Weekly review: kill zombie experiments, archive stale branches"
          ],
          pitfalls: ["Best result ever that nobody can rerun", "Config drift between what ran and what was documented"]
        }
      ]
    },
    {
      id: "evaluation-integrity",
      label: "Evaluation Integrity",
      procedures: [
        {
          id: "benchmark-selection-honesty",
          title: "Choose benchmarks that mean something",
          level: "intermediate", minutes: 30,
          description: "Benchmark suites matched to target capabilities with contamination checks and honest scopes.",
          tags: ["benchmarks", "evaluation", "integrity"],
          steps: [
            "Define capability claims first; benchmarks follow claims, not reverse",
            "Check train/test contamination against your corpora before trusting numbers",
            "Prefer held-out private sets for anything heading to publication",
            "Report full suite including unfavorable tasks, not highlights",
            "State statistical significance; differences inside noise bands are ties",
            "Archive exact eval configs alongside results permanently"
          ],
          pitfalls: ["SOTA claimed on benchmarks the model effectively memorized", "Task suites drifting between model generations"]
        },
        {
          id: "datasheet-documentation",
          title: "Document datasets with datasheets",
          level: "foundation", minutes: 30,
          description: "Provenance, composition, collection process, and limitations recorded before modeling begins.",
          tags: ["datasets", "documentation", "responsible-ai"],
          steps: [
            "Record provenance chain: sources, licenses, consent basis for personal data",
            "Quantify composition: demographics/classes/languages with known skews stated",
            "Document collection mechanics and any filtering applied",
            "List known failure modes and unsuitable-use cases explicitly",
            "Version datasheets with dataset versions — they evolve together",
            "Review for PII leakage risks with fresh eyes before release"
          ],
          pitfalls: ["Datasets inherited without provenance entering production models", "Limitations sections written only when reviewers ask"]
        }
      ]
    }
  ]
};
