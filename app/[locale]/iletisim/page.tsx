import ContactPage from "@/components/ContactPage";
import type { Metadata } from "next";
import type { Locale } from "@/i18n";

const M: Record<string, { t: string; d: string }> = {"en": {"t": "Contact & Booking | Side Quad Buggy Safari", "d": "Booking line: 0507 617 17 77. Message us on WhatsApp and reserve your spot in minutes. Free hotel transfer, pay on the tour day."}, "de": {"t": "Kontakt & Buchung | Side Quad Buggy Safari", "d": "Buchungshotline: 0507 617 17 77. Schreiben Sie uns per WhatsApp und sichern Sie sich Ihren Platz. Kostenloser Transfer, Zahlung am Tourtag."}, "ru": {"t": "Контакты и бронирование | Квадро багги сафари в Сиде", "d": "Линия бронирования: 0507 617 17 77. Напишите в WhatsApp и забронируйте место за минуты. Бесплатный трансфер, оплата в день тура."}, "pl": {"t": "Kontakt i rezerwacja | Side Quad Buggy Safari", "d": "Infolinia: 0507 617 17 77. Napisz na WhatsApp i zarezerwuj miejsce w kilka minut. Darmowy transfer, płatność w dniu wycieczki."}};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = M[locale];
  return {
    title: m.t, description: m.d,
    alternates: { canonical: `/${locale}/iletisim`, languages: { tr: "/iletisim", en: "/en/iletisim", de: "/de/iletisim", ru: "/ru/iletisim", pl: "/pl/iletisim" } },
    openGraph: {
      type: "website",
      locale: ({ en: "en_GB", de: "de_DE", ru: "ru_RU", pl: "pl_PL" } as Record<string, string>)[locale],
      title: m.t, description: m.d, images: ["/img/buggy-1.jpg"],
    },
  };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ContactPage locale={locale as Locale} />;
}
