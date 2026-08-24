"use client";

export default function PaletteTrigger({ className = "", children }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
      className={className}
    >
      {children}
    </button>
  );
}
