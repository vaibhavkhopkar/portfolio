import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Vaibhav Khopkar | Contact Center Architect",
    description:
      "20+ years shaping enterprise contact center strategy, cloud transformation, and CX excellence.",
    type: "website",
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
