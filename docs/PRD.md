# Product Requirements Document
## Interactive 3D Developer Portfolio — "The Workspace"

**Document Version:** 1.0
**Status:** Final — Ready for Development
**Owner:** Product / Design / Engineering

---

## 1. Executive Summary

This PRD defines a premium, single-scene, 3D interactive developer portfolio. Instead of a traditional scrolling website, the entire experience takes place inside one persistent 3D room — the developer's workspace. Navigation between sections (Home, About, Skills, Projects, Experience, Education, Achievements, Certifications, Resume, Contact) is achieved through smooth, cinematic camera movement around this single environment, rather than page loads or scroll-jacking.

The interaction model draws inspiration from garage/menu navigation systems found in racing games such as *Need for Speed: Most Wanted* (2005) — specifically the feeling of a camera gliding purposefully around a static environment as the user selects different options. **No assets, branding, UI chrome, iconography, or copyrighted material from that game (or any game referenced in this document) will be copied, replicated, or closely imitated.** All 3D assets, materials, and UI are original, custom-built work that merely borrows the *feeling* of cinematic, camera-driven navigation.

The portfolio is fully data-driven: all personal content (projects, skills, experience, education, achievements, certifications, links, resume) lives in structured data files, allowing the developer to update content without touching UI code.

The end deliverable is not just a portfolio — it is itself a flagship showcase project demonstrating 3D web development, animation engineering, systems thinking, and UI/UX craft.

---

## 2. Vision

> "A workspace, not a webpage."

The site should feel like visiting the developer's actual desk — alive, lit, textured, and personal — rather than reading a résumé. Every camera move should feel intentional and premium, like a AAA menu system, while the content underneath remains a serious, professional, recruiter-friendly portfolio. The gaming references are seasoning, not the meal: a controller, a worn katana-inspired blade, a few fantasy trinkets on a shelf — present, tasteful, and never dominant.

---

## 3. Goals

### Primary Goals
- Communicate **professional software engineering competence** within the first 5 seconds.
- Demonstrate **advanced front-end/3D technical skill** through the build itself.
- Deliver a **memorable, differentiated experience** vs. typical scrolling portfolios.
- Keep the experience **fully navigable, accessible, and content-complete** even in reduced/fallback modes.
- Make content **trivially editable** via data files with zero UI code changes.

### Secondary Goals
- Subtly signal personality/gamer identity without undermining professionalism.
- Achieve strong performance and SEO despite being a 3D-heavy experience.
- Build a codebase clean enough to serve as a public GitHub reference project.

### Non-Goals
- This is not a game. No game mechanics, scoring, or physics-based play.
- Not a general CMS product — the "CMS" is a structured local data layer, not a hosted admin panel (though the architecture should not preclude adding one later).
- Not pursuing photorealistic AAA fidelity — stylized realism optimized for web performance is the target.

---

## 4. User Personas

### Persona A — "The Recruiter / HR Screener"
- Time-constrained (30–60 seconds per candidate).
- Needs: instant clarity on role fit, quick access to resume, contact info.
- Behavior: will bounce if the site feels slow, confusing, or gimmicky without payoff.
- Requirement: Home view must load fast and surface a resume/contact CTA immediately; a "skip 3D" or fast-path option should exist.

### Persona B — "The Hiring Engineer / Tech Lead"
- Wants to assess real technical depth.
- Behavior: will inspect code quality, will open DevTools, will read Projects in detail, may view GitHub source.
- Requirement: Projects section needs real technical substance (stack, problem, architecture, links); the portfolio's own engineering should hold up to scrutiny.

### Persona C — "The Fellow Developer / Community Peer"
- Discovers the site via Twitter/LinkedIn/Reddit/Dribbble.
- Wants inspiration and to explore interactions fully.
- Requirement: Easter eggs, interactive details (steam, RGB, lamp toggle), and smooth performance matter most here.

### Persona D — "Mobile / Low-Power Visitor"
- Visiting via a shared link on a phone, possibly on a mediocre connection.
- Requirement: Must still get full content and navigation, with a lightweight, non-3D-heavy fallback experience.

---

## 5. Functional Requirements

### FR-1: Single Persistent 3D Scene
- One `<Canvas>` (React Three Fiber) instance persists across all "sections."
- Navigating sections does not unmount/remount the 3D scene; only the camera state, active hotspot highlighting, and overlay UI change.

### FR-2: Camera-Driven Navigation
- A navigation menu (persistent, minimal) lists all 10 sections.
- Selecting a section triggers a camera transition (position + target + FOV) to a predefined "camera state" for that section.
- Transitions are eased (never linear, never instant cut) and interruptible (selecting a new section mid-transition redirects smoothly).
- URL routing reflects the active section (e.g., `/projects`) for shareability and back/forward browser support, without a full page reload (React Router in "layout" mode, or a lightweight custom hash/history sync).

