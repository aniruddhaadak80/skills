export const track = {
  id: "biotech-pharma",
  label: "Biotech & Pharma",
  icon: "🧬",
  gradient: "from-lime-500 via-green-500 to-emerald-500",
  ring: "ring-lime-500/30",
  text: "text-lime-400",
  blurb: "Bioinformatics workflows, lab informatics, and regulatory documentation discipline.",
  roles: ["Bioinformaticians", "Lab Scientists", "Regulatory Affairs", "Genetic Engineers", "Clinical Data Managers"],
  domains: [
    {
      id: "bioinformatics",
      label: "Bioinformatics",
      procedures: [
        {
          id: "seq-qc-pipeline",
          title: "Quality-control sequencing data before analysis",
          level: "intermediate", minutes: 45,
          description: "Read-level QC, adapter trimming, contamination screens, and reproducible QC reporting.",
          tags: ["sequencing", "qc", "pipelines", "ngs"],
          steps: [
            "Run read-level QC: per-base quality, GC bias, duplication profiles",
            "Trim adapters/low-quality tails with documented parameter versions",
            "Screen contamination against expected organism panels",
            "Verify reference genome build matches annotation versions exactly",
            "Emit multi-sample QC summary tables for batch comparison",
            "Pin tool versions in a workflow manager (Snakemake/Nextflow) for reruns"
          ],
          pitfalls: ["Mixed genome builds between alignment and annotation", "Batch effects mistaken for biological signal"]
        },
        {
          id: "variant-calling-sop",
          title: "Standardize variant calling and annotation",
          level: "advanced", minutes: 50,
          description: "Consistent callers, filters, and annotation sources so variant lists compare across runs.",
          tags: ["variants", "genomics", "sop"],
          steps: [
            "Fix caller versions and filter thresholds in writing before processing",
            "Normalize representations (left-align, split multiallelics) consistently",
            "Annotate against versioned databases recording exact release dates",
            "Apply depth/quality filters appropriate to assay type",
            "Validate a truth-set sample each run before trusting outputs",
            "Store VCFs with full provenance: sample, pipeline hash, references"
          ],
          pitfalls: ["Annotation databases drifting between analyses", "Filter tuning per-run destroying comparability"]
        },
        {
          id: "sequence-design-checks",
          title: "Run design-stage computational checks",
          level: "advanced", minutes: 40,
          description: "In-silico screening of designed constructs: specificity scoring, off-target checks, and documentation gates — always paired with institutional biosafety approval.",
          tags: ["design", "crispr", "in-silico", "biosafety"],
          steps: [
            "Confirm institutional biosafety committee approval covers this construct class",
            "Score target specificity computationally; flag high-homology regions",
            "Check designed elements for problematic repeats/restriction sites",
            "Record every design parameter and tool version in the lab notebook system",
            "Route flagged designs through supervisor review before any ordering",
            "Archive sequences and rationales to the registered inventory"
          ],
          pitfalls: ["Skipping specificity screening because 'previous round worked'", "Design records living only in chat threads"]
        }
      ]
    },
    {
      id: "lab-informatics",
      label: "Lab Informatics",
      procedures: [
        {
          id: "eln-sample-lineage",
          title: "Track sample lineage end to end",
          level: "intermediate", minutes: 35,
          description: "Aliquots, derivations, and storage positions recorded so any result traces to its origin.",
          tags: ["elN", "lims", "sample-tracking"],
          steps: [
            "Assign unique IDs at receipt; barcode physically and digitally",
            "Record every derivation event: parent ID, process, date, operator",
            "Track storage position changes like transactions, not overwrites",
            "Enforce required fields at entry; free-text only for observations",
            "Reconcile physical inventory vs system quarterly",
            "Enable one-click lineage tree per final sample"
          ],
          pitfalls: ["Spreadsheet-as-LIMS with silent column drift", "Pooled samples losing constituent IDs"]
        },
        {
          id: "protocol-versioning",
          title: "Version protocols like software",
          level: "foundation", minutes: 25,
          description: "Controlled protocol documents, change logs, and effective-date discipline for reproducibility and audits.",
          tags: ["protocols", "documentation", "reproducibility"],
          steps: [
            "Store protocols in controlled repo with semver-style versions",
            "Change log entry per revision: what changed, why, approved by",
            "Effective dates govern which version applies to which experiment dates",
            "Link executed runs to exact protocol version used",
            "Retire superseded versions visibly, never silently edit history",
            "Review critical protocols annually or upon equipment change"
          ],
          pitfalls: ["Protocol PDFs floating in email attachments", "Edits without version bumps breaking audit trails"]
        }
      ]
    },
    {
      id: "regulatory-clinical",
      label: "Regulatory & Clinical Data",
      procedures: [
        {
          id: "gxp-documentation",
          title: "Practice GxP-grade documentation habits",
          level: "intermediate", minutes: 30,
          description: "ALCOA+ principles applied daily: attributable, legible, contemporaneous, original, accurate.",
          tags: ["gxp", "alcoa", "documentation"],
          steps: [
            "Record observations contemporaneously; backfilling is a finding",
            "Sign/date entries; corrections use single-strike-through with reason",
            "Keep raw data untouched; analysis works on labeled copies",
            "Timestamps from controlled sources, not local clocks",
            "Audit-trail reviews scheduled per system risk tier",
            "Train every new team member on ALCOA+ with examples"
          ],
          pitfalls: ["Shared logins destroying attributability", "'Cleanup' edits deleting raw anomalies"]
        },
        {
          id: "clinical-data-cleanliness",
          title: "Keep clinical trial data inspection-ready",
          level: "advanced", minutes: 45,
          description: "Edit checks, discrepancy management, and lock discipline producing clean analyzable datasets.",
          tags: ["clinical-data", "edc", "trials"],
          steps: [
            "Configure edit checks at study build, not during enrollment",
            "Triage discrepancies daily by query aging priority",
            "Freeze database sections as they complete; control late changes",
            "Document every protocol deviation with impact assessment",
            "Run patient-profile reviews before any interim analysis",
            "Rehearse the inspection story: request-to-record traceability demo"
          ],
          pitfalls: ["Queries opened months later eroding site trust", "Unblinding incidents through careless report sharing"]
        }
      ]
    }
  ]
};
