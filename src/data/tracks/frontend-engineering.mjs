export const track = {
  id: "frontend-engineering",
  label: "Frontend Engineering",
  icon: "🎨",
  gradient: "from-pink-500 via-rose-500 to-orange-400",
  ring: "ring-pink-500/30",
  text: "text-pink-400",
  blurb: "Build fast, accessible, beautiful interfaces with React, Next.js, and modern CSS.",
  roles: ["Frontend Engineers", "Full-Stack Developers", "Design Engineers", "UI Developers"],
  domains: [
    {
      id: "react-patterns",
      label: "React Patterns",
      procedures: [
        {
          id: "server-client-boundary",
          title: "Draw the server/client component boundary",
          level: "intermediate", minutes: 30,
          description: "Decide what renders on the server versus client in React Server Components to minimize JavaScript shipped.",
          tags: ["react", "nextjs", "rsc"],
          steps: [
            "Default every component to server-rendered; add interactivity at the leaves",
            "Push 'use client' down to the smallest interactive subtree (buttons, inputs)",
            "Fetch data in server components; pass plain serializable props downward",
            "Never import server-only secrets from a client module, even indirectly",
            "Keep providers minimal: theme/auth wrappers are client, pages stay server",
            "Audit bundle after each feature: any client component over 15KB needs justification"
          ],
          pitfalls: ["One 'use client' at page level dragging the whole tree into the bundle", "Passing functions or class instances across the boundary"],
          kpis: ["Client JS per route under 120KB gzipped", "Zero hydration mismatch warnings"]
        },
        {
          id: "state-collocation",
          title: "Colocate state where it is consumed",
          level: "foundation", minutes: 25,
          description: "Choose between local state, lifted state, URL state, and stores by asking who needs the data and when.",
          tags: ["state", "architecture"],
          steps: [
            "Start local with useState; lift only when a sibling truly needs it",
            "Move shareable UI state (tab, sort, filters) into URL search params",
            "Use a store only for cross-tree client state that changes often",
            "Derive values during render instead of syncing via effects",
            "Keep server data in a query cache, never copied into local state",
            "Delete any effect whose dependency list keeps growing to mirror other state"
          ],
          pitfalls: ["Duplicating server data into useState then fighting staleness", "Global store as default dumping ground"]
        },
        {
          id: "error-loading-states",
          title: "Design error, loading, and empty states first",
          level: "foundation", minutes: 20,
          description: "Treat non-happy paths as features: skeleton loaders, typed errors, retry affordances, useful empties.",
          tags: ["ux", "resilience"],
          steps: [
            "For every data section, spec loading, error, empty, and partial states upfront",
            "Use skeletons matching final layout to avoid shift on load",
            "Differentiate recoverable errors (retry button) from fatal ones (support link)",
            "Write empty states as invitations: what this shows + how to populate it",
            "Surface partial failures inline instead of failing the whole page",
            "Add boundary components at route and widget level, logging with context"
          ],
          pitfalls: ["Infinite spinner hiding a thrown error", "Empty tables with zero guidance"]
        }
      ]
    },
    {
      id: "css-design-systems",
      label: "CSS & Design Systems",
      procedures: [
        {
          id: "design-tokens",
          title: "Set up design tokens for color, space, type",
          level: "intermediate", minutes: 35,
          description: "Encode brand decisions as named tokens (CSS variables) consumed by utilities so themes change in one place.",
          tokens: true,
          tags: ["css", "design-system", "theming"],
          steps: [
            "Define scales: one neutral ramp plus accent ramps, 8px spacing ladder, modular type scale",
            "Name by role (bg-surface, text-muted), never by value (gray-3)",
            "Expose as CSS variables; map Tailwind colors to var() references",
            "Add dark mode by swapping variable values under a media or class hook",
            "Lint for raw hex values outside the token file",
            "Ship a living style page rendering every token with its name"
          ],
          pitfalls: ["Role names that encode light mode assumptions breaking dark theme", "Token sprawl: 40 grays nobody can choose between"],
          variants: {
            tailwind: { id: "tailwind", label: "Tailwind setup", adds: ["Reference variables in tailwind.config so utilities emit them", "Use opacity modifiers carefully; they require rgb/hsl channel variables"] },
            vanilla: { id: "vanilla", label: "Vanilla CSS", adds: ["Group tokens in @layer foundation so overrides stay predictable", "Document contrast pairs (token-on-token) for accessibility"] }
          }
        },
        {
          id: "responsive-layout-system",
          title: "Build layouts that survive real content",
          level: "intermediate", minutes: 30,
          description: "Use fluid grids, container queries, and content-driven breakpoints instead of pixel-perfect mockups.",
          tags: ["css", "layout", "responsive"],
          steps: [
            "Design mobile-first with min-width queries only",
            "Prefer grid auto-fit + minmax over fixed column counts",
            "Use clamp() for fluid type between readable bounds",
            "Test with worst-case content: longest name, no image, RTL locale",
            "Apply container queries for card-based components inside varying columns",
            "Verify horizontal scrollbar never appears between 320px and 2560px"
          ],
          pitfalls: ["Breakpoints tuned to the designer's laptop width", "Text truncation hiding critical numbers like prices"]
        },
        {
          id: "animation-craft",
          title: "Add motion that guides attention",
          level: "intermediate", minutes: 30,
          description: "Animate with purpose: entrance choreography, micro-interactions, and reduced-motion respect.",
          tags: ["css", "animation", "ux"],
          steps: [
            "Define durations: 150ms feedback, 250ms transitions, 400ms entrances max",
            "Animate transform and opacity only; layout properties cause jank",
            "Choreograph staggered lists at 40-70ms increments",
            "Give interactive elements hover AND active AND focus-visible motion",
            "Wrap all animation in prefers-reduced-motion guards offering static fallbacks",
            "Profile long pages; drop anything causing dropped frames mid-scroll"
          ],
          pitfalls: ["Entrance animations replaying on every tab return", "Parallax that fights scroll-linked rendering on mobile"]
        }
      ]
    },
    {
      id: "web-performance",
      label: "Web Performance",
      procedures: [
        {
          id: "core-web-vitals",
          title: "Fix Core Web Vitals regressions systematically",
          level: "advanced", minutes: 45,
          description: "Diagnose LCP, INP, and CLS from field data and apply targeted fixes per metric rather than guessing.",
          tags: ["performance", "seo", "vitals"],
          steps: [
            "Pull field data (RUM) first; lab scores only reproduce what field data flags",
            "For LCP: preload the hero asset, fix server TTFB, defer everything competing",
            "For INP: break long tasks, debounce handlers, move work off main thread",
            "For CLS: reserve dimensions for media, fonts, and late banners",
            "Set per-template budgets in CI; fail builds on regression beyond 10%",
            "Re-check after every third-party script change — they are the usual suspects"
          ],
          pitfalls: ["Optimizing lab LCP while field users on 3G suffer", "A/B analytics snippets injected without async strategy"],
          kpis: ["LCP p75 under 2.5s on 4G", "CLS under 0.05 on top templates"]
        },
        {
          id: "image-pipeline",
          title: "Ship images that cost almost nothing",
          level: "foundation", minutes: 25,
          description: "Modern formats, responsive sizes, lazy strategies, and priority hints for above-fold heroes.",
          tags: ["images", "performance"],
          steps: [
            "Serve AVIF/WebP with automatic fallbacks via an image component or CDN",
            "Generate responsive srcsets at 3-4 widths matched to actual layout slots",
            "Lazy-load below-fold images; set fetchpriority=high on the LCP hero only",
            "Always set explicit width and height to protect CLS",
            "Strip metadata at upload; cap decoded size for thumbnails",
            "Audit monthly for orphaned assets and unoptimized direct <img> usage"
          ],
          pitfalls: ["Lazy-loading the hero because a global wrapper applied it", "Serving 2400px originals into 300px cards"]
        },
        {
          id: "js-bundle-diet",
          title: "Put JavaScript bundles on a diet",
          level: "intermediate", minutes: 35,
          description: "Analyze, split, and replace dependencies so routes ship only the code they execute.",
          tags: ["bundles", "performance", "dependencies"],
          steps: [
            "Generate a bundle report; list the ten largest modules per route",
            "Replace moment/lodash-class imports with native APIs or per-function imports",
            "Dynamic-import heavy widgets (editors, charts) behind interaction",
            "Move date/number formatting and markdown parsing server-side where possible",
            "Set an import lint rule banning known-bloated packages",
            "Track route-level JS budget over time; investigate any growth spike same week"
          ],
          pitfalls: ["Tree-shaking defeated by side-effectful barrel files", "Polyfills duplicated by transpilation misconfig"]
        }
      ]
    },
    {
      id: "accessibility",
      label: "Accessibility",
      procedures: [
        {
          id: "a11y-audit-pass",
          title: "Run a practical accessibility audit pass",
          level: "intermediate", minutes: 40,
          description: "Combine automated scans with keyboard and screen-reader passes to find issues tools miss.",
          tags: ["a11y", "wcag", "testing"],
          steps: [
            "Automate first: axe scan on key routes, triage all criticals",
            "Unplug the mouse: complete every core flow keyboard-only",
            "Listen once with a screen reader through signup and checkout",
            "Check focus visibility, order, and trap-free modals manually",
            "Verify contrast against actual rendered colors including disabled states",
            "File findings with WCAG criterion references and own fixes within sprint"
          ],
          pitfalls: ["Trusting automated score as proof of compliance", "outline:none without a visible replacement"],
          kpis: ["Zero critical axe issues", "All flows completable keyboard-only"]
        },
        {
          id: "semantic-first-markup",
          title: "Write semantic markup before reaching for ARIA",
          level: "foundation", minutes: 25,
          description: "Native elements carry behavior and semantics for free; ARIA is the fallback, not the default.",
          tags: ["html", "a11y"],
          steps: [
            "Choose native elements: button not clickable-div, real headings in order",
            "Use landmarks (nav, main, aside) so screen readers can jump regions",
            "Label every input visibly; placeholder is not a label",
            "Reserve ARIA for composite widgets you truly build custom",
            "Test heading outline reads like the page's table of contents",
            "Keep interactive targets 24px minimum with adequate spacing"
          ],
          pitfalls: ["aria-label duplicating visible text, read twice", "Skip-links pointing to containers lacking tabindex"]
        }
      ]
    }
  ]
};
