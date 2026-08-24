export const track = {
  id: "technical-writing",
  label: "Technical Writing",
  icon: "✍️",
  gradient: "from-orange-500 via-red-400 to-pink-500",
  ring: "ring-orange-500/30",
  text: "text-orange-400",
  blurb: "Docs systems, API references, tutorials, and developer marketing that people finish reading.",
  roles: ["Technical Writers", "Developer Advocates", "Engineers Who Document", "Content Leads"],
  domains: [
    {
      id: "docs-systems",
      label: "Documentation Systems",
      procedures: [
        {
          id: "diataxis-audit",
          title: "Sort docs into types readers recognize",
          level: "foundation", minutes: 30,
          description: "Tutorials vs how-tos vs reference vs explanation — separating modes ends most doc confusion.",
          tags: ["diataxis", "information-architecture"],
          steps: [
            "Label every existing page: learning-journey, task-recipe, information-lookup, or theory",
            "Flag pages mixing modes; split at natural seams",
            "Write one flagship tutorial covering the happy path end-to-end",
            "Move edge-case handling into linked how-to recipes",
            "Generate reference mechanically from source where possible",
            "Add 'which page do I need?' router for newcomers"
          ],
          pitfalls: ["Tutorials stuffed with tangents breaking flow", "Reference prose explaining philosophy nobody asked"]
        },
        {
          id: "docs-as-code-workflow",
          title: "Run docs through the same pipeline as code",
          level: "intermediate", minutes: 30,
          description: "Versioned markdown, PR reviews, link checks, and preview deploys keeping docs trustworthy.",
          tags: ["docs-as-code", "ci", "markdown"],
          steps: [
            "Store docs beside code or in sibling repo with same review gates",
            "CI checks links, style rules, and builds previews per PR",
            "Enforce frontmatter metadata: owner, last-verified date, audience",
            "Broken-build rule applies: failing docs checks block merges",
            "Auto-generate changelog-driven updates for API surfaces",
            "Quarterly stale-sweep: unverified pages get flagged visibly"
          ],
          pitfalls: ["Wiki graveyards outside any workflow", "Screenshots rotting after every UI release"]
        }
      ]
    },
    {
      id: "api-reference",
      label: "API Reference & Guides",
      procedures: [
        {
          id: "endpoint-doc-pattern",
          title: "Document endpoints developers can copy-paste",
          level: "intermediate", minutes: 30,
          description: "Every endpoint documented with working request, realistic response, and error table.",
          tags: ["api-docs", "openapi"],
          steps: [
            "Lead with minimal working request using realistic sandbox data",
            "Show full response body, not truncated ellipses",
            "Error section lists codes with causes AND fixes",
            "Note rate limits, auth scopes, and idempotency behavior inline",
            "Provide copyable snippets in three top languages minimum",
            "Test every example in CI against staging nightly"
          ],
          pitfalls: ["Examples with fake keys that fail when tried", "Parameter tables without units or formats"]
        },
        {
          id: "tutorial-craft",
          title: "Write tutorials people actually finish",
          level: "intermediate", minutes: 35,
          description: "Fast first win, verifiable checkpoints, and failure exits keeping momentum.",
          tags: ["tutorials", "onboarding", "dx"],
          steps: [
            "Promise specific outcome in title; deliver it under 15 minutes",
            "Show expected result early with screenshot of finished state",
            "Verify-everything: each step includes what user should see",
            "Number recovery paths for common failures inline",
            "Cut every sentence not moving toward the promised outcome",
            "Test with two fresh users watching silently; fix stumbles"
          ],
          pitfalls: ["Prerequisite walls before first success", "'Simply' doing invisible multi-step things"]
        }
      ]
    },
    {
      id: "dev-content",
      label: "Dev Content & Advocacy",
      procedures: [
        {
          slug: "bug-story-post",
          authored: true,
          id: "debugging-story-post",
          title: "Turn a debugging war story into a post",
          level: "foundation", minutes: 40,
          description: "Structure bug-hunt experiences into engaging technical posts that teach method, not just drama. Use when writing dev blogs, hackathon retrospectives, or 'how I fixed X' content.",
          tags: ["blogging", "storytelling", "devrel"],
          steps: [
            "Open mid-action: the symptom that ruined your day, concretely",
            "Reconstruct hunt as numbered hypotheses with evidence for/against",
            "Show the misleading path you took — readers learn most there",
            "Reveal root cause with the minimal repro snippet",
            "Extract 2-3 transferable lessons beyond this specific bug",
            "End with prevention checklist readers can adopt today"
          ],
          pitfalls: ["Chronological dumps including irrelevant detours", "Lessons so generic they fit any story"]
        },
        {
          id: "changelog-users-read",
          title: "Write changelogs users read",
          level: "foundation", minutes: 20,
          description: "User-outcome phrasing, migration notes, and consistent categories building release trust.",
          tags: ["changelog", "release-notes"],
          steps: [
            "Categorize: Added / Changed / Fixed / Breaking / Security only",
            "Phrase entries as user outcomes, not commit messages",
            "Breaking changes lead with migration snippet and deadline",
            "Link each entry to PR/docs for depth-seekers",
            "Keep voice consistent; assign one editor per release",
            "Never ship silent dependency bumps past Security category"
          ],
          pitfalls: ["'Misc fixes and improvements' filler sections", "Breaking changes discovered at runtime"]
        }
      ]
    }
  ]
};
