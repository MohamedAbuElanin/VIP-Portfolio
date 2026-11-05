import InquiryForm from "../../components/InquiryForm";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const instant = false;

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="inner-page"><header className="page-header"><span className="eyebrow">{ar ? "تواصل" : "Get in touch"}</span><h1>{ar ? "لنتحدث عن مشروعك" : "Let’s talk about your project"}</h1></header><div className="contact-layout"><aside className="contact-card"><div><Phone /><span>{ar ? "الهاتف" : "Phone"}<a href="tel:+201210146694">+20 1210146694</a></span></div><div><Mail /><span>{ar ? "البريد" : "Email"}<a href="mailto:medsmohamed910@gmail.com">medsmohamed910@gmail.com</a></span></div><div><MessageCircle /><span>WhatsApp<a href="https://wa.me/201210146694" target="_blank" rel="noreferrer">{ar ? "بدء محادثة" : "Start a conversation"}</a></span></div><div><MapPin /><span>{ar ? "الموقع" : "Location"}<strong>{ar ? "القاهرة، مصر" : "Cairo, Egypt"}</strong></span></div></aside><InquiryForm locale={locale} /></div></main>;
}
