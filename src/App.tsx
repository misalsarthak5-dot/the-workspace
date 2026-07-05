import { useEffect } from 'react';
import { ModeProvider } from '@/context/ModeContext';
import { useAppStore } from '@/state/useAppStore';
import type { SectionId } from '@/types/scene';
import '@/styles/globals.css';

import Layout from '@/ui/Layout';
import SceneRoot from '@/scene/SceneRoot';

interface AppProps {
  /** The section this route corresponds to — used for deep-linking. */
  initialSection?: SectionId;
}

export default function App({ initialSection = 'home' }: AppProps) {
  const setActiveSection = useAppStore((s) => s.setActiveSection);

  // Sync the initial section from the URL route into the store.
  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection, setActiveSection]);

  return (
    <ModeProvider>
      <Layout>
        <SceneRoot />
      </Layout>
    </ModeProvider>
  );
}
