"use client";

import dynamic from "next/dynamic";

const NetworkCanvas = dynamic(() => import("./NetworkCanvas"), { ssr: false });

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
      }}
    >
        <NetworkCanvas />
    </div>
  );
}
