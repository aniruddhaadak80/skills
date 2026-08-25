import fs from "node:fs";
const f = "src/data/tracks/expansions-g.mjs";
let t = fs.readFileSync(f, "utf8");
// every `    },\n    "<key>": [` boundary needs the track array closed instead
t = t.replace(/\n    \},\n    "/g, "\n    }\n  ],\n    \"");
fs.writeFileSync(f, t);
console.log("patched boundaries:", (t.match(/\n  \],\n    "/g) || []).length);
