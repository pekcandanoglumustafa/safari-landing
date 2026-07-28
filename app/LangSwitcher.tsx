"use client";
import { useState, useRef, useEffect } from "react";

const LANGS = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export default function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(LANGS[0]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
        aria-label="Dil / Language">
        <span className="text-base leading-none">{active.flag}</span>
        <span className="hidden sm:inline">{active.code.toUpperCase()}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl bg-white py-1 shadow-xl ring-1 ring-black/10">
          {LANGS.map((l) => (
            <button key={l.code}
              onClick={() => { setActive(l); setOpen(false); }}
              className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-orange/10 ${active.code === l.code ? "font-bold text-navy" : "text-ink/80"}`}>
              <span className="text-base">{l.flag}</span>{l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
