import fs from "node:fs";
const f = "src/lib/skills.mjs";
let t = fs.readFileSync(f, "utf8");
if (!t.includes("EXPANSIONS_G")) {
  t = t.replace(
    'import { EXTRA_DOMAINS as EXPANSIONS_F } from "../data/tracks/expansions-f.mjs";',
    'import { EXTRA_DOMAINS as EXPANSIONS_F } from "../data/tracks/expansions-f.mjs";\nimport { EXTRA_DOMAINS as EXPANSIONS_G } from "../data/tracks/expansions-g.mjs";\nimport { EXTRA_DOMAINS as EXPANSIONS_H } from "../data/tracks/expansions-h.mjs";'
  );
  t = t.replace(
    "...EXPANSIONS_E, ...EXPANSIONS_F };",
    "...EXPANSIONS_E, ...EXPANSIONS_F, ...EXPANSIONS_G, ...EXPANSIONS_H };"
  );
  fs.writeFileSync(f, t);
  console.log("lib wired: G + H");
} else {
  console.log("already wired");
}
