import { useAppStore } from './useAppStore';
import type { SectionId } from '@/types/scene';

// ─────────────────────────────────────────────────────────────
// Memoized Selectors
//
// Use these instead of inline selectors to prevent unnecessary
// re-renders. Each selector subscribes to only the state it needs.
// ─────────────────────────────────────────────────────────────

// ── Camera Selectors ──────────────────────────────────────────
export const useActiveSection = () => useAppStore((s) => s.activeSection);
export const useTransitionStatus = () => useAppStore((s) => s.transitionStatus);
export const useIsTransitioning = () => useAppStore((s) => s.transitionStatus === 'transitioning');

// ── UI Selectors ──────────────────────────────────────────────
export const useIsLiteMode = () => useAppStore((s) => s.isLiteMode);
export const useDeviceTier = () => useAppStore((s) => s.deviceTier);
export const useToastQueue = () => useAppStore((s) => s.toastQueue);
export const useQualityTier = () => useAppStore((s) => s.qualityTier);

// ── Interaction Selectors ─────────────────────────────────────
export const useKeyboardHue = () => useAppStore((s) => s.keyboardHue);
export const useSteamActive = () => useAppStore((s) => s.steamActive);
export const useMonitorProjectIndex = () => useAppStore((s) => s.monitorProjectIndex);
export const useLampOn = () => useAppStore((s) => s.lampOn);
export const useControllerAnimating = () => useAppStore((s) => s.controllerAnimating);

// ── Action Selectors ──────────────────────────────────────────
export const useSetActiveSection = () => useAppStore((s) => s.setActiveSection);
export const useToggleLiteMode = () => useAppStore((s) => s.toggleLiteMode);

/** Returns true if the given section is currently active. */
export const useIsSectionActive = (section: SectionId) =>
  useAppStore((s) => s.activeSection === section);
