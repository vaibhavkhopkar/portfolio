"use client";

import { useState, FormEvent } from "react";
import ScrollSection from "./ui/ScrollSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    fontFamily: "'Space Grotesk', sans-serif",
    outline: "none",
    transition: "all 0.25s",
    boxSizing: "border-box" as const,
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 212, 255, 0.08)";
    e.currentTarget.style.background = "rgba(0, 212, 255, 0.04)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
  };

  return (
    <section
      id="contact"
      style={{
        padding: "130px 2rem",
        background: "linear-gradient(180deg, color-mix(in srgb, var(--bg-surface) 30%, transparent) 0%, color-mix(in srgb, var(--bg-base) 30%, transparent) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glowing background rings */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        border: "1px solid rgba(0, 212, 255, 0.06)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        border: "1px solid rgba(0, 212, 255, 0.08)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        border: "1px solid rgba(0, 212, 255, 0.1)",
        pointerEvents: "none",
      }} />

      <div className="glass-panel" style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 10, padding: "4rem" }}>
        {/* Header */}
        <ScrollSection>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{
              color: "var(--electric-cyan)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}>
              — Let&apos;s Connect
            </span>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}>
              Looking for strategic guidance on your CX transformation? I&apos;d love to explore how we can work together.
            </p>
          </div>
        </ScrollSection>

        {/* Form */}
        <ScrollSection>
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "2.5rem",
              background: "color-mix(in srgb, var(--bg-surface) 85%, transparent)",
              border: "1px solid rgba(0, 212, 255, 0.12)",
              borderRadius: "24px",
              backdropFilter: "blur(20px)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Smith"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{
                display: "block",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}>
                Company
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme Corporation"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label style={{
                display: "block",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}>
                Message *
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your contact center challenges..."
                rows={5}
                style={{
                  ...inputStyle,
                  resize: "none",
                  display: "block",
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "12px",
                border: "none",
                background: status === "sent"
                  ? "linear-gradient(135deg, #00c853, #00a847)"
                  : "linear-gradient(135deg, #00d4ff, #0090cc)",
                color: "#000",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                cursor: status === "sending" || status === "sent" ? "default" : "pointer",
                transition: "all 0.3s",
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: status === "sent"
                  ? "0 0 20px rgba(0,200,83,0.3)"
                  : "0 0 20px rgba(0,212,255,0.3)",
                opacity: status === "sending" ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (status === "idle") {
                  e.currentTarget.style.boxShadow = "0 0 35px rgba(0,212,255,0.5)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "✓ Message Sent!" : "Send Message →"}
            </button>

            {status === "error" && (
              <p style={{ textAlign: "center", color: "#ff5555", fontSize: "0.85rem", marginTop: "1rem" }}>
                Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>

          {/* Alternative contact */}
          <div style={{
            marginTop: "2rem",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}>
            {[
              { icon: "✉️", label: "vaibhav.khopkar@gmail.com", href: "mailto:vaibhav.khopkar@gmail.com" },
              { icon: "💼", label: "LinkedIn Profile", href: "https://linkedin.com/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--electric-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
