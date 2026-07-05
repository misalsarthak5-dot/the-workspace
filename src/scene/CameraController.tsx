import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useAppStore } from '@/state/useAppStore';
import { CAMERA_STATES } from '@/config/cameraStates';

export default function CameraController() {
  const camera = useAppStore((s) => s.camera);
  const activeSection = useAppStore((s) => s.activeSection);
  const setTransitionStatus = useAppStore((s) => s.setTransitionStatus);
  const setTransitioning = useAppStore((s) => s.setTransitioning);

  // Track the current target vector (look-at point)
  const currentTargetRef = useRef(new THREE.Vector3(0, 0.8, 0));
  const isInitialRef = useRef(true);
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!camera) return;
    const perspectiveCamera = camera;

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
        onUpdate: () => {
          // lookAt must be called every frame while position or target is animating
          perspectiveCamera.lookAt(currentTargetRef.current);
        },
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

      // Animate target vector directly
      tl.to(currentTargetRef.current, {
        x: state.target[0],
        y: state.target[1],
        z: state.target[2],
        duration,
        ease,
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
