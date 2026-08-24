export const track = {
  id: "career-development",
  label: "Career & Job Search",
  icon: "🎯",
  gradient: "from-orange-500 via-amber-400 to-yellow-300",
  ring: "ring-orange-500/30",
  text: "text-orange-300",
  blurb: "Job search systems, resume truth-craft, interview prep, and offer negotiation.",
  roles: ["Job Seekers", "Career Changers", "New Grads", "Anyone Levelling Up"],
  domains: [
    {
      id: "search-assets",
      label: "Search Assets",
      procedures: [
        {
          id: "resume-truth-optimization",
          title: "Build a resume that is true AND effective",
          level: "foundation", minutes: 40,
          description: "Achievement-format bullets with honest metrics, ATS-safe structure, and per-role tailoring.",
          tags: ["resume", "ats", "job-search"],
          steps: [
            "Convert duties to outcomes: action verb + what changed + metric where real",
            "One page per decade of experience; reverse chronological, standard headers",
            "Mirror role-posting language you can honestly claim — never fabricate",
            "Quantify selectively; invented precision reads as fake to experts",
            "Tailor the top third (summary + first bullets) per application in minutes",
            "Test: does every bullet survive a curious interviewer's 'tell me more'?"
          ],
          pitfalls: ["Keyword-stuffed invisible text tricks flagged by modern parsers", "Team achievements claimed as solo work collapsing in interviews"]
        },
        {
          id: "portfolio-proof-system",
          title: "Build proof-of-work that beats credentials",
          level: "intermediate", minutes: 35,
          description: "Case studies with problem→approach→outcome narratives and verified public artifacts.",
          tags: ["portfolio", "evidence", "branding"],
          steps: [
            "Pick 3 projects showing range: depth, collaboration, and outcome ownership",
            "Structure each as situation → constraints → your decisions → measurable result",
            "Link verifiable artifacts: repos, live demos, merged PRs, shipped metrics",
            "Audit links yearly like a footprint audit — dead links kill credibility",
            "Write the 'what I'd do differently' section; seniority shows in reflection",
            "Match portfolio depth to target role level, not maximum effort everywhere"
          ],
          pitfalls: ["Ten half-finished demos instead of three polished cases", "Group projects presented without clarifying your exact contribution"]
        }
      ]
    },
    {
      id: "interview-offers",
      label: "Interviews & Offers",
      procedures: [
        {
          id: "star-story-bank",
          title: "Prepare a STAR story bank, not memorized scripts",
          level: "intermediate", minutes: 40,
          description: "8-10 reusable stories mapped to competencies, told fresh under pressure.",
          tags: ["interview", "behavioral", "preparation"],
          steps: [
            "Inventory career moments: conflict, failure, leadership, ambiguity, impact",
            "Draft each in Situation-Task-Action-Result with YOUR actions explicit",
            "Tag stories by competency they prove; overlaps fine, gaps are prep targets",
            "Rehearse OUT LOUD to 90-second versions; timing beats content polish",
            "For each story prepare one follow-up-depth detail you can expand into",
            "Post-interview log which stories landed; refine weak ones while fresh"
          ],
          pitfalls: ["Word-perfect scripts shattering on unexpected follow-ups", "Stories where the team succeeded but 'I' disappears"]
        },
        {
          id: "offer-negotiation-principled",
          title: "Negotiate offers without fear or fantasy",
          level: "advanced", minutes: 30,
          description: "Market data anchors, total-comp framing, and principled asks preserving relationships.",
          tags: ["negotiation", "offers", "salary"],
          steps: [
            "Anchor on market bands from multiple current sources for THIS role/city",
            "Evaluate TOTAL comp: base, equity realistic-value, bonus history, benefits cash-equivalents",
            "Express enthusiasm first; negotiate specifics second — never bluff walking away",
            "Ask once, clearly, with justification; silence is their tool, not yours to fear",
            "Get everything in writing before accepting or declining anywhere",
            "Log your numbers anonymously to community sources after closing"
          ],
          pitfalls: ["First-number anchoring accepted without market check", "'Competing offer' bluffs called by recruiters daily"]
        }
      ]
    }
  ]
};
