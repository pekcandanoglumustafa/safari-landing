import HtmlLang from "@/components/HtmlLang";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "ru" }, { locale: "pl" }];
}

export default async function LocaleLayout({
  children, params,
}: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (<><HtmlLang lang={locale} />{children}</>);
}
