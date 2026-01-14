'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

const CircuitBoard = (props: any) => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state: any) => {
    if (!group.current) return;
    
    // Smooth rotation based on mouse position
    const t = state.clock.getElapsedTime();
    const mouseX = state.mouse.x * 0.5;
    const mouseY = state.mouse.y * 0.5;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouseX + t * 0.1, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouseY, 0.05);
  });

  return (
    <group ref={group} {...props}>
      {/* Main Board */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#112240" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Processor / Central Chip */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color="#0a192f" />
      </mesh>
      
      {/* Glowing Core */}
      <mesh position={[0, 0.26, 0]}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial color="#64ffda" toneMapped={false} />
      </mesh>

      {/* Decorative Circuits/Lines (simplified) */}
      <mesh position={[1, 0.15, 0.5]}>
        <boxGeometry args={[0.2, 0.1, 0.5]} />
        <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.5} />
      </mesh>
      
      <mesh position={[-1, 0.15, -0.5]}>
        <boxGeometry args={[0.2, 0.1, 0.5]} />
        <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.5} />
      </mesh>

      {/* Floating Elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
         <mesh position={[1.5, 1, 1]}>
            <octahedronGeometry args={[0.2]} />
            <meshStandardMaterial color="#64ffda" wireframe />
         </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
         <mesh position={[-1.5, -0.5, 1]}>
            <octahedronGeometry args={[0.15]} />
            <meshStandardMaterial color="#64ffda" wireframe />
         </mesh>
      </Float>
    </group>
  );
};

export default CircuitBoard;
