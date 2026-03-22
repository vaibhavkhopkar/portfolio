"use client";

import dynamic from "next/dynamic";

const ThreeCanvas = dynamic(
  () => import("@react-three/fiber").then((m) => ({ default: m.Canvas })),
  { ssr: false }
);
const FloatingShape = dynamic(() => import("./FloatingShape"), { ssr: false });

export default function GlobalCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.6,
      }}
    >
      <ThreeCanvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <group position={[-5, 2, -2]}>
          <FloatingShape />
        </group>
        
        <group position={[5, -2, -2]} scale={0.7}>
          <FloatingShape />
        </group>
      </ThreeCanvas>
    </div>
  );
}
