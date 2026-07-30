"use client";
import { useState } from "react";
import Link from "next/link";
import { T, type Locale } from "@/i18n";

export default function MobileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = T[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  const items = [
    { href: `${base || ""}/#paketler`, label: t.navPackages },
    { href: `${base}/sss`, label: t.navFaq },
    { href: `${base}/iletisim`, label: t.navContact },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={t.menu}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[90]" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <nav
            className="absolute right-0 top-0 flex h-full w-72 flex-col gap-1 bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="mb-3 self-end flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-navy hover:bg-ink/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-bold text-navy hover:bg-orange/10"
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
