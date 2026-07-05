import type { StateCreator } from 'zustand';
import type { InteractionState } from '@/types/scene';
import type { AppStore } from '../useAppStore';

export interface InteractionSlice extends InteractionState {
  // Actions
  triggerControllerAnimation: () => void;
  setControllerAnimating: (v: boolean) => void;
  cycleKeyboardRgb: () => void;
  toggleSteam: () => void;
  cycleMonitorProject: (totalProjects: number) => void;
  toggleLamp: () => void;
}

export const createInteractionSlice: StateCreator<AppStore, [], [], InteractionSlice> = (set) => ({
  // Initial state
  controllerAnimating: false,
  keyboardHue: 220, // Start at accent-blue hue
  steamActive: true,
  monitorProjectIndex: 0,
  lampOn: true,

  // Actions
  triggerControllerAnimation: () => {
    set({ controllerAnimating: true });
    // Auto-reset after animation completes (600ms per PRD)
    setTimeout(() => set({ controllerAnimating: false }), 700);
  },

  setControllerAnimating: (v) => set({ controllerAnimating: v }),

  cycleKeyboardRgb: () =>
    set((state) => ({
      keyboardHue: (state.keyboardHue + 60) % 360,
    })),

  toggleSteam: () => set((state) => ({ steamActive: !state.steamActive })),

  cycleMonitorProject: (totalProjects) =>
    set((state) => ({
      monitorProjectIndex: (state.monitorProjectIndex + 1) % totalProjects,
    })),

  toggleLamp: () => set((state) => ({ lampOn: !state.lampOn })),
});
