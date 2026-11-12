import {
  siFacebook,
  siGithub,
  siInstagram,
  siTiktok,
  siYoutube,
  type SimpleIcon,
} from "simple-icons";
import { socialLinks } from "../data";

type SocialIcon = Pick<SimpleIcon, "hex" | "path">;

const socialIcons: Record<string, SocialIcon> = {
  YouTube: siYoutube,
  LinkedIn: {
    hex: "0A66C2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  Instagram: siInstagram,
  Facebook: siFacebook,
  GitHub: siGithub,
  TikTok: siTiktok,
};

export default function SocialLinks({ locale, showLabel = false }: { locale: string; showLabel?: boolean }) {
  const ar = locale === "ar";

  return (
    <nav className={`social-links${showLabel ? " social-links-labeled" : ""}`} aria-label={ar ? "حسابات التواصل الاجتماعي" : "Social media links"}>
      {showLabel && <h3>{ar ? "تابعني" : "Find me online"}</h3>}
      <div>
        {socialLinks.map((social) => {
          const icon = socialIcons[social.name];
          return (
            <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} title={social.name}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" style={{ color: `#${icon.hex}` }}>
                <path d={icon.path} />
              </svg>
              {showLabel && <span>{social.name}</span>}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
