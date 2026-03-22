"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ScrollSection from "./ui/ScrollSection";
import { Linkedin } from "lucide-react";
import FloatingDashboards from "./FloatingDashboards";



export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
    >
      <FloatingDashboards />

      {/* Hero Content Overlapping the Global Background */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* LEFT COPY */}
        <ScrollSection>
          <div style={{ position: "relative", zIndex: 10 }}>
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
          </p>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Vaibhav Khopkar
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              lineHeight: 1.4,
            }}
          >
            Architecting <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Customer Experience</span> & Cloud Transformations across 12+ Countries.
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            With over 20 years shaping enterprise strategy, I guide Fortune 500s through their most complex transitions—from legacy systems to cloud-native contact centers.
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
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
                e.currentTarget.style.transform = "translateY(-1px)";
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
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text-muted)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              View Case Studies
            </a>
            
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
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
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "color-mix(in srgb, var(--brand-gold) 10%, transparent)";
                e.currentTarget.style.color = "var(--brand-gold)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
          </div>
        </ScrollSection>

        {/* RIGHT PHOTO */}
        <ScrollSection className="animate-float">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "340px",
              aspectRatio: "3/4",
              margin: "0 auto",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: "24px",
              border: "1px solid color-mix(in srgb, var(--brand-gold) 20%, transparent)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              background: "transparent"
            }}
          >
            {/* Cinematic Backlight Glow (behind the person) */}
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                background: "radial-gradient(circle, color-mix(in srgb, var(--brand-gold) 15%, transparent) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(20px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            
            <img 
              src="/profile.png" 
              alt="Vaibhav Khopkar" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                zIndex: 1,
                position: "relative",
              }}
            />
          </div>
        </ScrollSection>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          #hero > div:last-child > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
          #hero > div:last-child > div:first-child p:first-child {
            justify-content: center;
          }
          #hero > div:last-child > div:first-child div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
