import Link from "next/link";
import { TRACKS } from "@/data/tracks/index.mjs";
import { getAllSkills } from "@/lib/skills.mjs";
import InstallCommand from "@/components/InstallCommand";
import SkillCard from "@/components/SkillCard";
import { Reveal, StatCounter } from "@/components/Motion";

export default function Home() {
  const all = getAllSkills();
  const featured = all.filter((s) => s.authored || ["rag-pipelines-chunking-strategy", "playbook-ai-engineering-rag-launch", "api-design-idempotency-keys"].includes(s.slug)).slice(0, 6);
  const totalMinutes = Math.round(all.reduce((a, s) => a + (s.minutes || 0), 0) / 60);

  return (
    <div className="relative">
      {/* Ambient blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob w-[480px] h-[480px] bg-violet-600 top-[-140px] left-[-120px] animate-float-slow" />
        <div className="blob w-[420px] h-[420px] bg-fuchsia-600 top-[80px] right-[-100px] animate-float-med" />
        <div className="blob w-[380px] h-[380px] bg-sky-500 top-[520px] left-[30%] animate-float-slow" style={{ animationDelay: "-6s" }} />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 text-center relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-zinc-300 mb-8 animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Open Agent Skills Ecosystem · installable in 75+ coding agents
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            AI Agent Skills for
            <br />
            <span className="gradient-text">Every Profession</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
            {all.length}+ production-grade, hand-crafted skills — from RAG pipelines and incident response to
            contract triage, GxP documentation, and grant writing. Give your agent the procedural knowledge
            of a whole team.
          </p>
        </Reveal>
        <Reveal delay={360} className="max-w-2xl mx-auto mt-10">
          <InstallCommand />
          <p className="mt-3 text-xs text-zinc-600">Works with OpenCode, Claude Code, Cursor, Codex, Copilot, Gemini CLI, Windsurf & more</p>
        </Reveal>

        <Reveal delay={480}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            <StatCounter value={all.length} label="Skills ready to install" gradient="from-violet-400 to-fuchsia-400" />
            <StatCounter value={TRACKS.length} label="Professional tracks" gradient="from-sky-400 to-cyan-300" />
            <StatCounter value={totalMinutes} suffix="h" label="Expert procedure time encoded" gradient="from-emerald-400 to-teal-300" />
            <StatCounter value={75} suffix="+" label="Compatible agents" gradient="from-amber-400 to-orange-300" />
          </div>
        </Reveal>
      </section>

      {/* Marquee */}
      <section className="py-6 border-y border-white/5 bg-black/30 marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {[...all.slice(0, 40), ...all.slice(0, 40)].map((s, i) => (
            <span key={i} className={`whitespace-nowrap text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 bg-gradient-to-r ${s.gradient} bg-clip-text`}>
              <span className="text-transparent">{s.slug}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Tracks grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
            Browse by <span className="gradient-text">profession</span>
          </h2>
          <p className="text-center text-zinc-500 mt-3 max-w-xl mx-auto">
            Every track is organized into domains and concrete procedures — not vague advice.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {TRACKS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 90}>
              <Link href={`/tracks/${t.id}`} className="card-hover group block h-full rounded-2xl border border-white/8 bg-zinc-900/50 p-6 relative overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-36 h-36 rounded-full bg-gradient-to-br ${t.gradient} opacity-15 blur-2xl group-hover:opacity-35 transition-opacity duration-500`} />
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{t.icon}</span>
                  <span className={`text-xs font-mono text-transparent bg-clip-text bg-gradient-to-r ${t.gradient}`}>
                    {t.domains.reduce((a, d) => a + d.procedures.length, 0)}+ procedures
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-lg text-zinc-100 group-hover:text-white">{t.label}</h3>
                <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed line-clamp-2">{t.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Signature <span className="gradient-text">skills</span></h2>
              <p className="text-zinc-500 mt-2">Authored directly from real production workflows.</p>
            </div>
            <Link href="/skills" className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors">
              View all {all.length} skills →
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <SkillCard skill={s} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-14">
            Three commands to <span className="gradient-text">superpowers</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "01", t: "Install", c: "npx skills add aniruddhaadak80/skills", d: "One command pulls the library into your project or global agent config." },
            { n: "02", t: "Pick your agents", c: "--skill rag-pipelines-chunking-strategy -a opencode", d: "Target any of 75+ supported agents; symlinks keep a single source of truth." },
            { n: "03", t: "Agent activates on demand", c: "// progressive disclosure, zero context cost", d: "Skills load only when your task matches their description. Your context stays lean." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className="relative rounded-2xl border border-white/8 bg-zinc-900/50 p-6 h-full card-hover">
                <span className="font-mono text-5xl font-black text-white/5 absolute top-4 right-5 select-none">{s.n}</span>
                <h3 className="font-bold text-lg">{s.t}</h3>
                <code className="block mt-3 text-xs font-mono text-emerald-400/90 bg-black/40 border border-white/10 rounded-lg p-3 overflow-x-auto whitespace-nowrap">{s.c}</code>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 p-10 sm:p-16 text-center">
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-violet-600/25 via-fuchsia-600/20 to-sky-600/25" />
            <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Give your agent a <span className="gradient-text">brain upgrade</span>
              </h2>
              <p className="mt-4 text-zinc-300/80 max-w-xl mx-auto">
                Free, open source (MIT), and built in the open. Star the repo, install a skill,
                or contribute your own playbook.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="https://github.com/aniruddhaadak80/skills" target="_blank" rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl font-semibold bg-white text-zinc-900 hover:bg-zinc-200 transition-colors shadow-xl">
                  ⭐ Star on GitHub
                </a>
                <Link href="/skills" className="px-7 py-3.5 rounded-xl font-semibold border border-white/25 hover:bg-white/10 transition-colors">
                  Browse the directory
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
