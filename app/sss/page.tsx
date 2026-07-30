import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACT, PKGS } from "@/data";
import { FAQ_FULL } from "@/content";
import LangSwitcher from "@/app/LangSwitcher";
import FloatingWhats from "@/app/FloatingWhats";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Side Quad & Buggy Safari",
  description:
    "Side Quad Safari, Buggy Safari ve Aile Buggy turları hakkında merak edilenler: ehliyet, yaş sınırı, süre, transfer, ödeme ve güvenlik soruları yanıtlandı.",
  alternates: { canonical: "/sss" },
};

export default function SSS() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Object.values(FAQ_FULL).flat().map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="bg-navy">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="rounded-lg bg-white px-2.5 py-1.5">
            <Image src="/logo.png" alt="Side Quad Buggy Safari" width={120} height={30} />
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white sm:flex">
            <Link href="/" className="hover:text-orange">Paketler</Link>
            <Link href="/sss" className="hover:text-orange">S.S.S.</Link>
            <Link href="/iletisim" className="hover:text-orange">İletişim</Link>
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitcher />
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1"
               className="rounded-full bg-wa px-4 py-2 text-sm font-bold text-white hover:bg-wa-dark">WhatsApp</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="display text-4xl font-extrabold text-navy">Sıkça Sorulan Sorular</h1>
        <p className="mt-3 text-lg text-ink/75">
          Side Quad Safari, Buggy Safari ve Aile Buggy turlarımız hakkında en çok merak edilenleri
          burada topladık. Aradığınız yanıtı bulamazsanız WhatsApp&apos;tan yazmanız yeterli.
        </p>

        {PKGS.map((p) => {
          const list = FAQ_FULL[p.slug];
          if (!list) return null;
          return (
            <section key={p.slug} className="mt-10">
              <h2 className="display text-2xl font-extrabold text-navy">{p.name}</h2>
              <div className="mt-4 space-y-3">
                {list.map((f) => (
                  <details key={f.q} className="group rounded-xl bg-white p-4 ring-1 ring-black/5">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
                      {f.q}<span className="ml-4 text-orange transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{f.a}</p>
                  </details>
                ))}
              </div>
              <Link href={`/tur/${p.slug}`} className="mt-4 inline-block font-semibold text-orange hover:underline">
                {p.name} detaylarını gör →
              </Link>
            </section>
          );
        })}

        <div className="mt-12 rounded-2xl bg-navy p-8 text-center text-white">
          <h2 className="display text-2xl font-extrabold">Başka sorunuz mu var?</h2>
          <p className="mt-2 text-white/85">WhatsApp&apos;tan yazın, hemen yanıtlayalım.</p>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1"
             className="mt-5 inline-block rounded-full bg-wa px-7 py-3.5 font-bold text-white hover:bg-wa-dark">
            WhatsApp: {CONTACT.phoneDisplay}
          </a>
        </div>
      </main>

      <FloatingWhats />
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center justify-center gap-2 bg-[#e01f26] py-4 font-bold text-white">📞 Ara</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1" className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white">WhatsApp</a>
      </div>
    </>
  );
}
