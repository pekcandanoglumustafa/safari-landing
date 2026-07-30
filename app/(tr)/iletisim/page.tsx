import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
export const metadata: Metadata = {
  title: "İletişim & Rezervasyon | Side Quad Buggy Safari",
  description: "Side Quad & Buggy Safari rezervasyon hattı: 0507 617 17 77. WhatsApp'tan yazın, dakikalar içinde yerinizi ayırtalım. Otelden ücretsiz transfer, ödeme tur günü.",
  alternates: { canonical: "/iletisim", languages: { tr: "/iletisim", en: "/en/iletisim", de: "/de/iletisim", ru: "/ru/iletisim", pl: "/pl/iletisim" } },
};
export default function Page() { return <ContactPage locale="tr" />; }
