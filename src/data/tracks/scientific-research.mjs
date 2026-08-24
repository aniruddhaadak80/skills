export const track = {
  id: "scientific-research",
  label: "Scientific Research",
  icon: "🔬",
  gradient: "from-cyan-500 via-sky-500 to-blue-500",
  ring: "ring-cyan-500/30",
  text: "text-cyan-400",
  blurb: "Study design, reproducibility, publication craft, and grant writing for research careers.",
  roles: ["Researchers", "PhD Students", "Postdocs", "Research Software Engineers"],
  domains: [
    {
      id: "study-design",
      label: "Study Design",
      procedures: [
        {
          id: "power-analysis-first",
          title: "Power studies before collecting a single datapoint",
          level: "foundation", minutes: 30,
          description: "Effect-size estimates, power targets, and preregistration preventing underpowered regrets.",
          tags: ["statistics", "power", "preregistration"],
          steps: [
            "Estimate effect size from prior literature or pilot data honestly",
            "Set α=0.05, power=0.80 minimum; compute required N per group",
            "Account for expected attrition/contamination in recruitment numbers",
            "Preregister hypotheses, exclusions, and analysis plan",
            "Define stopping rules and interim analysis boundaries upfront",
            "Archive design doc citable regardless of outcome"
          ],
          pitfalls: ["N=10 convenience samples dressed as exploratory", "HARKing after unblinded looks at trends"]
        },
        {
          id: "control-condition-design",
          title: "Design controls that actually isolate variables",
          level: "intermediate", minutes: 30,
          description: "Positive/negative controls, randomization, blinding choices matched to bias risks.",
          tags: ["experimental-design", "controls", "bias"],
          steps: [
            "List confounders specific to THIS setup, not textbook generics",
            "Include negative control answering 'does anything respond?'",
            "Include positive control proving assay sensitivity that day",
            "Randomize sample placement/handling order where physical effects exist",
            "Blind analyzers to condition labels during measurement",
            "Pilot blind-unblinding differences once; document what you learned"
          ],
          pitfalls: ["All treated samples run on same day/batch plate", "Analyst guessing conditions from subtle file naming"]
        }
      ]
    },
    {
      id: "reproducibility",
      label: "Reproducibility",
      procedures: [
        {
          id: "computational-reproducibility",
          title: "Make computational results reproducible",
          level: "intermediate", minutes: 40,
          description: "Environment pinning, deterministic pipelines, and one-command reruns from raw data.",
          tags: ["reproducibility", "pipelines", "research-code"],
          steps: [
            "Pin environments: lockfiles plus container image recorded per result",
            "Version control everything including parameter files and seeds",
            "Structure pipeline raw → processed → figures with explicit stages",
            "Never edit intermediate files manually; regenerate instead",
            "Test one-command rerun on clean machine before submission",
            "Publish code/data under DOIs via archival repositories"
          ],
          pitfalls: ["'It works on my laptop' dependency webs", "Figures hand-tweaked after generation"]
        },
        {
          id: "electronic-lab-notebook",
          title: "Keep lab notebooks worth citing",
          level: "foundation", minutes: 25,
          description: "Daily entries linking intent, method versions, observations, and next actions.",
          tags: ["lab-notebook", "documentation"],
          steps: [
            "Entry per session: goal, exact methods/versions, raw observations",
            "Note failures fully — negative results are future time savers",
            "Attach instrument outputs immediately with filenames explained",
            "Sign/date entries; never backfill silently (GxP adjacent habit)",
            "Index by experiment ID referenced everywhere else",
            "Weekly review: unresolved questions become next week's plan"
          ],
          pitfalls: ["Notebook as polished rewrite losing real-time value", "Critical parameters living only in memory"]
        }
      ]
    },
    {
      id: "publication-grants",
      label: "Publication & Grants",
      procedures: [
        {
          id: "paper-writing-order",
          title: "Write papers in the order that works",
          level: "intermediate", minutes: 40,
          description: "Figures first, methods while fresh, results mechanically, intro last — reducing revision churn.",
          tags: ["writing", "papers", "publication"],
          steps: [
            "Finalize figure set first; they ARE the story spine",
            "Draft methods immediately while details are fresh",
            "Write results referencing figures mechanically; interpretation comes later",
            "Discussion maps each finding to literature honestly including conflicts",
            "Introduction LAST: funnel from broad need to your gap",
            "Abstract last-of-all: one sentence per section plus why-it-matters"
          ],
          pitfalls: ["Intro-first writing that changes after results solidify", "Figure legends drafted separately from figures"]
        },
        {
          id: "grant-proposal-narrative",
          title: "Structure grant proposals reviewers score highly",
          level: "advanced", minutes: 50,
          description: "Aims aligned to significance, feasibility evidence, and budget logic telling one coherent story.",
          tags: ["grants", "funding", "writing"],
          steps: [
            "Frame central question as one sentence a non-specialist grasps",
            "3-4 aims building logically; each independently fundable-worthy",
            "Pair every aim with approach + expected outcomes + alternatives",
            "Prove feasibility: preliminary data, resources, timeline math",
            "Budget narrative mirrors project narrative line by line",
            "Circulate to two past reviewers BEFORE the deadline, not after rejection"
          ],
          pitfalls: ["Aims so ambitious reviewers doubt feasibility", "Preliminary data buried instead of leading"]
        }
      ]
    }
  ]
};
