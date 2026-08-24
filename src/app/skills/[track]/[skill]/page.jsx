import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSkills } from "@/lib/skills.mjs";
import InstallCommand from "@/components/InstallCommand";
import CopyButton from "@/components/CopyButton";
import SkillCard from "@/components/SkillCard";

export function generateStaticParams() {
  return getAllSkills().map((s) => ({ track: s.track, skill: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getAllSkills().find((x) => x.track === params.track && x.slug === params.skill);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    keywords: s.tags,
    openGraph: { title: `${s.title} — Agent Skill`, description: s.summary },
  };
}

function toMarkdown(s) {
  const L = [`# ${s.title}`, "", `> ${s.description}`, ""];
  L.push("## When to Use This Skill", "", s.description, "");
  if (s.steps?.length) L.push("## Steps", "", ...s.steps.map((st, i) => `${i + 1}. ${st}`), "");
  if (s.pitfalls?.length) L.push("## Common Pitfalls", "", ...s.pitfalls.map((p) => `- ${p}`), "");
  return L.join("\n");
}

export default function SkillDetail({ params }) {
  const all = getAllSkills();
  const s = all.find((x) => x.track === params.track && x.slug === params.skill);
  if (!s) notFound();
  const related = all
    .filter((x) => x.slug !== s.slug && (x.domain === s.domain || (s.isPlaybook && x.isPlaybook && x.track === s.track)))
    .slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: s.title,
    description: s.description,
    totalTime: `PT${s.minutes}M`,
    step: s.steps.slice(0, 8).map((st, i) => ({ "@type": "HowToStep", position: i + 1, text: st })),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-xs text-zinc-500 mb-8">
        <Link href="/skills" className="hover:text-white">Directory</Link>
        <span className="mx-1.5">/</span>
        <Link href={`/tracks/${s.track}`} className={`hover:text-white bg-clip-text`}>{s.trackLabel}</Link>
        <span className="mx-1.5">/</span>
        <span className="text-zinc-400 font-mono">{s.slug}</span>
      </nav>

      <div className="grid lg:grid-cols-[1fr_340px] gap-10">
        {/* Main */}
        <article>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-gradient-to-r ${s.gradient} bg-clip-text`}>
            <span className="text-transparent">{s.trackIcon} {s.trackLabel} · {s.domainLabel}</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-tight">{s.title}</h1>
          <p className="mt-4 text-zinc-400 leading-relaxed text-lg">{s.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>{s.level}</Badge><Badge>~{s.minutes} min</Badge>
            {s.roles.slice(0, 3).map((r) => <Badge key={r}>{r}</Badge>)}
          </div>

          <div className="mt-10 space-y-10">
            {s.isPlaybook ? (
              <Section title="Journey Steps">
                <ol className="space-y-3">
                  {s.steps.map((st, i) => (
                    <li key={i} className="flex gap-3.5">
                      <span className={`shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br ${s.gradient} grid place-items-center text-xs font-bold text-white mt-0.5`}>{i + 1}</span>
                      <span className="text-zinc-300 leading-relaxed">{st}</span>
                    </li>
                  ))}
                </ol>
              </Section>
            ) : (
              <>
                <Section title="Steps">
                  <ol className="space-y-3">
                    {s.steps.map((st, i) => (
                      <li key={i} className="flex gap-3.5">
                        <span className={`shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br ${s.gradient} grid place-items-center text-xs font-bold text-white mt-0.5`}>{i + 1}</span>
                        <span className="text-zinc-300 leading-relaxed">{st}</span>
                      </li>
                    ))}
                  </ol>
                </Section>
                {s.pitfalls.length > 0 && (
                  <Section title="Common Pitfalls">
                    <ul className="space-y-2.5">
                      {s.pitfalls.map((p, i) => (
                        <li key={i} className="flex gap-3 text-zinc-400"><span className="text-red-400 mt-0.5">▲</span>{p}</li>
                      ))}
                    </ul>
                  </Section>
                )}
                {s.kpis.length > 0 && (
                  <Section title="Success Signals">
                    <ul className="space-y-2.5">
                      {s.kpis.map((k, i) => (
                        <li key={i} className="flex gap-3 text-zinc-400"><span className="text-emerald-400 mt-0.5">✓</span>{k}</li>
                      ))}
                    </ul>
                  </Section>
                )}
              </>
            )}
            {s.commands.length > 0 && (
              <Section title="Commands">
                <div className="space-y-4">
                  {s.commands.map((c, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{c.label}</span>
                        <CopyButton text={c.cmd} />
                      </div>
                      <pre className="text-sm font-mono bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto whitespace-nowrap"><code className="text-emerald-300">$ {c.cmd}</code></pre>
                    </div>
                  ))}
                </div>
              </Section>
            )}
            <Section title="Tags">
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/8 text-zinc-500 font-mono">#{t}</span>)}
              </div>
            </Section>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Install this skill</h3>
            <InstallCommand skillSlug={s.slug} />
          </div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">SKILL.md</span>
              <CopyButton text={toMarkdown(s)} label="Copy markdown" />
            </div>
            <pre className="text-[11px] font-mono p-4 overflow-x-auto max-h-72 text-zinc-400 leading-relaxed"><code>{toMarkdown(s)}</code></pre>
          </div>
          <a href={`https://github.com/aniruddhaadak80/skills/blob/main/skills/${s.slug}/SKILL.md`} target="_blank" rel="noopener noreferrer"
            className="block text-center px-4 py-3 rounded-xl border border-white/15 text-sm font-semibold hover:bg-white/5 transition-colors">
            View source on GitHub ↗
          </a>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-20 pb-8">
          <h2 className="text-xl font-bold mb-5">Related skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r, i) => <SkillCard key={r.slug} skill={r} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2.5">
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Badge({ children }) {
  return <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400">{children}</span>;
}
