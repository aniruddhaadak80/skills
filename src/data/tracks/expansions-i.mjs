export const EXTRA_DOMAINS = {
  "ai-engineering": [
    {
      id: "mcp-scaffolding",
      label: "MCP Server Building",
      procedures: [
        {
          id: "mcp-server-scaffold",
          title: "Scaffold an MCP server agents can trust",
          level: "intermediate", minutes: 45,
          description: "Tool schema design, transport choice, error contracts, and test harness for Model Context Protocol servers.",
          tags: ["mcp", "tools", "protocol"],
          steps: [
            "Model each capability as a tool with JSON-Schema'd inputs and typed outputs",
            "Choose stdio transport for local tools, Streamable HTTP for remote services",
            "Return structured errors agents can self-correct from; never raw stack traces",
            "Cap response payloads; paginate lists instead of dumping unbounded results",
            "Write an inspector-based smoke test: list tools, call each once, assert schemas",
            "Version tool names deliberately; renaming breaks every client integration"
          ],
          pitfalls: ["Tools that wrap entire CLIs instead of one verb-noun responsibility", "Secrets passed as plain tool parameters logged in traces"]
        }
      ]
    }
  ],
  "qa-testing": [
    {
      id: "web-app-testing",
      label: "Web App Testing",
      procedures: [
        {
          id: "playwright-smoke-authoring",
          title: "Author Playwright smoke suites for web apps",
          level: "intermediate", minutes: 40,
          description: "Journey-selection, trace-on-retry infrastructure, and network stubs producing trustworthy five-minute gates.",
          tags: ["playwright", "e2e", "smoke"],
          steps: [
            "Pick 5-7 journeys by traffic × revenue impact; ignore the rest at gate level",
            "Configure trace + video on retry only; artifacts for failures, speed for passes",
            "Stub third-party calls; your gate shouldn't fail because an analytics vendor sneezed",
            "Seed state via API routes, never UI-click signup chains",
            "Assert user-visible outcomes (row rendered, email text) over DOM internals",
            "Run against preview deployments per PR; prod-smoke separately post-deploy"
          ],
          pitfalls: ["Flaky third-party scripts owning your merge gate", "Selectors coupled to styling classes renamed weekly"]
        }
      ]
    }
  ],
  "technical-writing": [
    {
      id: "document-generation",
      label: "Document Generation",
      procedures: [
        {
          id: "docx-report-generation",
          title: "Generate professional DOCX reports programmatically",
          level: "foundation", minutes: 30,
          description: "Template-first structure, style hierarchy over direct formatting, and programmatic population patterns.",
          tags: ["docx", "documents", "automation"],
          steps: [
            "Build a template with named styles; generate content INTO styles, never inline formatting",
            "Separate content model from rendering: data → sections → document order",
            "Handle tables via real table objects, not tab-separated text",
            "Embed charts as images with alt text; native chart XML only when editable output required",
            "Validate output opens correctly in Word AND LibreOffice before delivering",
            "Keep generation code deterministic: same inputs, byte-comparable outputs"
          ],
          pitfalls: ["Direct formatting soup making template updates impossible", "Generated docs failing validation in non-Word viewers"]
        },
        {
          id: "slide-narrative-design",
          title: "Design slide decks as narratives, not bullet dumps",
          level: "intermediate", minutes: 35,
          description: "Assertion-per-slide structure, visual-first layouts, and appendix discipline for deck generation.",
          tags: ["pptx", "slides", "communication"],
          steps: [
            "Write the slide TITLES first as a story outline; if titles alone don't persuade, fix the narrative",
            "One assertion per slide; the title IS the assertion, body is evidence",
            "Prefer a single strong visual over six bullets wherever truth allows",
            "Standardize layout masters: title, content, split, quote — nothing bespoke",
            "Push all depth to appendix slides referenced by name",
            "Export-check readability at projector distance and phone size"
          ],
          pitfalls: ["40-slide decks where every slide is a document page", "Animation substituting for argument"]
        }
      ]
    }
  ],
  "marketing-growth": [
    {
      id: "brand-systems",
      label: "Brand Systems",
      procedures: [
        {
          id: "brand-voice-codification",
          title: "Codify brand voice so anyone (or any agent) can write on-brand",
          level: "intermediate", minutes: 35,
          description: "Voice attributes with do/don't pairs, vocabulary allowlists, and worked examples across channels.",
          tags: ["brand-guidelines", "voice", "copywriting"],
          steps: [
            "Define 3-4 voice attributes as spectrums ('playful but never silly')",
            "For each attribute write three do/don't example pairs from real copy",
            "Maintain vocabulary lists: words we own, words we ban, words we're neutral on",
            "Channel adaptations documented: support ≠ social ≠ legal tone shifts",
            "Include two full worked examples: one good post, one bad post annotated",
            "Test codification: new writer produces on-brand draft in one pass using only the guide"
          ],
          pitfalls: ["Adjective soup ('bold yet approachable') without behavioral examples", "Guidelines locked in PDFs no working writer opens"]
        }
      ]
    }
  ]
};
