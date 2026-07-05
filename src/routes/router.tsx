import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import App from '@/App';
import { SECTION_IDS } from '@/config/sections';
import type { SectionId } from '@/types/scene';

// ─────────────────────────────────────────────────────────────
// Router
//
// Each SectionId maps to a URL route. The App component
// reads the active route and drives the camera + panel state.
//
// All routes use the same App shell (single-page, single canvas).
// The router is used for URL history sync and deep-linking only.
// ─────────────────────────────────────────────────────────────

const sectionRoutes: RouteObject[] = SECTION_IDS.map((id: SectionId) => ({
  path: id === 'home' ? '/' : `/${id}`,
  element: <App initialSection={id} />,
}));

export const router = createBrowserRouter(sectionRoutes);
