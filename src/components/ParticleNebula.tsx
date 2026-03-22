"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 5000;

export default function ParticleNebula() {
  const meshRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);

    const cyan = new THREE.Color("#00d4ff");
    const gold = new THREE.Color("#ffd700");
    const purple = new THREE.Color("#7c3aed");
    const white = new THREE.Color("#c8e0ff");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const radius = 2 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3]     = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.4;
      pos[i3 + 2] = radius * Math.cos(phi);

      const t = Math.random();
      let c: THREE.Color;
      if (t < 0.5)      c = cyan.clone().lerp(white, Math.random() * 0.5);
      else if (t < 0.8) c = gold.clone().lerp(white, Math.random() * 0.4);
      else               c = purple.clone().lerp(white, Math.random() * 0.3);

      col[i3]     = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.03 + mouse.x * 0.05;
    meshRef.current.rotation.x = Math.sin(t * 0.02) * 0.1 + mouse.y * 0.03;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
