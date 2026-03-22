"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function TorusRings() {
  const outerRef = useRef<THREE.Mesh>(null);
  const midRef   = useRef<THREE.Mesh>(null);
  const innerRef  = useRef<THREE.Mesh>(null);
  const groupRef  = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (outerRef.current)  outerRef.current.rotation.z  = t * 0.3;
    if (midRef.current)    midRef.current.rotation.x    = t * 0.4;
    if (innerRef.current)  innerRef.current.rotation.y  = t * 0.6;
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, mouse.x * 0.4, 0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x, -mouse.y * 0.2, 0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.2, 0]}>
      {/* Outer ring - electric cyan */}
      <mesh ref={outerRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.8, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={2.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Middle ring - neon gold */}
      <mesh ref={midRef} rotation={[Math.PI / 2, Math.PI / 6, 0]}>
        <torusGeometry args={[1.35, 0.014, 16, 100]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Inner ring - purple */}
      <mesh ref={innerRef} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[0.9, 0.012, 16, 80]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Central glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00d4ff"
          emissiveIntensity={3}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Ambient light for the scene */}
      <ambientLight intensity={0.2} />
      <pointLight color="#00d4ff" intensity={3} distance={5} />
      <pointLight color="#ffd700" intensity={1.5} position={[2, 1, 0]} distance={4} />
      <pointLight color="#a855f7" intensity={1.5} position={[-2, -1, 0]} distance={4} />
    </group>
  );
}
