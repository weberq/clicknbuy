'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
}

export default function Scene({ children, className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#64ffda" />
          
          {children}
          
          <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.5} far={10} color="#0a192f" />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
