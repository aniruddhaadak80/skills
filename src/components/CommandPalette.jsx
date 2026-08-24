"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  const ensureIndex = useCallback(async () => {
    if (index || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/search-index.json");
      setIndex(await res.json());
    } catch {
      setIndex([]);
    } finally {
      setLoading(false);
    }
  }, [index, loading]);

  useEffect(() => {
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpen() { setOpen(true); }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      ensureIndex();
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQ("");
      setSel(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const results = useCallback(() => {
    if (!index) return [];
    const n = q.trim().toLowerCase();
    if (!n) return index.slice(0, 9);
    return index
      .map((s) => {
        const t = s.title.toLowerCase();
        const sl = s.slug.toLowerCase();
        let score = -1;
        if (sl.startsWith(n) || t.startsWith(n)) score = 0;
        else if (t.includes(n)) score = 1;
        else if (s.tags.some((tag) => tag.includes(n))) score = 2;
        else if (n.split(" ").every((w) => w && (t.includes(w) || sl.includes(w)))) score = 3;
        return { s, score };
      })
      .filter((r) => r.score >= 0)
      .sort((a, b) => a.score - b.score)
      .slice(0, 9)
      .map((r) => r.s);
  }, [q, index]);

  function go(skill) {
    setOpen(false);
    router.push(`/skills/${skill.track}/${skill.slug}`);
  }

  if (!open) return null;
  const list = results();

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center pt-[14vh] px-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-up" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl rounded-2xl glass shadow-2xl shadow-cyan-500/10 border border-cyan-400/20 overflow-hidden animate-fade-up">
        <div className="flex items-center gap-3 px-4 border-b border-white/5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setSel(0); }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, list.length - 1)); }
              if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
              if (e.key === "Enter" && list[sel]) go(list[sel]);
            }}
            placeholder={loading ? "Loading skill index…" : "Jump to any skill…"}
            className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-slate-600"
          />
          <kbd className="text-[10px] font-mono text-slate-500 border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
        </div>
        <ul className="max-h-[46vh] overflow-y-auto p-2 min-h-[120px]">
          {list.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-slate-600">
              {loading ? "Loading…" : `No skill matches “${q}”`}
            </li>
          )}
          {list.map((s, i) => (
            <li key={s.slug}>
              <button
                onMouseEnter={() => setSel(i)}
                onClick={() => go(s)}
                className={`w-full text-left px-4 py-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors duration-100 ${i === sel ? "bg-cyan-400/10 border border-cyan-400/25" : "border border-transparent hover:bg-white/5"}`}
              >
                <span className="min-w-0">
                  <span className="block text-sm text-slate-200 truncate">{s.pb ? "🗺️ " : ""}{s.title}</span>
                  <span className="block text-[11px] font-mono text-slate-600 truncate">{s.trackIcon} {s.slug}</span>
                </span>
                {i === sel && <kbd className="shrink-0 text-[10px] font-mono text-cyan-400 border border-cyan-400/30 rounded px-1.5 py-0.5">↵</kbd>}
              </button>
            </li>
          ))}
        </ul>
        <div className="px-4 py-2 border-t border-white/5 text-[10px] text-slate-600 flex gap-3">
          <span>↑↓ navigate</span><span>↵ open</span><span>⌘K toggle</span>
        </div>
      </div>
    </div>
  );
}
