import { useState } from 'react';
import { useAppStore } from '@/state/useAppStore';
import { PORTFOLIO_SECTIONS } from '@/config/sections';
import type { SectionId } from '@/types/scene';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Code,
  Terminal,
  Award,
  FileText,
  Mail,
  Sparkles,
  Settings,
  Menu,
  X,
} from 'lucide-react';

const sectionIcons: Record<SectionId, React.ComponentType<any>> = {
  home: Home,
  about: User,
  experience: Briefcase,
  projects: Code,
  skills: Terminal,
  certifications: Award,
  resume: FileText,
  contact: Mail,
  extras: Sparkles,
  settings: Settings,
};

export default function FloatingNav() {
  const activeSection = useAppStore((s) => s.activeSection);
  const isTransitioning = useAppStore((s) => s.isTransitioning);
  const navigateToSection = useAppStore((s) => s.navigateToSection);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: SectionId) => {
    if (isTransitioning) return;
    navigateToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl pointer-events-auto"
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 glass-panel shadow-glass-lg w-full">
        {/* Logo/Branding */}
        <button
          onClick={() => handleNav('home')}
          className="text-sm font-mono font-bold tracking-wider text-text-primary hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base transition-colors"
          aria-label="Go to Home section"
        >
          SM // WORKSPACE
        </button>

        {/* Links row */}
        <div className="flex items-center gap-1 relative">
          {PORTFOLIO_SECTIONS.map((section) => {
            const Icon = sectionIcons[section.id];
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleNav(section.id)}
                disabled={isTransitioning}
                className={`
                  relative px-3 py-1.5 rounded-md flex items-center gap-1.5
                  text-xs font-medium tracking-wide transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
                  ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}
                  disabled:opacity-50 disabled:pointer-events-none
                `}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Navigate to ${section.displayName} section`}
              >
                {/* Active Indicator Sliding Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-md -z-10 shadow-glass-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>{section.displayName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Header / Hamburger Toggle */}
      <div className="flex md:hidden items-center justify-between px-4 py-2.5 glass-panel shadow-glass-md w-full">
        <button
          onClick={() => handleNav('home')}
          className="text-xs font-mono font-bold tracking-wider text-text-primary hover:text-accent-blue focus-visible:outline-none"
        >
          SM // WORKSPACE
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-text-primary hover:text-accent-blue focus-visible:outline-none"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-14 left-0 right-0 md:hidden glass-panel shadow-glass-lg p-4 flex flex-col gap-2 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            {PORTFOLIO_SECTIONS.map((section) => {
              const Icon = sectionIcons[section.id];
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNav(section.id)}
                  disabled={isTransitioning}
                  className={`
                    w-full px-4 py-2.5 rounded-lg flex items-center gap-3
                    text-sm font-medium tracking-wide transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
                    ${isActive ? 'bg-white/5 border border-white/10 text-text-primary shadow-glass-sm' : 'text-text-secondary border border-transparent hover:text-text-primary hover:bg-white/5'}
                    disabled:opacity-50 disabled:pointer-events-none
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {Icon && <Icon className="w-4.5 h-4.5 text-accent-blue" aria-hidden="true" />}
                  <span>{section.displayName}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
