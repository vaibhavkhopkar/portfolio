"use client";

import ScrollSection from "./ui/ScrollSection";

const timeline = [
  {
    period: "2018 — Present",
    role: "Senior Contact Center Consultant",
    company: "Independent Consulting",
    location: "APAC & Global",
    desc: "Strategic advisory for Fortune 500 enterprises on CX transformation, cloud migration, and contact center modernization. Key clients across banking, telecom, and healthcare.",
    tags: ["Genesys Cloud", "NICE CXone", "Amazon Connect", "CX Strategy"],
    color: "var(--accent-1)",
  },
  {
    period: "2013 — 2018",
    role: "Principal Solutions Architect",
    company: "Avaya Partner Network",
    location: "India & South-East Asia",
    desc: "Led pre-sales and implementation of Avaya Aura & Experience Portal solutions. Managed cross-functional teams of 20+ delivering complex multi-site deployments.",
    tags: ["Avaya Aura", "Experience Portal", "SIP Trunking", "Pre-Sales"],
    color: "var(--accent-2)",
  },
  {
    period: "2008 — 2013",
    role: "Unified Communications Manager",
    company: "BPO Industry Leader",
    location: "Pune, India",
    desc: "Orchestrated UC infrastructure for a 3,500-seat contact center. Reduced operational costs by 28% through IVR optimization and workforce management automation.",
    tags: ["Cisco UCM", "Verint", "WFM", "IVR Design"],
    color: "var(--accent-3)",
  },
  {
    period: "2003 — 2008",
    role: "Telecom Systems Engineer",
    company: "Telecom Service Provider",
    location: "Mumbai, India",
    desc: "Built foundational expertise in PSTN, VoIP, and early IP-PBX technologies. Enabled large-scale enterprise migrations from traditional telephony to IP infrastructure.",
    tags: ["VoIP", "PSTN", "IP-PBX", "TDM"],
    color: "var(--accent-1)",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "130px 2rem",
        background: "linear-gradient(180deg, color-mix(in srgb, var(--bg-surface) 30%, transparent) 0%, color-mix(in srgb, var(--bg-base) 30%, transparent) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "1px",
        background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.3), transparent)",
        marginLeft: "calc(50% - 1px)",
        pointerEvents: "none",
      }} />

      <div className="glass-panel" style={{ maxWidth: "900px", margin: "0 auto", position: "relative", padding: "4rem" }}>
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
              — Career Timeline
            </span>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}>
              20 Years of <span className="gradient-text">Mastery</span>
            </h2>
          </div>
        </ScrollSection>

        {/* Timeline items */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, color-mix(in srgb, var(--accent-1) 40%, transparent), color-mix(in srgb, var(--accent-3) 20%, transparent))",
            transform: "translateX(-50%)",
          }} />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollSection key={item.role}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: isLeft ? "flex-end" : "flex-start",
                    paddingBottom: "4rem",
                    position: "relative",
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: "absolute",
                    left: "50%",
                    top: "1.5rem",
                    transform: "translate(-50%, -50%)",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: item.color,
                    boxShadow: `0 0 16px ${item.color}88`,
                    zIndex: 2,
                    border: "2px solid #030712",
                  }} />

                  <div
                    style={{
                      width: "44%",
                      marginRight: isLeft ? "calc(6% + 1px)" : 0,
                      marginLeft: isLeft ? 0 : "calc(6% + 1px)",
                      padding: "1.5rem 1.75rem",
                      background: "color-mix(in srgb, var(--bg-surface) 80%, transparent)",
                      border: `1px solid color-mix(in srgb, ${item.color} 15%, transparent)`,
                      borderRadius: "16px",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `color-mix(in srgb, ${item.color} 30%, transparent)`;
                      el.style.boxShadow = `0 12px 30px color-mix(in srgb, ${item.color} 10%, transparent)`;
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `color-mix(in srgb, ${item.color} 15%, transparent)`;
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{
                      fontSize: "0.72rem",
                      color: item.color,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "'Space Mono', monospace",
                      marginBottom: "0.5rem",
                    }}>
                      {item.period}
                    </div>
                    <h3 style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.25rem",
                    }}>
                      {item.role}
                    </h3>
                    <div style={{
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.75rem",
                    }}>
                      {item.company} · {item.location}
                    </div>
                    <p style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                      fontWeight: 300,
                    }}>
                      {item.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            padding: "3px 10px",
                            borderRadius: "999px",
                            background: `${item.color}12`,
                            border: `1px solid ${item.color}30`,
                            color: item.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollSection>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience [style*="width: 44%"] {
            width: 90% !important;
            margin-left: 5% !important;
            margin-right: 5% !important;
          }
        }
      `}</style>
    </section>
  );
}