### FR-3: Content Overlays
- Each section shows a glassmorphic UI panel overlaying the 3D scene with the actual content (text, project cards, skill bars, timeline, forms).
- Panels animate in/out with Framer Motion, synced to (but not blocking) camera movement.

### FR-4: Interactive Room Objects
| Object | Interaction | Result |
|---|---|---|
| Gaming controller | Click | Small idle/pickup animation (rotate + bounce) |
| Mechanical keyboard | Click | RGB underglow cycles color scheme |
| Coffee mug | Click | Looping steam particle animation toggles |
| Secondary monitor | Click | Cycles through featured project thumbnails on screen |
| Desk lamp | Click | Toggles on/off, affects local scene lighting |
| All above + shelf items | Hover | Subtle emissive glow / outline highlight |

### FR-5: Data-Driven Content
- All personal content is sourced from structured TypeScript data modules (`src/data/*.ts`) or JSON, never hardcoded in components.
- Adding a project, skill, achievement, certification, or experience entry requires **only** editing the relevant data file.

### FR-6: Responsive Tiers
- **Desktop:** Full 3D scene, all effects, all interactions.
- **Tablet:** Full 3D scene, simplified camera paths (fewer intermediate keyframes), reduced particle density.
- **Mobile:** Performance-optimized 3D scene (lower-poly LOD models, baked lighting instead of real-time where possible, reduced/disabled bloom & volumetrics) OR a 2D "static room illustration + card-based navigation" fallback if device fails capability checks — same content, same navigation labels, same order.

### FR-7: Accessibility & Fallback Mode
- A visible "Skip 3D Experience" / "Lite Mode" toggle switches to a fully static, semantic HTML version of all content (see Section 22).
- All interactive 3D actions have non-3D equivalents reachable by keyboard and screen reader in Lite Mode.

### FR-8: Resume & Contact
- Resume: downloadable PDF (URL from data file) + inline "Resume" section view.
- Contact: form (name, email, message) posting to a serverless function or third-party form service (e.g., Formspree/Resend), plus direct links (email, LinkedIn, GitHub, X/Twitter) from data file.

### FR-9: Loading Experience
- A branded loading screen shows progress while GLTF/texture assets stream in, then reveals the Home camera state.

---

## 6. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Performance | ≥ 50 FPS desktop, ≥ 30 FPS mobile on mid-tier devices |
| Load Time | First meaningful paint < 2.5s on broadband; interactive 3D scene < 5s |
| Bundle Size | Initial JS payload (excluding 3D assets) < 300KB gzipped |
| Accessibility | WCAG 2.1 AA compliance in Lite Mode; keyboard navigability for all nav actions in both modes |
| Browser Support | Latest 2 versions of Chrome, Firefox, Safari, Edge; graceful degrade on WebGL-unsupported browsers to Lite Mode automatically |
| SEO | All content crawlable via SSR/prerendered Lite Mode HTML equivalent (see Section 23) |
| Maintainability | New content added via data file edits only; no component changes required |
| Code Quality | ESLint + Prettier enforced via pre-commit hook; TypeScript strict mode |
| Security | Contact form protected against spam (honeypot + rate limiting); no secrets in client bundle |

---

## 7. Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        Browser                            │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  React App (Vite + TS)                                │ │
│  │  ┌───────────────┐   ┌─────────────────────────────┐  │ │
│  │  │ UI Layer       │   │ 3D Layer (single Canvas)    │  │ │
│  │  │ - Nav          │   │ - R3F Scene Graph            │  │ │
│  │  │ - Overlays     │◄─►│ - CameraRig (drei)           │  │ │
│  │  │ - Forms        │   │ - Room Model + Hotspots      │  │ │
│  │  │ (Framer Motion)│   │ - Postprocessing (bloom, DOF)│  │ │
│  │  └───────────────┘   └─────────────────────────────┘  │ │
│  │              ▲                    ▲                    │ │
│  │              └────── shared state ┘                    │ │
│  │         (Zustand store: activeSection, cameraState,    │ │
│  │          interactionState, deviceTier)                 │ │
│  └─────────────────────────────────────────────────────┘ │
│                          │                                 │
│                 React Router (history sync)                │
└──────────────────────────┬──────────────────────────────┘
                            │
                 Static hosting (Vercel) + Edge Function
                    (contact form relay only)
