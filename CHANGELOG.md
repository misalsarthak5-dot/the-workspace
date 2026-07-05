# Changelog
## v0.5.0 - Camera Navigation & Section System

### Added

- Centralized portfolio section registry (`sections.ts`)
- URL synchronization between React Router and Zustand
- Keyboard navigation (Left/Right Arrow) for section transitions
- GSAP-powered `CameraController` for smooth camera navigation
- Camera transition state management
- Browser history and deep-link support

### Improved

- Refactored camera navigation architecture
- Separated UI navigation state from camera state
- Simplified `CameraRig` to camera registration only
- Added camera transition interruption handling
- Updated camera states for all portfolio sections
- Verified `npm run typecheck`
- Verified `npm run lint`
- Verified `npm run build`
## v0.4.0 - 3D Scene Foundation

### Added

- React Three Fiber scene foundation
- Perspective camera setup
- Dynamic lighting and shadow system
- Ground plane for the workspace
- Adaptive quality controller
- Camera registration in Zustand
- SceneRoot component
- Environment component
- Lighting component
- Ground component

### Improved

- Connected adaptive quality system to the 3D renderer
- Optimized Canvas renderer settings (DPR, shadows, antialiasing)
- Simplified application shell for 3D rendering
- Enhanced camera state management
- Verified `npm run typecheck`
- Verified `npm run lint`
- Verified `npm run build`
## v0.3.0 - Design Foundation

### Added

- Global design system
- Tailwind design tokens
- Reusable UI primitives:
  - Button
  - Card
  - Section
  - Container
  - Heading
- Base Layout component
- Design showcase page
- Glassmorphism utility styles

### Improved

- Type-safe Vite configuration
- Global accessibility styles
- Responsive spacing and typography
- Verified `npm run typecheck`
- Verified `npm run build`

## v0.2.0 - Architecture Finalization

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

## v0.1.0 -Project Initialization

- Created GitHub repository
- Added README
- Added Product Requirements Document
- Added project roadmap
