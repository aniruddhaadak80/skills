export const track = {
  id: "education-learning",
  label: "Education & Teaching",
  icon: "🎓",
  gradient: "from-amber-400 via-yellow-400 to-orange-300",
  ring: "ring-amber-500/30",
  text: "text-amber-400",
  blurb: "Lesson design, assessment craft, classroom management, and online-course production.",
  roles: ["Teachers", "Instructional Designers", "Course Creators", "Trainers"],
  domains: [
    {
      id: "instructional-design",
      label: "Instructional Design",
      procedures: [
        {
          id: "learning-objectives-measurable",
          title: "Write learning objectives you can actually assess",
          level: "foundation", minutes: 25,
          description: "Observable-verb objectives aligned to assessments so teaching, testing, and claims match.",
          tags: ["objectives", "curriculum", "assessment"],
          steps: [
            "State who will do what observable action by when",
            "Use measurable verbs (derive, compare, debug) not fog (understand, appreciate)",
            "Set the difficulty level honestly against learner prerequisites",
            "Map every objective to at least one assessment item",
            "Delete objectives nothing assesses; they waste student attention",
            "Sequence objectives so each builds on demonstrated prior mastery"
          ],
          pitfalls: ["'Students will understand X' — untestable and unteachable", "Assessments measuring reading skill instead of target skill"]
        },
        {
          id: "lesson-plan-craft",
          title: "Design lessons around attention rhythms",
          level: "intermediate", minutes: 35,
          description: "Open with curiosity, alternate instruction with active practice, close with retrieval.",
          tags: ["lesson-planning", "pedagogy"],
          steps: [
            "Hook in first 4 minutes tied to today's objective, not trivia",
            "Direct instruction segments ≤10 minutes before activity switch",
            "Every explanation followed by immediate low-stakes practice",
            "Build checks-for-understanding every segment (cold call safely, mini-whiteboards)",
            "Plan misconception responses in advance, not improv",
            "Close with retrieval: students reconstruct key idea unprompted"
          ],
          pitfalls: ["Beautiful slides doing the learning for students", "No planned response to the #1 predictable confusion"]
        },
        {
          id: "course-production-online",
          title: "Produce an online course people finish",
          level: "advanced", minutes: 45,
          description: "Structure, pacing, and accountability mechanics fighting the 90% non-completion norm.",
          tags: ["course-design", "online-learning"],
          steps: [
            "Promise one transformation in the title; module = milestone toward it",
            "Videos ≤7 minutes each, one idea per video, show don't only tell",
            "Deliverable after every module learners can share publicly",
            "Weekly rhythm (cohort) or streak mechanics (self-paced) — pick one",
            "First-module win within 30 minutes of signup",
            "Interview finishers AND quitters; fix what quitters cite first"
          ],
          pitfalls: ["Twelve hours of lecture nobody asked to binge", "Quizzes testing video recall over applied skill"]
        }
      ]
    },
    {
      id: "classroom-assessment",
      label: "Classroom & Assessment",
      procedures: [
        {
          id: "rubric-construction",
          title: "Build rubrics that grade fairly and fast",
          level: "intermediate", minutes: 30,
          description: "Analytic rubrics with observable descriptors turning subjective grading into calibrated judgment.",
          tags: ["rubrics", "grading", "fairness"],
          steps: [
            "Derive criteria from objectives, max 5 dimensions",
            "Describe each performance level observably ('cites two sources') not adverbially ('excellent')",
            "Pilot on three sample works spanning quality; refine wording collisions",
            "Grade blind where feasible; re-score a 10% sample for consistency",
            "Give rubric to students BEFORE submission, use it for peer/self-checks",
            "Analyze score distributions; a criterion everyone aces is noise"
          ],
          pitfalls: ["Holistic vibes graded differently at 9pm vs fresh morning", "Rubrics written after grading to justify scores"]
        },
        {
          id: "behavior-system-design",
          title: "Design a classroom behavior system that prevents",
          level: "intermediate", minutes: 25,
          description: "Clear expectations, positive ratios, and least-invasive corrections keeping instruction flowing.",
          tags: ["classroom-management", "culture"],
          steps: [
            "Co-create 3-5 positively-phrased expectations with examples of looks-like",
            "Narrate desired behavior specifically ('tables quieted in 20 seconds')",
            "Aim 4:1 positive-to-corrective interactions minimum, tracked honestly",
            "Least-invasive correction ladder: proximity → private → public consequence",
            "Never debate mid-class; defer conversations to structured 1:1 time",
            "Restart routines after every break like it's week one"
          ],
          pitfalls: ["Public power struggles rewarding the disruption with audience", "Rules existing only as poster decoration"]
        }
      ]
    }
  ]
};
