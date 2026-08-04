import type { Metadata } from "next";
import TourPage from "@/components/TourPage";
import { SLUGS, paket, toTL } from "@/data";

export function generateStaticParams() { return SLUGS.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = paket(slug, "tr");
  if (!p) return {};
  return {
    title: `${p.name} Side — Fiyat & Rezervasyon | Manavgat`,
    description: `${p.tagline}. ${p.intro.slice(0, 110)} Otelden alma dahil, €${p.price} (${toTL(p.price)} ₺).`,
    alternates: {
      canonical: `/tur/${slug}`,
      languages: { tr: `/tur/${slug}`, en: `/en/tur/${slug}`, de: `/de/tur/${slug}`, ru: `/ru/tur/${slug}`, pl: `/pl/tur/${slug}` },
    },
    openGraph: { title: p.name, description: p.tagline, images: [p.hero] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TourPage slug={slug} locale="tr" />;
}
