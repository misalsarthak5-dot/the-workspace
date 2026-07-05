import { useEffect } from 'react';
import { ModeProvider } from '@/context/ModeContext';
import { useAppStore } from '@/state/useAppStore';
import type { SectionId } from '@/types/scene';
import '@/styles/globals.css';

// Import newly created primitives and layout
import Layout from '@/ui/Layout';
import Container from '@/ui/components/Container';
import Section from '@/ui/components/Section';
import Heading from '@/ui/components/Heading';
import Card from '@/ui/components/Card';
import Button from '@/ui/components/Button';

// Import icons for UI aesthetics
import { Sparkles, ArrowRight, Github, Laptop, Terminal } from 'lucide-react';

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
        <Container size="lg" className="py-16 md:py-24">
          <Section spacing="lg" className="flex flex-col gap-16">
            
            {/* Header / Intro */}
            <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
              <Heading level={1} variant="display" gradient prefixText="// MILESTONE 1">
                Design Foundation
              </Heading>
              <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Welcome to the design system showcase for <strong className="text-text-primary">The Workspace</strong>. 
                Below is a demonstration of the core UI primitives, color palettes, and typography tokens 
                configured for the portfolio application.
              </p>
            </div>

            {/* Typography Section */}
            <div className="flex flex-col gap-6">
              <Heading level={2} prefixText="01 /" className="border-b border-white/5 pb-4">
                Typography Scale & Headings
              </Heading>
              <Card variant="glass" className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4">
                    <Heading level={6} mono className="text-accent-blue font-semibold">
                      Standard Scale
                    </Heading>
                    <div className="flex flex-col gap-3">
                      <Heading level={1}>Heading H1 (Standard)</Heading>
                      <Heading level={2}>Heading H2 (Standard)</Heading>
                      <Heading level={3}>Heading H3 (Standard)</Heading>
                      <Heading level={4}>Heading H4 (Standard)</Heading>
                      <Heading level={5}>Heading H5 (Standard)</Heading>
                      <Heading level={6}>Heading H6 (Standard)</Heading>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Heading level={6} mono className="text-accent-purple font-semibold">
                      Special Variations
                    </Heading>
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-xs text-text-secondary block mb-1">Display size clamp (Hero style)</span>
                        <Heading level={1} variant="display">Display Hero</Heading>
                      </div>
                      <div>
                        <span className="text-xs text-text-secondary block mb-1">Gradient text</span>
                        <Heading level={2} gradient>Gradient Title</Heading>
                      </div>
                      <div>
                        <span className="text-xs text-text-secondary block mb-1">Monospace code variant</span>
                        <Heading level={3} mono>const codeStyle = true;</Heading>
                      </div>
                      <div>
                        <span className="text-xs text-text-secondary block mb-1">Heading with prefixText</span>
                        <Heading level={3} prefixText="// API: ">Endpoints</Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Cards & Glassmorphism Section */}
            <div className="flex flex-col gap-6">
              <Heading level={2} prefixText="02 /" className="border-b border-white/5 pb-4">
                Containers & Card Variants
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <Card variant="glass" className="flex flex-col justify-between h-full gap-4">
                  <div className="flex flex-col gap-2">
                    <Heading level={4} className="text-accent-blue flex items-center gap-2">
                      <Laptop className="h-5 w-5" /> Glassmorphic Card
                    </Heading>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Uses backdrop blur, semi-translucent background fill, a light glass border, and a subtle glass shadow to establish depth over the 3D scene.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-text-secondary opacity-70">
                    variant="glass"
                  </div>
                </Card>

                <Card variant="solid" className="flex flex-col justify-between h-full gap-4">
                  <div className="flex flex-col gap-2">
                    <Heading level={4} className="text-accent-purple flex items-center gap-2">
                      <Terminal className="h-5 w-5" /> Solid Card (Lite Fallback)
                    </Heading>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      High-contrast solid layout without transparency or backdrop filters. Perfect for lower-power devices, screen readers, and Lite Mode.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-text-secondary opacity-70">
                    variant="solid"
                  </div>
                </Card>

                <Card variant="glass" hoverable className="flex flex-col justify-between h-full gap-4">
                  <div className="flex flex-col gap-2">
                    <Heading level={4} className="text-text-primary flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-yellow-400" /> Interactive Card
                    </Heading>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Hovering lifts the card up slightly, sharpens the glass border, and expands a subtle accent-glow shadow to invite user interaction.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-text-secondary opacity-70">
                    hoverable={"true"}
                  </div>
                </Card>

              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-6">
              <Heading level={2} prefixText="03 /" className="border-b border-white/5 pb-4">
                Interactive Buttons
              </Heading>
              <Card variant="glass" className="flex flex-col gap-8">
                
                {/* Variants Row */}
                <div className="flex flex-col gap-4">
                  <Heading level={5} mono className="text-text-secondary">
                    // Button Variants
                  </Heading>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="primary" iconRight={<ArrowRight className="h-4 w-4" />}>
                      Primary Action
                    </Button>
                    <Button variant="secondary" iconLeft={<Sparkles className="h-4 w-4" />}>
                      Secondary Action
                    </Button>
                    <Button variant="glass" iconLeft={<Github className="h-4 w-4" />}>
                      Glass Button
                    </Button>
                    <Button variant="outline">
                      Outline Button
                    </Button>
                  </div>
                </div>

                {/* Sizing & States Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4">
                    <Heading level={5} mono className="text-text-secondary">
                      // Sizes
                    </Heading>
                    <div className="flex flex-wrap gap-3 items-end">
                      <Button variant="primary" size="sm">
                        Small (sm)
                      </Button>
                      <Button variant="primary" size="md">
                        Medium (md)
                      </Button>
                      <Button variant="primary" size="lg">
                        Large (lg)
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Heading level={5} mono className="text-text-secondary">
                      // States & Loading
                    </Heading>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Button variant="primary" isLoading>
                        Loading State
                      </Button>
                      <Button variant="glass" disabled>
                        Disabled State
                      </Button>
                      <Button variant="outline" href="https://github.com" target="_blank">
                        Anchor link element (href)
                      </Button>
                    </div>
                  </div>
                </div>

              </Card>
            </div>

            {/* Design System Summary */}
            <div className="text-center pt-8 opacity-60">
              <p className="text-xs font-mono">
                The Workspace Portfolio Design System • Tailwind CSS v3 • WCAG 2.1 AA Compliant Focus & Contrast
              </p>
            </div>

          </Section>
        </Container>
      </Layout>
    </ModeProvider>
  );
}
