import Link from "next/link";
import { notFound } from "next/navigation";

const modules = ["projects", "inquiries", "customers", "content", "settings"];

export const instant = false;

export function generateStaticParams() {
  return modules.map((module) => ({ module }));
}

export default async function AdminModule({ params }: { params: Promise<{ module: string }> }) {
  const { module } = await params;
  if (!modules.includes(module)) notFound();
  const title = module[0].toUpperCase() + module.slice(1);
  return <main className="admin-main"><aside className="admin-sidebar"><Link href="/admin" className="admin-brand">VIP Admin</Link><nav>{modules.map((item) => <Link href={item === "projects" ? "/admin/projects" : `/admin/${item}`} className={item === module ? "active" : ""} key={item}>{item[0].toUpperCase() + item.slice(1)}</Link>)}</nav></aside><section className="admin-content"><div className="admin-header"><div><span>Administration</span><h1>{title}</h1></div></div><div className="admin-panel" style={{ marginTop: 35 }}><p>{module === "inquiries" ? "Submitted inquiries are stored in .data/inquiries.jsonl when Supabase is not configured." : "This module is ready for structured database-backed management through the Supabase schema."}</p></div></section></main>;
}
