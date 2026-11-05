import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data";

export const instant = false;

export function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export default async function ProjectDetails({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const ar = locale === "ar";
  return <main className="inner-page"><Link className="back-link" href={`/${locale}/projects`}>← {ar ? "كل المشاريع" : "All projects"}</Link><article className="project-detail"><header className="page-header"><span className="eyebrow">{project.category[locale as "en" | "ar"]}</span><h1>{project.title[locale as "en" | "ar"]}</h1><div className="availability-badge">{project.status}</div></header><div className="project-hero-preview"><span>{"< />"}</span></div><div className="detail-grid"><section><h2>{ar ? "عن المشروع" : "About the project"}</h2><p>{project.description[locale as "en" | "ar"]}</p><h2>{ar ? "الحالة التجارية" : "Availability"}</h2><p>{project.availability}</p></section><aside><h3>{ar ? "التقنيات" : "Technologies"}</h3><div className="tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></aside></div><Link className="button primary" href={`/${locale}/contact?project=${project.slug}`}>{ar ? "اطلب مشروعًا مشابهًا" : "Request a similar project"}</Link></article></main>;
}
