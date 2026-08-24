"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Browse Skills" },
  { href: "https://github.com/aniruddhaadak80/skills", label: "GitHub", ext: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 grid place-items-center text-lg shadow-lg shadow-fuchsia-500/20 group-hover:rotate-12 transition-transform duration-300">
            ⚡
          </span>
          <span className="font-bold tracking-tight text-zinc-100">
            Agent<span className="gradient-text">Skills</span>
            <span className="text-zinc-500 font-mono text-xs ml-1.5 hidden sm:inline">.directory</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            l.ext ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                {l.label} ↗
              </a>
            ) : (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                {l.label}
              </Link>
            )
          )}
          <Link href="/skills"
            className="ml-3 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition-all duration-300">
            Install a Skill
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/5" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 px-4 pb-4 pt-2 space-y-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-white/5">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
