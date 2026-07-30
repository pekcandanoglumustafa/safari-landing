import type { Metadata } from "next";
import TourPage from "@/components/TourPage";
import { PKGS, getPkg, toTL } from "@/data";
import { pkgText } from "@/pkg-i18n";
import type { Locale } from "@/i18n";

export function generateStaticParams() {
  return ["en", "de", "ru", "pl"].flatMap((locale) => PKGS.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getPkg(slug);
  if (!p) return {};
  const tr = pkgText(locale as Locale, slug);
  const name = tr?.name ?? p.name;
  return {
    title: `${name} Side — €${p.price}`,
    description: `${tr?.tagline ?? p.tagline}. ${(tr?.intro ?? "").slice(0, 110)}`,
    alternates: {
      canonical: `/${locale}/tur/${slug}`,
      languages: { tr: `/tur/${slug}`, en: `/en/tur/${slug}`, de: `/de/tur/${slug}`, ru: `/ru/tur/${slug}`, pl: `/pl/tur/${slug}` },
    },
    openGraph: { title: name, description: tr?.tagline ?? p.tagline, images: [p.hero] },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return <TourPage slug={slug} locale={locale as Locale} />;
}
