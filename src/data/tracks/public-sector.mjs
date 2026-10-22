export const track = {
  id: "public-sector",
  label: "Public Sector & GovTech",
  icon: "🏛️",
  gradient: "from-slate-500 via-gray-400 to-stone-300",
  ring: "ring-slate-500/30",
  text: "text-slate-300",
  blurb: "Digital government service delivery, procurement discipline, and transparency-by-default.",
  roles: ["Civic Technologists", "Program Managers", "Policy Analysts", "Gov IT Teams"],
  domains: [
    {
      id: "digital-services",
      label: "Digital Services",
      procedures: [
        {
          id: "service-standard-audit",
          title: "Audit a government service against digital standards",
          level: "intermediate", minutes: 40,
          description: "User-journey completeness, accessibility, plain language, and assisted-digital pathways.",
          tags: ["govtech", "service-design", "accessibility"],
          steps: [
            "Walk the FULL journey including offline steps users still face",
            "Test with assistive tech; WCAG is the floor, not the target",
            "Rewrite key screens at plain-language grade; measure readability",
            "Verify assisted-digital route exists and staff can actually help",
            "Map every data field collected to a statutory need — delete the rest",
            "Publish performance data openly per service standard norms"
          ],
          pitfalls: ["Online forms that print PDFs requiring mail-in anyway", "'Digital-first' excluding residents without devices or IDs"]
        },
        {
          id: "public-interest-procurement",
          title: "Run technology procurement that avoids lock-in",
          level: "advanced", minutes: 45,
          description: "Open standards, exit clauses, data portability, and evaluation weighting beyond lowest bid.",
          tags: ["procurement", "vendor", "lock-in"],
          steps: [
            "Specify outcomes and open standards, not brand names",
            "Require data export in documented formats as contract condition",
            "Weight total-cost-of-ownership over N years, incl. exit costs",
            "Score maintainability and team transferability in evaluation",
            "Include government-held IP/reuse rights for custom builds",
            "Pilot before enterprise award whenever legally possible"
          ],
          pitfalls: ["Proprietary formats making exit cost infinite", "Lowest-bid winners unable to actually deliver"]
        },
        {
          slug: "records-transparency-default",
          id: "transparency-default",
          title: "Build records practices for transparency by default",
          level: "foundation", minutes: 30,
          description: "Classification, retention, and disclosure-ready recordkeeping meeting FOI obligations calmly.",
          tags: ["records", "foia", "transparency"],
          steps: [
            "Classify records at creation with retention schedules attached",
            "Write like you'll be read aloud: no speculation in official channels",
            "Keep personal data segregated for redaction-efficient release",
            "Log decisions with rationale contemporaneously",
            "Practice responding to a records request quarterly end-to-end",
            "Proactively publish high-demand record classes where law allows"
          ],
          pitfalls: ["Shadow messaging systems outside records management", "Requests triggering year-long archaeological digs"]
        },
        {
          slug: "gov-content-govstyle",
          id: "plain-language-content",
          title: "Write plain-language government content",
          level: "intermediate", minutes: 35,
          description: "Resident-facing forms, letters, and pages rewritten to plain-language conventions and tested with people who have never used the service. Use when publishing or rewriting any government content that residents read.",
          tags: ["govtech", "plain-language", "content"],
          steps: [
            "State what the resident must do in the first sentence and what they need to have ready; front-load the action and the prerequisites",
            "Cut the reading level to grade 8 with shorter sentences and common words, keeping jargon only where a statute requires the term",
            "Turn instructions into headings that name the section, so a reader finds the line they need without reading the whole page",
            "Put eligibility, deadlines, and costs in a table at the top, because buried conditions are where forms get abandoned",
            "Test with a resident who has never used the service before and watch where they hesitate, then rewrite that spot first",
            "Keep the legal requirement and the plain-language version in the same file and review them together, so the two cannot drift apart"
          ],
          pitfalls: [
            "Simplifying the wording while quietly changing the legal meaning of the requirement",
            "Rewriting the web page but leaving the printed form, the letter template, and the SMS reminders in the old jargon"
          ],
          kpis: ["Resident-facing pages at grade 8 reading level or below", "Form abandonment measured before and after each rewrite", "Every rewrite signed off by both the content owner and the legal reviewer"]
        }
      ]
    }
  ]
};
