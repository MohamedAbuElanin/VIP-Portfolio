import { experience } from "../../data";

export const instant = false;

export default async function Experience({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "المسار المهني" : "Career path"}</span><h1>{ar ? "الخبرات التقنية" : "Technical experience"}</h1></header><div className="timeline">{experience.map((item) => <article key={item.role.en}><time>{item.period[locale as "en" | "ar"]}</time><div><h2>{item.role[locale as "en" | "ar"]}</h2><p>{item.company}</p><ul>{item.highlights[locale as "en" | "ar"].map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div></main>;
}
