# Changelog

## v0.2.0

- Updated PRD (Section 7, 8, 11, 14, 16, 22, 23, 27, 28, Appendix A) to reflect approved architectural decisions
- **Animation runtimes finalized:** GSAP is the sole camera animation runtime; Framer Motion is the sole UI animation runtime; `@react-spring/three` is removed from the stack
- **New types file:** `src/types/scene.ts` added to PRD structure (`SectionId`, `CameraState`, `DeviceTier`, `InteractionState`)
- **Dual-mode panel architecture:** `LiteModeRoot.tsx` eliminated; all panels are dual-mode via `ModeContext` (`isLite` flag)
- **SSG solution:** `vite-ssg` selected as the prerendering tool for React Router integration
- **Resume:** inline PDF embedding removed; resume is download-only / open-in-new-tab
- **Zustand store:** split into `cameraSlice`, `uiSlice`, and `interactionSlice` from Day 1
- **Roadmap:** replaced week-based phases with milestone-based planning (M0–M6)
- **New milestone M0 (Scaffold):** added as an explicit milestone with CI pipeline exit criterion
- **New hook:** `useAdaptiveQuality.ts` added to folder structure (FPS monitor → quality tier stepping)
- **New CI file:** `.github/workflows/ci.yml` added to folder structure
- Updated `README.md` tech stack to reflect finalized stack
- Replaced `TODO.md` with a granular milestone-based task tracker (M0–M6)

## v0.1.0

- Created GitHub repository
- Added README
- Added Product Requirements Document
- Added project roadmap
