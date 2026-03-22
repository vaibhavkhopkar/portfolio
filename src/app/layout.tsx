import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://vaibhavprofile.vercel.app'),
  title: "Vaibhav Khopkar | Senior Contact Center Consultant",
  description:
    "Senior Contact Center & Unified Communications Consultant with 20+ years of expertise. Architect of enterprise-grade CX solutions across APAC and global markets.",
  keywords: [
    "Vaibhav Khopkar",
    "Contact Center Consultant",
    "Unified Communications",
    "CX Strategy",
    "Avaya",
    "Genesys",
    "NICE",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Vaibhav Khopkar" }],
  openGraph: {
    title: "Vaibhav Khopkar | Contact Center Architect",
    description:
      "20+ years shaping enterprise contact center strategy, cloud transformation, and CX excellence.",
    url: 'https://vaibhavprofile.vercel.app',
    siteName: 'Vaibhav Khopkar Portfolio',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Khopkar | Senior Contact Center Consultant',
    description: 'Architecting Customer Experience & Cloud Transformations across 12+ Countries.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="mesh-bg" style={{ position: "fixed", inset: 0, zIndex: -2 }} />
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
