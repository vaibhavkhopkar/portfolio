"use client";

import ScrollSection from "./ui/ScrollSection";
import { Linkedin, Cloud, BarChart3, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Centralized Backlight Glow (Symmetric) */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, color-mix(in srgb, var(--brand-gold) 10%, transparent) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ScrollSection>
          <p
            style={{
              color: "var(--brand-gold)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "1px",
                background: "var(--brand-gold)",
              }}
            />
            Senior Contact Center Consultant
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "1px",
                background: "var(--brand-gold)",
              }}
            />
          </p>
        </ScrollSection>

        <ScrollSection>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Vaibhav Khopkar
          </h1>
        </ScrollSection>

        <ScrollSection>
          <h2
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            Architecting <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Customer Experience</span> & Cloud Transformations across 12+ Countries.
          </h2>
        </ScrollSection>

        {/* ── SYMMETRIC PORTRAIT CONTAINER ── */}
        <ScrollSection className="animate-float">
          <div
            className="glass-panel"
            style={{
              width: "280px",
              height: "280px",
              margin: "2rem auto 3rem auto",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              position: "relative",
              border: "4px solid color-mix(in srgb, var(--brand-gold) 30%, transparent)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              background: "transparent",
            }}
          >
            <img 
              src="/profile.png" 
              alt="Vaibhav Khopkar" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>
        </ScrollSection>

        <ScrollSection>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
            }}
          >
            With over 20 years shaping enterprise strategy, I guide Fortune 500s through their most complex transitions—from legacy systems to cloud-native contact centers.
          </p>
        </ScrollSection>

        <ScrollSection>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                padding: "14px 32px",
                background: "var(--brand-gold)",
                color: "#0B1121",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "opacity 0.2s, transform 0.2s",
                boxShadow: "0 4px 14px rgba(212, 175, 55, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get in Touch
            </a>
            <a
              href="#case-studies"
              style={{
                padding: "14px 32px",
                background: "transparent",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "border-color 0.2s, background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text-muted)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View Case Studies
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "color-mix(in srgb, var(--brand-gold) 10%, transparent)",
                border: "1px solid color-mix(in srgb, var(--brand-gold) 30%, transparent)",
                color: "var(--brand-gold)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-gold)";
                e.currentTarget.style.color = "#0B1121";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "color-mix(in srgb, var(--brand-gold) 10%, transparent)";
                e.currentTarget.style.color = "var(--brand-gold)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </ScrollSection>

        {/* ── SYMMETRIC METRICS GRID ── */}
        <ScrollSection>
          <div
            style={{
              width: "100%",
              marginTop: "5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
              gap: "2rem",
            }}
          >
            {/* Metric 1 */}
            <div className="glass-panel" style={{ padding: "2rem", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
               <div style={{ marginBottom: "1rem", padding: "14px", borderRadius: "16px", background: "color-mix(in srgb, var(--brand-accent) 15%, transparent)", color: "var(--brand-accent)" }}>
                 <Cloud size={28} />
               </div>
               <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>45+</h3>
               <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>Cloud Migrations</p>
            </div>

            {/* Metric 2 */}
            <div className="glass-panel" style={{ padding: "2rem", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
               <div style={{ marginBottom: "1rem", padding: "14px", borderRadius: "16px", background: "color-mix(in srgb, #10b981 15%, transparent)", color: "#10b981" }}>
                 <BarChart3 size={28} />
               </div>
               <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>+34.2%</h3>
               <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>CSAT Growth</p>
            </div>

            {/* Metric 3 */}
            <div className="glass-panel" style={{ padding: "2rem", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
               <div style={{ marginBottom: "1rem", padding: "14px", borderRadius: "16px", background: "color-mix(in srgb, var(--brand-gold) 15%, transparent)", color: "var(--brand-gold)" }}>
                 <ShieldCheck size={28} />
               </div>
               <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>100%</h3>
               <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>Omnichannel Sync</p>
            </div>
          </div>
        </ScrollSection>

      </div>
    </section>
  );
}
