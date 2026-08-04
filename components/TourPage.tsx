import Link from "next/link";
import Image from "next/image";
import Tick from "@/components/Tick";
import { notFound } from "next/navigation";
import { paket, CONTACT, toTL } from "@/data";
import { T, type Locale } from "@/i18n";
import MobileMenu from "@/components/MobileMenu";


import Gallery from "@/app/Gallery";
import LangSwitcher from "@/app/LangSwitcher";
import FloatingWhats from "@/app/FloatingWhats";

export default function TourPage({ slug, locale }: { slug: string; locale: Locale }) {
  const p = paket(slug, locale);
  if (!p) notFound();
  const t = T[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  const name = p.name;
  const tagline = p.tagline;

  const seo = { intro: p.intro, sections: p.sections };
  const faqList = p.faq;
  const highlights = p.highlights;
  const includes = p.includes;
  const program = p.program;
  const wa = `${CONTACT.whatsapp}?text=${encodeURIComponent(locale === "tr" ? `Merhaba, "${name}" için rezervasyon yapmak istiyorum. Tarih ve kişi sayısı: ` : `Hello, I would like to book "${name}". Date and number of people: `)}`;
  const SITE_URL = "https://www.sidequadbuggy.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name,
        description: seo?.intro ?? p.intro,
        image: p.gallery.map((g) => `${SITE_URL}${g}`),
        brand: { "@type": "Brand", name: "Side Quad Buggy Safari" },
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}${base}/tur/${slug}`,
          priceValidUntil: "2027-12-31",
          seller: { "@type": "TravelAgency", name: "Sonnenklar Reisen Turizm" },
        },
      },
      {
        "@type": "TouristAttraction",
        name,
        description: tagline,
        image: `${SITE_URL}${p.hero}`,
        touristType: ["Adventure", "Family"],
        isAccessibleForFree: false,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqList.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Side Quad Buggy Safari", item: `${SITE_URL}${base || ""}` },
          { "@type": "ListItem", position: 2, name },
        ],
      },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur">
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

      {/* Başlık + spot görsel */}
      <div className="relative bg-navy text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image src={p.hero} alt={p.name} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-14">
          <Link href={base || "/"} className="text-sm text-white/80 hover:text-white">← {t.back}</Link>
          <p className="mt-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-bold backdrop-blur">{t[p.durKey]}</p>
          <h1 className="display mt-2 text-4xl font-extrabold md:text-5xl">{name}</h1>
          <p className="mt-2 max-w-xl text-lg text-white/90">{tagline}</p>
        </div>
      </div>

      {/* GALERİ — oklar, otomatik geçiş, büyütme */}
      <Gallery images={p.gallery} name={name} labels={{ prev: t.prev, next: t.next, close: t.close, zoom: t.zoom }} />

      <div className="mx-auto grid max-w-5xl gap-10 px-4 pb-28 pt-12 md:pb-12 md:grid-cols-[1fr_300px]">
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

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.highlights}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 rounded-xl bg-orange/10 px-4 py-3 font-semibold text-navy"><Tick className="!text-orange" /> {h}</li>
            ))}
          </ul>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.how}</h2>
          <ol className="mt-4 space-y-0">
            {program.map((s, i) => (
              <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-orange" />
                  {i < program.length - 1 && <span className="w-px flex-1 bg-orange/30" />}
                </div>
                <div><p className="font-bold text-navy">{s.t}</p><p className="text-ink/80">{s.x}</p></div>
              </li>
            ))}
          </ol>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.included}</h2>
          <ul className="mt-4 space-y-2">{includes.map((i) => <li key={i} className="flex items-center gap-2 text-ink/85"><Tick className="!text-orange" /> {i}</li>)}</ul>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.tourDetails}</h2>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">{t.perPerson}</p>
            <p className="flex items-baseline gap-2">
              {p.oldPrice && <span className="text-lg font-semibold text-ink/45 line-through">€{p.oldPrice}</span>}
              <span className="display text-3xl font-extrabold text-orange">€{p.price}</span>
            </p>
            <p className="text-sm font-semibold text-ink/70">≈ {toTL(p.price)} ₺</p>
            <a href={wa} target="_blank" rel="noopener" data-wa="1" className="mt-4 block rounded-full bg-wa py-3.5 text-center font-bold text-white hover:bg-wa-dark">{t.bookWhats}</a>
            <a href={`tel:${CONTACT.phoneIntl}`} className="mt-2 block rounded-full bg-navy py-3.5 text-center font-bold text-white hover:bg-deep">{t.call}: {CONTACT.phoneDisplay}</a>
            <p className="mt-3 text-center text-xs text-ink/70">{t.noPrepay}</p>
          </div>
        </aside>
      </div>

      <FloatingWhats />

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center justify-center gap-2 bg-[#e01f26] py-4 font-bold text-white">📞 {t.barCall}</a>
        <a href={wa} target="_blank" rel="noopener" data-wa="1" className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white">{t.barWhats}</a>
      </div>
    </article>
  );
}