```

**Key architectural decisions:**
- **Single global state store (Zustand)** decouples the 3D layer from the UI layer — the nav doesn't need to know about Three.js, and the scene doesn't need to know about React Router.
- **Camera state as data, not code** — each section's camera position/target/fov lives in a config object, so designers/developers can tune cinematics without touching the render loop.
- **Device-tier detection** runs once at boot (WebGL capability, `navigator.hardwareConcurrency`, viewport width) and sets a `deviceTier` (`desktop | tablet | mobile | lite`) consumed by both layers.

---

## 8. Component Breakdown

```
<App>
 ├── <LoadingScreen>
 ├── <LiteModeToggle>
 ├── <SceneCanvas>                      (R3F <Canvas>, mounted once)
 │    ├── <CameraRig>                   (handles all camera tweening)
 │    ├── <RoomModel>                   (GLTF room, static geometry)
 │    ├── <InteractiveObjects>
 │    │    ├── <Controller />
 │    │    ├── <Keyboard />
 │    │    ├── <CoffeeMug />
 │    │    ├── <Monitor />
 │    │    ├── <DeskLamp />
 │    │    └── <ShelfDecor />
 │    ├── <HolographicTechDisplay>      (Skills visualization)
 │    ├── <CertificateWall>             (Experience/Education/Certs)
 │    ├── <WindowRain />                (optional ambience)
 │    ├── <Lighting />                  (key/fill/rim + RGB accent)
 │    └── <Postprocessing />            (bloom, vignette, DOF, particles)
 │
 ├── <UIOverlayRoot>                    (Framer Motion AnimatePresence)
 │    ├── <NavBar>
 │    ├── <HomePanel>
 │    ├── <AboutPanel>
 │    ├── <SkillsPanel>
 │    ├── <ProjectsPanel>
 │    │    └── <ProjectCard />  (repeatable, data-driven)
 │    ├── <ExperiencePanel>
 │    │    └── <TimelineItem /> (repeatable)
 │    ├── <EducationPanel>
 │    ├── <AchievementsPanel>
 │    ├── <CertificationsPanel>
 │    ├── <ResumePanel>
 │    └── <ContactPanel>
 │         └── <ContactForm />
 │
 └── <LiteModeRoot>                     (semantic HTML fallback, mirrors above 1:1)
```

Each `*Panel` is a "dumb" presentational component receiving props sourced exclusively from `src/data/*`.

---

## 9. Scene Layout

**Room dimensions (virtual units, 1 unit ≈ 1 meter):** ~4m (W) × 3m (H) × 4m (D), single-room, no doors/exits needed.

Layout (top-down, facing desk from entry POV):

```
        [Window w/ optional rain]
                 │
 [Shelf: controller, katana-inspired blade,   [Certificate Wall]
  fantasy trinkets]                                  │
        │                                            │
 ┌──────┴────────────────────────────────────────────┴──────┐
 │                                                            │
 │     [Holographic Tech Display - floats above desk-left]   │
 │                                                            │
 │   ┌────────────────────────────────────────────────┐      │
 │   │  Desk: laptop (center), secondary monitor (L),  │      │
 │   │  mechanical keyboard + mouse (front), coffee mug,│      │
 │   │  notebook, desk lamp, small plant                │      │
 │   └────────────────────────────────────────────────┘      │
 │                    [Desk Chair]                            │
 └────────────────────────────────────────────────────────────┘
```

- **Desk** is the anchor object; all camera states orbit around it at varying distance/angle.
- **Shelf** sits upper-left, within frame during Home/About but the focal point during an "Achievements" glance-over.
- **Certificate wall** sits upper-right, focal point for Experience/Education/Certifications.
- **Holographic tech display** floats just above/left of the desk, focal point for Skills.
- **Window w/ rain** sits center-back, providing ambient motion and mood without being a navigation focal point.

---

## 10. Navigation Flow

```
Home (default) 
  ├─→ About         (camera: slight push-in, laptop screen shows "About" content on secondary monitor)
  ├─→ Skills        (camera: pans/tilts to holographic display)
  ├─→ Projects      (camera: pushes close to secondary monitor)
  ├─→ Experience     (camera: rotates to certificate wall, upper section)
  ├─→ Education      (camera: rotates to certificate wall, lower section)
  ├─→ Achievements   (camera: rotates to shelf area)
  ├─→ Certifications (camera: rotates to certificate wall, focused zoom)
  ├─→ Resume         (camera: top-down angled view of desk/notebook)
  └─→ Contact        (camera: pulls back slightly, desk-level, warm lighting shift)
```

- Nav is always visible (fixed position, minimal glass pill/sidebar) — user can jump directly between any two sections; the CameraRig always computes a smooth direct interpolation between the current and target camera states (no forced intermediate stops).
- Deep-linking: visiting `/skills` directly loads Home state instantly then eases to Skills camera state post-load (avoids jank on cold load).

---

## 11. Camera System

### Camera State Object Shape
```ts
interface CameraState {
  id: SectionId;
  position: [number, number, number];
  target: [number, number, number];   // look-at point
  fov: number;
  transitionDurationMs: number;       // default 1400ms
  easing: EasingFn;                   // default customEaseInOutCubic
}
```

### Behavior Rules
- Implemented via `drei`'s `CameraControls` or a custom rig using `@react-spring/three` / GSAP tweening `camera.position` and a look-at target vector each frame.
- **Interruption handling:** if a new section is selected mid-transition, the rig captures current interpolated position/target as the new start point (no snapping back).
- **Micro-motion:** while idle on a section, apply a very subtle parallax/breathing drift (±0.02 units) tied to mouse position (desktop) for a "premium" alive feel — disabled on mobile/lite.
- **Depth of field:** subtle DOF blur shifts focus plane to the current focal object per section (e.g., monitor sharp on Projects, everything else softly blurred).
- Transitions never exceed 1.6s (keeps navigation feeling responsive, not sluggish) and never go below 0.8s (keeps it feeling cinematic, not jarring).

---

## 12. UI Components

| Component | Description |
|---|---|
| `NavBar` | Fixed glass pill or sidebar; 10 section links; active-state indicator; collapses to hamburger on mobile |
| `Panel` (base) | Glassmorphic container: backdrop-blur, translucent bg, soft border, rounded-2xl, used by all section panels |
| `ProjectCard` | Thumbnail, title, tags, short description, links (live/demo, repo); expandable for full case study |
| `TimelineItem` | Date range, title, org, description, used by Experience & Education |
| `SkillBadge` / `SkillBar` | Icon + label + proficiency indicator, grouped by category |
| `AchievementCard` | Icon/badge, title, issuer, date, optional link |
| `CertificationCard` | Issuer logo/name, title, date, credential link |
| `ResumeViewer` | Embedded PDF preview + Download button |
| `ContactForm` | Name/email/message fields, submit state, validation, honeypot field |
| `SocialLinks` | Icon row sourced from data (GitHub, LinkedIn, X, email, etc.) |
| `LiteModeToggle` | Persistent small control, top corner, toggles 3D↔Lite |
| `LoadingScreen` | Progress bar tied to asset loader, brand mark, skip-if-cached logic |
| `Toast` | Lightweight feedback (e.g., "Message sent!", "RGB mode changed") |

---

## 13. Data Model

All content lives in `src/data/`, strongly typed via `src/types/`.

```ts
// types/content.ts

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  avatarUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // lucide-react icon name
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  thumbnailUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order: number;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'languages' | 'other';
  proficiency: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  startDate: string;  // ISO
  endDate: string | 'present';
  description: string;
  highlights?: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
  icon?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon?: string;
}
```

```ts
// data/projects.ts
export const projects: Project[] = [ /* ... */ ];

