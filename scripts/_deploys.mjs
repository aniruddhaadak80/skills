import fs from "node:fs";
const tok = fs.readFileSync(process.env.USERPROFILE + "/.vercel/agent-token.txt", "utf8").trim().split("\n").pop().trim();
const t = await fetch("https://api.vercel.com/v2/teams?slug=aniruddha-adaks-projects", { headers: { Authorization: "Bearer " + tok } }).then(r => r.json());
const tid = t.team.id;
const raw = await fetch("https://api.vercel.com/v6/deployments?limit=6&teamId=" + tid, { headers: { Authorization: "Bearer " + tok } }).then(r => r.json());
for (const d of raw.deployments) {
  const sha = (d.meta.githubCommitSha || "n/a").slice(0, 7);
  const msg = (d.meta.githubCommitMessage || "").slice(0, 55);
  console.log(d.readyState.padEnd(8), sha, msg, "->", d.url);
}
