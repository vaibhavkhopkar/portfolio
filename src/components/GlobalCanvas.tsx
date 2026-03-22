"use client";

import { useEffect, useState } from "react";

export default function GlobalCanvas() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) {
      setHasHover(true);
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes drift1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15vw, 15vh) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10vw, -20vh) scale(1.2); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20vw, -10vh) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .bg-mesh-1 {
          position: absolute; width: 60vw; height: 60vh;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 60%);
          top: -10%; left: -10%; filter: blur(60px); animation: drift1 20s ease-in-out infinite; z-index: 0; pointer-events: none;
        }
        .bg-mesh-2 {
          position: absolute; width: 70vw; height: 70vh;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 60%);
          bottom: -20%; right: -10%; filter: blur(80px); animation: drift2 25s ease-in-out infinite; z-index: 0; pointer-events: none;
        }
        .bg-mesh-3 {
          position: absolute; width: 50vw; height: 50vh;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 60%);
          top: 40%; left: 30%; filter: blur(80px); animation: drift3 22s ease-in-out infinite; z-index: 0; pointer-events: none;
        }
      `}</style>

      {/* The Ambient Animated Gradient Mesh (Eliminates the "empty" dull feeling) */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div className="bg-mesh-1" />
        <div className="bg-mesh-2" />
        <div className="bg-mesh-3" />
      </div>

      {/* Highly Visible Cursor Tracking Spotlight */}
      {hasHover && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1, // Above the ambient mesh, below content
            background: `
              radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(0, 212, 255, 0.15), transparent 80%),
              radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.08), transparent 60%)
            `,
            transition: "background 0.15s cubic-bezier(0.1, 0, 0.1, 1)",
          }}
        />
      )}
    </>
  );
}