// data/skills.ts
export const skills: Skill[] = [ /* ... */ ];

// data/experience.ts
export const experience: ExperienceEntry[] = [ /* ... */ ];

// data/education.ts
export const education: EducationEntry[] = [ /* ... */ ];

// data/achievements.ts
export const achievements: Achievement[] = [ /* ... */ ];

// data/certifications.ts
export const certifications: Certification[] = [ /* ... */ ];

// data/personal.ts
export const personalInfo: PersonalInfo = { /* ... */ };
export const socialLinks: SocialLink[] = [ /* ... */ ];
```

> **Rule:** No component may import a literal string of personal content. All personal/professional content flows through these modules. This satisfies the hard content-management requirement.

---

## 14. Folder Structure

```
portfolio/
├── public/
│   ├── models/                 # optimized .glb files
│   ├── textures/                # compressed textures (basis/ktx2 where possible)
│   └── resume/
│       └── resume.pdf
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── routes/
│   │   └── router.tsx
│   ├── scene/
│   │   ├── SceneCanvas.tsx
│   │   ├── CameraRig.tsx
│   │   ├── RoomModel.tsx
│   │   ├── objects/
│   │   │   ├── Controller.tsx
│   │   │   ├── Keyboard.tsx
│   │   │   ├── CoffeeMug.tsx
│   │   │   ├── Monitor.tsx
│   │   │   ├── DeskLamp.tsx
│   │   │   └── ShelfDecor.tsx
│   │   ├── HolographicTechDisplay.tsx
│   │   ├── CertificateWall.tsx
│   │   ├── WindowRain.tsx
│   │   ├── Lighting.tsx
│   │   └── Postprocessing.tsx
│   ├── ui/
│   │   ├── NavBar.tsx
│   │   ├── Panel.tsx
│   │   ├── panels/
│   │   │   ├── HomePanel.tsx
│   │   │   ├── AboutPanel.tsx
│   │   │   ├── SkillsPanel.tsx
│   │   │   ├── ProjectsPanel.tsx
│   │   │   ├── ExperiencePanel.tsx
│   │   │   ├── EducationPanel.tsx
│   │   │   ├── AchievementsPanel.tsx
│   │   │   ├── CertificationsPanel.tsx
│   │   │   ├── ResumePanel.tsx
│   │   │   └── ContactPanel.tsx
│   │   └── components/
│   │       ├── ProjectCard.tsx
│   │       ├── TimelineItem.tsx
│   │       ├── SkillBadge.tsx
│   │       ├── AchievementCard.tsx
│   │       ├── CertificationCard.tsx
│   │       ├── ContactForm.tsx
│   │       ├── SocialLinks.tsx
│   │       ├── LoadingScreen.tsx
│   │       ├── LiteModeToggle.tsx
│   │       └── Toast.tsx
│   ├── lite/
│   │   └── LiteModeRoot.tsx     # semantic HTML fallback mirroring all panels
│   ├── state/
│   │   └── useAppStore.ts       # Zustand store
│   ├── data/
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── achievements.ts
│   │   └── certifications.ts
│   ├── types/
│   │   └── content.ts
│   ├── hooks/
│   │   ├── useDeviceTier.ts
│   │   ├── useCameraTransition.ts
│   │   └── useAssetLoader.ts
│   ├── config/
│   │   └── cameraStates.ts
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       ├── easing.ts
│       └── analytics.ts
├── api/                          # Vercel serverless functions
│   └── contact.ts
├── .eslintrc.cjs
├── .prettierrc
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 15. API / Data Strategy

