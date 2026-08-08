"use client";
import { useEffect } from "react";

const ADS_ID = "AW-11252315439";
const PHONE_LABEL = "AW-11252315439/lcJKCKnSx9scEK_qwvUp";
const WA_LABEL = "AW-11252315439/XC2oCKSjrsoYEK_qwvUp";
const PHONE = "+905076171777";
const YM_ID = 98714131;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...a: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
    ym?: (...a: unknown[]) => void;
  }
}

/**
 * Takip kodlarını sayfa çizildikten SONRA yükler.
 * Böylece ilk yükleme (LCP/FCP) hiç etkilenmez, ölçüm yine tam çalışır.
 */
export default function Analytics() {
  useEffect(() => {
    let yuklendi = false;

    const yukle = () => {
      if (yuklendi) return;
      yuklendi = true;

      // ---- Google Ads ----
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", ADS_ID);
      window.gtag("config", PHONE_LABEL, { phone_conversion_number: PHONE });

      window.gtag_report_conversion = (url?: string) => {
        window.gtag?.("event", "conversion", {
          send_to: WA_LABEL,
          event_callback: () => { if (url) window.location.href = url; },
        });
        return false;
      };

      const g = document.createElement("script");
      g.async = true;
      g.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
      document.head.appendChild(g);

      // ---- Yandex Metrika ----
      const y = document.createElement("script");
      y.async = true;
      y.src = "https://mc.yandex.ru/metrika/tag.js";
      y.onload = () => {
        window.ym?.(YM_ID, "init", {
          webvisor: true, clickmap: true, trackLinks: true,
          accurateTrackBounce: true, referrer: document.referrer, url: location.href,
        });
      };
      document.head.appendChild(y);
    };

    // İlk etkileşimde ya da 3 sn sonra yükle
    const olaylar: (keyof WindowEventMap)[] = ["scroll", "pointerdown", "keydown", "touchstart"];
    olaylar.forEach((o) => window.addEventListener(o, yukle, { once: true, passive: true }));
    const zaman = window.setTimeout(yukle, 3000);

    // WhatsApp tıklamalarını dönüşüm olarak bildir
    const tik = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.('a[data-wa="1"]');
      if (el) { yukle(); window.gtag_report_conversion?.(); }
    };
    document.addEventListener("click", tik);

    return () => {
      olaylar.forEach((o) => window.removeEventListener(o, yukle));
      window.clearTimeout(zaman);
      document.removeEventListener("click", tik);
    };
  }, []);

  return null;
}
