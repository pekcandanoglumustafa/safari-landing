import ContactPage from "@/components/ContactPage";
import type { Locale } from "@/i18n";
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ContactPage locale={locale as Locale} />;
}
