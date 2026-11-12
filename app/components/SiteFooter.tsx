import Link from "next/link";
import { profile } from "../data";
import SocialLinks from "./SocialLinks";

export default function SiteFooter({ locale }: { locale: string }) {
  const ar = locale === "ar";
  return (
    <footer>
      <div className="footer-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/brand/Logo.svg" alt="" width="52" height="52" />
        <div><strong>{profile.shortName}</strong><small>{ar ? "مطوّر ويب ودعم تقني" : "Web Developer & IT Support"}</small></div>
      </div>
      <p>© 2026 {ar ? "جميع الحقوق محفوظة" : "All rights reserved"}.</p>
      <SocialLinks locale={locale} />
      <div className="footer-links">
        <Link href={`/${locale}/contact`}>{ar ? "تواصل معي" : "Contact"}</Link>
        <a href="/assets/cv/cv%202026.pdf" download>{ar ? "تحميل السيرة الذاتية" : "Download CV"}</a>
      </div>
    </footer>
  );
}
