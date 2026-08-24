import { getAllSkills } from "@/lib/skills.mjs";
import { TRACKS } from "@/data/tracks/index.mjs";

const BASE = "https://aniruddha-skills-directory.vercel.app";

export default function sitemap() {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/skills`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    ...TRACKS.map((t) => ({
      url: `${BASE}/tracks/${t.id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...getAllSkills().map((s) => ({
      url: `${BASE}/skills/${s.track}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: s.isPlaybook ? 0.7 : 0.6,
    })),
  ];
}
