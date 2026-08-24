import Link from "next/link";
import CopyButton from "./CopyButton";

const LEVEL_STYLES = {
  foundation: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  intermediate: "bg-sky-500/10 text-sky-300 border-sky-500/25",
  advanced: "bg-amber-500/10 text-amber-300 border-amber-500/25",
  journey: "bg-orange-500/10 text-orange-300 border-orange-500/25",
};

export default function SkillCard({ skill, index = 0 }) {
  return (
    <div
      className="card-hover group relative rounded-2xl border border-white/[0.07] bg-panel/80 p-5 flex flex-col"
      style={{ transitionDelay: `${(index % 12) * 30}ms` }}
    >
      <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${skill.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <Link href={`/skills/${skill.track}/${skill.slug}`} className="font-semibold text-slate-100 leading-snug hover:text-cyan-300 transition-colors duration-200">
          {skill.isPlaybook && <span className="mr-1.5">🗺️</span>}
          {skill.title}
        </Link>
        <span className={`shrink-0 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border ${LEVEL_STYLES[skill.level] || LEVEL_STYLES.intermediate}`}>
          {skill.level}
        </span>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">{skill.summary}</p>
      <div className="mt-4 pt-3.5 border-t border-white/[0.05] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs text-slate-600 min-w-0">
          <span className="truncate">{skill.trackIcon} {skill.trackLabel}</span>
          <span>·</span>
          <span className="shrink-0">~{skill.minutes}m</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <CopyButton text={skill.slug} label="ID" />
          <Link
            href={`/skills/${skill.track}/${skill.slug}`}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500/15 to-teal-500/15 border border-cyan-400/20 text-cyan-300 hover:from-cyan-500/30 hover:to-teal-500/30 hover:border-cyan-400/40 transition-all duration-300"
          >
            Open →
          </Link>
        </div>
      </div>
    </div>
  );
}
