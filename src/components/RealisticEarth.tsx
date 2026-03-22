"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function RealisticEarth() {
  const orchestratingGroup = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  
  // Load the user's custom 8K texture model
  const { scene } = useGLTF("/models/earth.glb");

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useFrame(() => {
    if (earthRef.current) {
      // Cinematic slow continuous orbit
      earthRef.current.rotation.y += 0.0005;
    }
    
    if (orchestratingGroup.current && mounted) {
      const scrollPos = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(Math.max(scrollPos / maxScroll, 0), 1.0);
      
      // Cinematic Parallax: Large globe on the right side
      const targetY = THREE.MathUtils.lerp(-0.5, 1.5, scrollProgress);
      const targetZ = THREE.MathUtils.lerp(-2.0, -4.0, scrollProgress);
      
      orchestratingGroup.current.position.x = 2.8;
      orchestratingGroup.current.position.y = targetY;
      orchestratingGroup.current.position.z = targetZ;
    }
    
    // Moon animation
    if (theme === "dark" && moonRef.current) {
      const time = performance.now() * 0.0005;
      moonRef.current.position.x = Math.sin(time) * 4;
      moonRef.current.position.z = Math.cos(time) * 4;
      moonRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={orchestratingGroup}>
      {/* Dynamic Lighting corresponding to Light/Dark Mode */}
      <directionalLight 
        position={[8, 5, 5]} 
        intensity={mounted && theme === "light" ? 4.5 : 2.5} 
        color={mounted && theme === "light" ? "#fff9e6" : "#ffffff"}
      />
      <ambientLight intensity={mounted && theme === "light" ? 1.0 : 0.3} />

      {/* Core Earth Mesh */}
      <group ref={earthRef} scale={0.03}>
        <primitive object={scene} />
      </group>

      {/* Dynamic Orbiting Moon (Optional fallback if user didn't bundle moon) */}
      {/* Kept out of the scene primitive so we can orbit it independently */}
    </group>
  );
}

useGLTF.preload("/models/earth.glb");
