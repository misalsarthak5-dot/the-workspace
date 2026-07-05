import type { StateCreator } from 'zustand';
import type { DeviceTier, SectionId } from '@/types/scene';
import type { AppStore } from '../useAppStore';
import { PORTFOLIO_SECTIONS } from '@/config/sections';

export interface Toast {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface UiSlice {
  isLiteMode: boolean;
  deviceTier: DeviceTier;
  toastQueue: Toast[];
  qualityTier: 'high' | 'medium' | 'low';
  
  // Navigation State
  activeSection: SectionId;
  previousSection: SectionId | null;
  isTransitioning: boolean;

  // Actions
  setLiteMode: (lite: boolean) => void;
  toggleLiteMode: () => void;
  setDeviceTier: (tier: DeviceTier) => void;
  setQualityTier: (tier: 'high' | 'medium' | 'low') => void;
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;

  // Navigation Actions
  navigateToSection: (section: SectionId) => void;
  nextSection: () => void;
  prevSection: () => void;
  setTransitioning: (isTransitioning: boolean) => void;
}

let toastCounter = 0;

export const createUiSlice: StateCreator<AppStore, [], [], UiSlice> = (set, get) => ({
  isLiteMode: false,
  deviceTier: 'desktop',
  toastQueue: [],
  qualityTier: 'high',

  // Initial navigation state
  activeSection: 'home',
  previousSection: null,
  isTransitioning: false,

  setLiteMode: (lite) => set({ isLiteMode: lite }),

  toggleLiteMode: () => set((state) => ({ isLiteMode: !state.isLiteMode })),

  setDeviceTier: (tier) => set({ deviceTier: tier }),

  setQualityTier: (tier) => set({ qualityTier: tier }),

  addToast: (toast) =>
    set((state) => ({
      toastQueue: [
        ...state.toastQueue,
        { ...toast, id: `toast-${++toastCounter}` },
      ],
    })),

  removeToast: (id) =>
    set((state) => ({
      toastQueue: state.toastQueue.filter((t) => t.id !== id),
    })),

  navigateToSection: (section) => {
    const current = get().activeSection;
    if (current === section) return;
    set({
      previousSection: current,
      activeSection: section,
      isTransitioning: true,
    });
  },

  nextSection: () => {
    const active = get().activeSection;
    const currentIndex = PORTFOLIO_SECTIONS.findIndex((s) => s.id === active);
    if (currentIndex < PORTFOLIO_SECTIONS.length - 1) {
      const nextSec = PORTFOLIO_SECTIONS[currentIndex + 1];
      get().navigateToSection(nextSec.id);
    }
  },

  prevSection: () => {
    const active = get().activeSection;
    const currentIndex = PORTFOLIO_SECTIONS.findIndex((s) => s.id === active);
    if (currentIndex > 0) {
      const prevSec = PORTFOLIO_SECTIONS[currentIndex - 1];
      get().navigateToSection(prevSec.id);
    }
  },

  setTransitioning: (isTransitioning) => set({ isTransitioning }),
});
