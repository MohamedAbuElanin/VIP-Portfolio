import Image from "next/image";
import { profile } from "../../data";

export const instant = false;

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "من أنا" : "About me"}</span><h1>{ar ? "نبذة مهنية" : "Professional profile"}</h1></header><section className="about-layout"><div className="about-photo"><Image src="/assets/profile/Mohamed.jpeg" alt={profile.name} fill sizes="420px" /></div><div className="prose"><h2>{profile.name}</h2><p>{profile.summary[locale as "en" | "ar"]}</p><h3>{ar ? "التعليم" : "Education"}</h3><p>{ar ? "بكالوريوس نظم معلومات الأعمال — أكاديمية الجزيرة — مايو 2026" : "Bachelor of Business Information Systems — El Gazeera Academy — May 2026"}</p><h3>{ar ? "المجالات التقنية" : "Technical focus"}</h3><p>{ar ? "تطوير الواجهات الأمامية، تكامل قواعد البيانات باستخدام Supabase، الدعم الفني ومكتب المساعدة، تثبيت أنظمة التشغيل والبرامج، واستكشاف أعطال الأجهزة والشبكات الأساسية." : "Front-end development, database integration with Supabase, IT help desk and technical support, operating system and software installation, and basic hardware and network troubleshooting."}</p></div></section></main>;
}
