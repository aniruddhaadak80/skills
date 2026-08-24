export const track = {
  id: "people-hr",
  label: "People & HR",
  icon: "👥",
  gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  ring: "ring-rose-500/30",
  text: "text-rose-400",
  blurb: "Recruiting, onboarding, policies, and people operations that scale with empathy.",
  roles: ["HR Managers", "Recruiters", "People Ops", "Team Leads"],
  domains: [
    {
      id: "recruiting",
      label: "Recruiting",
      procedures: [
        {
          id: "jd-writing-inclusive",
          title: "Write job descriptions candidates actually read",
          level: "foundation", minutes: 30,
          description: "Outcome-focused, inclusive-language JDs that widen rather than shrink funnels.",
          tags: ["job-description", "inclusive-hiring"],
          steps: [
            "Lead with impact: what will this person own and change in year one?",
            "List must-haves ≤5; move nice-to-haves to a 'bonus' section",
            "Strip coded language ('rockstar', 'aggressive'); run gender-decoder check",
            "State salary range and process timeline upfront",
            "Describe interview steps concretely so candidates can prepare",
            "Test readability at grade 9 level; cut jargon"
          ],
          pitfalls: ["Ten-year requirement lists filtering out high-potential candidates", "'Culture fit' phrasing inviting affinity bias"]
        },
        {
          id: "screening-bias-guards",
          title: "Screen resumes with bias guards",
          level: "intermediate", minutes: 25,
          description: "Structured screening rubrics applied blind where feasible, reducing noise-based rejection.",
          tags: ["screening", "bias", "recruiting"],
          steps: [
            "Define rubric criteria tied to job outcomes before viewing resumes",
            "Anonymize names/schools/photos during first pass where legal",
            "Score independently; discuss only divergent cases",
            "Weight demonstrated work over pedigree proxies",
            "Log rejection reasons per stage; audit monthly for pattern drift",
            "Keep pipeline data for adverse-impact analysis"
          ],
          pitfalls: ["Keyword filters rejecting qualified non-linear careers", "Similarity attraction favoring resume mirrors"]
        }
      ]
    },
    {
      id: "onboarding-offboarding",
      label: "Onboarding & Offboarding",
      procedures: [
        {
          id: "day-one-onboarding",
          title: "Deliver a first week that converts",
          level: "intermediate", minutes: 30,
          description: "Pre-provisioned access, buddy assignment, and a shipped-by-Friday first task.",
          tags: ["onboarding", "retention"],
          steps: [
            "Provision accounts/hardware BEFORE day one; verify login day zero",
            "Assign an onboarding buddy separate from the manager",
            "Schedule meet-and-greets with key collaborators week one",
            "Ship something tiny to production by Friday",
            "Day-5 pulse survey: clarity, belonging, blockers",
            "Manager check-ins at 7/30/90 days against role expectations"
          ],
          pitfalls: ["Week one lost to access tickets", "New hires reading docs alone for five days"]
        },
        {
          id: "graceful-offboarding",
          title: "Offboard gracefully and securely",
          level: "foundation", minutes: 20,
          description: "Knowledge transfer, access revocation, and humane exits protecting everyone involved.",
          tags: ["offboarding", "security", "knowledge-transfer"],
          steps: [
            "Run exit knowledge-transfer checklist per owned system",
            "Revoke access at separation hour: SSO, repos, VPN, cards",
            "Transfer ownership of docs, cron jobs, vendor relationships",
            "Exit interview focused on systemic learning, not venting capture",
            "Alumni path: references, referral bonus, rehire eligibility stated",
            "Audit orphaned accesses 30 days later"
          ],
          pitfalls: ["Departures discovering single-person knowledge lock-ins", "Access lingering for months post-exit"]
        }
      ]
    },
    {
      id: "policy-engagement",
      label: "Policy & Engagement",
      procedures: [
        {
          slug: "footprint-audit",
          authored: true,
          id: "online-footprint-audit",
          title: "Audit an online professional footprint",
          level: "intermediate", minutes: 40,
          description: "Verify claims, detect namesake contamination, and flag privacy leaks across public profiles. Use during background reviews, bio writing, personal-brand cleanups, or pre-publication fact checks.",
          tags: ["research", "verification", "privacy", "background-check"],
          steps: [
            "Enumerate surfaces: code hosts, socials, blogs, portfolios, badge pages",
            "Verify each claim at its primary source; record URL and date checked",
            "Label every claim VERIFIED / UNVERIFIED / CONTAMINATED (namesake)",
            "Search name + achievement pairs to catch other-person attribution",
            "Flag leaked PII (phone, DOB) onto a takedown list — never republish it",
            "Draft bios drawing ONLY from verified items with conservative rounding"
          ],
          pitfalls: ["Trusting AI answers blending namesakes", "Republishing contact data because 'it is already public'"]
        },
        {
          id: "engagement-pulse-loops",
          title: "Run engagement pulse loops that change things",
          level: "intermediate", minutes: 25,
          description: "Short surveys, visible actions, closed feedback loops — trust grows from evidence of listening.",
          tags: ["engagement", "surveys", "culture"],
          steps: [
            "Pulse 5-8 questions max, anonymous with cohort minimums (n≥5)",
            "Ask about energy, clarity, growth, blockers — not pizza-party satisfaction",
            "Share raw themes within one week, including uncomfortable ones",
            "Pick ONE action per cycle with named owner and date",
            "Report progress next cycle before collecting new data",
            "Retire questions answered by shipped actions"
          ],
          pitfalls: ["Annual surveys whose results vanish into decks", "Anonymous channels used for blame archaeology"]
        }
      ]
    }
  ]
};
