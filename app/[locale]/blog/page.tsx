export const instant = false;

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "الملاحظات والأفكار" : "Notes & ideas"}</span><h1>{ar ? "المقالات" : "Articles"}</h1></header><div className="empty-state">{ar ? "لا توجد مقالات منشورة بعد. سيتم إضافة المحتوى قريبًا." : "No articles have been published yet."}</div></main>;
}
