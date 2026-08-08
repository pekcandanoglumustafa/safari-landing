"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Labels = { prev: string; next: string; close: string; zoom: string };
export default function Gallery({ images, name, labels }: { images: string[]; name: string; labels?: Labels }) {
  const L = labels ?? { prev: "Önceki", next: "Sonraki", close: "Kapat", zoom: "Büyüt" };
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const n = images.length;

  const go = useCallback((d: number) => setIdx((i) => (i + d + n) % n), [n]);

  // Otomatik geçiş — 2 saniye
  useEffect(() => {
    if (paused || open) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 2000);
    return () => clearInterval(t);
  }, [paused, open, n]);

  // Lightbox klavye kontrolü
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, go]);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      {/* Ana görüntüleyici */}
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-navy md:aspect-[16/9]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(true)}
            aria-label={`${name} ${i + 1} — ${L.zoom}`}
            className={`absolute inset-0 cursor-zoom-in transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
            tabIndex={i === idx ? 0 : -1}
          >
            {(i === idx || i === (idx + 1) % n || i === (idx - 1 + n) % n) && (
              <Image
                src={src}
                alt={`${name} ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={70}
                className="object-cover"
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
              />
            )}
          </button>
        ))}

        {/* Sol/sağ oklar */}
        <button
          onClick={() => go(-1)}
          aria-label={L.prev}
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-lg backdrop-blur transition hover:bg-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={() => go(1)}
          aria-label={L.next}
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-lg backdrop-blur transition hover:bg-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        {/* Nokta göstergeleri */}
        <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Küçük önizlemeler */}
      <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`${i + 1}`}
            className={`relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-xl ring-2 transition ${i === idx ? "ring-orange" : "ring-transparent opacity-70 hover:opacity-100"}`}
          >
            <Image src={src} alt="" fill sizes="96px" quality={60} loading="lazy" className="object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox (büyütme) */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label={L.close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label={L.prev}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[idx]} alt={`${name} ${idx + 1}`} fill sizes="100vw" quality={80} className="object-contain" />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label={L.next}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
