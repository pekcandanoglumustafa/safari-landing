import FaqPage from "@/components/FaqPage";
import type { Locale } from "@/i18n";
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <FaqPage locale={locale as Locale} />;
}
