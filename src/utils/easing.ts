// ─────────────────────────────────────────────────────────────
// Easing utilities
//
// All easing functions and GSAP easing strings used across the
// project are defined here. Import from this file — never
// hardcode easing strings in components or hooks.
//
// PRD requirement: "all easing curves defined once in
// utils/easing.ts and reused everywhere (UI and 3D)"
// ─────────────────────────────────────────────────────────────

// ── GSAP Easing Strings ───────────────────────────────────────
// Used in CameraRig and any other GSAP-driven animations.

/** Default camera transition easing — smooth in/out feel. */
export const EASE_CAMERA = 'power2.inOut';

/** Faster, more responsive camera easing for short transitions. */
export const EASE_CAMERA_FAST = 'power1.inOut';

/** Ease out for object click animations (spring-like feel). */
export const EASE_OBJECT_CLICK = 'back.out(1.7)';

/** Ease for lamp and material intensity tweens. */
export const EASE_MATERIAL = 'power1.out';

// ── Animation Durations (ms) ──────────────────────────────────

export const DURATION = {
  /** Camera transition range */
  cameraMin: 800,
  cameraDefault: 1400,
  cameraMax: 1600,
  /** UI panel transition */
  panel: 300,
  /** Stagger between list children (project cards, skill badges) */
  stagger: 40,
  /** Object click animations */
  objectClick: 600,
  /** Material tweens (lamp, emissive glow) */
  material: 300,
  /** Hover glow lerp */
  hover: 150,
} as const;

// ── CSS Easing (Framer Motion / CSS transitions) ──────────────
// Framer Motion uses cubic-bezier arrays [x1, y1, x2, y2].

/** Matches GSAP power2.inOut — used for Framer Motion panel transitions. */
export const FM_EASE_PANEL = [0.43, 0.13, 0.23, 0.96] as const;

/** Snappy ease-out for micro-interactions. */
export const FM_EASE_SNAP = [0.0, 0.0, 0.2, 1.0] as const;
