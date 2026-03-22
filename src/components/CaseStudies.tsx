"use client";

import { useState } from "react";
import ScrollSection from "./ui/ScrollSection";

const cases = [
  {
    label: "Banking",
    tag: "Cloud Migration",
    title: "Transforming a National Bank's Contact Center",
    problem: "On-premise Avaya infrastructure supporting 1,200 agents with frequent downtime and poor CSAT.",
    solution: "Architected phased migration to Genesys Cloud with AI-driven IVR, predictive routing, and real-time analytics.",
    metrics: [
      { value: "↑ 42%", label: "CSAT Improvement" },
      { value: "↓ 35%", label: "Handle Time" },
      { value: "↑ 98.9%", label: "Uptime SLA" },
    ],
    color: "var(--accent-1)",
    gradient: "linear-gradient(135deg, color-mix(in srgb, var(--accent-1) 8%, transparent) 0%, transparent 60%)",
  },
  {
    label: "Telecom",
    tag: "AI Integration",
    title: "AI-Powered Self-Service for Telco Giant",
    problem: "Manual processes handling 800K monthly calls resulting in high operational costs and 40% agent burnout.",
    solution: "Deployed NICE CXone with Conversational AI, reducing containment rate failure and automating Tier-1 support.",
    metrics: [
      { value: "68%", label: "Call Containment" },
      { value: "$4.2M", label: "Annual Savings" },
      { value: "↓ 52%", label: "Agent Escalations" },
    ],
    color: "var(--accent-2)",
    gradient: "linear-gradient(135deg, color-mix(in srgb, var(--accent-2) 8%, transparent) 0%, transparent 60%)",
  },
  {
    label: "Healthcare",
    tag: "CX Strategy",
    title: "Patient Experience Overhaul for Hospital Network",
    problem: "Fragmented communication channels creating poor patient journeys and compliance gaps.",
    solution: "Redesigned end-to-end patient contact strategy with omnichannel routing, callback, and HIPAA-compliant recording.",
    metrics: [
      { value: "↑ 38%", label: "Patient Satisfaction" },
      { value: "100%", label: "HIPAA Compliance" },
      { value: "↓ 45%", label: "Abandoned Calls" },
    ],
    color: "var(--accent-3)",
    gradient: "linear-gradient(135deg, color-mix(in srgb, var(--accent-3) 8%, transparent) 0%, transparent 60%)",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="case-studies"
      style={{
        padding: "130px 2rem",
        background: "color-mix(in srgb, var(--bg-base) 30%, transparent)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        right: "-200px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="glass-panel" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", padding: "4rem", zIndex: 10 }}>
        {/* Header */}
        <ScrollSection>
          <div style={{ marginBottom: "4rem" }}>
            <span style={{
              color: "var(--electric-cyan)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}>
              — Case Studies
            </span>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              maxWidth: "500px",
            }}>
              Results That <span className="gradient-text">Speak</span>
            </h2>
          </div>
        </ScrollSection>

        {/* Tab navigation */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {cases.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              style={{
                padding: "8px 22px",
                borderRadius: "999px",
                border: `1px solid ${active === i ? c.color : "rgba(255,255,255,0.1)"}`,
                background: active === i ? `color-mix(in srgb, ${c.color} 15%, transparent)` : "transparent",
                color: active === i ? c.color : "var(--text-secondary)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s",
                letterSpacing: "0.04em",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Case card */}
        {cases.map((c, i) => (
          <div
            key={c.title}
            style={{
              display: active === i ? "block" : "none",
              padding: "2.5rem",
              border: `1px solid color-mix(in srgb, ${c.color} 15%, transparent)`,
              borderRadius: "24px",
              backdropFilter: "blur(20px)",
              background: `linear-gradient(135deg, color-mix(in srgb, ${c.color} 15%, transparent) 0%, transparent 80%), color-mix(in srgb, var(--bg-surface) 80%, transparent)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <ScrollSection>
              {/* Accent blob */}
              <div style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: `radial-gradient(circle, color-mix(in srgb, ${c.color} 10%, transparent) 0%, transparent 60%)`,
              transform: "translate(30%, -30%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative" }}>
              {/* Tag */}
              <span style={{
                display: "inline-flex",
                padding: "4px 14px",
                borderRadius: "999px",
                background: `color-mix(in srgb, ${c.color} 15%, transparent)`,
                border: `1px solid color-mix(in srgb, ${c.color} 30%, transparent)`,
                color: c.color,
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                {c.tag}
              </span>

              <h3 style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                maxWidth: "700px",
              }}>
                {c.title}
              </h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginBottom: "2.5rem",
              }}>
                <div>
                  <div style={{
                    fontSize: "0.72rem",
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}>
                    Challenge
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300 }}>
                    {c.problem}
                  </p>
                </div>
                <div>
                  <div style={{
                    fontSize: "0.72rem",
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}>
                    Solution
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300 }}>
                    {c.solution}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      padding: "1.25rem 1.75rem",
                      background: "rgba(0,0,0,0.3)",
                      borderRadius: "14px",
                      border: `1px solid color-mix(in srgb, ${c.color} 15%, transparent)`,
                      minWidth: "140px",
                    }}
                  >
                    <div style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: c.color,
                      lineHeight: 1,
                      marginBottom: "0.4rem",
                      fontFamily: "'Space Mono', monospace",
                    }}>
                      {m.value}
                    </div>
                    <div style={{
                      fontSize: "0.75rem",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollSection>
          </div>
        ))}
      </div>
    </section>
  );
}
