import fs from "node:fs";
const f = "src/data/tracks/expansions-e.mjs";
let t = fs.readFileSync(f, "utf8");
t = t.replace(/    \},\n  \"/g, '    }\n  ],\n  "');
fs.writeFileSync(f, t);
console.log("patched");
