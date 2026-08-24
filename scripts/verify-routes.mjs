import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllSkills } from "../src/lib/skills.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, process.env.NEXT_DIST_DIR || ".next-fresh", "server", "app");
const skills = getAllSkills();

let fail = 0;

function check(route) {
  const file = join(dist, route === "/" ? "index.html" : `${route}.html`);
  if (!existsSync(file)) {
    console.error(`MISSING: ${route}`);
    fail++;
  }
}

check("/");
check("/skills");
for (const s of skills) check(`/skills/${s.track}/${s.slug}`);

console.log(fail === 0 ? `OK — all ${skills.length + 2} routes present in build output` : `FAILED — ${fail} missing routes`);
process.exit(fail === 0 ? 0 : 1);
