# TODO — Milestone Tracker

> Organized by milestone. Each milestone has a defined exit criterion in `docs/PRD.md` (Section 27).

---

## M0 — Scaffold

- [ ] Vite + React 18 + TypeScript scaffold
- [ ] Tailwind CSS configured
- [ ] ESLint + Prettier configured with pre-commit hook
- [ ] R3F + Drei installed
- [ ] GSAP installed
- [ ] Framer Motion installed
- [ ] Zustand installed
- [ ] React Router installed
- [ ] vite-ssg installed
- [ ] `.github/workflows/ci.yml` created (typecheck + lint + test + Lighthouse CI)
- [ ] Empty canvas renders with no type errors

---

## M1 — Lite Mode MVP

- [ ] `src/types/content.ts` — all content interfaces defined
- [ ] `src/types/scene.ts` — `SectionId`, `CameraState`, `DeviceTier`, `InteractionState`
- [ ] `src/config/cameraStates.ts` — `Record<SectionId, CameraState>` skeleton
- [ ] All data files scaffolded (`src/data/*`) with placeholder content
- [ ] `src/context/ModeContext.tsx` — `isLite` flag + toggle
- [ ] React Router wired (all 10 routes: `/`, `/about`, `/skills`, `/projects`, `/experience`, `/education`, `/achievements`, `/certifications`, `/resume`, `/contact`)
- [ ] `vite-ssg` prerendering configured and verified
- [ ] `NavBar` — all 10 links, active state, mobile hamburger
- [ ] All 10 panels built (dual-mode via `ModeContext`)
  - [ ] HomePanel
  - [ ] AboutPanel
  - [ ] SkillsPanel
  - [ ] ProjectsPanel + ProjectCard
  - [ ] ExperiencePanel + TimelineItem
  - [ ] EducationPanel + TimelineItem
  - [ ] AchievementsPanel + AchievementCard
  - [ ] CertificationsPanel + CertificationCard
  - [ ] ResumePanel (download + open-in-new-tab button; no embed)
  - [ ] ContactPanel + ContactForm
- [ ] Contact form wired (Formspree or Resend endpoint)
- [ ] `LoadingScreen` component
- [ ] `LiteModeToggle` component
- [ ] `Toast` component
- [ ] `SocialLinks` component
- [ ] Lighthouse A11y ≥ 90 on Lite Mode
- [ ] Deployed preview on Vercel

---

## M2 — 3D Scene Alpha

- [ ] `state/slices/cameraSlice.ts` — `activeSection`, `isTransitioning`, `cameraTarget`
- [ ] `state/slices/uiSlice.ts` — `isLiteMode`, `toastQueue`, `activePanel`
- [ ] `state/slices/interactionSlice.ts` — `rgbColor`, `steamActive`, `lampOn`, `monitorIndex`
- [ ] `state/useAppStore.ts` — composes slices
- [ ] `state/selectors.ts` — memoized selectors
- [ ] `SceneCanvas.tsx` — single `<Canvas>` instance
- [ ] `RoomModel.tsx` — blockout/placeholder `.glb` integrated
- [ ] `CameraRig.tsx` — GSAP tweening with all 10 camera states
- [ ] Camera interruption state machine (IDLE → TRANSITIONING → IDLE, interruptible)
- [ ] `useCameraTransition` hook
- [ ] Nav click → Zustand store → GSAP tween → panel render pipeline verified
- [ ] `Lighting.tsx` — placeholder lighting pass
- [ ] URL deep-link: cold-load on `/skills` → Home state → ease to Skills

---

## M3 — Interactive Beta

- [ ] `Controller.tsx` — rotate + lift click animation, auto-return
- [ ] `Keyboard.tsx` — HSL hue-shift RGB cycle on click
- [ ] `CoffeeMug.tsx` — steam particle toggle on click
- [ ] `Monitor.tsx` — crossfade project thumbnails on click
- [ ] `DeskLamp.tsx` — light intensity tween + emissive toggle on click
- [ ] Hover glow / emissive highlight on all interactive objects
- [ ] `ShelfDecor.tsx` — shelf props with hover highlight
- [ ] `HolographicTechDisplay.tsx` — Skills section focal element
- [ ] `CertificateWall.tsx` — Experience/Education/Certs focal element
- [ ] `Postprocessing.tsx` — bloom, DOF, vignette
- [ ] `Lighting.tsx` — full key/fill/rim + RGB accent pass
- [ ] `WindowRain.tsx` — optional ambient GPU particle rain
- [ ] Framer Motion panel transitions synced to GSAP camera transitions
- [ ] `useAdaptiveQuality.ts` — FPS monitor → quality tier stepping → Toast notification
- [ ] Idle micro-drift (±0.02 units parallax, desktop only)
- [ ] `prefers-reduced-motion` respected (disable micro-drift, reduce transitions)

---

## M4 — Performance RC

- [ ] `useDeviceTier.ts` — WebGL capability, `hardwareConcurrency`, viewport width
- [ ] Device-tier detection wired to store (`deviceTier: desktop | tablet | mobile | lite`)
- [ ] Desktop `.glb` LOD variants integrated
- [ ] Mobile `.glb` LOD variants integrated (~40% poly budget of desktop)
- [ ] Automatic Lite Mode fallback on WebGL-unsupported browsers
- [ ] Pixel ratio capped (`Math.min(devicePixelRatio, 2)`)
- [ ] Postprocessing disabled/reduced on mobile tier
- [ ] GLTF Draco/Meshopt compression verified
- [ ] KTX2/Basis texture compression verified
- [ ] Phase 2 asset deferred loading (certificate wall, holographic display) after Home interactive
- [ ] ≥ 50 FPS desktop verified
- [ ] ≥ 30 FPS mid-tier mobile verified
- [ ] Initial JS payload < 300KB gzipped verified
- [ ] Total 3D asset budget < 8MB desktop / < 3MB mobile

---

## M5 — Content + SEO

- [ ] All real personal content in data files (projects, skills, experience, education, achievements, certifications)
- [ ] Real resume PDF in `/public/resume/`
- [ ] Real project thumbnails in `/public/` or CDN
- [ ] `vite-ssg` prerendering verified — all 10 routes produce valid HTML
- [ ] Unique `<title>` + meta description per route
- [ ] Open Graph / Twitter Card tags per route
- [ ] `sitemap.xml` generated
- [ ] `robots.txt` configured
- [ ] `schema.org/Person` + `schema.org/CreativeWork` structured data
- [ ] Lighthouse SEO ≥ 95 on all prerendered routes
- [ ] Lighthouse A11y ≥ 90 on all routes
- [ ] axe-core automated a11y pass
- [ ] Manual screen reader pass (VoiceOver or NVDA)
- [ ] Cross-browser QA: Chrome, Firefox, Safari, Edge (latest 2 each)
- [ ] iOS Safari QA
- [ ] Android Chrome QA
- [ ] WebGL-disabled browser → Lite Mode auto-fallback verified

---

## M6 — Launch

- [ ] Custom domain configured on Vercel
- [ ] Analytics wired (Vercel Analytics or Umami)
- [ ] Error tracking active (Sentry or equivalent)
- [ ] Environment variables set in Vercel dashboard (no secrets in bundle)
- [ ] `main` branch auto-deploy configured
- [ ] Post-deploy smoke test script passes (all 10 routes + contact form)
- [ ] Core Web Vitals green in production
- [ ] Rollback strategy verified (Vercel instant rollback)
