// ─────────────────────────────────────────────────────────────
// useAdaptiveQuality.ts — Milestone 3
//
// FPS monitor that steps down rendering quality if sustained
// frame time budget is exceeded.
//
// Quality steps (highest → lowest):
//   1. Full desktop (bloom + DOF + particles)
//   2. No DOF
//   3. No bloom + reduced particles
//   4. No postprocessing
//   5. Automatic switch to Lite Mode
//
// Each step triggers an addToast notification.
// ─────────────────────────────────────────────────────────────

// Full implementation in M3.
export function useAdaptiveQuality() {
  // M3: Implement rolling FPS average + quality tier stepping
}