- **No backend database required.** All portfolio content is static and bundled at build time from `src/data/*`.
- **Contact form** is the only dynamic write path:
  - Client POSTs to `/api/contact` (Vercel serverless function).
  - Function validates payload, checks honeypot field, applies basic rate limiting (IP-based, e.g., Upstash Redis or in-memory for low traffic), then relays via a transactional email provider (Resend/SendGrid) or forwards to Formspree.
  - No client-side secrets; API keys live in Vercel environment variables.
- **Future CMS path (optional, see Section 25):** the `src/data/*` modules are structured so they could be swapped for fetch calls to a headless CMS (e.g., Sanity, Contentful) without changing any consuming component — components only ever consume the typed interfaces from Section 13.

---

## 16. Animation Guidelines

- **Camera transitions:** custom cubic ease-in-out, 800–1600ms, GSAP or `@react-spring/three`.
- **UI panel transitions:** Framer Motion `AnimatePresence`, fade + 8–16px vertical slide, 250–350ms, staggered children (~40ms stagger) for lists (project cards, skill badges).
- **Micro-interactions:** hover glow via emissive material lerp (150ms); click feedback via scale-down/up spring (stiffness ~300, damping ~20).
- **Object animations:**
  - Controller: rotate + slight lift on click, 600ms, ease-out, auto-return.
  - Keyboard RGB: color-cycle via HSL hue shift over a looping shader/material uniform, cycles on click.
  - Coffee steam: GPU particle system, looping, toggled opacity/emission on click.
  - Monitor: crossfade between project thumbnails on canvas texture, 400ms, on click.
  - Lamp: light intensity tween 0→target over 300ms + emissive material toggle.
- **Idle/ambient:** subtle desk lamp flicker-free glow pulse (very low amplitude), rain particle loop, plant subtle sway (vertex shader wind, minimal).
- **Reduced motion:** respect `prefers-reduced-motion` — disable camera micro-drift, reduce transition distances, disable non-essential looping particle effects.

---

## 17. Design System

- **Design language:** Dark, minimal, glassmorphic, premium SaaS-meets-game-menu aesthetic.
- **Elevation via blur + translucency**, not heavy drop shadows.
- **Consistent 8px spacing scale**, `rounded-2xl` as default radius for panels/cards.
- **Iconography:** Lucide React (or React Icons) exclusively, weight-matched, no mixed icon sets.
- **Motion consistency:** all easing curves defined once in `utils/easing.ts` and reused everywhere (UI and 3D) to keep the whole experience feeling like one system.

---

## 18. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `bg-base` | `#0A0A0F` | App/canvas background |
| `bg-panel` | `rgba(20, 20, 30, 0.55)` | Glass panel fill |
| `border-glass` | `rgba(255, 255, 255, 0.08)` | Panel borders |
| `accent-blue` | `#4F8CFF` | Primary accent, links, active nav |
| `accent-purple` | `#9B5CFF` | Secondary accent, RGB scheme base, gradients |
| `accent-gradient` | `linear-gradient(135deg, #4F8CFF, #9B5CFF)` | CTAs, highlights |
| `text-primary` | `#F5F5FA` | Headings, primary text |
| `text-secondary` | `#A0A0B8` | Body/secondary text |
| `success` | `#4FDE8C` | Form success states |
| `warning` | `#FFB84F` | Form/validation warnings |
| `error` | `#FF5C7A` | Error states |
| RGB accent range | Hue-cycled `#4F8CFF → #9B5CFF → #FF5C9B → #4F8CFF` | Keyboard/lamp interactive lighting |

---

## 19. Typography

- **Primary typeface:** Inter or Geist Sans (variable font) — clean, modern, excellent at small sizes for UI panels.
- **Monospace accent:** JetBrains Mono or Geist Mono — used for code snippets, tags/stack labels on project cards, and small "terminal-style" flourishes (e.g., section labels like `// 02 — Projects`).
- **Scale:** Tailwind's default type scale extended with a `display` size (~clamp(2.5rem, 5vw, 4rem)) for the Home hero text.
- **Line-height:** 1.5 body, 1.15 headings.
- **Letter-spacing:** slightly negative (-0.01em) on large display text for a premium tightened look.

