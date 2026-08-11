"use client";
import Script from "next/script";

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
    ym?: ((...a: unknown[]) => void) & { a?: unknown[][]; l?: number };
  }
}

/**
 * Takip kodları. Sayfa etkileşime hazır olur olmaz yüklenir (afterInteractive):
 * LCP/FCP etkilenmez ama HİÇBİR ziyaretçi kaçmaz.
 */
export default function Analytics() {
  return (
    <>
      {/* Google Ads */}
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${ADS_ID}');
gtag('config', '${PHONE_LABEL}', { 'phone_conversion_number': '${PHONE}' });
window.gtag_report_conversion = function(url) {
  var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } };
  gtag('event', 'conversion', { 'send_to': '${WA_LABEL}', 'event_callback': callback });
  return false;
};
document.addEventListener('click', function (e) {
  var el = e.target && e.target.closest ? e.target.closest('a[data-wa="1"]') : null;
  if (el) { window.gtag_report_conversion(); }
});
        `}
      </Script>

      {/* Yandex Metrika — resmi kuyruk yapısıyla */}
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
ym(${YM_ID}, 'init', { webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true, referrer: document.referrer, url: location.href });
        `}
      </Script>
    </>
  );
}
