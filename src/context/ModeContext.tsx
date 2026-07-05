import { createContext, useContext, type ReactNode } from 'react';
import { useIsLiteMode } from '@/state/selectors';

// ─────────────────────────────────────────────────────────────
// ModeContext
//
// Provides the `isLite` flag throughout the component tree.
// When isLite = true, panel components render semantic HTML
// with no glassmorphic wrapper or Framer Motion transitions.
// When isLite = false, they render the full 3D-overlay experience.
//
// This context replaces the LiteModeRoot.tsx file — both modes
// share the same component tree, eliminating duplication.
// ─────────────────────────────────────────────────────────────

interface ModeContextValue {
  isLite: boolean;
}

const ModeContext = createContext<ModeContextValue>({ isLite: false });

interface ModeProviderProps {
  children: ReactNode;
  /** Override isLite (e.g., during vite-ssg prerendering where all routes are Lite). */
  forceIsLite?: boolean;
}

export function ModeProvider({ children, forceIsLite }: ModeProviderProps) {
  const storeIsLite = useIsLiteMode();
  const isLite = forceIsLite ?? storeIsLite;

  return <ModeContext.Provider value={{ isLite }}>{children}</ModeContext.Provider>;
}

/** Consume the current mode inside any panel or component. */
export function useModeContext(): ModeContextValue {
  return useContext(ModeContext);
}
