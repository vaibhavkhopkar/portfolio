"use client";

import ScrollSection from "./ui/ScrollSection";

const skills = [
  {
    icon: "🌐",
    title: "Unified Communications",
    desc: "Avaya, Cisco, Microsoft Teams — architecting hybrid voice & video systems at global scale.",
    color: "var(--accent-1)",
  },
  {
    icon: "☁️",
    title: "Cloud Migration",
    desc: "Genesys Cloud, Amazon Connect, NICE CXone — phased migration with zero service disruption.",
    color: "var(--accent-2)",
  },
  {
    icon: "📊",
    title: "CX Strategy & Design",
    desc: "Journey mapping, NPS optimization, and metric-driven transformation for 50+ enterprises.",
    color: "var(--accent-3)",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "IVR design, chatbot architecture, and RPA integration to eliminate operational friction.",
    color: "var(--accent-1)",
  },
  {
    icon: "🔧",
    title: "Contact Center Ops",
    desc: "WFM, QA frameworks, and Real-Time Analytics dashboards for 5,000+ seat deployments.",
    color: "var(--accent-2)",
  },
  {
    icon: "🛡️",
    title: "Compliance & Security",
    desc: "PCI-DSS, GDPR, ISO 27001 — engineering compliant contact architectures for regulated sectors.",
    color: "var(--accent-3)",
  },
  {
    icon: "📡",
    title: "Omnichannel Integration",
    desc: "Voice, email, chat, social — unified routing engines across all customer touchpoints.",
    color: "var(--accent-1)",
  },
  {
    icon: "🎯",
    title: "Executive Advisory",
    desc: "Board-level CX roadmaps, vendor selection, and ROI modeling for digital transformation.",
    color: "var(--accent-2)",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      style={{
        padding: "130px 2rem",
        background: "color-mix(in srgb, var(--bg-base) 30%, transparent)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "600px",
        background: "radial-gradient(ellipse, color-mix(in srgb, var(--accent-1) 5%, transparent) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="glass-panel" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", padding: "clamp(1.5rem, 5vw, 4rem)" }}>
        {/* Header */}
        <ScrollSection>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span style={{
              color: "var(--electric-cyan)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}>
              — Core Expertise
            </span>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
              Capabilities at a <span className="gradient-text">Glance</span>
            </h2>
            <p style={{
              marginTop: "1rem",
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              fontWeight: 300,
              maxWidth: "540px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}>
              A full-stack arsenal for contact center transformation — from strategy to execution.
            </p>
          </div>
        </ScrollSection>

        {/* Skill cards grid */}
        <ScrollSection>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}>
            {skills.map((skill) => (
              <div
                key={skill.title}
                style={{
                  padding: "1.75rem",
                  background: "color-mix(in srgb, var(--bg-surface) 60%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--text-primary) 6%, transparent)",
                  borderRadius: "16px",
                  cursor: "default",
                  transition: "all 0.35s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `color-mix(in srgb, ${skill.color} 55%, transparent)`;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 20px 40px color-mix(in srgb, ${skill.color} 15%, transparent), 0 0 0 1px color-mix(in srgb, ${skill.color} 22%, transparent)`;
                  el.style.background = "var(--bg-surface)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "color-mix(in srgb, var(--text-primary) 6%, transparent)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.background = "color-mix(in srgb, var(--bg-surface) 60%, transparent)";
                }}
              >
                {/* Corner accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background: `radial-gradient(circle at 100% 0%, color-mix(in srgb, ${skill.color} 15%, transparent) 0%, transparent 60%)`,
                  borderRadius: "0 16px 0 0",
                }} />

                <div style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: `color-mix(in srgb, ${skill.color} 14%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${skill.color} 30%, transparent)`,
                }}>
                  {skill.icon}
                </div>

                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.6rem",
                  letterSpacing: "-0.01em",
                }}>
                  {skill.title}
                </h3>

                <p style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
