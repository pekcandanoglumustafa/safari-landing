import type { Metadata } from "next";
import "./globals.css";
import { CONTACT } from "@/data";
import ConversionTracker from "@/app/ConversionTracker";

const SITE = "https://www.sidequadbuggy.com";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Side Quad & Buggy Safari | Manavgat — Otelden Ücretsiz Alma, Ödeme Tur Günü",
  description: "Side ve Manavgat'ta Quad Safari, Buggy Safari ve Aile Buggy turları. Otelden ücretsiz alma-bırakma, ödeme tur günü, ehliyet gerekmez. WhatsApp: 0507 617 17 77.",
  keywords: ["side quad safari","side buggy safari","manavgat quad turu","side atv turu","buggy safari fiyat","aile buggy safari","side quad buggy"],
  openGraph: { type: "website", locale: "tr_TR", title: "Side Quad & Buggy Safari", description: "Quad, Buggy ve Aile Buggy safari — Side ve Manavgat, otelden alma dahil, ödeme tur günü.", images: ["/img/buggy-1.jpg"] },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};
const jsonLd = {
  "@context":"https://schema.org","@type":"LocalBusiness",name:"Side Quad Buggy Safari",
  telephone: CONTACT.phoneIntl, areaServed:["Antalya","Side","Manavgat","Belek","Alanya"],
  address:{"@type":"PostalAddress",addressLocality:"Manavgat",addressRegion:"Antalya",addressCountry:"TR"},
  aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"120"},
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" as="image" href="/_next/image?url=%2Fimg%2Fbuggy-1.jpg&w=1600&q=82" fetchPriority="high" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11252315439" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11252315439');
function gtag_report_conversion(url) {
  var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } };
  gtag('event', 'conversion', { 'send_to': 'AW-11252315439/XC2oCKSjrsoYEK_qwvUp', 'event_callback': callback });
  return false;
}`,
          }}
        />
        {/* Yandex.Metrika */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
ym(98714131, 'init', {webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen antialiased">
        <ConversionTracker />
        <noscript><div><img src="https://mc.yandex.ru/watch/98714131" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>{children}</body>
    </html>
  );
}