---

## 20. Asset Requirements

| Asset | Format | Notes |
|---|---|---|
| Room model + desk furniture | `.glb` (Draco/Meshopt compressed) | Single or few merged meshes to minimize draw calls |
| Laptop, monitor, keyboard, mouse, mug, notebook, lamp, plant | `.glb` | Modeled at target-appropriate poly count; LOD variants for mobile |
| Gaming controller | `.glb` | Modern generic design — must not replicate any specific branded controller design/logo |
| Worn katana-inspired blade | `.glb` | Original silhouette "inspired by" a worn blade aesthetic — must not replicate Sekiro's specific weapon design, name, or any in-game asset |
| Fantasy shelf trinkets | `.glb` | Original small props (e.g., a generic carved insect/charm, a small emblem/rune stone) evoking a dark-fantasy mood — must not reproduce Hollow Knight or Elden Ring characters, logos, emblems, or any recognizable IP |
| Textures | `.ktx2`/Basis compressed, PBR (albedo/normal/roughness/metalness) | Baked ambient occlusion where feasible to cut runtime lighting cost |
| HDRI / environment map | `.hdr` or `.ktx2` cubemap, low-res | Used for subtle reflections only |
| Certificate wall images | Optimized `.webp` | User-provided real certificate/achievement images, lazy-loaded as textures |
| Rain ambience (optional) | GPU particle system, no external video asset | Procedural, not baked video, to control performance |
| Resume | `.pdf` | Hosted in `/public/resume/` or external URL via data file |
| UI icons | SVG (Lucide/React Icons) | No raster icons |

**Total 3D asset budget target:** < 8MB compressed for desktop tier, < 3MB for mobile tier (achieved via separate LOD/texture sets per `deviceTier`).

---

## 21. 3D Modeling Requirements

- Style: **stylized-realistic**, low-to-mid poly with high-quality PBR texturing (favor good textures/lighting over raw polycount — better perf/fidelity ratio).
- All models authored/sourced as **original or properly licensed** assets; no ripped or copied game assets.
- Modular modeling: desk, room shell, and each prop as separate objects/nodes in the GLTF scene graph so individual objects can be targeted for click/hover interactions and independent LOD swapping.
- Poly budget guidance (desktop tier): room shell ≤ 15k tris, desk + peripherals combined ≤ 30k tris, shelf props ≤ 8k tris, certificate wall ≤ 5k tris. Mobile tier targets ~40% of these budgets via decimated LODs.
- UV-unwrap all visible surfaces cleanly for texture reuse (texture atlasing encouraged to reduce draw calls).
- Rigging/skeletal animation is **not required** — all "animations" (steam, RGB, controller wiggle, lamp) are transform/shader/particle driven, not skeletal.

---

## 22. Accessibility

- **Lite Mode** (see FR-7) provides a fully semantic, screen-reader-friendly HTML version of every section — same headings, same data, same nav order — reachable via a visible toggle and auto-triggered on WebGL-unsupported browsers or `prefers-reduced-motion: reduce` + low-end device heuristics.
- All interactive nav elements are real `<button>`/`<a>` elements with visible focus states (not divs with onClick only).
- Color contrast in UI panels meets WCAG AA against the dark background (verify text-secondary against bg-panel).
- Keyboard navigation: `Tab` cycles through nav items and in-panel interactive elements in logical order; `Enter`/`Space` activates.
- ARIA live region announces section changes ("Now viewing: Projects") for screen reader users, in both 3D and Lite modes.
- No essential information conveyed by color alone (e.g., skill proficiency uses bars/labels, not color-only indicators).
- Captions/alt text provided for all meaningful images (certificate images, project thumbnails).

---

## 23. SEO Strategy

- Because the primary experience is a client-rendered 3D canvas (poor for crawlers), the app **prerenders the Lite Mode HTML** for each route (`/`, `/about`, `/projects`, etc.) at build time (via Vite SSG plugin or a prerendering step) so crawlers and social scrapers receive full semantic content.
- Each route has unique `<title>`, meta description, and Open Graph/Twitter Card tags generated from the data files (e.g., Projects OG image auto-generated or set per featured project).
- `sitemap.xml` and `robots.txt` generated from the same route list.
- Structured data (`schema.org/Person`, `schema.org/CreativeWork` for projects) embedded in prerendered HTML.
- Core Web Vitals monitored — since 3D can hurt LCP/CLS, the loading screen and skeleton panel are designed to establish stable layout immediately (no CLS from late-loading 3D canvas).

---

## 24. Performance Strategy

