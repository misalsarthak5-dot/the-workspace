import type { StateCreator } from 'zustand';
import type { SectionId, CameraTransitionStatus } from '@/types/scene';
import type { AppStore } from '../useAppStore';
import type * as THREE from 'three';

export interface CameraSlice {
  activeSection: SectionId;
  transitionStatus: CameraTransitionStatus;
  camera: THREE.PerspectiveCamera | null;
  // Actions
  setActiveSection: (section: SectionId) => void;
  setTransitionStatus: (status: CameraTransitionStatus) => void;
  setCamera: (camera: THREE.PerspectiveCamera | null) => void;
}

export const createCameraSlice: StateCreator<AppStore, [], [], CameraSlice> = (set) => ({
  activeSection: 'home',
  transitionStatus: 'idle',
  camera: null,

  setActiveSection: (section) =>
    set({ activeSection: section, transitionStatus: 'transitioning' }),

  setTransitionStatus: (status) => set({ transitionStatus: status }),
  setCamera: (camera) => set({ camera }),
});
