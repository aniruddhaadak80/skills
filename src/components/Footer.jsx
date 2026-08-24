import Link from "next/link";
import { TRACKS } from "@/data/tracks/index.mjs";

const RESOURCES = [
  { href: "https://github.com/aniruddhaadak80/skills", label: "GitHub Repository" },
  { href: "https://skills.sh/aniruddhaadak80/skills", label: "skills.sh Listing" },
  { href: "https://github.com/vercel-labs/skills", label: "skills CLI (75+ agents)" },
  { href: "https://agentskills.io", label: "Agent Skills Spec" },
  { href: "https://opencode.ai/docs/skills", label: "OpenCode Skills Docs" },
  { href: "https://code.claude.com/docs/en/skills", label: "Claude Code Skills Docs" },
];

export default function Footer() {
  const half = Math.ceil(TRACKS.length / 3);
  const cols = [TRACKS.slice(0, half), TRACKS.slice(half, half * 2), TRACKS.slice(half * 2)];
  return (
    <footer className="relative border-t border-white/5 mt-24 overflow-hidden">
      <div aria-hidden className="blob w-[420px] h-[220px] bg-cyan-600 -bottom-32 left-1/4 opacity-[0.12]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid gap-12 lg:grid-cols-[1.2fr_2fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-slate-100 w-max group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 grid place-items-center group-hover:rotate-12 transition-transform duration-500">⚡</span>
            AgentSkills
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed">
            The open directory of installable AI agent skills for every profession.
            Built with honest numbers by{" "}
            <a href="https://github.com/aniruddhaadak80" className="text-cyan-400 hover:text-cyan-300 link-underline">Aniruddha Adak</a>.
          </p>
          <code className="text-xs block px-3 py-2.5 rounded-xl bg-black/50 border border-white/10 text-emerald-300 font-mono hover:border-emerald-500/30 transition-colors cursor-pointer select-all">
            npx skills add aniruddhaadak80/skills
          </code>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {cols.map((col, ci) => (
            <ul key={ci} className="space-y-2.5 text-sm">
              {col.map((t) => (
                <li key={t.id}>
                  <Link href={`/tracks/${t.id}`} className="text-slate-500 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">
                    {t.icon} {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div>
          <h4 className="font-semibold text-slate-200 mb-4 text-xs uppercase tracking-widest">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            {RESOURCES.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-300 transition-colors duration-200">
                  {r.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-7 text-center text-xs text-slate-600 relative z-10">
        © {new Date().getFullYear()} Aniruddha Adak · MIT License · Powered by the open{" "}
        <a href="https://skills.sh" className="text-slate-400 hover:text-cyan-300">Agent Skills</a> ecosystem
      </div>
    </footer>
  );
}
