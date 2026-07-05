// ─────────────────────────────────────────────────────────────
// src/types/scene.ts
// All 3D scene and application-state types.
// Kept separate from content.ts to avoid coupling the content
// data model to the rendering/navigation layer.
// ─────────────────────────────────────────────────────────────

// ── Section / Navigation ─────────────────────────────────────

/**
 * All navigable sections. This union is the single source of
 * truth for routing, camera states, and nav rendering.
 * Adding a section = add it here first.
 */
export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'achievements'
  | 'certifications'
  | 'resume'
  | 'contact'
  | 'extras';

export interface PortfolioSection {
  id: SectionId;
  displayName: string;
  cameraStateId: SectionId;
  urlSlug: string;
  navigationOrder: number;
}

// ── Camera ───────────────────────────────────────────────────

/** Easing function type used by GSAP camera transitions. */
export type EasingFn = string; // GSAP easing string, e.g. "power2.inOut"

/**
 * Camera state for a given section. All camera cinematics live
 * in config/cameraStates.ts as a Record<SectionId, CameraState>.
 */
export interface CameraState {
  id: SectionId;
  position: [number, number, number];
  target: [number, number, number]; // look-at point
  fov: number;
  transitionDurationMs: number; // default 1400ms
  easing: EasingFn; // default "power2.inOut"
}

/** Lifecycle of a camera transition (used by the state machine in CameraRig). */
export type CameraTransitionStatus = 'idle' | 'transitioning';

// ── Device Tier ───────────────────────────────────────────────

/**
 * Device capability tier, detected once at boot by useDeviceTier.
 * Controls LOD selection, postprocessing, particle density,
 * and whether the 3D scene or Lite Mode is shown.
 */
export type DeviceTier = 'desktop' | 'tablet' | 'mobile' | 'lite';

// ── Interactive Object State ──────────────────────────────────

/**
 * State of all interactive room objects, managed by interactionSlice.
 * Each object's state is independent.
 */
export interface InteractionState {
  /** Controller wiggle animation active */
  controllerAnimating: boolean;
  /** Current RGB hue (0–360) for the keyboard underglow */
  keyboardHue: number;
  /** Whether steam particles are visible on the coffee mug */
  steamActive: boolean;
  /** Which project thumbnail is shown on the secondary monitor (0-indexed) */
  monitorProjectIndex: number;
  /** Whether the desk lamp is on */
  lampOn: boolean;
}
