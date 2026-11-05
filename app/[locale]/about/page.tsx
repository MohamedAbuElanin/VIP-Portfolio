import Image from "next/image";
import { profile } from "../../data";

export const instant = false;

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "من أنا" : "About me"}</span><h1>{ar ? "نبذة مهنية" : "Professional profile"}</h1></header><section className="about-layout"><div className="about-photo"><Image src="/assets/profile/Mohamed.jpeg" alt={profile.name} fill sizes="420px" /></div><div className="prose"><h2>{profile.name}</h2><p>{ar ? "خريج نظم معلومات الأعمال، بخلفية عملية في دعم تقنية المعلومات وأنظمة ERP والتسويق الرقمي وخدمة العملاء." : "Business Information Systems graduate with practical experience in IT support, ERP systems, digital marketing, and customer service."}</p><h3>{ar ? "التعليم" : "Education"}</h3><p>{ar ? "بكالوريوس نظم معلومات الأعمال — معهد الجزيرة العالي — يوليو 2026" : "Bachelor of Business Information Systems — El Gazeera Higher Institute — July 2026"}</p><h3>{ar ? "اهتمامات المهنة" : "Professional interests"}</h3><p>{ar ? "دعم تقنية المعلومات، وأنظمة Help Desk وERP، وتطوير الواجهات الأمامية وأتمتة سير العمل باستخدام أدوات الذكاء الاصطناعي." : "IT support, Help Desk and ERP support, front-end development, and workflow automation with AI productivity tools."}</p></div></section></main>;
}
