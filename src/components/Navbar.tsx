"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTheme } from "next-themes";

// ── Letter scramble hook ──────────────────────────────────────────
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function useScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const iters = useRef(0);

  const scramble = useCallback(() => {
    iters.current = 0;
    const len = text.length;

    const tick = () => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (i < iters.current) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iters.current += 0.5;
      if (iters.current < len) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(tick);
  }, [text]);

  const reset = useCallback(() => {
    cancelAnimationFrame(frame.current);
    setDisplay(text);
  }, [text]);

  return { display, scramble, reset };
}

// ── Nav link with scramble ────────────────────────────────────────
function ScrambleLink({ href, label }: { href: string; label: string }) {
  const { display, scramble, reset } = useScramble(label.toUpperCase());

  return (
    <a
      href={href}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      style={{
        color: "var(--text-secondary)",
        textDecoration: "none",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        fontFamily: "'Space Mono', monospace",
        transition: "color 0.2s",
        display: "inline-block",
        minWidth: `${label.length}ch`,
      }}
      onFocus={scramble}
      onBlur={reset}
    >
      <span
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--electric-cyan)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        style={{ color: "inherit", transition: "color 0.2s" }}
      >
        {display}
      </span>
    </a>
  );
}

const NAV_LINKS = [
  { href: "#about",        label: "About" },
  { href: "#expertise",    label: "Expertise" },
  { href: "#experience",   label: "Experience" },
  { href: "#case-studies", label: "Cases" },
  { href: "#contact",      label: "Contact" },
];

// ── Main Navbar ───────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  
  const { theme, setTheme } = useTheme();
  // We need to know if the client has mounted to avoid hydration mismatch
  const [mounted, setMounted]   = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = mounted && theme === "dark";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--bg-nav)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img 
            src="/logo.png" 
            alt="VK Executive Logo" 
            style={{ height: "44px", width: "auto", objectFit: "contain", borderRadius: "6px" }} 
          />
        </a>

        {/* Desktop links */}
        <ul
          className="desk-nav"
          style={{
            display: "flex",
            gap: "2.25rem",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <ScrambleLink href={l.href} label={l.label} />
            </li>
          ))}

          {/* Resume */}
          <li>
            <a
              href="/resume.pdf"
              download
              style={{
                padding: "7px 18px",
                borderRadius: "999px",
                border: "1px solid var(--electric-cyan)",
                color: "var(--electric-cyan)",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.75rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.08em",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--electric-cyan)";
                e.currentTarget.style.color      = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color      = "var(--electric-cyan)";
              }}
            >
              RESUME ↓
            </a>
          </li>

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--border-subtle)",
                background: "var(--card-bg)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                transition: "all 0.25s",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--border-glow)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border-subtle)")
              }
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        {/* Mobile right: toggle + hamburger */}
        <div
          className="mob-right"
          style={{ display: "none", alignItems: "center", gap: "0.75rem" }}
        >
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
              lineHeight: 1,
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              fontSize: "1.4rem",
              lineHeight: 1,
            }}
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg-nav)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.8rem 0",
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "'Space Mono', monospace",
                letterSpacing: "0.08em",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desk-nav  { display: none !important; }
          .mob-right { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
