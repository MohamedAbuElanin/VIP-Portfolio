export const instant = false;

export default async function Skills({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  const groups = ar
    ? [["تطوير الويب", ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"]], ["دعم تقنية المعلومات", ["Windows 10/11", "استكشاف أعطال الأجهزة والبرامج", "إعداد الطابعات", "شبكات أساسية"]], ["أنظمة الأعمال", ["ERP", "Microsoft Excel", "Microsoft Office"]], ["ذكاء اصطناعي وإنتاجية", ["ChatGPT", "Claude", "Google Gemini", "Microsoft Copilot"]]]
    : [["Web Development", ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"]], ["IT Support", ["Windows 10/11", "Hardware troubleshooting", "Printer setup", "Basic networking"]], ["Business Systems", ["ERP", "Microsoft Excel", "Microsoft Office"]], ["AI Productivity", ["ChatGPT", "Claude", "Google Gemini", "Microsoft Copilot"]]];
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "مجموعة الأدوات والخبرات" : "Tools & expertise"}</span><h1>{ar ? "المهارات والتقنيات" : "Skills & technologies"}</h1></header><div className="skill-grid">{groups.map(([name, items]) => <article key={name as string}><h2>{name}</h2><div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></main>;
}
