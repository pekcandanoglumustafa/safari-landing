import Link from "next/link";
import Image from "next/image";
import { CONTACT, paketler } from "@/data";

import { T, type Locale } from "@/i18n";
import MobileMenu from "@/components/MobileMenu";

import LangSwitcher from "@/app/LangSwitcher";
import FloatingWhats from "@/app/FloatingWhats";

export default function FaqPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  const PKGS = paketler(locale);
  const listFor = (slug: string) => PKGS.find((x) => x.slug === slug)?.faq;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PKGS.flatMap((p) => listFor(p.slug) ?? []).map((f) => ({
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
          <Link href={base || "/"} className="rounded-lg bg-white px-2.5 py-1.5">
            <Image src="/logo.png" alt="Side Quad Buggy Safari" width={120} height={30} />
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white sm:flex">
            <Link href={`${base || ""}/#paketler`} className="hover:text-orange">{t.navPackages}</Link>
            <Link href={`${base}/sss`} className="hover:text-orange">{t.navFaq}</Link>
            <Link href={`${base}/iletisim`} className="hover:text-orange">{t.navContact}</Link>
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitcher locale={locale} />
            <MobileMenu locale={locale} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-28 pt-14 md:pb-14">
        <h1 className="display text-4xl font-extrabold text-navy">{t.faqTitle}</h1>
        <p className="mt-3 text-lg text-ink/75">
          {t.faqIntro}
        </p>

        {PKGS.map((p) => {
          const list = listFor(p.slug);
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
              <Link href={`${base}/tur/${p.slug}`} className="mt-4 inline-block font-semibold text-orange hover:underline">
                {p.name} {t.seeTour} →
              </Link>
            </section>
          );
        })}

        <div className="mt-12 rounded-2xl bg-navy p-8 text-center text-white">
          <h2 className="display text-2xl font-extrabold">{t.moreQ}</h2>
          <p className="mt-2 text-white/85">{t.moreQx}</p>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1"
             className="mt-5 inline-block rounded-full bg-wa px-7 py-3.5 font-bold text-white hover:bg-wa-dark">
            WhatsApp: {CONTACT.phoneDisplay}
          </a>
        </div>
      </main>

      <FloatingWhats />
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center justify-center gap-2 bg-[#e01f26] py-4 font-bold text-white">📞 {t.barCall}</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1" className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white">{t.barWhats}</a>
      </div>
    </>
  );
}
