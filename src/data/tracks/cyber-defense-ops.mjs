export const track = {
  id: "cyber-defense-ops",
  label: "Cyber Defense & SOC",
  icon: "🛡️",
  gradient: "from-red-700 via-rose-600 to-orange-500",
  ring: "ring-red-500/30",
  text: "text-red-400",
  blurb: "Security operations: alert triage, threat hunting, detection engineering, and purple-team rigor.",
  roles: ["SOC Analysts", "Detection Engineers", "Threat Hunters", "Blue Teams"],
  domains: [
    {
      id: "soc-operations",
      label: "SOC Operations",
      procedures: [
        {
          id: "alert-triage-discipline",
          title: "Triage alerts with consistent depth",
          level: "foundation", minutes: 25,
          description: "Enrichment order, true/false-positive calls with evidence, and escalation criteria applied identically every shift.",
          tags: ["triage", "soc", "enrichment"],
          steps: [
            "Pull alert context first: entity history, related alerts last 7 days",
            "Enrich systematically: IP reputation, hash verdicts, identity risk, asset criticality",
            "Validate against known-change calendar before calling malicious",
            "Classify with evidence links attached — no verdict without artifact",
            "Escalate by blast radius criteria written down, not gut feel",
            "Log analyst notes reusable by the next person"
          ],
          pitfalls: ["Auto-closing batches to clear the queue before events", "Verdicts without captured evidence being unreproducible"]
        },
        {
          id: "hunt-hypothesis",
          title: "Hunt threats with falsifiable hypotheses",
          level: "advanced", minutes: 45,
          description: "Structured hunts starting from TTP intelligence, producing detections or documented negatives.",
          tags: ["threat-hunting", "mitre", "proactivity"],
          steps: [
            "Pick one TTP from intel relevant to your stack this month",
            "Write hypothesis: 'IF technique X used THEN artifacts Y visible in Z source'",
            "Verify telemetry actually covers Z before hunting (coverage map)",
            "Query broadly first, narrow on anomaly clusters",
            "Outcome A: findings → immediate detection rule + IR handoff",
            "Outcome B: negative → document coverage gap or baseline noise profile"
          ],
          pitfalls: ["Hunting where logs don't exist, wasting hours", "Findings living in hunt notes, never becoming detections"]
        },
        {
          id: "log-source-coverage",
          title: "Map log source coverage to attack surface",
          level: "intermediate", minutes: 35,
          description: "Inventory what you can see versus what attacks require, closing blind spots deliberately.",
          tags: ["visibility", "logging", "coverage"],
          steps: [
            "List top MITRE techniques relevant to your industry threat profile",
            "Map each to required telemetry source and current ingestion status",
            "Score coverage: full / partial / none per technique",
            "Prioritize gaps by likelihood × detection-value",
            "Fund onboarding of highest-value sources with success tests",
            "Re-map quarterly; infrastructure drifts silently"
          ],
          pitfalls: ["Ingesting everything equally, cost exploding value flat", "Coverage assumed rather than tested with synthetic events"]
        }
      ]
    },
    {
      id: "detection-purple",
      label: "Detection & Purple Team",
      procedures: [
        {
          id: "detection-rule-lifecycle",
          title: "Engineer detections through a full lifecycle",
          level: "advanced", minutes: 40,
          description: "Rule ideation, tuning against baselines, staged rollout, and measured precision over time.",
          tags: ["detection-engineering", "sigma", "siem"],
          variants: {
            splunk: { id: "splunk", label: "Splunk", adds: ["Version rules in a git-backed ES correlation search repo", "Use data models to keep searches acceleration-friendly"] },
            sentinel: { id: "sentinel", label: "Microsoft Sentinel", adds: ["Deploy analytics rules as code via ARM/Bicep pipelines", "Watch ingestion latency when setting query frequency"] }
          },
          description: "Ship detection rules like code: versioned, tested, tuned, and retired deliberately.",
          tags: ["detection-engineering", "as-code"],
          steps: [
            "Draft rule from hunt/intel with explicit logic rationale documented",
            "Backtest against 30 days of data; measure raw hit volume",
            "Tune out benign-true noise using environment baselines, not blanket exclusions",
            "Stage: silent-run in prod for one week comparing predicted vs actual hits",
            "Enable with severity matched to expected fidelity; document false-positive budget",
            "Review rule precision quarterly; retire or rewrite below threshold"
          ],
          pitfalls: ["Rules enabled then never revisited until they page falsely", "Exclusions so broad they hollow out the logic"]
        },
        {
          id: "purple-validation",
          title: "Validate detections with purple-team exercises",
          level: "intermediate", minutes: 40,
          description: "Safe technique emulation proving alerts fire end-to-end, producing concrete coverage evidence.",
          tags: ["purple-team", "validation", "atomic"],
          steps: [
            "Select atomic tests matching your mapped priority techniques",
            "Run in isolated lab mirroring production logging config exactly",
            "Trace: did endpoint event reach SIEM parse correctly AND alert fire?",
            "Record three states: detected / ingested-not-alerted / not-ingested",
            "File engineering tickets per gap with retest dates",
            "Report coverage trend to leadership in techniques-validated terms"
          ],
          pitfalls: ["Testing in labs whose log pipelines differ from production", "Emulations risky enough to trigger real incidents uncontrolled"]
        },
        {
          id: "tabletop-facilitation",
          title: "Facilitate ransomware tabletops that find truth",
          level: "intermediate", minutes: 40,
          description: "Scenario injects probing decision boundaries, revealing plan gaps without blame theater.",
          tags: ["tabletop", "incident-response", "exercises"],
          steps: [
            "Pick scenario targeting THIS org's crown jewels, not generic templates",
            "Script escalating injects with decision points and time pressure",
            "Assign roles including uncomfortable ones (legal, comms, CEO availability)",
            "Capture decision log verbatim; gaps speak louder than slides",
            "Debrief into ranked remediations with owners and deadlines",
            "Retest failed injects in the next exercise cycle"
          ],
          pitfalls: ["Scenarios so fictional everyone plays along harmlessly", "Action items dying between exercises year after year"]
        }
      ]
    }
  ]
};
