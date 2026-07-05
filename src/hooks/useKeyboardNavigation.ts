import { useEffect } from 'react';
import { useAppStore } from '@/state/useAppStore';

export function useKeyboardNavigation() {
  const nextSection = useAppStore((s) => s.nextSection);
  const prevSection = useAppStore((s) => s.prevSection);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSection();
      } else if (e.key === 'ArrowLeft') {
        prevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSection, prevSection]);
}
