export const track = {
  id: "localization-i18n",
  label: "Localization & i18n",
  icon: "🌐",
  gradient: "from-indigo-400 via-blue-400 to-sky-300",
  ring: "ring-indigo-500/30",
  text: "text-indigo-300",
  blurb: "Product localization craft: string management, cultural adaptation, and quality at scale.",
  roles: ["Localization Engineers", "i18n Developers", "Localization Managers", "Transcreators"],
  domains: [
    {
      id: "string-engineering",
      label: "String Engineering",
      procedures: [
        {
          id: "externalize-strings-audit",
          title: "Externalize strings without breaking the app",
          level: "foundation", minutes: 30,
          description: "Systematic extraction, key naming, and context comments making translation safe.",
          tags: ["i18n", "strings", "refactoring"],
          steps: [
            "Extract all user-visible strings; ban literals in components via lint rule",
            "Name keys by semantic meaning (checkout.payment.decline), never by English text",
            "Attach translator context comments: where shown, character limits, tone",
            "Handle interpolation with ICU MessageFormat; never concatenate translated fragments",
            "Add pseudo-localization build mode surfacing hardcoded strings visually",
            "Test longest locale (usually de) for layout breakage before shipping"
          ],
          pitfalls: ["Concatenated sentences untranslatable in any other grammar", "Keys named after current English copy, shattering on rewording"]
        },
        {
          id: "rtl-layout-support",
          title: "Support RTL layouts properly",
          level: "intermediate", minutes: 35,
          description: "Logical properties, mirrored iconography decisions, and bidi text handling done right.",
          tags: ["rtl", "css", "arabic", "hebrew"],
          steps: [
            "Convert directional CSS to logical properties (margin-inline-start etc.)",
            "Decide per-icon mirroring: directionals mirror, brand/symbols don't",
            "Handle mixed-direction text with unicode-bidi isolation, not manual flips",
            "Test carousels/drawers/progress flows in RTL — they invert subtly",
            "Numbers/phone formats stay LTR within RTL paragraphs deliberately",
            "Screenshot-snapshot both directions in CI for every component"
          ],
          pitfalls: ["position:absolute left/right hardcodes exploding in Arabic", "Mirrored brand logos looking like counterfeits"]
        }
      ]
    },
    {
      id: "linguistic-quality",
      label: "Linguistic Quality",
      procedures: [
        {
          id: "lqa-review-cycle",
          title: "Run linguistic QA that catches real errors",
          level: "intermediate", minutes: 35,
          description: "In-context review, error typology scoring, and vendor feedback loops improving over releases.",
          tags: ["lqa", "translation-quality"],
          steps: [
            "Review IN CONTEXT on real builds, not spreadsheet columns",
            "Score errors by typology: accuracy, terminology, style, locale convention, typo",
            "Critical (misleading/damaging) blocks release; minor batches into next sprint",
            "Feedback to translators references error codes + suggested fix + why",
            "Maintain per-product glossary and termbase; enforce in tooling",
            "Track error density trend per locale/vendor as the quality metric"
          ],
          pitfalls: ["Reviewing strings in isolation missing truncation and gender clashes", "Subjective style nitpicks weighted like factual errors"]
        },
        {
          slug: "locale-data-correctness",
          id: "locale-data",
          title: "Get locale data right: dates, numbers, names",
          level: "foundation", minutes: 25,
          description: "ICU-driven formatting, name ordering, address forms, and timezone correctness per locale.",
          tags: ["icu", "formats", "global-ready"],
          steps: [
            "Format dates/numbers/currency through Intl APIs — never hand-roll patterns",
            "Collect names as given/family separately OR single full-name field, per culture",
            "Address forms per country via validated libraries, not one global template",
            "Store timestamps UTC + IANA zone; display in user zone explicitly",
            "Pluralization via CLDR rules for every supported language in tests",
            "Locale smoke suite: de long text, ar RTL, ja no-spaces, es-MX currency"
          ],
          pitfalls: ["MM/DD/YYYY assumptions shipped worldwide", "Currency symbols concatenated in wrong position per locale"]
        }
      ]
    }
  ]
};
