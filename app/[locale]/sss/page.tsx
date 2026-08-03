import FaqPage from "@/components/FaqPage";
import type { Metadata } from "next";
import type { Locale } from "@/i18n";

const M: Record<string, { t: string; d: string }> = {"en": {"t": "FAQ | Side Quad & Buggy Safari", "d": "Everything about our Quad Safari, Buggy Safari and Family Buggy tours in Side: licence, age limits, duration, transfer, payment and safety."}, "de": {"t": "FAQ | Quad & Buggy Safari in Side", "d": "Alles zu unseren Quad-, Buggy- und Familien-Buggy-Touren in Side: Führerschein, Alter, Dauer, Transfer, Zahlung und Sicherheit."}, "ru": {"t": "Вопросы | Квадро и багги сафари в Сиде", "d": "Всё о наших турах на квадроциклах и багги в Сиде: права, возраст, длительность, трансфер, оплата и безопасность."}, "pl": {"t": "FAQ | Quad i buggy safari w Side", "d": "Wszystko o naszych wycieczkach quadami i buggy w Side: prawo jazdy, wiek, czas trwania, transfer, płatność i bezpieczeństwo."}};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = M[locale];
  return {
    title: m.t, description: m.d,
    alternates: { canonical: `/${locale}/sss`, languages: { tr: "/sss", en: "/en/sss", de: "/de/sss", ru: "/ru/sss", pl: "/pl/sss" } },
    openGraph: {
      type: "website",
      locale: ({ en: "en_GB", de: "de_DE", ru: "ru_RU", pl: "pl_PL" } as Record<string, string>)[locale],
      title: m.t, description: m.d, images: ["/img/buggy-1.jpg"],
    },
  };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <FaqPage locale={locale as Locale} />;
}
