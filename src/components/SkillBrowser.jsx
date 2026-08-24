"use client";

import { useMemo, useState } from "react";
import SkillCard from "./SkillCard";
import InstallCommand from "./InstallCommand";

const LEVELS = [
  { id: "all", label: "All levels" },
  { id: "foundation", label: "🌱 Foundation" },
  { id: "intermediate", label: "⚙️ Intermediate" },
  { id: "advanced", label: "🔥 Advanced" },
  { id: "journey", label: "🗺️ Playbooks" },
];

const SORTS = [
  { id: "featured", label: "Sort: Featured" },
  { id: "az", label: "Sort: A → Z" },
  { id: "time-asc", label: "Sort: Quickest first" },
  { id: "time-desc", label: "Sort: Deepest first" },
];

const DURATIONS = [
  { id: "all", label: "Any length" },
  { id: "quick", label: "≤ 25 min" },
  { id: "medium", label: "26–40 min" },
  { id: "deep", label: "41+ min" },
];

export default function SkillBrowser({ skills, tracks }) {
  const [q, setQ] = useState("");
  const [track, setTrack] = useState("all");
  const [domain, setDomain] = useState("all");
  const [level, setLevel] = useState("all");
  const [duration, setDuration] = useState("all");
  const [sort, setSort] = useState("featured");
  const [visible, setVisible] = useState(24);

  const domainsForTrack = useMemo(() => {
    const pool = track === "all" ? skills : skills.filter((s) => s.track === track);
    return [...new Map(pool.filter((s) => !s.isPlaybook).map((s) => [s.domain, s.domainLabel])).entries()];
  }, [skills, track]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = skills.filter((s) => {
      if (track !== "all" && s.track !== track) return false;
      if (level !== "all" && s.level !== level) return false;
      if (domain !== "all" && s.domain !== domain) return false;
      if (duration === "quick" && s.minutes > 25) return false;
      if (duration === "medium" && (s.minutes <= 25 || s.minutes > 40)) return false;
      if (duration === "deep" && s.minutes <= 40) return false;
      if (!needle) return true;
      return (
        s.title.toLowerCase().includes(needle) ||
        s.description.toLowerCase().includes(needle) ||
        s.tags.some((t) => t.includes(needle))
      );
    });
    if (sort === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "time-asc") list = [...list].sort((a, b) => a.minutes - b.minutes);
    if (sort === "time-desc") list = [...list].sort((a, b) => b.minutes - a.minutes);
    return list;
  }, [skills, q, track, level, domain, duration, sort]);

  const shown = filtered.slice(0, visible);
  const activeFilters = [track, level, domain, duration].filter((v) => v !== "all").length + (q ? 1 : 0);

  function reset() {
    setQ(""); setTrack("all"); setDomain("all"); setLevel("all"); setDuration("all"); setSort("featured"); setVisible(24);
  }

  return (
    <div>
      <div className="sticky top-16 z-40 glass rounded-2xl p-4 mb-8 space-y-4">
        <InstallCommand compact />
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setVisible(24); }}
              placeholder={`Search ${skills.length}+ skills — try "rag", "crispr", "gdpr", "interview", "canary"...`}
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/15 hover:border-white/20 transition-all duration-300"
            />
            {q && (
              <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-lg leading-none" aria-label="Clear">×</button>
            )}
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Select value={track} onChange={(v) => { setTrack(v); setDomain("all"); setVisible(24); }}>
              <option value="all">All tracks</option>
              {tracks.map((t) => <option key={t.id} value={t.id}>{t.icon} {t.label}</option>)}
            </Select>
            <Select value={domain} onChange={(v) => { setDomain(v); setVisible(24); }}>
              <option value="all">All domains</option>
              {domainsForTrack.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
            </Select>
            <Select value={level} onChange={(v) => { setLevel(v); setVisible(24); }}>
              {LEVELS.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
            </Select>
            <Select value={duration} onChange={(v) => { setDuration(v); setVisible(24); }}>
              {DURATIONS.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
            </Select>
            <Select value={sort} onChange={(v) => setSort(v)}>
              {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 flex-wrap text-xs text-slate-500">
          <span>
            <span className="text-cyan-300 font-semibold">{filtered.length}</span> matching ·
            showing {shown.length}
            {activeFilters > 0 && <> · {activeFilters} filter{activeFilters > 1 ? "s" : ""} active</>}
          </span>
          {activeFilters > 0 && (
            <button onClick={reset} className="px-3 py-1 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300">
              ✕ Reset filters
            </button>
          )}
        </div>
      </div>

      {shown.length === 0 ? (
        <div className="text-center py-24 text-slate-500 animate-fade-up">
          <div className="text-6xl mb-5 opacity-30">🛰️</div>
          <p className="font-medium">No skills match that combination.</p>
          <button onClick={reset} className="mt-4 px-5 py-2 rounded-xl text-sm font-semibold border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition-all">
            Reset everything
          </button>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shown.map((s, i) => (
              <SkillCard key={s.slug} skill={s} index={i} />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisible((v) => v + 36)}
                className="shine px-8 py-3.5 rounded-xl font-semibold text-sm text-ink bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-xl shadow-cyan-500/25 hover:-translate-y-0.5 transition-all duration-300"
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

function Select({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs outline-none cursor-pointer hover:border-cyan-400/40 focus:border-cyan-400/60 [&>option]:bg-zinc-900 transition-all duration-300"
    >
      {children}
    </select>
  );
}
