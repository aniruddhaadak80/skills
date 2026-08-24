import Link from "next/link";
import { TRACKS } from "@/data/tracks/index.mjs";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-bold text-zinc-100">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center">⚡</span>
            AgentSkills
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">
            The open directory of installable AI agent skills for every profession. Built by{" "}
            <a href="https://github.com/aniruddhaadak80" className="text-violet-400 hover:text-violet-300">Aniruddha Adak</a>.
          </p>
          <code className="text-xs block mt-2 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-emerald-400 font-mono">
            npx skills add aniruddhaadak80/skills
          </code>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-200 mb-3 text-sm uppercase tracking-wider">Popular Tracks</h4>
          <ul className="space-y-2 text-sm">
            {TRACKS.slice(0, 6).map((t) => (
              <li key={t.id}>
                <Link href={`/tracks/${t.id}`} className="text-zinc-500 hover:text-white transition-colors">{t.icon} {t.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-200 mb-3 text-sm uppercase tracking-wider">More Tracks</h4>
          <ul className="space-y-2 text-sm">
            {TRACKS.slice(6, 12).map((t) => (
              <li key={t.id}>
                <Link href={`/tracks/${t.id}`} className="text-zinc-500 hover:text-white transition-colors">{t.icon} {t.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-200 mb-3 text-sm uppercase tracking-wider">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/aniruddhaadak80/skills" className="text-zinc-500 hover:text-white">GitHub Repository ↗</a></li>
            <li><a href="https://skills.sh/aniruddhaadak80/skills" className="text-zinc-500 hover:text-white">skills.sh Listing ↗</a></li>
            <li><a href="https://agentskills.io" className="text-zinc-500 hover:text-white">Agent Skills Spec ↗</a></li>
            <li><a href="https://github.com/vercel-labs/skills" className="text-zinc-500 hover:text-white">skills CLI ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Aniruddha Adak · MIT License · Powered by the open Agent Skills ecosystem
      </div>
    </footer>
  );
}
