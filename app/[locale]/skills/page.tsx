import Image from "next/image";
import {
  BriefcaseBusiness,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  FileSpreadsheet,
  Globe2,
  HardDrive,
  Monitor,
  Network,
  Router,
  Server,
  ShieldCheck,
  Table2,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  siBootstrap,
  siCss,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siKalilinux,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSupabase,
  siUbuntu,
  type SimpleIcon,
} from "simple-icons";
import { certificates, skillGroups } from "../../data";

export const instant = false;

const skillIcons = {
  frontend: Code2,
  backend: Server,
  systems: Wrench,
  networking: Network,
  business: BriefcaseBusiness,
  tools: Database,
};

const skillItemIcons: Record<string, LucideIcon> = {
  "Responsive Design": Monitor,
  "Express.js": Server,
  "REST APIs": Network,
  SQL: Database,
  "CRUD Operations": Table2,
  Authentication: ShieldCheck,
  "Database Management": Database,
  "Windows 10/11": Monitor,
  "Windows Installation": HardDrive,
  "Drivers & Software": Cpu,
  "Hardware & Printer Support": Wrench,
  "BIOS & Bootable USB": HardDrive,
  "IP Address": Network,
  DNS: Globe2,
  DHCP: Router,
  "Router Configuration": Router,
  "Basic Troubleshooting": Wrench,
  ERP: BriefcaseBusiness,
  "Metallic ERP": BriefcaseBusiness,
  "Inventory Management": BriefcaseBusiness,
  "Excel Reports": FileSpreadsheet,
  "Microsoft Office": FileSpreadsheet,
  "Data Review": Workflow,
  "AI Tools for Research, Design & Productivity": BrainCircuit,
};

const skillBrandIcons: Record<string, SimpleIcon> = {
  HTML5: siHtml5,
  CSS3: siCss,
  JavaScript: siJavascript,
  React: siReact,
  Bootstrap: siBootstrap,
  Git: siGit,
  GitHub: siGithub,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  "PostgreSQL": siPostgresql,
  Supabase: siSupabase,
  "Kali Linux": siKalilinux,
  Ubuntu: siUbuntu,
};

function SkillTag({ label }: { label: string }) {
  const BrandIcon = skillBrandIcons[label];
  const Icon = skillItemIcons[label];
  return (
    <span className="skill-tag">
      {BrandIcon ? (
        <svg
          aria-hidden="true"
          className="skill-brand-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ color: `#${BrandIcon.hex}` }}
        >
          <path d={BrandIcon.path} />
        </svg>
      ) : Icon ? (
        <Icon aria-hidden="true" size={15} strokeWidth={1.8} />
      ) : null}
      {label}
    </span>
  );
}

export default async function Skills({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  const featuredSkills = skillGroups.filter((group) => group.featured);
  const supportingSkills = skillGroups.filter((group) => !group.featured);

  return (
    <main className="inner-page">
      <header className="page-header">
        <span className="eyebrow">{ar ? "مجموعة الأدوات والخبرات" : "Tools & expertise"}</span>
        <h1>{ar ? "المهارات والتقنيات" : "Skills & technologies"}</h1>
      </header>
      <section className="featured-skills" aria-label={ar ? "مهارات تطوير الويب" : "Web development skills"}>
        {featuredSkills.map((group) => {
          const Icon = skillIcons[group.icon as keyof typeof skillIcons];
          return (
            <article className={`featured-skill-card ${group.id}`} key={group.id}>
              <div className="skill-card-heading">
                <span className="skill-icon"><Icon size={24} /></span>
                <span className="skill-level">{group.id === "frontend" ? (ar ? "تطوير الواجهات" : "Web interfaces") : (ar ? "الأنظمة والبيانات" : "Systems & data")}</span>
              </div>
              <h2>{group.name[locale as "en" | "ar"]}</h2>
              {group.description && <p>{group.description[locale as "en" | "ar"]}</p>}
              <div className="skill-tags">{group.items.map((item) => <SkillTag key={item} label={item} />)}</div>
            </article>
          );
        })}
      </section>
      <section className="supporting-skills">
        <header className="page-header">
          <span className="eyebrow">{ar ? "مهارات إضافية" : "Additional skills"}</span>
          <h2>{ar ? "الدعم التقني وأدوات العمل" : "IT support & work tools"}</h2>
        </header>
        <div className="skill-grid">
          {supportingSkills.map((group) => {
            const Icon = skillIcons[group.icon as keyof typeof skillIcons];
            return (
              <article key={group.id}>
                <h3><Icon size={19} /> {group.name[locale as "en" | "ar"]}</h3>
                <div>{group.items.map((item) => <SkillTag key={item} label={item} />)}</div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="certificate-section">
        <header className="page-header">
          <span className="eyebrow">{ar ? "التدريب والشهادات" : "Training & credentials"}</span>
          <h2>{ar ? "الشهادات والدورات" : "Certificates & courses"}</h2>
          <p>{ar ? "شهادات في تطوير الويب وأساسيات الحاسب — اضغط على أي شهادة لعرضها بالحجم الكامل." : "Web development and IT certificates. Select any certificate to view it at full size."}</p>
        </header>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title.en}>
              <a href={certificate.image} target="_blank" rel="noreferrer" aria-label={certificate.alt[locale as "en" | "ar"]}>
                <div className="certificate-image">
                  <Image src={certificate.image} alt={certificate.alt[locale as "en" | "ar"]} fill sizes="(max-width: 700px) 90vw, 45vw" />
                  <span className="certificate-open">{ar ? "عرض الشهادة ↗" : "View certificate ↗"}</span>
                </div>
              </a>
              <h3>{certificate.title[locale as "en" | "ar"]}</h3>
              <p>{certificate.issuer[locale as "en" | "ar"]}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
