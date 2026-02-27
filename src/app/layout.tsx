import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased noise-bg">
        {children}
      </body>
    </html>
  );
}
