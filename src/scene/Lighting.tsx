import { useRef } from 'react';
import type * as THREE from 'three';
import { useAppStore } from '@/state/useAppStore';

export default function Lighting() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);
  const qualityTier = useAppStore((s) => s.qualityTier);
  const lampOn = useAppStore((s) => s.lampOn);

  // Set shadow map resolution based on quality tier
  const shadowMapSize = {
    high: 2048,
    medium: 1024,
    low: 512,
  }[qualityTier];

  return (
    <>
      {/* Cool, low-intensity ambient fill light for the dark room aesthetic */}
      <ambientLight color="#18182b" intensity={0.5} />

      {/* Primary warm key light representing window/studio fill */}
      <directionalLight
        ref={dirLightRef}
        position={[5, 8, 4]}
        color="#fff4e0" // Soft warm white
        intensity={0.8}
        castShadow
        shadow-mapSize-width={shadowMapSize}
        shadow-mapSize-height={shadowMapSize}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.0002}
      />

      {/* Cool rim light from the back-left to outline objects and pop them from the background */}
      <directionalLight
        position={[-4, 5, -4]}
        color="#cce0ff" // Ice blue rim
        intensity={1.0}
      />

      {/* Interactive warm overhead desk spotlight */}
      {lampOn && (
        <group>
          <spotLight
            position={[0, 2.8, 0]}
            color="#ffcca3" // Warm incandescent glow
            intensity={2.5}
            distance={4}
            angle={Math.PI / 4}
            penumbra={0.6}
            castShadow
            shadow-mapSize-width={shadowMapSize / 2}
            shadow-mapSize-height={shadowMapSize / 2}
            shadow-bias={-0.0005}
          />
          {/* Subtle point light at the light source for high-quality near falloff */}
          <pointLight
            position={[0, 2.75, 0]}
            color="#ffcca3"
            intensity={0.6}
            distance={1.5}
          />
        </group>
      )}
    </>
  );
}
