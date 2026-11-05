import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const instant = false;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <div dir={ar ? "rtl" : "ltr"} lang={locale}><SiteHeader locale={locale} /><div className="site-content">{children}</div><SiteFooter locale={locale} /></div>;
}
