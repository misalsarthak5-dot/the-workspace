// ─────────────────────────────────────────────────────────────
// useDeviceTier.ts — Milestone 4
//
// Detects device capability at boot and sets deviceTier in the
// UI slice. Run once on mount in App.tsx.
//
// Detection heuristics:
//   - WebGL support check → 'lite' if unavailable
//   - navigator.hardwareConcurrency < 4 → 'mobile'
//   - viewport width < 768px → 'mobile'
//   - viewport width < 1200px → 'tablet'
//   - otherwise → 'desktop'
// ─────────────────────────────────────────────────────────────

// Full implementation in M4.
export function useDeviceTier() {
  // M4: Implement capability detection + setDeviceTier store action
  return 'desktop' as const;
}
