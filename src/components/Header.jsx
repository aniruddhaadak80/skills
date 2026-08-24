"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Browse Skills" },
  { href: "https://github.com/aniruddhaadak80/skills", label: "GitHub", ext: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-[0_8px_40px_-12px_rgba(6,182,212,.18)]" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 grid place-items-center text-lg shadow-lg shadow-cyan-500/25 group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-500">
            ⚡
          </span>
          <span className="font-bold tracking-tight text-slate-100">
            Agent<span className="gradient-text">Skills</span>
            <span className="text-slate-600 font-mono text-xs ml-1.5 hidden sm:inline">.directory</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            l.ext ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 link-underline">
                {l.label} ↗
              </a>
            ) : (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 link-underline">
                {l.label}
              </Link>
            )
          )}
          <button
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            className="hidden lg:flex items-center gap-2 mr-1 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-500 hover:text-cyan-300 hover:border-cyan-400/40 transition-all duration-300"
            aria-label="Search skills"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
            Search
            <kbd className="font-mono text-[10px] border border-white/10 rounded px-1">Ctrl K</kbd>
          </button>
          <Link href="/skills"
            className="shine ml-1 px-5 py-2 rounded-xl text-sm font-semibold text-ink bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/45 hover:-translate-y-0.5 transition-all duration-300">
            Install a Skill
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            className={`text-slate-300 transition-transform duration-300 ${open ? "rotate-90" : ""}`}>
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-white/5 px-4 pb-4 pt-2 space-y-1 animate-fade-up">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
