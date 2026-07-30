import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/data";
import LangSwitcher from "@/app/LangSwitcher";
import FloatingWhats from "@/app/FloatingWhats";

export const metadata: Metadata = {
  title: "İletişim & Rezervasyon | Side Quad Buggy Safari",
  description:
    "Side Quad & Buggy Safari rezervasyon hattı: 0507 617 17 77. WhatsApp'tan yazın, dakikalar içinde yerinizi ayırtalım. Otelden ücretsiz transfer, ödeme tur günü.",
  alternates: { canonical: "/iletisim" },
};

export default function Iletisim() {
  return (
    <>
      <header className="bg-navy">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="rounded-lg bg-white px-2.5 py-1.5">
            <Image src="/logo.png" alt="Side Quad Buggy Safari" width={120} height={30} />
          </Link>
          <div className="flex items-center gap-2">
            <LangSwitcher />
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1"
               className="rounded-full bg-wa px-4 py-2 text-sm font-bold text-white hover:bg-wa-dark">WhatsApp</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="display text-4xl font-extrabold text-navy">İletişim & Rezervasyon</h1>
        <p className="mt-3 text-lg text-ink/75">
          Form doldurmanıza, üye olmanıza veya ön ödeme yapmanıza gerek yok. Katılmak istediğiniz turu,
          tarihi ve kişi sayısını yazın — dakikalar içinde dönüş yapalım.
        </p>

        <div className="mt-8 grid gap-3">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1"
             className="rounded-2xl bg-wa px-6 py-5 text-center text-lg font-bold text-white hover:bg-wa-dark">
            WhatsApp&apos;tan Yazın · {CONTACT.phoneDisplay}
          </a>
          <a href={`tel:${CONTACT.phoneIntl}`}
             className="rounded-2xl bg-[#e01f26] px-6 py-5 text-center text-lg font-bold text-white hover:bg-[#b0121a]">
            Hemen Arayın · {CONTACT.phoneDisplay}
          </a>
        </div>

        <section className="mt-12">
          <h2 className="display text-2xl font-extrabold text-navy">Hizmet Bölgelerimiz</h2>
          <p className="mt-2 leading-relaxed text-ink/80">
            Side, Manavgat, Kumköy, Çolaklı, Evrenseki, Kızılağaç, Titreyengöl, Gündoğdu ve Belek
            bölgesindeki otellerden ücretsiz gidiş-dönüş transfer hizmeti sunuyoruz. Otelinizin
            adını iletmeniz yeterli; alınış saatinizi biz planlayıp bildiriyoruz.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="display text-2xl font-extrabold text-navy">Çalışma Saatleri</h2>
          <p className="mt-2 leading-relaxed text-ink/80">
            Turlarımız her gün, sabah ve öğleden sonra olmak üzere iki seans halinde düzenlenir.
            Rezervasyon hattımız 08:00 – 22:00 arasında açıktır; WhatsApp mesajlarınıza gün içinde
            en kısa sürede yanıt veriyoruz.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="display text-2xl font-extrabold text-navy">Firma Bilgileri</h2>
          <div className="mt-2 space-y-1 text-ink/80">
            <p><strong className="text-navy">Firma:</strong> Sonnenklar Reisen Turizm Seyahat Acentası</p>
            <p><strong className="text-navy">TÜRSAB Belge No:</strong> 9030 (A Grubu Seyahat Acentası)</p>
            <p><strong className="text-navy">Adres:</strong> Mimar Sinan Mah. Oymapınar Cad. No: 52, Manavgat / Antalya</p>
            <p><strong className="text-navy">Telefon:</strong> {CONTACT.phoneDisplay}</p>
          </div>
        </section>
      </main>

      <FloatingWhats />
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center justify-center gap-2 bg-[#e01f26] py-4 font-bold text-white">📞 Ara</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener" data-wa="1" className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white">WhatsApp</a>
      </div>
    </>
  );
}
