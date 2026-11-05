import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-portfolio.example"),
  title: { default: "Mohamed Abu Al-Anin | Full-Stack Developer", template: "%s | Mohamed Abu Al-Anin" },
  description: "Personal portfolio and website development services by Mohamed Abu Al-Anin.",
  icons: { icon: "/assets/brand/Logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
