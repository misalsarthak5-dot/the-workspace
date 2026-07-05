import { useAppStore } from '@/state/useAppStore';
import Button from '@/ui/components/Button';
import Heading from '@/ui/components/Heading';
import Container from '@/ui/components/Container';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

export default function HomePanel() {
  const navigateToSection = useAppStore((s) => s.navigateToSection);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Container size="md" className="flex items-center justify-center min-h-[calc(100vh-10rem)] pointer-events-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center w-full max-w-2xl px-4 pointer-events-auto select-none"
      >
        {/* Monospace flourish */}
        <motion.p
          variants={itemVariants}
          className="section-label text-accent-blue font-bold mb-3 tracking-widest"
        >
          Developer Portfolio
        </motion.p>

        {/* Hero Title */}
        <motion.div variants={itemVariants}>
          <Heading level={1} variant="display" gradient className="mb-4">
            The Workspace
          </Heading>
        </motion.div>

        {/* Short introduction */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-8 font-sans leading-relaxed"
        >
          A cinematic 3D digital workspace built to showcase modern web engineering,
          system designs, and interactive experiences. Feel free to explore.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            iconRight={<ArrowRight className="w-4 h-4" />}
            onClick={() => navigateToSection('about')}
          >
            Explore Workspace
          </Button>

          <Button
            variant="glass"
            size="lg"
            iconLeft={<Eye className="w-4 h-4" />}
            onClick={() => navigateToSection('projects')}
          >
            View Projects
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
