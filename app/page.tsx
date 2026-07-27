import Link from "next/link";
import Image from "next/image";
import { PKGS, CONTACT, toTL } from "@/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image src="/img/08.jpg" alt="" fill priority sizes="100vw" quality={82} className="kb object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/60 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />
        </div>

        <header className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="rounded-lg bg-white px-2.5 py-1.5">
            <Image src="/logo.png" alt="Side Quad Buggy Safari" width={132} height={33} priority />
          </span>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener"
             className="rounded-full bg-wa px-4 py-2 text-sm font-bold text-white hover:bg-wa-dark">
            WhatsApp
          </a>
        </header>

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-10 md:pb-32 md:pt-16">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-navy shadow-lg">
              <span className="display text-base font-extrabold text-orange">4.9</span>
              <span className="text-orange">★★★★★</span> Google
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3.5 py-1.5 text-sm font-bold text-white shadow-lg">
              ✔ A Grubu Acente · 9030
            </span>
          </div>
          <h1 className="display max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Antalya&apos;da Çamur, Toz ve <span className="text-orange">Tam Gaz Adrenalin</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Quad, Buggy ve Aile Buggy safari — Toros eteklerinde 2 saatlik off-road macera.
            Otelden ücretsiz alma-bırakma, ödeme tur günü. Ehliyet gerekmez!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#paketler" className="pulse rounded-full bg-orange px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-dark">
              Paketleri Gör
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener"
               className="rounded-full bg-wa px-7 py-3.5 font-bold text-white hover:bg-wa-dark">
              Hemen Rezervasyon
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            <span>✔ Otelden ücretsiz transfer</span>
            <span>✔ Ödeme tur günü</span>
            <span>✔ Ehliyet gerekmez</span>
            <span>✔ Tüm ekipman dahil</span>
          </div>
        </div>
      </section>

      {/* 3 PAKET */}
      <section id="paketler" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="display text-center text-3xl font-extrabold text-navy md:text-4xl">Safari Paketlerimiz</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-ink/70">Tıkla, detayları ve fotoğrafları gör, WhatsApp&apos;tan ayırt.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PKGS.map((p) => (
            <Link key={p.slug} href={`/tur/${p.slug}`}
              className="group relative block overflow-hidden rounded-3xl bg-navy shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative aspect-[4/5]">
                <Image src={p.hero} alt={p.name} fill sizes="(max-width:768px) 100vw, 33vw" className="card-img object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">{p.duration}</span>
                  <h3 className="display text-2xl font-extrabold">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/85">{p.tagline}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
                    <span className="text-right">
                      <span className="flex items-baseline gap-1.5">
                        {p.oldPrice && <span className="text-sm font-semibold text-white/60 line-through">€{p.oldPrice}</span>}
                        <span className="display text-2xl font-extrabold">€{p.price}</span>
                      </span>
                      <span className="block text-xs font-semibold text-white/85">{toTL(p.price)} ₺</span>
                    </span>
                    <span className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-white transition group-hover:bg-orange-dark">
                      İncele →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
          {[
            ["Otelden Alma", "Side, Manavgat ve çevresinden ücretsiz servis"],
            ["Ödeme Tur Günü", "Ön ödeme yok, kredi kartı gerekmez"],
            ["Ehliyet Gerekmez", "Başlangıç seviyesine uygun, rehber yanınızda"],
            ["4.9 Google Puanı", "Binlerce memnun misafir, A grubu acente"],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="display text-lg font-bold text-orange">{a}</p>
              <p className="mt-1 text-sm text-white/85">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SON CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="display text-3xl font-extrabold text-navy md:text-4xl">Maceraya Hazır mısın?</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">Hangi paket, hangi gün, kaç kişi — WhatsApp&apos;tan yaz, yerini ayırt.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener"
             className="rounded-full bg-wa px-7 py-3.5 font-bold text-white hover:bg-wa-dark">
            WhatsApp: {CONTACT.phoneDisplay}
          </a>
          <a href={`tel:${CONTACT.phoneIntl}`}
             className="rounded-full bg-navy px-7 py-3.5 font-bold text-white hover:bg-deep">
            Hemen Ara
          </a>
        </div>
      </section>

      {/* Sabit mobil CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center justify-center gap-2 bg-navy py-4 font-bold text-white">📞 Ara</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white">WhatsApp</a>
      </div>
    </>
  );
}
