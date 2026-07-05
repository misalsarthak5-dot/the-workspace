import { useRef } from 'react';
import type * as THREE from 'three';
import { useAppStore } from '@/state/useAppStore';

export default function Lighting() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);
  const qualityTier = useAppStore((s) => s.qualityTier);

  // Set shadow map resolution based on quality tier
  const shadowMapSize = {
    high: 2048,
    medium: 1024,
    low: 512,
  }[qualityTier];

  return (
    <>
      {/* Fill ambient lighting */}
      <ambientLight intensity={0.4} />

      {/* Primary key light with soft shadows */}
      <directionalLight
        ref={dirLightRef}
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={shadowMapSize}
        shadow-mapSize-height={shadowMapSize}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.0005}
      />
    </>
  );
}
