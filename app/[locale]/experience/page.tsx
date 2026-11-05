import { experience } from "../../data";

export const instant = false;

export default async function Experience({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "المسار المهني" : "Career path"}</span><h1>{ar ? "الخبرات العملية" : "Professional experience"}</h1></header><div className="timeline">{experience.map((item) => <article key={item.company}><time>{item.period[locale as "en" | "ar"]}</time><div><h2>{item.role[locale as "en" | "ar"]}</h2><p>{item.company}</p></div></article>)}</div></main>;
}
