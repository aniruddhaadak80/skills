import fs from "node:fs";
const tok = fs.readFileSync(process.env.USERPROFILE + "/.vercel/agent-token.txt", "utf8").trim().split("\n").pop().trim();
const list = await fetch("https://api.vercel.com/v6/deployments?limit=6&app=aniruddha-skills-directory", { headers: { Authorization: "Bearer " + tok } }).then(r => r.json());
const target = list.deployments.find(d => d.readyState === "READY" && d.meta.githubCommitSha?.startsWith("c561d1d"));
if (!target) { console.log("target deployment not found"); process.exit(1); }
console.log("promoting:", target.uid, target.url);
const res = await fetch("https://api.vercel.com/v13/deployments/" + target.uid + "/promote", {
  method: "POST",
  headers: { Authorization: "Bearer " + tok, "Content-Type": "application/json" },
  body: JSON.stringify({ teamId: undefined }),
});
console.log("promote status:", res.status);
const body = await res.text();
console.log(body.slice(0, 300));
