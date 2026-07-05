import { useEffect, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import type * as THREE from 'three';
import { useAppStore } from '@/state/useAppStore';

export default function CameraRig() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const setCamera = useAppStore((s) => s.setCamera);

  // Sync camera reference to Zustand store
  useEffect(() => {
    if (cameraRef.current) {
      setCamera(cameraRef.current);
    }
    return () => {
      setCamera(null);
    };
  }, [setCamera]);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      near={0.1}
      far={100}
    />
  );
}
