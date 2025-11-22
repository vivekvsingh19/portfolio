
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Text, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Aliases to bypass TypeScript errors
const AmbientLight = 'ambientLight' as any;
const DirectionalLight = 'directionalLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;
const Group = 'group' as any;

const FloatingCode = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5; // Rough check for mobile portrait width at z=0

  // Adjust positions and scales based on screen size
  const scaleFactor = isMobile ? 0.6 : 1;
  const spreadFactor = isMobile ? 0.5 : 1;

  return (
    <Group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={[-3 * spreadFactor, 2 * spreadFactor, 0]}>
        <Text fontSize={0.4 * scaleFactor} color="#c084fc" font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0Pn5.ttf">
          {"<Dev />"}
        </Text>
      </Float>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.4} position={[3 * spreadFactor, -1.5 * spreadFactor, 0]}>
        <Text fontSize={0.35 * scaleFactor} color="#22d3ee" font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0Pn5.ttf">
          {"npm run build"}
        </Text>
      </Float>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6} position={[-2.5 * spreadFactor, -2.5 * spreadFactor, 1]}>
        <Text fontSize={0.3 * scaleFactor} color="#f472b6" font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0Pn5.ttf">
          {"git commit -m"}
        </Text>
      </Float>
       <Float speed={1.2} rotationIntensity={0.7} floatIntensity={0.5} position={[3.5 * spreadFactor, 2 * spreadFactor, -1]}>
        <Text fontSize={0.4 * scaleFactor} color="#4ade80" font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0Pn5.ttf">
          {"while(alive) {"}
        </Text>
      </Float>
       <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.5} position={[0, 3.5 * spreadFactor, -2]}>
        <Text fontSize={0.25 * scaleFactor} color="#fbbf24" font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0Pn5.ttf">
          {"await next()"}
        </Text>
      </Float>
    </Group>
  )
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
            <AmbientLight intensity={0.5} />
            <DirectionalLight position={[10, 10, 5]} intensity={1} />
            <PointLight position={[-10, -10, -5]} color="#22d3ee" intensity={2} />
            <SpotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={5} color="#a855f7" />
            
            {/* Responsive Floating Code */}
            <FloatingCode />
            
            {/* Added Sparkles for more depth */}
            <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#22d3ee" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
      {/* Gradient Overlay to blend with page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />
    </div>
  );
};
