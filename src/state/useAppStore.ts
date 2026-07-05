import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createCameraSlice, type CameraSlice } from './slices/cameraSlice';
import { createUiSlice, type UiSlice } from './slices/uiSlice';
import { createInteractionSlice, type InteractionSlice } from './slices/interactionSlice';

// ─────────────────────────────────────────────────────────────
// App Store
//
// Composes all three domain slices into a single Zustand store.
// Import this hook in components; import slice types for typing.
//
// Slice ownership:
//   cameraSlice    → activeSection, transitionStatus
//   uiSlice        → isLiteMode, deviceTier, toastQueue
//   interactionSlice → all interactive room object states
// ─────────────────────────────────────────────────────────────

export type AppStore = CameraSlice & UiSlice & InteractionSlice;

export const useAppStore = create<AppStore>()(
  devtools(
    (...a) => ({
      ...createCameraSlice(...a),
      ...createUiSlice(...a),
      ...createInteractionSlice(...a),
    }),
    { name: 'TheWorkspace' },
  ),
);
