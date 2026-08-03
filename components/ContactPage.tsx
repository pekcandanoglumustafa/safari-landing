import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/data";
import { T, type Locale } from "@/i18n";
import MobileMenu from "@/components/MobileMenu";
import LangSwitcher from "@/app/LangSwitcher";
import FloatingWhats from "@/app/FloatingWhats";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  return (
    <>
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
        <h1 className="display text-4xl font-extrabold text-navy">{t.contactTitle}</h1>
        <p className="mt-3 text-lg text-ink/75">
          {t.contactText}
        </p>

        <div className="mt-8 grid gap-3">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1"
             className="rounded-2xl bg-wa px-6 py-5 text-center text-lg font-bold text-white hover:bg-wa-dark">
            {t.writeWhats} · {CONTACT.phoneDisplay}
          </a>
          <a href={`tel:${CONTACT.phoneIntl}`}
             className="rounded-2xl bg-[#e01f26] px-6 py-5 text-center text-lg font-bold text-white hover:bg-[#b0121a]">
            {t.callNow} · {CONTACT.phoneDisplay}
          </a>
        </div>

        <section className="mt-12">
          <h2 className="display text-2xl font-extrabold text-navy">{t.areasTitle}</h2>
          <p className="mt-2 leading-relaxed text-ink/80">{t.areasText}</p>
        </section>

        <section className="mt-10">
          <h2 className="display text-2xl font-extrabold text-navy">{t.hoursTitle}</h2>
          <p className="mt-2 leading-relaxed text-ink/80">{t.hoursText}</p>
        </section>

        <section className="mt-10">
          <h2 className="display text-2xl font-extrabold text-navy">{t.firmTitle}</h2>
          <div className="mt-2 space-y-1 text-ink/80">
            <p><strong className="text-navy">{t.firm}:</strong> Sonnenklar Reisen Turizm Seyahat Acentası</p>
            <p><strong className="text-navy">{t.cert}:</strong> 9030 ({t.certNote})</p>
            <p><strong className="text-navy">{t.addr}:</strong> Bucakşeyhler Mahallesi, Bucak Sokak 2/1, Manavgat / Antalya</p>
            <p><strong className="text-navy">{t.phone}:</strong> {CONTACT.phoneDisplay}</p>
          </div>
        </section>
      </main>

      <FloatingWhats />
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center justify-center gap-2 bg-[#e01f26] py-4 font-bold text-white">📞 {t.barCall}</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1" className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white">{t.barWhats}</a>
      </div>
    </>
  );
}
