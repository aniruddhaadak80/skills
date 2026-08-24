import Link from "next/link";
import CopyButton from "./CopyButton";

const LEVEL_STYLES = {
  foundation: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  intermediate: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  advanced: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
  journey: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function SkillCard({ skill, index = 0 }) {
  return (
    <div
      className="card-hover group relative rounded-2xl border border-white/8 bg-zinc-900/60 p-5 flex flex-col overflow-hidden"
      style={{ transitionDelay: `${(index % 12) * 30}ms` }}
    >
      <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${skill.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <Link href={`/skills/${skill.track}/${skill.slug}`} className="font-semibold text-zinc-100 leading-snug hover:text-white">
          {skill.title}
        </Link>
        <span className={`shrink-0 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border ${LEVEL_STYLES[skill.level] || LEVEL_STYLES.intermediate}`}>
          {skill.level}
        </span>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 flex-1">{skill.summary}</p>
      <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <span>{skill.trackIcon} {skill.trackLabel}</span>
          <span>·</span>
          <span>~{skill.minutes}m</span>
        </div>
        <CopyButton text={skill.slug} label="ID" />
      </div>
    </div>
  );
}
