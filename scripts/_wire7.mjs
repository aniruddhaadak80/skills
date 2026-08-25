import fs from "node:fs";
// 1. register new track
let idx = fs.readFileSync("src/data/tracks/index.mjs", "utf8");
if (!idx.includes("agentic-methodology")) {
  idx = idx.replace(
    'import { track as careerDevelopment } from "./career-development.mjs";',
    'import { track as careerDevelopment } from "./career-development.mjs";\nimport { track as agenticMethodology } from "./agentic-methodology.mjs";'
  );
  idx = idx.replace(
    "  careerDevelopment,\n];",
    "  careerDevelopment,\n  agenticMethodology,\n];"
  );
  fs.writeFileSync("src/data/tracks/index.mjs", idx);
  console.log("index: agentic-methodology registered");
} else console.log("index: already registered");

// 2. wire expansions-i into lib
let lib = fs.readFileSync("src/lib/skills.mjs", "utf8");
if (!lib.includes("EXPANSIONS_I")) {
  lib = lib.replace(
    'import { EXTRA_DOMAINS as EXPANSIONS_H } from "../data/tracks/expansions-h.mjs";',
    'import { EXTRA_DOMAINS as EXPANSIONS_H } from "../data/tracks/expansions-h.mjs";\nimport { EXTRA_DOMAINS as EXPANSIONS_I } from "../data/tracks/expansions-i.mjs";'
  );
  lib = lib.replace(
    "...EXPANSIONS_G, ...EXPANSIONS_H };",
    "...EXPANSIONS_G, ...EXPANSIONS_H, ...EXPANSIONS_I };"
  );
  fs.writeFileSync("src/lib/skills.mjs", lib);
  console.log("lib: EXPANSIONS_I wired");
} else console.log("lib: already wired");