- **Asset loading:** GLTF/texture assets loaded via `useGLTF`/`useTexture` (drei) with Suspense boundaries; loading screen tracks aggregate progress via `useProgress`.
- **Compression:** Draco/Meshopt for geometry, KTX2/Basis for textures.
- **Lazy loading:** non-Home focal assets (certificate wall textures, holographic display shaders) can be deferred/streamed in after Home is interactive.
- **LOD system:** per-object LOD swapped based on `deviceTier`; further dynamic LOD drop if FPS monitor detects sustained sub-target frame rate.
- **Render optimizations:** merged geometries/instancing for repeated props, frustum culling (default in R3F/Three), capped pixel ratio (`Math.min(devicePixelRatio, 2)`), selective postprocessing (bloom/DOF disabled or reduced on mobile).
- **Code splitting:** route-level and panel-level lazy imports (`React.lazy`) for panel components not needed on first paint.
- **FPS monitor / adaptive quality:** a lightweight runtime monitor (e.g., `r3f-perf` in dev, custom lightweight monitor in prod) can step down postprocessing/particle density if frame time budget is exceeded for N consecutive seconds.
- **Caching:** long-term cache headers + content-hashed filenames for all static assets via Vite build; service worker optional for repeat-visit asset caching.

---

## 25. Future Expansion Plan

- **Headless CMS integration:** swap `src/data/*` static modules for typed fetch hooks against Sanity/Contentful without touching components (interfaces already decouple this).
- **Blog/Writing section:** could be added as an 11th "camera state" focused on a new object (e.g., a bookshelf) using the same architecture.
- **Theming:** seasonal/alternate lighting themes (e.g., a "night mode"/"sunset mode" preset) via swapping the `Lighting` config and color tokens.
- **Multiplayer/live visitor count easter egg:** lightweight websocket-based presence indicator (optional, non-essential).
- **Localization (i18n):** data files can be structured per-locale (`projects.en.ts`, `projects.hi.ts`) and swapped via a locale key in the store.
- **Admin-lite editing:** a local, password-gated `/admin` route that edits the JSON data files during development (not for production public use).

---

## 26. Risk Analysis

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| 3D scene tanks performance on low-end/mobile devices | High | Medium | Device-tier detection, LOD system, automatic Lite Mode fallback |
| Poor SEO/crawlability due to canvas-based content | High | Medium | Prerendered Lite Mode HTML per route (Section 23) |
| Scope creep on 3D asset polish delays launch | Medium | High | Ship with a Lite Mode-complete MVP first; 3D scene can iterate post-launch behind the same data layer |
| Recruiters bounce due to perceived "gimmick over substance" | High | Medium | Fast, clear Home CTA to Resume/Contact; content depth prioritized in Projects/Experience |
| Gaming-inspired assets read as too close to source IP | Medium | Low (if guidelines followed) | Strict internal review checklist: no logos, no character likenesses, no exact weapon/prop replicas — silhouette/mood inspiration only |
| Contact form spam/abuse | Low | Medium | Honeypot field + rate limiting + serverless validation |
| Browser/WebGL incompatibility | Medium | Low | Automatic capability detection routes users to Lite Mode |
| Developer maintenance burden as content grows | Medium | Low | Strict data-driven architecture (Section 5, FR-5) prevents UI/content coupling |

---

## 27. Development Roadmap

**Phase 0 — Foundation (Week 1)**
- Repo scaffold: Vite + React + TS + Tailwind + ESLint/Prettier.
- Data layer + TypeScript interfaces (Section 13) fully defined with placeholder content.
- Lite Mode fully built first (semantic HTML, all 10 sections, routing, contact form) — this is the accessible/SEO baseline and safety net.

**Phase 1 — Core 3D Scene (Weeks 2–3)**
- Room + desk model integration (placeholder/blockout assets acceptable initially).
- Basic camera rig with hardcoded camera states for all 10 sections.
- Zustand store wiring nav ↔ camera ↔ UI panels.

**Phase 2 — Interactivity & Polish (Weeks 4–5)**
- Interactive objects (controller, keyboard RGB, coffee steam, monitor cycling, lamp toggle).
- Postprocessing (bloom, DOF, vignette), lighting pass, optional rain ambience.
- Framer Motion panel transitions synced with camera transitions.

**Phase 3 — Responsive & Performance (Week 6)**
- Device-tier detection + LOD asset pipeline.
- Mobile fallback experience tuning.
- Performance profiling and optimization pass (target metrics from Section 6).

**Phase 4 — Content, SEO, QA (Week 7)**
- Final real content population (projects, experience, resume, etc.) via data files only.
- Prerendering setup for SEO (Section 23).
- Accessibility audit (Section 22) and cross-browser QA.

**Phase 5 — Launch (Week 8)**
- Deployment to Vercel, domain setup, analytics wiring.
- Post-launch monitoring (Core Web Vitals, error tracking via Sentry or similar).

---

## 28. Milestones

