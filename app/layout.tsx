import type { Metadata } from "next";
import "./globals.css";
import { CONTACT } from "@/data";

const SITE = "https://www.nergistour.com";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Quad & Buggy Safari Antalya | Side Manavgat — Otelden Alma Dahil",
  description: "Antalya, Side ve Manavgat'ta Quad Safari, Buggy Safari ve Aile Buggy turları. Otelden ücretsiz alma-bırakma, ödeme tur günü. Hemen WhatsApp: 0542 744 01 01.",
  keywords: ["antalya quad safari","side buggy safari","manavgat quad turu","antalya atv turu","buggy safari fiyat","aile buggy safari"],
  openGraph: { type: "website", locale: "tr_TR", title: "Quad & Buggy Safari Antalya", description: "Quad, Buggy ve Aile Buggy safari — otelden alma dahil, ödeme tur günü.", images: ["/img/08.jpg"] },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};
const jsonLd = {
  "@context":"https://schema.org","@type":"LocalBusiness",name:"Nergis Tour — Quad & Buggy Safari",
  telephone: CONTACT.phoneIntl, areaServed:["Antalya","Side","Manavgat","Belek","Alanya"],
  address:{"@type":"PostalAddress",addressLocality:"Manavgat",addressRegion:"Antalya",addressCountry:"TR"},
  aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"120"},
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" as="image" href="/_next/image?url=%2Fimg%2F08.jpg&w=1600&q=82" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
