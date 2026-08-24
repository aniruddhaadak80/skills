"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";

const AGENTS = [
  { id: "opencode", label: "OpenCode" },
  { id: "claude-code", label: "Claude Code" },
  { id: "cursor", label: "Cursor" },
  { id: "codex", label: "Codex" },
  { id: "github-copilot", label: "Copilot" },
  { id: "gemini-cli", label: "Gemini CLI" },
  { id: "windsurf", label: "Windsurf" },
];

export default function InstallCommand({ skillSlug = null, compact = false }) {
  const [agent, setAgent] = useState("opencode");
  const cmd = skillSlug
    ? `npx skills add aniruddhaadak80/skills --skill ${skillSlug}${agent === "*" ? "" : ` -a ${agent}`}`
    : `npx skills add aniruddhaadak80/skills${agent === "*" ? "" : ` -a ${agent}`}`;
  return (
    <div className={`rounded-xl border border-cyan-400/15 bg-black/60 overflow-hidden transition-all duration-300 hover:border-cyan-400/35 hover:shadow-[0_0_36px_-8px_rgba(34,211,238,.3)] ${compact ? "" : "shadow-xl shadow-cyan-500/5"}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.03] flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 hover:bg-red-400 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 hover:bg-amber-400 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 hover:bg-emerald-400 transition-colors" />
          </span>
          <select
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
            className="bg-transparent text-xs text-slate-400 border border-white/10 rounded-md px-2 py-1 outline-none cursor-pointer hover:border-cyan-400/40 focus:border-cyan-400/60 [&>option]:bg-zinc-900"
            aria-label="Target agent"
          >
            {AGENTS.map((a) => (
              <option key={a.id} value={a.id}>{a.label}</option>
            ))}
            <option value="*">All agents</option>
          </select>
        </div>
        <CopyButton text={cmd} doneLabel="Copied ✓" />
      </div>
      <div className="px-4 py-3.5 font-mono text-sm overflow-x-auto whitespace-nowrap">
        <span className="text-emerald-400 select-none">$ </span>
        <span className="text-slate-200">{cmd}</span>
      </div>
    </div>
  );
}
