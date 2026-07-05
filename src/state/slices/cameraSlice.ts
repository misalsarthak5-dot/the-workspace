import type { StateCreator } from 'zustand';
import type { SectionId, CameraTransitionStatus } from '@/types/scene';
import type { AppStore } from '../useAppStore';

export interface CameraSlice {
  activeSection: SectionId;
  transitionStatus: CameraTransitionStatus;
  // Actions
  setActiveSection: (section: SectionId) => void;
  setTransitionStatus: (status: CameraTransitionStatus) => void;
}

export const createCameraSlice: StateCreator<AppStore, [], [], CameraSlice> = (set) => ({
  activeSection: 'home',
  transitionStatus: 'idle',

  setActiveSection: (section) =>
    set({ activeSection: section, transitionStatus: 'transitioning' }),

  setTransitionStatus: (status) => set({ transitionStatus: status }),
});
