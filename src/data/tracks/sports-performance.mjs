export const track = {
  id: "sports-performance",
  label: "Sports & Performance",
  icon: "🏆",
  gradient: "from-orange-600 via-amber-400 to-lime-400",
  ring: "ring-amber-500/30",
  text: "text-amber-300",
  blurb: "Training design, load monitoring, and return-to-play progression for coaches and athletes.",
  roles: ["Coaches", "S&C Specialists", "Athletic Trainers", "Team Scientists"],
  domains: [
    {
      id: "training-design",
      label: "Training Design",
      procedures: [
        {
          id: "periodization-basics",
          title: "Periodize training around real competition calendars",
          level: "intermediate", minutes: 35,
          description: "Macro-to-micro planning balancing stress and adaptation with planned recovery weeks.",
          tags: ["periodization", "planning", "coaching"],
          steps: [
            "Anchor to competition dates working backwards through phases",
            "Define each phase's primary adaptation goal in one sentence",
            "Vary volume and intensity inversely within weeks, not both up together",
            "Plan deload every 3-5 weeks BEFORE fatigue forces it",
            "Individualize: adjust for athletes' life stress and sleep reality",
            "Review block outcomes against phase goals; carry lessons forward"
          ],
          pitfalls: ["Copy-pasting elite programs onto developing athletes", "Competition prep starting after it should have"]
        },
        {
          id: "load-monitoring-practical",
          title: "Monitor training load without gadget worship",
          level: "foundation", minutes: 25,
          description: "Simple consistent measures — sRPE, duration, wellness — trended per athlete over time.",
          tags: ["load-management", "monitoring", "safety"],
          steps: [
            "Collect session RPE × minutes within 30min post-session, consistently",
            "Compute acute (7d) vs chronic (28d) ratio; flag spikes above agreed band",
            "Add one subjective wellness signal daily (sleep/soreness/mood scale)",
            "Trend INDIVIDUALLY; population averages hide the athlete at risk",
            "Act on flags via conversation first, dashboards second",
            "Review monitoring usefulness each season; delete vanity metrics"
          ],
          pitfalls: ["ACWR treated as physics instead of a rough flag", "Data collected but never changing tomorrow's session"]
        },
        {
          id: "return-to-play-progression",
          title: "Progress return-to-play by criteria, not calendars",
          level: "advanced", minutes: 40,
          description: "Stage gates with objective tests protecting athletes from rush-back reinjury.",
          tags: ["rehabilitation", "return-to-play", "safety"],
          steps: [
            "Define stage criteria BEFORE injury happens where possible",
            "Each stage: pain-free capacity → sport-specific loads → reactive chaos",
            "Test objectively per stage (strength symmetry, hop tests, speed percentages)",
            "Progress on criteria met, never on schedule pressure alone",
            "Include psychological readiness — fear of reinjury predicts actual risk",
            "Full clearance requires full training week completed symptom-free"
          ],
          pitfalls: ["Calendar-based clearances driven by fixture pressure", "Skipping the final 'chaos' stage straight into competition"]
        }
      ]
    },
    {
      id: "coaching-craft",
      label: "Coaching Craft",
      procedures: [
        {
          id: "effective-cueing",
          title: "Cue movements so they actually change",
          level: "foundation", minutes: 20,
          description: "External-focus cues, one fix at a time, and demonstration pairing accelerating skill acquisition.",
          tags: ["coaching", "motor-learning", "communication"],
          steps: [
            "Prefer external focus ('push the floor away') over joint anatomy talk",
            "One cue per attempt; stacked instructions freeze learners",
            "Show AND say for novices; fade demonstrations as skill grows",
            "Reinforce what's right specifically before correcting what's off",
            "Check understanding: ask them to tell you the fix in their words",
            "Retire cues that stopped producing change; rotate metaphors"
          ],
          pitfalls: ["Anatomical lectures mid-set", "Same ineffective cue repeated louder"]
        },
        {
          id: "warmup-that-prepares",
          title: "Design warm-ups that prepare, not tire",
          level: "foundation", minutes: 15,
          description: "Progressive raise-activate-mobilize structure specific to the session's demands.",
          tags: ["warm-up", "preparation", "injury-prevention"],
          steps: [
            "Raise: 3-5min general pulse elevation appropriate to intensity ahead",
            "Activate: target the day's key muscle groups with light loaded work",
            "Mobilize: dynamic ranges matching sport positions, not static holding",
            "Potentiate: ramp sport-specific intensity ending near working pace",
            "Total 10-15 minutes; fatigue is failure, sweat is success",
            "Adapt content to session focus — leg day ≠ upper day prep"
          ],
          pitfalls: ["20 minutes of static stretching before sprint work", "Generic jog-and-stretch ignoring the day's actual demands"]
        }
      ]
    }
  ]
};