| Milestone | Target | Exit Criteria |
|---|---|---|
| M1 — Lite Mode MVP | End Week 1 | All 10 sections navigable, fully accessible, real routing, content wired to data layer |
| M2 — 3D Scene Alpha | End Week 3 | Camera navigates between all 10 states with placeholder models; no interactivity yet |
| M3 — Interactive Beta | End Week 5 | All interactive objects functional; postprocessing/lighting pass complete |
| M4 — Performance-Hardened RC | End Week 6 | Meets all Section 6 performance targets across desktop/tablet/mobile |
| M5 — Content-Complete & SEO-Ready | End Week 7 | Real content live; prerendered pages pass Lighthouse SEO ≥ 95 |
| M6 — Public Launch | End Week 8 | Deployed to production domain, monitoring active |

---

## 29. Testing Strategy

- **Unit tests** (Vitest): data-layer utilities, camera state interpolation math, form validation logic.
- **Component tests** (React Testing Library): panels render correctly given data fixtures; nav updates active state correctly.
- **Visual/interaction tests**: Storybook for isolated UI components (panels, cards, form) enabling design QA without the 3D scene.
- **E2E tests** (Playwright): navigate through all 10 sections via Lite Mode and verify content presence + correct route/URL; verify contact form submission flow (mocked endpoint).
- **Performance testing**: Lighthouse CI on Lite Mode routes (SEO/perf/accessibility scores); manual FPS profiling on representative desktop/mid-tier mobile devices for the 3D experience.
- **Accessibility testing**: automated (axe-core) + manual screen reader pass (VoiceOver/NVDA) on Lite Mode.
- **Cross-browser/device QA**: manual pass on Chrome/Firefox/Safari/Edge desktop, iOS Safari, Android Chrome, plus a WebGL-disabled browser profile to confirm automatic Lite Mode fallback.

---

## 30. Deployment Plan

- **Hosting:** Vercel (static build output + serverless function for `/api/contact`).
- **CI/CD:** GitHub Actions or Vercel's native Git integration — every PR gets a preview deployment; `main` branch auto-deploys to production.
- **Environments:** `preview` (per-PR), `production` (main branch, custom domain).
- **Environment variables:** email provider API key, rate-limit store credentials (if using Upstash) — configured in Vercel dashboard, never committed.
- **Pre-deploy checks (CI gate):** typecheck, lint, unit tests, Lighthouse CI thresholds (Lite Mode routes), bundle size budget check.
- **Rollback:** Vercel's instant rollback to previous deployment if a production issue is detected.
- **Post-deploy:** smoke test script hitting all 10 routes + contact form (against a test inbox) after each production deploy.

---

## Appendix A — Tech Stack Justification

| Tech | Justification |
|---|---|
| **React 18 + Vite** | Fast dev server/HMR, excellent ecosystem fit for React Three Fiber; Vite's build speed suits a 3D-asset-heavy project with frequent iteration |
| **TypeScript** | Enforces the strict data-model contract in Section 13 — critical for a "data-driven, no hardcoded content" requirement |
| **Tailwind CSS** | Rapid, consistent utility-based styling for the glassmorphic design system; easy to keep spacing/color tokens consistent |
| **React Three Fiber** | Declarative Three.js in React idioms; integrates naturally with component-based architecture and React state (Zustand) |
| **Drei** | Provides battle-tested helpers (`useGLTF`, `useTexture`, `CameraControls`, `Environment`, `useProgress`) that would otherwise require significant custom Three.js code |
| **Framer Motion** | Best-in-class declarative UI animation for the overlay panels; pairs cleanly with React's component lifecycle |
| **GSAP** | Included specifically for camera tweening and complex sequenced animations (e.g., multi-property easing) where finer timeline control outperforms spring-based libraries |
| **React Router** | Needed to give each section a real, shareable, bookmarkable URL and to support the prerendering/SEO strategy in Section 23 |
| **Leva** | Developer-only debug panel for real-time tuning of camera states, lighting, and material parameters during development (stripped from production build) |
| **Lucide React / React Icons** | Consistent, tree-shakeable icon set matching the minimal design system |
| **Vercel** | Zero-config static + serverless deployment, instant rollbacks, preview deployments per PR, generous free tier suitable for a portfolio |
| **ESLint + Prettier** | Enforces code quality/consistency — important since the codebase is itself a portfolio artifact developers will inspect |

## Appendix B — IP & Asset Safety Checklist

Before any 3D asset or interaction ships, it must pass this checklist:

- [ ] No logos, wordmarks, or trademarked names from any referenced game appear anywhere in the scene or UI.
- [ ] No character likenesses (e.g., no Hollow Knight or Elden Ring characters/bosses) are modeled or implied.
- [ ] The katana-inspired prop has an original silhouette/design distinct from any specific in-game weapon model.
- [ ] No UI chrome (menus, fonts, HUD elements) is copied or closely imitates any specific game's interface.
- [ ] The "inspiration" is limited to the *feel* of camera-driven menu navigation — never to specific copyrighted visual assets, audio, or text.
- [ ] Any real third-party asset used (fonts, HDRIs, sample textures) is properly licensed for commercial/portfolio use.
