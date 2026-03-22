"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 18;

export default function Globe() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate node positions on sphere surface
  const nodes = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi   = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
      pts.push([
        1.55 * Math.sin(phi) * Math.cos(theta),
        1.55 * Math.sin(phi) * Math.sin(theta),
        1.55 * Math.cos(phi),
      ]);
    }
    return pts;
  }, []);

  // Build arc-lines between select nodes
  const arcLines = useMemo(() => {
    const lines: THREE.BufferGeometry[] = [];
    const pairs = [
      [0, 5], [1, 8], [2, 12], [3, 9], [4, 15],
      [6, 11], [7, 13], [10, 16], [14, 17],
    ];
    pairs.forEach(([a, b]) => {
      const start = new THREE.Vector3(...nodes[a]);
      const end   = new THREE.Vector3(...nodes[b]);
      const mid   = start.clone().add(end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(2.0); // bulge outward

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const pts = curve.getPoints(40);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      lines.push(geo);
    });
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe globe */}
      <mesh>
        <sphereGeometry args={[1.5, 36, 36]} />
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.12}
          emissive="#00d4ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Solid core */}
      <mesh>
        <sphereGeometry args={[1.48, 36, 36]} />
        <meshStandardMaterial
          color="#060e1f"
          transparent
          opacity={0.95}
          roughness={1}
        />
      </mesh>

      {/* Outer glow shell */}
      <mesh>
        <sphereGeometry args={[1.55, 32, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Arc lines */}
      {arcLines.map((geo, i) => (
        <line key={i}>
          <primitive object={geo} attach="geometry" />
          <lineBasicMaterial
            color={i % 2 === 0 ? "#00d4ff" : "#ffd700"}
            transparent
            opacity={0.55}
          />
        </line>
      ))}

      {/* Node spheres */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#ffd700" : "#00d4ff"}
            emissive={i % 3 === 0 ? "#ffd700" : "#00d4ff"}
            emissiveIntensity={3}
          />
        </mesh>
      ))}

      <ambientLight intensity={0.3} />
      <pointLight color="#00d4ff" intensity={2} distance={6} />
      <pointLight color="#ffd700" intensity={1} position={[3, 2, 1]} distance={5} />
    </group>
  );
}
