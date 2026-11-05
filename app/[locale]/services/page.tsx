import Link from "next/link";
import { Code2 } from "lucide-react";
import { services } from "../../data";

export const instant = false;

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "ماذا أقدم" : "What I offer"}</span><h1>{ar ? "الخدمات" : "Services"}</h1></header><div className="services-grid page-services">{services.map(([en, arName], index) => <article key={en}><Code2 /><span>0{index + 1}</span><h3>{ar ? arName : en}</h3><p>{ar ? "تخطيط وتنفيذ وبناء حل مناسب لاحتياجاتك وطريقة عملك." : "Planning and implementation of a solution suited to your requirements and workflow."}</p><Link href={`/${locale}/contact?service=${encodeURIComponent(en)}`}>{ar ? "اطلب عرض سعر" : "Request a quote"} →</Link></article>)}</div></main>;
}
