"use client";

import dynamic from "next/dynamic";
import ScrollSection from "./ui/ScrollSection";



const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "12",  label: "Countries" },
  { number: "$200M+", label: "Revenue Impact" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "130px 2rem",
        background: "linear-gradient(180deg, color-mix(in srgb, var(--bg-base) 30%, transparent) 0%, color-mix(in srgb, var(--bg-surface) 60%, transparent) 50%, color-mix(in srgb, var(--bg-base) 30%, transparent) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div className="glass-panel" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", padding: "4rem" }}>
        <ScrollSection>
          <div style={{ marginBottom: "1rem" }}>
            <span style={{
              color: "var(--electric-cyan)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              — About Me
            </span>
          </div>
        </ScrollSection>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}>
          {/* Left: Text */}
          <div>
            <ScrollSection>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                The Architect Behind<br />
                <span className="cyan-text">World-Class CX</span>
              </h2>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                  fontWeight: 300,
                }}
              >
                With over two decades in Contact Center & Unified Communications, I&apos;ve guided
                Fortune 500s through their most complex transformations — from on-prem Avaya systems
                to cloud-native Genesys and NICE deployments.
              </p>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  fontWeight: 300,
                }}
              >
                My expertise sits at the intersection of deep technical architecture and executive
                strategy — translating business challenges into scalable, measurable CX outcomes.
              </p>
            </ScrollSection>

            {/* Stats grid */}
            <ScrollSection>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "1.25rem",
                    background: "var(--bg-base)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "12px",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--electric-cyan) 40%, transparent)";
                    (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--electric-cyan) 8%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--electric-cyan) 12%, transparent)";
                    (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--electric-cyan) 4%, transparent)";
                  }}
                >
                  <div style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--electric-cyan)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}>
                    {s.number}
                  </div>
                  <div style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            </ScrollSection>
          </div>

          {/* Right: Core Philosophy */}
          <ScrollSection>
            <div style={{
              background: "color-mix(in srgb, var(--bg-surface) 60%, transparent)",
              border: "1px solid color-mix(in srgb, var(--electric-cyan) 20%, transparent)",
              borderRadius: "24px",
              padding: "3rem",
              backdropFilter: "blur(16px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}>
              <h3 style={{
                color: "var(--text-primary)",
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "2rem",
                letterSpacing: "-0.01em"
              }}>
                Operating Principles
              </h3>
              <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.6,
              }}>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--electric-cyan)", fontSize: "1.2rem", lineHeight: 1 }}>✦</span>
                  <div>
                    <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.25rem" }}>AI as an Amplifier</strong>
                    Deep integration of Conversational AI designed to empower human agents, reducing burnout and scaling support instantly.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--brand-gold)", fontSize: "1.2rem", lineHeight: 1 }}>✦</span>
                  <div>
                    <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.25rem" }}>Scalable Horizons</strong>
                    Architecting high-availability infrastructure (Avaya, Genesys, NICE) that anticipates enterprise volume rather than reacting to it.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent-3)", fontSize: "1.2rem", lineHeight: 1 }}>✦</span>
                  <div>
                    <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.25rem" }}>Data-Driven Empathy</strong>
                    Leveraging real-time analytics and predictive routing metrics to ensure perfect customer journeys from touchpoint zero.
                  </div>
                </li>
              </ul>
            </div>
          </ScrollSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
