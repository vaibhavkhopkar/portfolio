"use client";

import { useEffect, useState } from "react";
import { BarChart3, Cloud, ShieldCheck } from "lucide-react";

export default function FloatingDashboards() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Metric 1 - Cloud Migrations */}
      <div 
        className="glass-panel animate-float"
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderRadius: "16px",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
          animationDelay: "0s",
          animationDuration: "8s",
          transform: "scale(0.9)",
        }}
      >
        <div style={{ padding: "10px", borderRadius: "12px", background: "color-mix(in srgb, var(--brand-accent) 15%, transparent)", color: "var(--brand-accent)" }}>
          <Cloud size={20} />
        </div>
        <div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Cloud Migrations</p>
          <p style={{ fontSize: "1.25rem", color: "var(--text-primary)", fontWeight: 700, margin: 0 }}>45+ Enterprise</p>
        </div>
      </div>

      {/* Metric 2 - CSAT Growth */}
      <div 
        className="glass-panel animate-float"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderRadius: "16px",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
          animationDelay: "2s",
          animationDuration: "7s",
          transform: "scale(0.85)",
        }}
      >
        <div style={{ padding: "10px", borderRadius: "12px", background: "color-mix(in srgb, #10b981 15%, transparent)", color: "#10b981" }}>
          <BarChart3 size={20} />
        </div>
        <div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Avg CSAT Growth</p>
          <p style={{ fontSize: "1.25rem", color: "var(--text-primary)", fontWeight: 700, margin: 0 }}>+34.2% YOY</p>
        </div>
      </div>

      {/* Metric 3 - Infrastructure Security */}
      <div 
        className="glass-panel animate-float"
        style={{
          position: "absolute",
          top: "60%",
          right: "5%",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderRadius: "16px",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
          animationDelay: "4s",
          animationDuration: "9s",
          transform: "scale(0.8)",
        }}
      >
        <div style={{ padding: "10px", borderRadius: "12px", background: "color-mix(in srgb, var(--brand-gold) 15%, transparent)", color: "var(--brand-gold)" }}>
          <ShieldCheck size={20} />
        </div>
        <div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Unified Routing</p>
          <p style={{ fontSize: "1.25rem", color: "var(--text-primary)", fontWeight: 700, margin: 0 }}>Omnichannel Sync</p>
        </div>
      </div>

    </div>
  );
}
