import { useEffect, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useActiveSection } from '@/state/selectors';
import { useAppStore } from '@/state/useAppStore';
import { CAMERA_STATES } from '@/config/cameraStates';

export default function CameraRig() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const activeSection = useActiveSection();
  const setCamera = useAppStore((s) => s.setCamera);
  const setTransitionStatus = useAppStore((s) => s.setTransitionStatus);

  // Sync camera reference to Zustand store
  useEffect(() => {
    if (cameraRef.current) {
      setCamera(cameraRef.current);
    }
    return () => {
      setCamera(null);
    };
  }, [setCamera]);

  // Snap to active section camera state (no animation in M2)
  useEffect(() => {
    if (!cameraRef.current) return;

    const state = CAMERA_STATES[activeSection];
    if (state) {
      cameraRef.current.position.set(...state.position);
      cameraRef.current.lookAt(new THREE.Vector3(...state.target));
      cameraRef.current.fov = state.fov;
      cameraRef.current.updateProjectionMatrix();

      // Immediately set status to idle as there are no camera transitions in M2
      setTransitionStatus('idle');
    }
  }, [activeSection, setTransitionStatus]);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      near={0.1}
      far={100}
    />
  );
}
