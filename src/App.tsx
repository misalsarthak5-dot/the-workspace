import { useEffect } from 'react';
import { ModeProvider } from '@/context/ModeContext';
import { useAppStore } from '@/state/useAppStore';
import type { SectionId } from '@/types/scene';
import '@/styles/globals.css';

// ─────────────────────────────────────────────────────────────
// App
//
// Root component. Wraps all providers and renders the two
// top-level layers:
//   1. SceneCanvas   — the persistent R3F <Canvas> (M2+)
//   2. UIOverlayRoot — Framer Motion panels + NavBar (M1)
//
// The 3D canvas is conditionally rendered based on deviceTier
// and isLiteMode from the store (added in M2+).
// ─────────────────────────────────────────────────────────────

interface AppProps {
  /** The section this route corresponds to — used for deep-linking. */
  initialSection?: SectionId;
}

export default function App({ initialSection = 'home' }: AppProps) {
  const setActiveSection = useAppStore((s) => s.setActiveSection);

  // Sync the initial section from the URL route into the store.
  // This enables deep-linking: /skills loads and eases to Skills camera state.
  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection, setActiveSection]);

  return (
    <ModeProvider>
      {/*
        M1: UIOverlayRoot renders here (NavBar + panels).
        M2: SceneCanvas added here (persistent R3F canvas).
        Placeholder div keeps CI green for M0.
      */}
      <div
        style={{
          width: '100dvw',
          height: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0F',
          color: '#F5F5FA',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#A0A0B8',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            // M0 — Scaffold
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #4F8CFF, #9B5CFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
            }}
          >
            The Workspace
          </h1>
          <p style={{ color: '#A0A0B8', marginTop: '0.5rem' }}>
            Foundation scaffold complete. Implementation begins at M1.
          </p>
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#4F8CFF',
              marginTop: '1.5rem',
            }}
          >
            Active section: <strong>{initialSection}</strong>
          </p>
        </div>
      </div>
    </ModeProvider>
  );
}
