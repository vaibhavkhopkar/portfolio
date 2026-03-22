"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Nodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Parameters
  const particleCount = 60;
  const maxDistance = 2.8;
  
  // Calculate node positions once
  const particles = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Points inside a sphere roughly resembling a network globe
      const r = 4.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);     // x
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
      coords[i * 3 + 2] = r * Math.cos(phi);                   // z
    }
    return coords;
  }, [particleCount]);

  // Connect close nodes with lines
  const lines = useMemo(() => {
    const points = [];
    for (let i = 0; i < particleCount; i++) {
      const v1 = new THREE.Vector3(particles[i*3], particles[i*3+1], particles[i*3+2]);
      for (let j = i + 1; j < particleCount; j++) {
        const v2 = new THREE.Vector3(particles[j*3], particles[j*3+1], particles[j*3+2]);
        if (v1.distanceTo(v2) < maxDistance) {
          points.push(v1, v2);
        }
      }
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [particles, maxDistance]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001; // Slow continuous rotation
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#60a5fa" transparent opacity={0.9} />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#334155" transparent opacity={0.6} />
      </lineSegments>
    </group>
  );
}

export default function NetworkCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <fog attach="fog" args={["#0f172a", 4, 15]} />
        <ambientLight intensity={0.5} />
        <Nodes />
        {/* Adds automatic subtle panning and prevents user disruption since it's a background element */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
