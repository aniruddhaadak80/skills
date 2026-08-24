import Link from "next/link";
import { TRACKS } from "@/data/tracks/index.mjs";
import { getAllSkills } from "@/lib/skills.mjs";
import InstallCommand from "@/components/InstallCommand";
import SkillCard from "@/components/SkillCard";
import { Reveal, StatCounter, Typewriter } from "@/components/Motion";

export default function Home() {
  const all = getAllSkills();
  const featured = all.filter((s) => s.authored || ["rag-pipelines-chunking-strategy", "playbook-ai-engineering-rag-launch", "api-design-idempotency-keys"].includes(s.slug)).slice(0, 6);
  const totalHours = Math.round(all.reduce((a, s) => a + (s.minutes || 0), 0) / 60);
  const domains = new Set(all.map((s) => s.track + ":" + s.domain)).size;
  const marqueeSkills = [...all.slice(0, 44)];

  return (
    <div className="relative">
      {/* Ambient */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-cyan-600 top-[-160px] left-[-140px] animate-float-slow" />
        <div className="blob w-[440px] h-[440px] bg-teal-600 top-[60px] right-[-120px] animate-float-med" />
        <div className="blob w-[380px] h-[380px] bg-emerald-600 top-[560px] left-[28%] animate-float-slow" style={{ animationDelay: "-7s" }} />
        <div className="blob w-[300px] h-[300px] bg-amber-500 top-[980px] right-[16%] opacity-[0.14] animate-float-med" style={{ animationDelay: "-3s" }} />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 text-center relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-slate-300 mb-8 animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Open Agent Skills Ecosystem · installable in 75+ coding agents
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06] min-h-[2.2em]">
            AI Agent Skills for
            <br />
            <Typewriter />
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            {all.length}+ production-grade, hand-crafted procedures — from RAG pipelines and incident response to
            GxP documentation, contract triage, and lesson planning. Give your agent the working knowledge of a whole senior team.
          </p>
        </Reveal>
        <Reveal delay={360} className="max-w-2xl mx-auto mt-10">
          <InstallCommand />
          <p className="mt-3 text-xs text-slate-600">Works with OpenCode · Claude Code · Cursor · Codex · Copilot · Gemini CLI · Windsurf & more</p>
        </Reveal>

        <Reveal delay={480}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            <StatCounter value={all.length} label="Skills ready to install" gradient="from-cyan-300 to-teal-300" />
            <StatCounter value={TRACKS.length} label="Professional tracks" gradient="from-teal-300 to-emerald-300" />
            <StatCounter value={domains} label="Specialist domains" gradient="from-sky-300 to-cyan-200" />
            <StatCounter value={totalHours} suffix="h" label="Expert time encoded" gradient="from-amber-300 to-orange-300" />
          </div>
        </Reveal>
      </section>

      {/* Marquee — slow + pause on hover */}
      <section className="marquee-wrap py-5 border-y border-white/5 bg-black/40 marquee-mask overflow-hidden" aria-label="Skill name ticker">
        <div className="marquee-track gap-3 pr-3">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span key={i} className={`whitespace-nowrap text-xs font-mono px-3.5 py-1.5 rounded-lg border border-white/10 bg-gradient-to-r ${s.gradient} bg-clip-text transition-transform duration-300`}>
              <span className="text-transparent">{s.slug}</span>
            </span>
          ))}
        </div>
      </section>

      {/* How it works — agentic activation demo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
            How your agent <span className="gradient-text">thinks with skills</span>
          </h2>
          <p className="text-center text-slate-500 mt-3 max-w-xl mx-auto">
            Progressive disclosure: skills cost zero context until the exact moment they matter.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {[
            { icon: "📡", t: "Discovery", d: "At startup your agent loads only each skill's name + description — a few tokens per skill.", tag: "~30 tokens/skill", g: "from-cyan-400 to-sky-400" },
            { icon: "🎯", t: "Activation", d: 'You ask "design our chunking strategy" — the agent matches intent and loads the full procedure.', tag: "on-demand only", g: "from-teal-400 to-emerald-400" },
            { icon: "⚡", t: "Execution", d: "Steps, pitfalls, commands, and scripts execute in context. Your agent works like the senior who wrote it.", tag: "expert output", g: "from-amber-400 to-orange-400" },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 130}>
              <div className="relative h-full rounded-2xl border border-white/[0.07] bg-panel/80 p-7 card-hover spotlight overflow-hidden">
                <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${s.g} opacity-[0.13] blur-2xl`} />
                <div className="flex items-center justify-between">
                  <span className="lift-icon text-3xl">{s.icon}</span>
                  <span className="font-mono text-xs text-transparent bg-clip-text bg-gradient-to-r font-bold" style={{ backgroundImage: `linear-gradient(90deg, var(--tw-gradient-stops))`, }}>
                    <span className={`bg-gradient-to-r ${s.g} bg-clip-text text-transparent`}>{s.tag}</span>
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-lg text-slate-100">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.d}</p>
                {i < 2 && <div className="hidden md:block absolute top-1/2 -right-3.5 text-cyan-500/50 text-xl animate-pulse">→</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tracks grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
            Browse by <span className="gradient-text">profession</span>
          </h2>
          <p className="text-center text-slate-500 mt-3 max-w-xl mx-auto">
            {TRACKS.length} tracks spanning software, science, medicine, law, business, and beyond — every one organized into concrete domains.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {TRACKS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 80}>
              <Link href={`/tracks/${t.id}`} className="card-hover group block h-full rounded-2xl border border-white/[0.07] bg-panel/80 p-5 relative overflow-hidden">
                <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${t.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="flex items-start justify-between">
                  <span className="lift-icon text-3xl inline-block">{t.icon}</span>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-slate-300 transition-colors">
                    {t.domains.reduce((a, d) => a + d.procedures.length, 0)} procs
                  </span>
                </div>
                <h3 className="mt-3.5 font-bold text-[15px] text-slate-100 group-hover:text-white leading-snug">{t.label}</h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed line-clamp-2">{t.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Signature skills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Signature <span className="gradient-text">skills</span></h2>
              <p className="text-slate-500 mt-2">Authored directly from real production workflows.</p>
            </div>
            <Link href="/skills" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 link-underline transition-colors">
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

      {/* Why skills vs prompts bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
            Skills beat <span className="gradient-text">copy-pasted prompts</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: "Zero context tax", d: "Prompts burn tokens every turn. Skills load once when relevant — run dozens without bloating context.", icon: "🪶" },
            { t: "Versioned & shareable", d: "Git-backed markdown. Review skill changes like code, ship improvements to your whole team at once.", icon: "🔀" },
            { t: "Agent-portable", d: "One SKILL.md works across 75+ agents via the open format. No vendor lock-in on your knowledge.", icon: "🔌" },
            { t: "Procedural, not vibes", d: "Numbered steps, pitfalls, KPIs, copy-paste commands — judgment encoded, not motivational quotes.", icon: "📐" },
          ].map((f, i) => (
            <Reveal key={f.t} delay={(i % 2) * 100}>
              <div className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-panel/80 p-6 card-hover h-full">
                <span className="lift-icon text-2xl shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/15 to-teal-400/15 border border-cyan-400/20 grid place-items-center">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-100">{f.t}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="animated-border relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center">
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-emerald-600/10 to-amber-600/15" />
            <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-50">
                Give your agent a <span className="gradient-text">brain upgrade</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Free, MIT-licensed, built in the open. Star the repo, install a skill, or contribute your own playbook.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="https://github.com/aniruddhaadak80/skills" target="_blank" rel="noopener noreferrer"
                  className="shine px-8 py-3.5 rounded-xl font-semibold bg-white text-zinc-900 hover:bg-cyan-50 transition-colors shadow-2xl hover:-translate-y-0.5 duration-300">
                  ⭐ Star on GitHub
                </a>
                <Link href="/skills" className="px-8 py-3.5 rounded-xl font-semibold border border-white/25 hover:bg-white/10 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all duration-300">
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
