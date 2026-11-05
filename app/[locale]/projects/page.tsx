"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Search } from "lucide-react";
import { projects } from "../../data";

export default function ProjectsPage() {
  const { locale } = useParams<{ locale: string }>();
  const ar = locale === "ar";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const visible = projects.filter((project) => project.title[locale as "en" | "ar"].toLowerCase().includes(query.toLowerCase()) && (category === "all" || project.category.en === category));
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "معرض الأعمال" : "Project gallery"}</span><h1>{ar ? "مشاريعي" : "Selected projects"}</h1></header><div className="filters"><label className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ar ? "البحث في المشاريع..." : "Search projects..."} /></label><select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">{ar ? "كل التصنيفات" : "All categories"}</option><option>Websites</option><option>Web Applications</option></select></div><div className="project-grid full">{visible.map((project) => <Link className="project-card" href={`/${locale}/projects/${project.slug}`} key={project.slug}><div className="project-preview"><span className="code-glyph">{"< />"}</span></div><div className="project-card-copy"><small>{project.category[locale as "en" | "ar"]}</small><h3>{project.title[locale as "en" | "ar"]}</h3><p>{project.description[locale as "en" | "ar"]}</p><div className="availability-badge">{project.status}</div><div className="tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></div></Link>)}</div>{!visible.length && <div className="empty-state">{ar ? "لا توجد مشاريع مطابقة." : "No matching projects."}</div>}</main>;
}
