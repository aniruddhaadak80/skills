export const EXTRA_DOMAINS = {
  "aviation-aerospace": [
    {
      id: "ops-planning",
      label: "Ops Planning",
      procedures: [
        {
          id: "maintenance-planning-basics",
          title: "Plan maintenance without grounding surprises",
          level: "intermediate", minutes: 35,
          description: "Forecast-driven scheduling, parts lead-time reality, and deferred-item tracking keeping fleets available.",
          tags: ["maintenance", "planning", "availability"],
          steps: [
            "Forecast maintenance events from utilization projections, not calendar guesses",
            "Track parts lead times as distributions; order long-leads at contract signing",
            "Manage deferred defects with hard limits and review board sign-off",
            "Bundle tasks opportunistically when aircraft access anyway",
            "Negotiate heavy-check windows with realistic discovery allowances",
            "Review plan-vs-actual monthly; feed variance into next cycle's buffers"
          ],
          pitfalls: ["Non-routine discoveries treated as schedule shocks every single time", "Deferred items aging silently past limits"]
        }
      ]
    }
  ],
  "agriculture-agtech": [
    {
      id: "livestock-systems",
      label: "Livestock Systems",
      procedures: [
        {
          id: "herd-record-discipline",
          title: "Keep herd records that drive decisions",
          level: "foundation", minutes: 25,
          description: "Individual identification, health/treatment logs, and breeding performance data captured at the chute.",
          tags: ["livestock", "records", "traceability"],
          steps: [
            "Identify every animal individually from day one; group records hide problems",
            "Record treatments at administration: animal, drug, dose, withdrawal date",
            "Withdrawal dates block sale automatically — flag before market day",
            "Track breeding performance per dam: conception, intervals, losses",
            "Reconcile physical head-counts against system monthly",
            "Review trends per management group, not herd-average fairy tales"
          ],
          pitfalls: ["Paper lot-books transcribed never", "Withdrawal violations discovered by processor residue tests"]
        }
      ]
    }
  ],
  "biotech-pharma": [
    {
      id: "quality-suppliers",
      label: "Supplier Quality",
      procedures: [
        {
          id: "vendor-qualification-gxp",
          title: "Qualify GxP vendors before reliance",
          level: "advanced", minutes: 40,
          description: "Risk-tiered audits, quality agreements, and change-notification clauses protecting product integrity.",
          tags: ["suppliers", "gxp", "qualification"],
          steps: [
            "Tier vendors by impact on product quality/patient safety",
            "Tier-1 requires on-site or remote audit against documented agenda",
            "Quality agreement defines specs, change notification windows, audit rights",
            "Verify certificates scope covers ACTUAL materials/services purchased",
            "Performance reviewed per lot: CoA trends, deviations, complaints",
            "Requalification triggered by changes, incidents, or schedule expiry"
          ],
          pitfalls: ["Certificates accepted covering different site or grade", "Vendor changes materializing without any notification arriving"]
        }
      ]
    }
  ],
  "public-sector": [
    {
      id: "civic-engagement",
      label: "Civic Engagement",
      procedures: [
        {
          id: "public-comment-analysis",
          title: "Analyze public comments without bias amplification",
          level: "intermediate", minutes: 35,
          description: "Representative sampling, theme coding with reliability checks, and reporting honoring minority voices.",
          tags: ["public-comments", "analysis", "equity"],
          steps: [
            "Inventory comment sources; weight channels by reach, not volume alone",
            "Deduplicate campaigns while preserving legitimate distinct senders",
            "Code themes with double-coding on a sample; measure agreement",
            "Report majority AND minority themes explicitly with counts",
            "Publish methodology so conclusions can be scrutinized",
            "Feed results into decision documents with responses to themes raised"
          ],
          pitfalls: ["Form-letter campaigns counted as thousands of unique voices", "Analysis confirming the pre-written decision"]
        }
      ]
    }
  ],
  "nonprofit-impact": [
    {
      id: "volunteer-force",
      label: "Volunteer Force",
      procedures: [
        {
          id: "volunteer-onboarding-system",
          title: "Onboard volunteers into retained contributors",
          level: "foundation", minutes: 25,
          description: "Screening proportionate to role, first-shift success design, and recognition rhythms reducing churn.",
          tags: ["volunteers", "onboarding", "retention"],
          steps: [
            "Match screening depth to actual role risk; consistent per tier",
            "First shift pairs newcomer with seasoned volunteer, never solo",
            "Role descriptions state time commitment honestly upfront",
            "Check in at 2 weeks and 90 days; early friction predicts churn",
            "Recognize hours milestones personally, not just annual certificates",
            "Exit conversations with levers: role fit, schedule, respect"
          ],
          pitfalls: ["Background checks for cookie-sorting alienating helpers", "Star volunteers exploited until they vanish resentfully"]
        }
      ]
    }
  ],
  "sports-performance": [
    {
      id: "match-intelligence",
      label: "Match Intelligence",
      procedures: [
        {
          id: "match-analysis-workflow",
          title: "Turn match footage into Monday's training",
          level: "intermediate", minutes: 40,
          description: "Question-led coding, opposition tendencies, and session-linked insights coaches actually use.",
          tags: ["analysis", "video", "tactics"],
          steps: [
            "Define two tactical questions per match BEFORE coding anything",
            "Tag events consistently; your codebook outlives any software",
            "Clip key moments tagged to the question they answer",
            "Present to players with their perspective, not spreadsheets",
            "Convert one insight into next week's session design explicitly",
            "Archive coded data; patterns emerge across seasons only"
          ],
          pitfalls: ["Highlight reels masquerading as analysis", "Insights presented once then never trained"]
        }
      ]
    }
  ],
  "media-production": [
    {
      id: "accessibility-media",
      label: "Accessible Media",
      procedures: [
        {
          id: "captioning-accessibility-standard",
          title: "Caption and describe to accessibility standard",
          level: "foundation", minutes: 30,
          description: "Accuracy thresholds, speaker ID, sound description, and audio-description planning from production.",
          tags: ["captions", "accessibility", "compliance"],
          steps: [
            "Target 99% accuracy minimum; auto-captions are drafts, never deliverables",
            "Identify speakers and meaningful non-speech sounds ([laughter], [door slams])",
            "Frame-rate captions to speech rhythm; reading speed limits respected",
            "Plan shots for audio-description feasibility during production",
            "Test with deaf/HoH and blind reviewers before publishing",
            "Version caption files alongside video; re-cut means re-caption"
          ],
          pitfalls: ["Auto-captions shipping with names mangled beyond recognition", "Description crammed into nonexistent gaps post-production"]
        }
      ]
    }
  ]
};
