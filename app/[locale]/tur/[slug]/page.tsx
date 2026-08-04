import type { Metadata } from "next";
import TourPage from "@/components/TourPage";
import { SLUGS, paket, toTL } from "@/data";
import type { Locale } from "@/i18n";

export function generateStaticParams() {
  return ["en", "de", "ru", "pl"].flatMap((locale) => SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = paket(slug, locale as Locale);
  if (!p) return {};
  const name = p.name;
  return {
    title: `${name} Side — €${p.price}`,
    description: `${p.tagline}. ${p.intro.slice(0, 110)}`,
    alternates: {
      canonical: `/${locale}/tur/${slug}`,
      languages: { tr: `/tur/${slug}`, en: `/en/tur/${slug}`, de: `/de/tur/${slug}`, ru: `/ru/tur/${slug}`, pl: `/pl/tur/${slug}` },
    },
    openGraph: {
      type: "website",
      locale: ({ en: "en_GB", de: "de_DE", ru: "ru_RU", pl: "pl_PL" } as Record<string, string>)[locale],
      title: name, description: p.tagline, images: [p.hero],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return <TourPage slug={slug} locale={locale as Locale} />;
}
