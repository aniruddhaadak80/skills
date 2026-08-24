"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SkillCard from "./SkillCard";
import InstallCommand from "./InstallCommand";

export default function SkillBrowser({ skills, tracks }) {
  const [q, setQ] = useState("");
  const [track, setTrack] = useState("all");
  const [level, setLevel] = useState("all");
  const [visible, setVisible] = useState(24);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return skills.filter((s) => {
      if (track !== "all" && s.track !== track) return false;
      if (level !== "all" && s.level !== level) return false;
      if (!needle) return true;
      return (
        s.title.toLowerCase().includes(needle) ||
        s.description.toLowerCase().includes(needle) ||
        s.tags.some((t) => t.includes(needle))
      );
    });
  }, [skills, q, track, level]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="sticky top-16 z-40 glass rounded-2xl p-4 mb-8 space-y-4">
        <InstallCommand compact />
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setVisible(24); }}
              placeholder={`Search ${skills.length} skills — try "rag", "interview", "gdpr", "crispr", "deploy"...`}
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
          </div>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none cursor-pointer [&>option]:bg-zinc-900"
          >
            <option value="all">All levels</option>
            <option value="foundation">Foundation</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="journey">Playbooks</option>
          </select>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 -mb-1" role="tablist">
          <TrackChip active={track === "all"} onClick={() => setTrack("all")} label={`All (${skills.length})`} gradient="from-zinc-600 to-zinc-500" />
          {tracks.map((t) => (
            <TrackChip key={t.id} active={track === t.id} onClick={() => { setTrack(t.id); setVisible(24); }} label={`${t.icon} ${t.label}`} gradient={t.gradient} />
          ))}
        </div>
      </div>

      <p className="text-xs text-zinc-500 mb-4">
        Showing <span className="text-zinc-300 font-semibold">{shown.length}</span> of {filtered.length} matching skills
      </p>

      {shown.length === 0 ? (
        <div className="text-center py-24 text-zinc-500">
          <div className="text-5xl mb-4 opacity-40">🔍</div>
          No skills match that search. Try a broader term.
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shown.map((s, i) => (
              <SkillCard key={s.slug} skill={s} index={i} />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + 36)}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-fuchsia-500/25 transition-all duration-300"
              >
                Load more ({filtered.length - visible} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function TrackChip({ active, onClick, label, gradient }) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
        active
          ? `text-white border-transparent bg-gradient-to-r ${gradient} shadow-lg`
          : "border-white/10 text-zinc-400 hover:text-white hover:border-white/25 bg-white/[0.03]"
      }`}
    >
      {label}
    </button>
  );
}
