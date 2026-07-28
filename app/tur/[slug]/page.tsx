import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PKGS, getPkg, CONTACT, toTL } from "@/data";
import { SEO_CONTENT, FAQ_FULL } from "@/content";

export function generateStaticParams() {
  return PKGS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPkg(slug);
  if (!p) return {};
  return {
    title: `${p.name} Antalya — Fiyat & Rezervasyon | Side Manavgat`,
    description: `${p.tagline}. ${p.intro.slice(0, 110)} Otelden alma dahil, €${p.price} (${toTL(p.price)} ₺).`,
    alternates: { canonical: `/tur/${slug}` },
    openGraph: { title: `${p.name} Antalya`, description: p.tagline, images: [p.hero] },
  };
}

export default async function TurPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPkg(slug);
  if (!p) notFound();

  const seo = SEO_CONTENT[slug];
  const faqList = FAQ_FULL[slug] ?? p.faq;
  const wa = `${CONTACT.whatsapp}?text=${encodeURIComponent(`Merhaba, "${p.name}" için rezervasyon yapmak istiyorum. Tarih ve kişi sayısı: `)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Product", name: `${p.name} Antalya`, description: p.intro, image: p.gallery,
        offers: { "@type": "Offer", price: p.price, priceCurrency: "EUR", availability: "https://schema.org/InStock" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" } },
      { "@type": "FAQPage", mainEntity: faqList.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="rounded-lg bg-white px-2.5 py-1.5">
            <Image src="/logo.png" alt="Side Quad Buggy Safari" width={120} height={30} />
          </Link>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="rounded-full bg-wa px-4 py-2 text-sm font-bold text-white hover:bg-wa-dark">WhatsApp</a>
        </div>
      </header>

      {/* Başlık + spot görsel */}
      <div className="relative bg-navy text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image src={p.hero} alt={p.name} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-14">
          <Link href="/" className="text-sm text-white/80 hover:text-white">← Tüm paketler</Link>
          <p className="mt-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-bold backdrop-blur">{p.duration}</p>
          <h1 className="display mt-2 text-4xl font-extrabold md:text-5xl">{p.name}</h1>
          <p className="mt-2 max-w-xl text-lg text-white/90">{p.tagline}</p>
        </div>
      </div>

      {/* GALERİ */}
      {/* Masaüstü: ızgara */}
      <div className="mx-auto hidden max-w-6xl px-4 pt-6 md:block">
        <div className="grid gap-2 overflow-hidden rounded-3xl md:grid-cols-4 md:grid-rows-2">
          <div className="relative md:col-span-2 md:row-span-2 md:min-h-[400px]">
            <Image src={p.gallery[0]} alt={p.name} fill sizes="50vw" className="object-cover" priority />
          </div>
          {p.gallery.slice(1, 5).map((src, i) => (
            <div key={i} className="relative aspect-[4/3]">
              <Image src={src} alt={`${p.name} ${i + 2}`} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      {/* Mobil: yatay kaydırmalı galeri — tüm fotoğraflar */}
      <div className="md:hidden">
        <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pt-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {p.gallery.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl">
              <Image src={src} alt={`${p.name} ${i + 1}`} fill sizes="85vw" className="object-cover" priority={i === 0} />
            </div>
          ))}
        </div>
        <p className="px-4 pb-2 text-center text-xs text-ink/50">← Kaydırarak tüm fotoğrafları görün →</p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[1fr_300px]">
        <div>
          <p className="text-lg leading-relaxed text-ink/85">{seo?.intro ?? p.intro}</p>

          {seo?.sections.map((sec) => (
            <section key={sec.h} className="mt-8">
              <h2 className="display text-xl font-extrabold text-navy md:text-2xl">{sec.h}</h2>
              {sec.p.map((para, i) => (
                <p key={i} className="mt-2 leading-relaxed text-ink/80">{para}</p>
              ))}
            </section>
          ))}

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">Öne Çıkanlar</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="rounded-xl bg-orange/10 px-4 py-3 font-semibold text-navy">✓ {h}</li>
            ))}
          </ul>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">Nasıl İşliyor?</h2>
          <ol className="mt-4 space-y-0">
            {p.program.map((s, i) => (
              <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-orange" />
                  {i < p.program.length - 1 && <span className="w-px flex-1 bg-orange/30" />}
                </div>
                <div><p className="font-bold text-navy">{s.t}</p><p className="text-ink/80">{s.x}</p></div>
              </li>
            ))}
          </ol>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">Fiyata Dahil</h2>
          <ul className="mt-4 space-y-2">{p.includes.map((i) => <li key={i} className="text-ink/85">✓ {i}</li>)}</ul>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">Sık Sorulanlar</h2>
          <div className="mt-4 space-y-3">
            {faqList.map((f) => (
              <details key={f.q} className="group rounded-xl bg-white p-4 ring-1 ring-black/5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
                  {f.q}<span className="ml-4 text-orange transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="h-fit md:sticky md:top-24">
          <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">Kişi başı</p>
            <p className="flex items-baseline gap-2">
              {p.oldPrice && <span className="text-lg font-semibold text-ink/45 line-through">€{p.oldPrice}</span>}
              <span className="display text-3xl font-extrabold text-orange">€{p.price}</span>
            </p>
            <p className="text-sm font-semibold text-ink/70">≈ {toTL(p.price)} ₺</p>
            <a href={wa} target="_blank" rel="noopener" className="mt-4 block rounded-full bg-wa py-3.5 text-center font-bold text-white hover:bg-wa-dark">WhatsApp&apos;tan Rezervasyon</a>
            <a href={`tel:${CONTACT.phoneIntl}`} className="mt-2 block rounded-full bg-navy py-3.5 text-center font-bold text-white hover:bg-deep">Ara: {CONTACT.phoneDisplay}</a>
            <p className="mt-3 text-center text-xs text-ink/70">Ön ödeme yok · Ödeme tur günü · Otelden ücretsiz transfer</p>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center justify-center gap-2 bg-navy py-4 font-bold text-white">📞 Ara</a>
        <a href={wa} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white">WhatsApp</a>
      </div>
    </article>
  );
}
