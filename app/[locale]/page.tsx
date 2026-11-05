import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight, Code2, Layers3, SearchCode, Wrench } from "lucide-react";
import { experience, profile, projects, services } from "../data";

export const instant = false;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  const arrow = ar ? <ArrowUpLeft /> : <ArrowUpRight />;
  return (
    <main>
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow">{ar ? "مطوّر حلول ويب" : "Web solutions developer"}</span><h1>{ar ? "محمد أبو الأنين" : "Mohamed Abu Al-Anin"}<em>{profile.title}</em></h1><p>{ar ? "بناء مواقع وتطبيقات عملية بتصميم واضح وأساس تقني موثوق." : "I build practical websites and web applications with clear design and reliable foundations."}</p><div className="hero-actions"><Link className="button primary" href={`/${locale}/projects`}>{ar ? "استكشف المشاريع" : "Explore projects"} {arrow}</Link><Link className="button secondary" href={`/${locale}/contact`}>{ar ? "تواصل معي" : "Contact me"}</Link></div></div>
        <div className="portrait-wrap"><div className="portrait-ring"><Image src="/assets/profile/Mohamed.jpeg" alt={profile.name} fill sizes="(max-width: 800px) 85vw, 420px" priority /></div><span className="availability"><i /> {ar ? "متاح للتواصل" : "Open to opportunities"}</span></div>
      </section>
      <section className="intro-band"><span>{ar ? "نبذة مختصرة" : "Professional profile"}</span><p>{ar ? "خلفية في أنظمة معلومات الأعمال ودعم تقنية المعلومات، مع تدريب عملي في تطوير الواجهات الأمامية وأدوات الذكاء الاصطناعي لإنتاجية العمل." : "Background in business information systems and IT support, with practical front-end training and experience using AI productivity tools."}</p></section>
      <section className="section"><div className="section-heading"><div><span className="eyebrow">{ar ? "أعمال مختارة" : "Selected work"}</span><h2>{ar ? "مشاريع للتوضيح والتجربة" : "Projects for exploration"}</h2></div><Link href={`/${locale}/projects`}>{ar ? "عرض الكل" : "View all"} →</Link></div><div className="project-grid">{projects.filter((p) => p.featured).map((project, index) => <Link className={`project-card project-${index + 1}`} href={`/${locale}/projects/${project.slug}`} key={project.slug}><div className="project-preview"><span>0{index + 1}</span><Code2 /></div><div className="project-card-copy"><small>{project.category[locale as "en" | "ar"]}</small><h3>{project.title[locale as "en" | "ar"]}</h3><p>{project.description[locale as "en" | "ar"]}</p><div className="tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></div></Link>)}</div></section>
      <section className="section dark-section"><div className="section-heading"><div><span className="eyebrow">{ar ? "الخدمات" : "Services"}</span><h2>{ar ? "كيف يمكنني المساعدة؟" : "How can I help?"}</h2></div></div><div className="services-grid">{[SearchCode, Layers3, Wrench, Code2].map((Icon, index) => <article key={services[index][0]}><Icon /><span>0{index + 1}</span><h3>{ar ? services[index][1] : services[index][0]}</h3><p>{ar ? "حل عملي مصمم حول احتياجات المشروع والجمهور المستهدف." : "A practical solution shaped around project requirements and the intended audience."}</p></article>)}</div></section>
      <section className="section"><div className="section-heading"><div><span className="eyebrow">{ar ? "الخبرة" : "Experience"}</span><h2>{ar ? "مسار عملي متنوع" : "A varied professional path"}</h2></div></div><div className="timeline compact">{experience.slice(0, 3).map((item) => <article key={item.company}><time>{item.period[locale as "en" | "ar"]}</time><div><h3>{item.role[locale as "en" | "ar"]}</h3><p>{item.company}</p></div></article>)}</div></section>
      <section className="cta-section"><div><span className="eyebrow">{ar ? "لنعمل معًا" : "Let's work together"}</span><h2>{ar ? "هل لديك فكرة لموقع أو تطبيق؟" : "Have a website or application idea?"}</h2></div><Link className="button light" href={`/${locale}/contact`}>{ar ? "ابدأ طلبًا" : "Start an inquiry"} {arrow}</Link></section>
    </main>
  );
}
