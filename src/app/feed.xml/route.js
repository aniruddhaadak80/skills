import { getAllSkills } from "@/lib/skills.mjs";

const BASE = "https://aniruddha-skills-directory.vercel.app";

export async function GET() {
  const skills = getAllSkills()
    .filter((s) => !s.isPlaybook)
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Agent Skills Directory — new skills</title>
<link>${BASE}</link>
<description>The open directory of installable AI agent skills for every profession.</description>
<language>en</language>
${skills
  .slice(-60)
  .reverse()
  .map(
    (s) => `<item>
<title>${esc(s.title)}</title>
<link>${BASE}/skills/${s.track}/${s.slug}</link>
<guid isPermaLink="true">${BASE}/skills/${s.track}/${s.slug}</guid>
<description>${esc(s.summary)}</description>
<category>${esc(s.trackLabel)}</category>
</item>`
  )
  .join("\n")}
</channel></rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
  });
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
