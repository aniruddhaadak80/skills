import { getAllSkills } from "@/lib/skills.mjs";
import { TRACKS } from "@/data/tracks/index.mjs";
import SkillBrowser from "@/components/SkillBrowser";

export const metadata = {
  title: "Browse All Skills",
  description:
    "Search and filter the full directory of installable AI agent skills — engineering, AI/ML, product, leadership, HR, legal, biotech, research, QA, writing and more.",
};

const slim = (s) => ({
  slug: s.slug, title: s.title, summary: s.summary, description: s.description,
  track: s.track, trackLabel: s.trackLabel, trackIcon: s.trackIcon, gradient: s.gradient,
  domain: s.domain, domainLabel: s.domainLabel, level: s.level, minutes: s.minutes,
  tags: s.tags, isPlaybook: !!s.isPlaybook,
});

export default function SkillsPage() {
  const skills = getAllSkills().map(slim);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
      <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
        The <span className="gradient-text">directory</span>
      </h1>
      <p className="text-zinc-500 mt-3 mb-10 max-w-2xl">
        Every skill is a SKILL.md procedure your coding agent loads exactly when relevant.
        Copy an install command, paste it in your terminal, done.
      </p>
      <SkillBrowser skills={skills} tracks={TRACKS} />
    </div>
  );
}
