"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function InquiryForm({ locale = "en" }: { locale?: string }) {
  const ar = locale === "ar";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [reference, setReference] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (!response.ok) {
      setStatus("error");
      return;
    }
    const result = await response.json();
    setReference(result.reference);
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={40} />
        <h3>{ar ? "تم إرسال طلبك" : "Your request has been sent"}</h3>
        <p>{ar ? "رقم مرجع الطلب:" : "Request reference:"} <strong>{reference}</strong></p>
        <a className="button secondary" href={`https://wa.me/201210146694?text=${encodeURIComponent(`${ar ? "مرجع الطلب" : "Request reference"}: ${reference}`)}`} target="_blank" rel="noreferrer">
          {ar ? "متابعة عبر واتساب" : "Continue on WhatsApp"}
        </a>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="field-grid">
        <label>{ar ? "الاسم الكامل" : "Full name"}<input required name="name" autoComplete="name" /></label>
        <label>{ar ? "البريد الإلكتروني" : "Email"}<input required type="email" name="email" autoComplete="email" /></label>
        <label>{ar ? "رقم الهاتف" : "Phone number"}<input required name="phone" autoComplete="tel" /></label>
        <label>{ar ? "البلد" : "Country"}<input required name="country" autoComplete="country-name" /></label>
        <label>{ar ? "نوع الطلب" : "Request type"}<select required name="type" defaultValue=""><option value="" disabled>{ar ? "اختر نوع الطلب" : "Choose a request type"}</option><option>{ar ? "شراء مشروع" : "Purchase an existing project"}</option><option>{ar ? "تخصيص مشروع" : "Customize an existing project"}</option><option>{ar ? "مشروع مشابه" : "Develop a similar project"}</option><option>{ar ? "موقع جديد" : "Build a new website"}</option><option>{ar ? "تصميم واجهات" : "UI/UX design"}</option><option>{ar ? "استفسار عام" : "General inquiry"}</option></select></label>
        <label>{ar ? "وسيلة التواصل المفضلة" : "Preferred contact method"}<select name="contactMethod"><option>Email</option><option>WhatsApp</option><option>{ar ? "الهاتف" : "Phone"}</option></select></label>
      </div>
      <label>{ar ? "تفاصيل المشروع" : "Project description"}<textarea required name="description" rows={6} /></label>
      {status === "error" && <p className="form-error" role="alert">{ar ? "تعذر إرسال الطلب. حاول مرة أخرى." : "The request could not be sent. Please try again."}</p>}
      <button className="button primary" disabled={status === "sending"}><Send size={18} /> {status === "sending" ? (ar ? "جارٍ الإرسال..." : "Sending...") : (ar ? "إرسال الطلب" : "Send request")}</button>
    </form>
  );
}
