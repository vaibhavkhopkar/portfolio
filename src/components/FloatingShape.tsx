"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingShape() {
  const meshRef  = useRef<THREE.Mesh>(null);
  const wireRef  = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.18;
      meshRef.current.rotation.y = t * 0.28;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.18;
      wireRef.current.rotation.y = t * 0.28;
    }
    // Gentle mouse follow
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, mouse.x * 0.3, 0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x, -mouse.y * 0.18, 0.04
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Solid icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#030d24"
          roughness={0.1}
          metalness={0.8}
          emissive="#001a33"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Wireframe overlay — electric cyan */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.22, 0]} />
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Outer glow shell */}
      <mesh>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.35} />
      <pointLight color="#00d4ff" intensity={4} distance={6} position={[2, 2, 2]} />
      <pointLight color="#ffd700" intensity={2} distance={5} position={[-2, -1, 1]} />
      <pointLight color="#7c3aed" intensity={1.5} distance={4} position={[0, -2, -1]} />
    </group>
  );
}
