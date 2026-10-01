import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://lead-mvp.onrender.com";
const shareTitle = "LeadFlow & AI Niche Builder";
const shareDescription =
  "Keine Leads mehr verlieren! Automatisierte Lead-Erfassung & Qualifizierung.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LeadFlow & AI Niche Builder — Seodach × WebStudio",
  description:
    "Interactive demo for niche selection, Meta lead offers, an instant form preview, and a CRM lead flow.",
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: siteUrl,
    siteName: shareTitle,
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: shareTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
