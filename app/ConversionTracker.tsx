"use client";
import { useEffect } from "react";

/** WhatsApp tıklamalarını Google Ads dönüşümü olarak raporlar */
export default function ConversionTracker() {
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.('a[data-wa="1"]');
      if (!el) return;
      const g = (window as unknown as { gtag_report_conversion?: (u?: string) => boolean }).gtag_report_conversion;
      if (typeof g === "function") g();
    };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);
  return null;
}
