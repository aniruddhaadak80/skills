import fs from "node:fs";
let r = fs.readFileSync("README.md", "utf8");
r = r.replace(
  "| 🎬 Media & Video Production | Pre-pro checklists · interview craft · edit pacing discipline · publish packaging |",
  `| 🎬 Media & Video Production | Pre-pro checklists · interview craft · edit pacing discipline · publish packaging |
| ✈️ Aviation & Aerospace Ops | Checklist culture · go/no-go gates · just-culture reporting · maintenance planning |
| 🐾 Veterinary Medicine | Urgency triage · cost-consent clarity · controlled-drug logs · zoonotic safety |
| 🏗️ Construction & Built Environment | Toolbox talks · schedule recovery · inspection test plans · estimate discipline |
| 🌾 Agriculture & AgTech | Rotation design · input stewardship · yield-map analysis · herd records |
| 🌐 Localization & i18n | String externalization · RTL support · LQA cycles · TMS workflows |
| 🎯 Career & Job Search | Truth-effective resumes · STAR story banks · principled offer negotiation |`
);
r = r.replace(
  "A curated library of **production-grade [Agent Skills](https://agentskills.io)**",
  "**500 curated skills** and counting. A library of **production-grade [Agent Skills](https://agentskills.io)**"
);
fs.writeFileSync("README.md", r, "utf8");
const checks = ["500 curated", "Aviation & Aerospace", "Career & Job Search"];
checks.forEach((c) => console.log(c, "→", r.includes(c) ? "OK" : "MISSING"));
