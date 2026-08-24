export const track = {
  id: "media-production",
  label: "Media & Video Production",
  icon: "🎬",
  gradient: "from-sky-600 via-blue-500 to-indigo-400",
  ring: "ring-sky-500/30",
  text: "text-sky-400",
  blurb: "Pre-production discipline, interview craft, edit pacing, and publish-ready packaging.",
  roles: ["Video Creators", "Podcasters", "Documentary Makers", "Content Studios"],
  domains: [
    {
      id: "preproduction",
      label: "Pre-Production",
      procedures: [
        {
          id: "prepro-checklist",
          title: "Pre-produce shoots that don't improvise",
          level: "foundation", minutes: 30,
          description: "Shot lists, location scouts, gear checks, and contingency plans making shoot days boring.",
          tags: ["pre-production", "planning", "video"],
          steps: [
            "Write the one-sentence deliverable definition before anything else",
            "Shot list from the edit backwards: every shot has a destination",
            "Scout locations at shoot TIME of day for light and noise reality",
            "Gear checklist per shot type; batteries and media double what seems enough",
            "Contingency plan per risk: weather, noise, subject cancellation",
            "Confirm everyone 24h before with call sheet including parking/access notes"
          ],
          pitfalls: ['"We\'ll figure it out there" burning golden-hour hours', "Missing B-roll discovered in the edit"]
        },
        {
          id: "interview-setup-craft",
          title: "Set up interviews that produce usable answers",
          level: "intermediate", minutes: 35,
          description: "Question design, comfort engineering, and listening technique yielding complete soundbites.",
          tags: ["interviews", "documentary", "storytelling"],
          steps: [
            "Research enough to ask unexpected second questions",
            "Open with throwaway comfort questions while checking levels",
            "Ask one idea per question ending with open phrasing",
            "Embrace silence after answers; the second take is usually gold",
            "Request the story, not the opinion ('walk me through that day')",
            "Re-ask key answers cleanly once rapport peaks for edit-friendly takes"
          ],
          pitfalls: ["Yes/no questions producing unusable fragments", "Interrupting the pause where real answers live"]
        }
      ]
    },
    {
      id: "post-publish",
      label: "Post & Publishing",
      procedures: [
        {
          id: "edit-pacing-discipline",
          title: "Edit with ruthless pacing discipline",
          level: "intermediate", minutes: 40,
          description: "Structure-first assembly, kill-your-darlings trims, and audio polish before visual candy.",
          tags: ["editing", "pacing", "post-production"],
          steps: [
            "Assemble radio-cut (audio only) first; if story works deaf, visuals elevate",
            "Trim each clip to its strongest start and end — then trim again",
            "Vary rhythm deliberately: pattern breaks hold attention",
            "Fix audio quality before color; bad audio reads as amateur instantly",
            "Watch full cut on phone speaker AND headphones before sharing",
            "Cut your favorite shot if it doesn't serve the story — really"
          ],
          pitfalls: ["Effects compensating for structure problems", "Ten-second intros before value appears"]
        },
        {
          id: "publish-packaging",
          title: "Package publishes for discovery",
          level: "foundation", minutes: 25,
          description: "Titles, thumbnails, descriptions, and chapters engineered as a system per platform.",
          tags: ["packaging", "youtube", "distribution"],
          steps: [
            "Title promises specific payoff; thumbnail shows tension or outcome, minimal text",
            "Test title/thumbnail as a pair — they argue or agree as one unit",
            "First line of description restates the promise for search",
            "Chapters named by content curiosity, not 'Part 1'",
            "Adapt aspect ratio, length, and hook timing per platform natively",
            "Log packaging hypotheses with results; build your own playbook"
          ],
          pitfalls: ["Same file cross-posted everywhere identically", "Thumbnail text unreadable at feed size"]
        }
      ]
    }
  ]
};
