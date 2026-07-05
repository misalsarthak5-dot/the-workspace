import type { StateCreator } from 'zustand';
import type { CameraTransitionStatus } from '@/types/scene';
import type { AppStore } from '../useAppStore';
import type * as THREE from 'three';

export interface CameraSlice {
  transitionStatus: CameraTransitionStatus;
  camera: THREE.PerspectiveCamera | null;
  // Actions
  setTransitionStatus: (status: CameraTransitionStatus) => void;
  setCamera: (camera: THREE.PerspectiveCamera | null) => void;
}

export const createCameraSlice: StateCreator<AppStore, [], [], CameraSlice> = (set) => ({
  transitionStatus: 'idle',
  camera: null,

  setTransitionStatus: (status) => set({ transitionStatus: status }),
  setCamera: (camera) => set({ camera }),
});
