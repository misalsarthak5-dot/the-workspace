import type { StateCreator } from 'zustand';
import type { DeviceTier } from '@/types/scene';
import type { AppStore } from '../useAppStore';

export interface Toast {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface UiSlice {
  isLiteMode: boolean;
  deviceTier: DeviceTier;
  toastQueue: Toast[];
  // Actions
  setLiteMode: (lite: boolean) => void;
  toggleLiteMode: () => void;
  setDeviceTier: (tier: DeviceTier) => void;
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

let toastCounter = 0;

export const createUiSlice: StateCreator<AppStore, [], [], UiSlice> = (set) => ({
  isLiteMode: false,
  deviceTier: 'desktop',
  toastQueue: [],

  setLiteMode: (lite) => set({ isLiteMode: lite }),

  toggleLiteMode: () => set((state) => ({ isLiteMode: !state.isLiteMode })),

  setDeviceTier: (tier) => set({ deviceTier: tier }),

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
});
