import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

// ─────────────────────────────────────────────────────────────
// Router
//
// Each SectionId maps to a URL route. The App component
// reads the active route and drives the camera + panel state.
//
// All routes use the same App shell (single-page, single canvas).
// The router is used for URL history sync and deep-linking only.
// ─────────────────────────────────────────────────────────────

export const router = createBrowserRouter([
  {
    path: '/:sectionId?',
    element: <App />,
  },
]);
