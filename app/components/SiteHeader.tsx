"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteHeader({ locale }: { locale: string }) {
  const pathname = usePathname();
  const ar = locale === "ar";
  const other = ar ? "en" : "ar";
  const [dark, setDark] = useState(() => typeof window !== "undefined" && localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const value = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = value ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    const value = !dark;
    setDark(value);
    localStorage.setItem("theme", value ? "dark" : "light");
    document.documentElement.dataset.theme = value ? "dark" : "light";
  };

  const links = ar
    ? [["الرئيسية", ""], ["من أنا", "about"], ["المشاريع", "projects"], ["الخدمات", "services"], ["الخبرات", "experience"], ["تواصل", "contact"]]
    : [["Home", ""], ["About", "about"], ["Projects", "projects"], ["Services", "services"], ["Experience", "experience"], ["Contact", "contact"]];

  const replaceLocale = pathname.replace(/^\/(ar|en)/, `/${other}`);

  return (
    <header className="site-header">
      <Link className="brand" href={`/${locale}`} aria-label="Mohamed Abu Al-Anin">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/brand/Logo.svg" alt="" width="42" height="42" />
        <span>{ar ? "محمد أبو الأنين" : "Mohamed"}</span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={`/${locale}${href ? `/${href}` : ""}`}>{label}</Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="locale-switch" href={replaceLocale}>{other.toUpperCase()}</Link>
        <button className="icon-button" onClick={toggleTheme} aria-label={ar ? "تغيير المظهر" : "Toggle theme"}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
