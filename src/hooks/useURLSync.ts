import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/state/useAppStore';
import { PORTFOLIO_SECTIONS } from '@/config/sections';

export function useURLSync() {
  const activeSection = useAppStore((s) => s.activeSection);
  const navigateToSection = useAppStore((s) => s.navigateToSection);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Sync from URL to Store (handles initial load, deep links, back/forward)
  useEffect(() => {
    const path = location.pathname.substring(1); // remove leading slash
    const section = PORTFOLIO_SECTIONS.find((s) => s.urlSlug === path);
    if (section) {
      const currentActive = useAppStore.getState().activeSection;
      if (section.id !== currentActive) {
        navigateToSection(section.id);
      }
    }
  }, [location.pathname, navigateToSection]);

  // 2. Sync from Store to URL (handles store-driven navigation)
  useEffect(() => {
    const targetSection = PORTFOLIO_SECTIONS.find((s) => s.id === activeSection);
    if (targetSection) {
      const expectedPath = targetSection.urlSlug === '' ? '/' : `/${targetSection.urlSlug}`;
      if (location.pathname !== expectedPath) {
        navigate(expectedPath);
      }
    }
  }, [activeSection, navigate, location.pathname]);
}
