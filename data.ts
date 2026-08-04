import ayarlar from "@/content/ayarlar.json";
import buggy from "@/content/paketler/buggy-safari.json";
import quad from "@/content/paketler/quad-safari.json";
import aile from "@/content/paketler/family-buggy-safari.json";
import type { Locale } from "./i18n";

type DilIcerik = {
  ad: string; slogan: string; giris: string;
  oneCikanlar: string[]; fiyataDahil: string[];
  program: { baslik: string; aciklama: string }[];
  bolumler: { baslik: string; paragraflar: string[] }[];
  sss: { soru: string; cevap: string }[];
};

type PaketKaydi = {
  slug: string; sira: number; fiyat: number; eskiFiyat?: number | null;
  sure: string; kapak: string; galeri: string[];
  diller: Partial<Record<Locale, DilIcerik>>;
};

const KAYITLAR = [buggy, quad, aile] as unknown as PaketKaydi[];

/** İletişim bilgileri — CMS'ten yönetilir */
export const CONTACT = {
  phoneDisplay: ayarlar.phoneDisplay,
  phoneIntl: ayarlar.phoneIntl,
  whatsapp: `https://wa.me/${ayarlar.phoneIntl.replace(/\D/g, "")}`,
};

/** EUR → TL kuru — CMS'ten güncellenir */
export const EUR_TRY = ayarlar.eurTry;
export const toTL = (e: number) => (Math.round((e * EUR_TRY) / 10) * 10).toLocaleString("tr-TR");

export type Pkg = {
  slug: string; name: string; tagline: string; price: number; oldPrice?: number;
  durKey: "dur2h" | "dur34h"; hero: string; gallery: string[];
  intro: string; highlights: string[]; includes: string[];
  program: { t: string; x: string }[];
  faq: { q: string; a: string }[];
  sections: { h: string; p: string[] }[];
};

/** Paketi istenen dilde getirir; çeviri yoksa Türkçeye düşer */
export function paket(slug: string, locale: Locale = "tr"): Pkg | undefined {
  const k = KAYITLAR.find((x) => x.slug === slug);
  if (!k) return undefined;
  const d = k.diller[locale] ?? k.diller.tr;
  if (!d) return undefined;
  return {
    slug: k.slug, name: d.ad, tagline: d.slogan,
    price: k.fiyat, oldPrice: k.eskiFiyat ?? undefined,
    durKey: (k.sure as "dur2h" | "dur34h") ?? "dur2h",
    hero: k.kapak, gallery: k.galeri, intro: d.giris,
    highlights: d.oneCikanlar, includes: d.fiyataDahil,
    program: d.program.map((x) => ({ t: x.baslik, x: x.aciklama })),
    faq: d.sss.map((f) => ({ q: f.soru, a: f.cevap })),
    sections: d.bolumler.map((s) => ({ h: s.baslik, p: s.paragraflar })),
  };
}

export function paketler(locale: Locale = "tr"): Pkg[] {
  return [...KAYITLAR].sort((a, b) => a.sira - b.sira).map((k) => paket(k.slug, locale)!).filter(Boolean);
}

export const SLUGS = KAYITLAR.map((k) => k.slug);
export const PKGS = paketler("tr");
export const getPkg = (s: string) => paket(s, "tr");
