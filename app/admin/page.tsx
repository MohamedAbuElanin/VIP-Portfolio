import Link from "next/link";
import { BriefcaseBusiness, Inbox, Users, TrendingUp, Plus } from "lucide-react";

const stats = [
  ["Projects", "4", BriefcaseBusiness],
  ["Inquiries", "Stored locally", Inbox],
  ["Customers", "1", Users],
  ["Published", "4", TrendingUp],
] as const;

export default function AdminDashboard() {
  return (
    <main className="admin-main">
      <aside className="admin-sidebar"><Link href="/admin" className="admin-brand">VIP Admin</Link><nav><Link className="active" href="/admin">Overview</Link><Link href="/admin/projects">Projects</Link><Link href="/admin/inquiries">Inquiries</Link><Link href="/admin/customers">Customers</Link><Link href="/admin/content">Content</Link><Link href="/admin/settings">Settings</Link></nav><Link href="/en" className="view-site">View website →</Link></aside>
      <section className="admin-content">
        <header className="admin-header"><div><span>Administration</span><h1>Good to see you, Mohamed</h1></div><button><Plus size={18} /> New project</button></header>
        <div className="admin-stats">{stats.map(([label, value, Icon]) => <article key={label}><Icon /><span>{label}</span><strong>{value}</strong></article>)}</div>
        <div className="admin-grid"><section className="admin-panel"><div className="panel-head"><h2>Recent projects</h2><Link href="/admin/projects">Manage</Link></div><div className="admin-table"><div className="admin-row head"><span>Project</span><span>Status</span><span>Availability</span></div><div className="admin-row"><span>Auto Parts Catalog</span><span>Published</span><span>Showcase</span></div><div className="admin-row"><span>Personal Portfolio</span><span>Published</span><span>Customization</span></div><div className="admin-row"><span>Movie Browser</span><span>Published</span><span>Customization</span></div></div></section><section className="admin-panel"><h2>System status</h2><div className="status-list"><p><i /> Public website <strong>Ready</strong></p><p><i /> Inquiry storage <strong>Local</strong></p><p><i /> Database provider <strong>Configure Supabase</strong></p></div></section></div>
      </section>
    </main>
  );
}
