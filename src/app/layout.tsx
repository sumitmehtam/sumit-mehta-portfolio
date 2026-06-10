import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitmehta.dev"),
  title: "Sumit Mehta | Frontend Engineer and AI Automation Developer",
  description:
    "Premium portfolio for Sumit Mehta, a Frontend Engineer, AI Automation Developer, and WordPress Expert building modern web experiences with AI, performance, and motion.",
  keywords: [
    "Sumit Mehta",
    "Frontend Engineer",
    "AI Automation Developer",
    "WordPress Expert",
    "Next.js Developer",
    "GSAP",
    "Framer Motion"
  ],
  openGraph: {
    title: "Sumit Mehta | Frontend Engineer and AI Automation Developer",
    description: "Building Modern Web Experiences with AI, Performance & Motion.",
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
