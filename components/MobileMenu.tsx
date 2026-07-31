"use client";
import { useState, useEffect } from "react";
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

  // Menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={t.menu}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 999, backgroundColor: "rgba(0,0,0,.55)" }}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute", top: 0, right: 0, height: "100%", width: "min(78vw, 300px)",
              backgroundColor: "#ffffff", boxShadow: "-8px 0 30px rgba(0,0,0,.25)",
              display: "flex", flexDirection: "column", padding: "18px", gap: "6px",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label={t.close}
              style={{
                alignSelf: "flex-end", width: 40, height: 40, borderRadius: 999,
                backgroundColor: "#f1f3f5", color: "#034ea2", display: "flex",
                alignItems: "center", justifyContent: "center", marginBottom: 8,
              }}
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
                style={{
                  display: "block", padding: "14px 16px", borderRadius: 12,
                  fontSize: 18, fontWeight: 800, color: "#034ea2", textDecoration: "none",
                }}
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
