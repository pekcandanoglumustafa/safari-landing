"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LOCALES, META, type Locale } from "@/i18n";

export default function LangSwitcher({ locale = "tr" as Locale }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const hrefFor = (target: Locale) => {
    let rest = pathname;
    for (const l of LOCALES) {
      if (l !== "tr" && (rest === `/${l}` || rest.startsWith(`/${l}/`))) { rest = rest.slice(l.length + 1) || "/"; break; }
    }
    if (target === "tr") return rest || "/";
    return rest === "/" ? `/${target}` : `/${target}${rest}`;
  };

  const active = META[locale];
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
        aria-label="Language">
        <span className="text-base leading-none">{active.flag}</span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl bg-white py-1 shadow-xl ring-1 ring-black/10">
          {LOCALES.map((l) => (
            <Link key={l} href={hrefFor(l)}
              onClick={() => { document.cookie = `lang=${l}; path=/; max-age=31536000`; setOpen(false); }}
              className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-orange/10 ${locale === l ? "font-bold text-navy" : "text-ink/80"}`}>
              <span className="text-base">{META[l].flag}</span>{META[l].label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
