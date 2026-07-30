import type { Metadata } from "next";
import FaqPage from "@/components/FaqPage";
export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Side Quad & Buggy Safari",
  description: "Side Quad Safari, Buggy Safari ve Aile Buggy turları hakkında merak edilenler: ehliyet, yaş sınırı, süre, transfer, ödeme ve güvenlik soruları yanıtlandı.",
  alternates: { canonical: "/sss", languages: { tr: "/sss", en: "/en/sss", de: "/de/sss", ru: "/ru/sss", pl: "/pl/sss" } },
};
export default function Page() { return <FaqPage locale="tr" />; }
