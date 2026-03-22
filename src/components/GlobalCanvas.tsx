"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Stars } from "@react-three/drei";

const ThreeCanvas = dynamic(
  () => import("@react-three/fiber").then((m) => ({ default: m.Canvas })),
  { ssr: false }
);
const RealisticEarth = dynamic(() => import("./RealisticEarth"), { ssr: false });

export default function GlobalCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ThreeCanvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <RealisticEarth />
        </Suspense>
      </ThreeCanvas>
    </div>
  );
}
