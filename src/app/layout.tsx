import type { Metadata, Viewport } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitmehta.dev"),
  title: "Sumit Mehta | Frontend Engineer and AI Automation Specialist",
  description: `Premium portfolio for ${portfolio.personal.name}, a ${portfolio.personal.title} building AI-powered products, high-performance web applications, and scalable digital experiences.`,
  keywords: [
    "Sumit Mehta",
    "Frontend Engineer",
    "AI Automation Specialist",
    "AI-powered products",
    "Next.js Developer",
    "High-performance web applications",
    "GSAP",
    "Framer Motion"
  ],
  openGraph: {
    title: "Sumit Mehta | Frontend Engineer and AI Automation Specialist",
    description: portfolio.personal.tagline,
    type: "website",
    images: ["/concepts/hero-reference.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
