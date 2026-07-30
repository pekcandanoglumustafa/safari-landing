import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import type { Locale } from "@/i18n";

const M: Record<string, { t: string; d: string }> = {
  en: { t: "Quad & Buggy Safari in Side | Free Hotel Transfer — Book on WhatsApp", d: "Quad Safari, Buggy Safari and Family Buggy tours in Side & Manavgat. Free hotel pick-up, pay on the tour day, no licence needed. Book on WhatsApp." },
  de: { t: "Quad & Buggy Safari in Side | Kostenlose Abholung — Jetzt buchen", d: "Quad-, Buggy- und Familien-Buggy-Safari in Side & Manavgat. Kostenlose Hotelabholung, Zahlung am Tourtag, kein Führerschein nötig." },
  ru: { t: "Квадро и багги сафари в Сиде | Бесплатный трансфер — бронь в WhatsApp", d: "Квадро-, багги- и семейное багги-сафари в Сиде и Манавгате. Бесплатный трансфер из отеля, оплата в день тура, права не нужны." },
  pl: { t: "Quad i buggy safari w Side | Darmowy transfer — rezerwacja WhatsApp", d: "Quad, buggy i rodzinne buggy safari w Side i Manavgat. Darmowy odbiór z hotelu, płatność w dniu wycieczki, bez prawa jazdy." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = M[locale];
  return {
    title: m.t, description: m.d,
    alternates: { canonical: `/${locale}`, languages: { tr: "/", en: "/en", de: "/de", ru: "/ru", pl: "/pl" } },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HomePage locale={locale as Locale} />;
}
