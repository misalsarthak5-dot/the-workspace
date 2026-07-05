import type { CameraState, SectionId } from '@/types/scene';

// ─────────────────────────────────────────────────────────────
// Camera States Registry
//
// All camera positions and targets are defined here.
// Tuning cinematics = editing this file only.
// No component changes needed.
//
// Coordinate system (Three.js): Y-up, right-hand.
// Room reference: ~4m W × 3m H × 4m D, desk at origin.
//
// These are placeholder values for M2 blockout.
// Final positions will be tuned with Leva in the 3D scene.
// ─────────────────────────────────────────────────────────────

export const CAMERA_STATES: Record<SectionId, CameraState> = {
  home: {
    id: 'home',
    position: [0, 1.8, 4.5],
    target: [0, 0.8, 0],
    fov: 60,
    transitionDurationMs: 1400,
    easing: 'power2.inOut',
  },
  about: {
    id: 'about',
    position: [0.5, 1.6, 3.5],
    target: [0, 0.9, 0],
    fov: 58,
    transitionDurationMs: 1400,
    easing: 'power2.inOut',
  },
  skills: {
    id: 'skills',
    // Camera pans left to face the holographic tech display
    position: [-1.8, 1.5, 2.2],
    target: [-1.5, 1.2, 0],
    fov: 55,
    transitionDurationMs: 1400,
    easing: 'power2.inOut',
  },
  projects: {
    id: 'projects',
    // Close push toward the secondary monitor
    position: [-0.6, 1.4, 1.8],
    target: [-0.8, 1.2, 0],
    fov: 50,
    transitionDurationMs: 1200,
    easing: 'power2.inOut',
  },
  experience: {
    id: 'experience',
    // Rotate to certificate wall, upper section
    position: [2.5, 2.0, 1.5],
    target: [2.0, 1.8, -1.0],
    fov: 55,
    transitionDurationMs: 1600,
    easing: 'power2.inOut',
  },
  education: {
    id: 'education',
    // Certificate wall, lower section
    position: [2.5, 1.2, 1.5],
    target: [2.0, 1.0, -1.0],
    fov: 55,
    transitionDurationMs: 1400,
    easing: 'power2.inOut',
  },
  achievements: {
    id: 'achievements',
    // Rotate to shelf area (upper left)
    position: [-2.2, 2.2, 1.8],
    target: [-1.8, 1.8, -0.5],
    fov: 58,
    transitionDurationMs: 1600,
    easing: 'power2.inOut',
  },
  certifications: {
    id: 'certifications',
    // Certificate wall, focused zoom
    position: [2.2, 1.6, 0.8],
    target: [2.0, 1.5, -1.0],
    fov: 45,
    transitionDurationMs: 1400,
    easing: 'power2.inOut',
  },
  resume: {
    id: 'resume',
    // Top-down angled view of desk/notebook
    position: [0.2, 2.8, 1.2],
    target: [0.2, 0.8, 0],
    fov: 52,
    transitionDurationMs: 1400,
    easing: 'power2.inOut',
  },
  contact: {
    id: 'contact',
    // Slight pull-back, desk-level, warm feel
    position: [0, 1.2, 5.2],
    target: [0, 0.8, 0],
    fov: 62,
    transitionDurationMs: 1200,
    easing: 'power2.inOut',
  },
};
