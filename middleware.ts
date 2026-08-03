import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "de", "ru", "pl"] as const;
const COOKIE = "lang";

/**
 * İlk ziyarette tarayıcı diline göre otomatik yönlendirme.
 * - Sadece kök adreste ("/") çalışır, iç sayfalara dokunmaz.
 * - Kullanıcı dil seçtiyse (çerez varsa) bir daha yönlendirmez.
 * - Arama motoru botları yönlendirilmez (indeksleme bozulmasın).
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Sadece ana sayfa
  if (pathname !== "/") return NextResponse.next();

  // Kullanıcı daha önce dil seçtiyse karışma
  if (req.cookies.get(COOKIE)) return NextResponse.next();

  // Botları yönlendirme — Google Türkçe ana sayfayı indekslesin
  const ua = (req.headers.get("user-agent") || "").toLowerCase();
  if (/bot|crawler|spider|crawling|googlebot|bingbot|yandex|facebookexternalhit|slurp/.test(ua)) {
    return NextResponse.next();
  }

  // Accept-Language başlığını sırayla çöz
  const accept = req.headers.get("accept-language") || "";
  const diller = accept
    .split(",")
    .map((p) => {
      const [kod, q] = p.trim().split(";q=");
      return { kod: kod.split("-")[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const d of diller) {
    if (d.kod === "tr") return NextResponse.next();           // Türkçe zaten kök
    if ((LOCALES as readonly string[]).includes(d.kod)) {
      const url = req.nextUrl.clone();
      url.pathname = `/${d.kod}`;
      const res = NextResponse.redirect(url);
      res.cookies.set(COOKIE, d.kod, { maxAge: 60 * 60 * 24 * 365, path: "/" });
      return res;
    }
  }

  // Bilinmeyen dil → İngilizce (uluslararası ziyaretçi için en güvenli)
  if (diller.length && diller[0].kod !== "tr") {
    const url = req.nextUrl.clone();
    url.pathname = "/en";
    const res = NextResponse.redirect(url);
    res.cookies.set(COOKIE, "en", { maxAge: 60 * 60 * 24 * 365, path: "/" });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
