import type { PortfolioSection, SectionId } from '@/types/scene';

export const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  { id: 'home', displayName: 'Home', cameraStateId: 'home', urlSlug: '', navigationOrder: 0 },
  { id: 'about', displayName: 'About', cameraStateId: 'about', urlSlug: 'about', navigationOrder: 1 },
  { id: 'experience', displayName: 'Experience', cameraStateId: 'experience', urlSlug: 'experience', navigationOrder: 2 },
  { id: 'projects', displayName: 'Projects', cameraStateId: 'projects', urlSlug: 'projects', navigationOrder: 3 },
  { id: 'skills', displayName: 'Skills', cameraStateId: 'skills', urlSlug: 'skills', navigationOrder: 4 },
  { id: 'certifications', displayName: 'Certifications', cameraStateId: 'certifications', urlSlug: 'certifications', navigationOrder: 5 },
  { id: 'resume', displayName: 'Resume', cameraStateId: 'resume', urlSlug: 'resume', navigationOrder: 6 },
  { id: 'contact', displayName: 'Contact', cameraStateId: 'contact', urlSlug: 'contact', navigationOrder: 7 },
  { id: 'extras', displayName: 'Extras', cameraStateId: 'extras', urlSlug: 'extras', navigationOrder: 8 },
  { id: 'settings', displayName: 'Settings', cameraStateId: 'settings', urlSlug: 'settings', navigationOrder: 9 },
];

export const SECTION_IDS: SectionId[] = PORTFOLIO_SECTIONS.map((s) => s.id);

export const SECTION_LABELS: Record<SectionId, string> = PORTFOLIO_SECTIONS.reduce(
  (acc, section) => {
    acc[section.id] = section.displayName;
    return acc;
  },
  {} as Record<SectionId, string>
);
