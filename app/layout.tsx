import type { Metadata } from "next";
import "./globals.css";
import { CONTACT } from "@/data";
import Analytics from "@/app/Analytics";

const SITE = "https://www.sidequadbuggy.com";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Side Quad & Buggy Safari | Manavgat — Otelden Ücretsiz Alma, Ödeme Tur Günü",
  description: "Side ve Manavgat'ta Quad Safari, Buggy Safari ve Aile Buggy turları. Otelden ücretsiz alma-bırakma, ödeme tur günü, ehliyet gerekmez. WhatsApp: 0507 617 17 77.",
  keywords: ["side quad safari","side buggy safari","manavgat quad turu","side atv turu","buggy safari fiyat","aile buggy safari","side quad buggy"],
  openGraph: { type: "website", locale: "tr_TR", title: "Side Quad & Buggy Safari", description: "Quad, Buggy ve Aile Buggy safari — Side ve Manavgat, otelden alma dahil, ödeme tur günü.", images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
};
const SITE_URL = "https://www.sidequadbuggy.com";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#org`,
      name: "Side Quad Buggy Safari",
      alternateName: "Sonnenklar Reisen Turizm",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: [`${SITE_URL}/og.jpg`, `${SITE_URL}/img/quad-1.jpg`, `${SITE_URL}/img/buggy-1.jpg`, `${SITE_URL}/img/aile_buggy-1.jpg`],
      telephone: CONTACT.phoneIntl,
      priceRange: "€19 - €40",
      currenciesAccepted: "EUR, TRY",
      paymentAccepted: "Cash",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bucakşeyhler Mahallesi, Bucak Sokak 2/1",
        addressLocality: "Manavgat",
        addressRegion: "Antalya",
        addressCountry: "TR",
      },
      areaServed: ["Side", "Manavgat", "Kumköy", "Çolaklı", "Evrenseki", "Kızılağaç", "Titreyengöl", "Gündoğdu"],
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00", closes: "23:59",
      }],
      sameAs: [`https://wa.me/905076171777`],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Side Quad Buggy Safari",
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: ["tr","en","de","ru","pl"],
    },
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" as="image" href="/img/hero-mobil.jpg" media="(max-width: 767px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/img/hero-masaustu.jpg" media="(min-width: 768px)" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen antialiased pb-16 md:pb-0">
        <Analytics />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/98714131" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>{children}</body>
    </html>
  );
}
