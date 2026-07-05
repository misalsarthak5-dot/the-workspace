import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { useAppStore } from '@/state/useAppStore';
import { CAMERA_STATES } from '@/config/cameraStates';

export default function CameraController() {
  const { camera } = useThree();
  const activeSection = useAppStore((s) => s.activeSection);
  const setTransitionStatus = useAppStore((s) => s.setTransitionStatus);
  const setTransitioning = useAppStore((s) => s.setTransitioning);

  // Track the current target vector (look-at point)
  const currentTargetRef = useRef(new THREE.Vector3(0, 0.8, 0));
  const isInitialRef = useRef(true);
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!camera) return;
    const perspectiveCamera = camera as THREE.PerspectiveCamera;

    const state = CAMERA_STATES[activeSection];
    if (!state) return;

    if (isInitialRef.current) {
      // 1. Initial load: Snap immediately without animation
      perspectiveCamera.position.set(...state.position);
      currentTargetRef.current.set(...state.target);
      perspectiveCamera.lookAt(currentTargetRef.current);
      perspectiveCamera.fov = state.fov;
      perspectiveCamera.updateProjectionMatrix();

      setTransitionStatus('idle');
      setTransitioning(false);
      isInitialRef.current = false;
    } else {
      // 2. Subsequent navigation: Animate with GSAP
      setTransitionStatus('transitioning');
      setTransitioning(true);

      // Kill previous transition if running
      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }

      const duration = state.transitionDurationMs / 1000;
      const ease = state.easing;

      const tl = gsap.timeline({
        onComplete: () => {
          setTransitionStatus('idle');
          setTransitioning(false);
        },
      });
      activeTimelineRef.current = tl;

      // Animate position
      tl.to(perspectiveCamera.position, {
        x: state.position[0],
        y: state.position[1],
        z: state.position[2],
        duration,
        ease,
      }, 0);

      // Animate target vector
      const targetObj = {
        x: currentTargetRef.current.x,
        y: currentTargetRef.current.y,
        z: currentTargetRef.current.z,
      };

      tl.to(targetObj, {
        x: state.target[0],
        y: state.target[1],
        z: state.target[2],
        duration,
        ease,
        onUpdate: () => {
          currentTargetRef.current.set(targetObj.x, targetObj.y, targetObj.z);
          perspectiveCamera.lookAt(currentTargetRef.current);
        },
      }, 0);

      // Animate FOV
      tl.to(perspectiveCamera, {
        fov: state.fov,
        duration,
        ease,
        onUpdate: () => {
          perspectiveCamera.updateProjectionMatrix();
        },
      }, 0);
    }
  }, [activeSection, camera, setTransitionStatus, setTransitioning]);

  // Cleanup timeline on unmount
  useEffect(() => {
    return () => {
      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }
    };
  }, []);

  return null;
}
