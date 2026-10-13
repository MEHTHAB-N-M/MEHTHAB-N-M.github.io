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

export const metadata: Metadata = {
  metadataBase: new URL("https://mehthab-n-m.github.io/My_portfolio/"),
  title: "Mehthab N M | Software Engineer • Full-Stack & Python Developer",
  description:
    "Versatile Software Engineer and Full-Stack Developer with hands-on experience building scalable web applications, robust Python backends, freelance client solutions, and data & AI systems.",
  keywords: [
    "Mehthab N M",
    "Software Engineer",
    "Full-Stack Developer",
    "Python Developer",
    "Freelance Web Developer",
    "Data Analyst",
    "AI & ML Engineer",
    "React.js",
    "Next.js",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "REST APIs",
    "Docker",
    "Kochi Kerala India",
  ],
  authors: [{ name: "Mehthab N M" }],
  alternates: {
    canonical: "https://mehthab-n-m.github.io/My_portfolio/",
  },
  openGraph: {
    title: "Mehthab N M | Software Engineer • Full-Stack & Python Developer",
    description:
      "Full-stack web applications, robust Python backends, freelance client solutions, and applied AI systems.",
    url: "https://mehthab-n-m.github.io/My_portfolio/",
    siteName: "Mehthab N M Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mehthab-n-m.github.io/My_portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mehthab N M | Software Engineer & Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehthab N M | Software Engineer • Full-Stack & Python Developer",
    description:
      "Full-stack web applications, robust Python backends, freelance client solutions, and applied AI systems.",
    images: ["https://mehthab-n-m.github.io/My_portfolio/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100 min-h-screen selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
