"use client";

import { useEffect, useState } from "react";

export default function GlobalCanvas() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    // Only track mouse if the device supports hover (ignores mobile touch)
    if (window.matchMedia("(hover: hover)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        // The dual radial gradients follow the mouse perfectly, simulating a high-end 3D light array
        background: `
          radial-gradient(1200px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.03), transparent 60%),
          radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 212, 255, 0.05), transparent 40%)
        `,
        transition: "background 0.2s cubic-bezier(0.1, 0, 0.1, 1)",
      }}
    />
  );
}
