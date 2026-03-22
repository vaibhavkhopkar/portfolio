import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import GlobalCanvas from "@/components/GlobalCanvas";

export default function Home() {
  return (
    <main>
      <GlobalCanvas />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <CaseStudies />
      <Contact />

      <footer style={{
        padding: "2.5rem 2rem",
        background: "#030712",
        borderTop: "1px solid rgba(0, 212, 255, 0.08)",
        textAlign: "center",
      }}>
        <p style={{
          color: "var(--text-muted)",
          fontSize: "0.82rem",
          letterSpacing: "0.04em",
        }}>
          © {new Date().getFullYear()} Vaibhav Khopkar. All rights reserved.
        </p>
        <p style={{
          color: "rgba(68, 85, 119, 0.6)",
          fontSize: "0.75rem",
          marginTop: "0.35rem",
        }}>
          Engineered with Next.js · React Three Fiber · Space Grotesk
        </p>
      </footer>
    </main>
  );
}
