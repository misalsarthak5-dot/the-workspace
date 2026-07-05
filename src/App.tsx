import { useEffect } from 'react';
import { ModeProvider } from '@/context/ModeContext';
import { useAppStore } from '@/state/useAppStore';
import type { SectionId } from '@/types/scene';
import { useURLSync } from '@/hooks/useURLSync';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import '@/styles/globals.css';

import Layout from '@/ui/Layout';
import SceneRoot from '@/scene/SceneRoot';

interface AppProps {
  /** The section this route corresponds to — used for deep-linking. */
  initialSection?: SectionId;
}

export default function App({ initialSection = 'home' }: AppProps) {
  const navigateToSection = useAppStore((s) => s.navigateToSection);

  // Call synchronization and demo navigation hooks
  useURLSync();
  useKeyboardNavigation();

  // Sync the initial section from the URL route into the store.
  useEffect(() => {
    navigateToSection(initialSection);
  }, [initialSection, navigateToSection]);

  return (
    <ModeProvider>
      <Layout>
        <SceneRoot />
      </Layout>
    </ModeProvider>
  );
}
