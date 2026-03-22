"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HeroGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.05; // Very slow, elegant spin
      globeRef.current.rotation.x = 0.1; 
    }
  });

  return (
    <group>
      {/* Outer atmosphere / glow */}
      <mesh ref={atmosphereRef} scale={1.12}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Core Globe Sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          color="#0B1121"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Wireframe Latitudes/Longitudes */}
      <mesh>
        <sphereGeometry args={[1.01, 24, 24]} />
        <meshBasicMaterial
          color="#94A3B8"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <ambientLight intensity={0.5} />
      {/* Front key light (Gold accent) */}
      <directionalLight position={[5, 3, 5]} intensity={1.5} color="#D4AF37" />
      {/* Back rim light (Blue core) */}
      <directionalLight position={[-5, 5, -5]} intensity={2} color="#3B82F6" />
    </group>
  );
}
