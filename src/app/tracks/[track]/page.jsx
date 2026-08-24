import Link from "next/link";
import { notFound } from "next/navigation";
import { TRACKS } from "@/data/tracks/index.mjs";
import { getAllSkills } from "@/lib/skills.mjs";
import SkillCard from "@/components/SkillCard";

export function generateStaticParams() {
  return TRACKS.map((t) => ({ track: t.id }));
}

export function generateMetadata({ params }) {
  const track = TRACKS.find((t) => t.id === params.track);
  if (!track) return {};
  return {
    title: `${track.label} Skills`,
    description: `Installable AI agent skills for ${track.roles.join(", ")} — ${track.blurb}`,
  };
}

export default function TrackPage({ params }) {
  const track = TRACKS.find((t) => t.id === params.track);
  if (!track) notFound();
  const all = getAllSkills().filter((s) => s.track === track.id);
  const domains = [...new Map(all.map((s) => [s.domain, s.domainLabel])).entries()];
  const playbook = all.find((s) => s.isPlaybook);

  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-72 overflow-hidden">
        <div className={`blob w-[500px] h-[300px] bg-gradient-to-r ${track.gradient} left-1/2 -translate-x-1/2 opacity-25`} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <nav className="text-xs text-zinc-500 mb-6">
          <Link href="/skills" className="hover:text-white">Directory</Link> <span className="mx-1.5">/</span>
          <span className="text-zinc-400">{track.label}</span>
        </nav>
        <div className="flex items-center gap-4">
          <span className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.gradient} grid place-items-center text-3xl shadow-xl`}>{track.icon}</span>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{track.label}</h1>
            <p className="text-zinc-500 mt-1">{track.blurb}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {track.roles.map((r) => (
            <span key={r} className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-400 bg-white/[0.03]">{r}</span>
          ))}
          <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-400 bg-white/[0.03]">{all.length} skills</span>
        </div>

        {playbook && (
          <Link href={`/skills/${playbook.track}/${playbook.slug}`} className="card-hover mt-10 block rounded-2xl border border-white/10 p-6 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-r ${track.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">🗺️ Featured journey</span>
              <h3 className="mt-1 font-bold text-lg">{playbook.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{playbook.description}</p>
            </div>
          </Link>
        )}

        {domains.map(([d, label]) => (
          <section key={d} className="mt-12">
            <h2 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
              <span className={`w-6 h-6 rounded-md bg-gradient-to-br ${track.gradient} inline-block`} />
              {label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {all.filter((s) => s.domain === d).map((s, i) => (
                <SkillCard key={s.slug} skill={s} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
