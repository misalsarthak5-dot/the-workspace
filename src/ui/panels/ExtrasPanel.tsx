import { funFacts, hobbies } from '@/data/extras';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import { motion } from 'framer-motion';
import { Sparkles, Gamepad2, Compass, Music, Settings, Info, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const extraIcons: Record<string, React.ComponentType<any>> = {
  Music,
  Settings,
  Gamepad2,
  Compass,
};

export default function ExtrasPanel() {
  const [currentFactIdx, setCurrentFactIdx] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Fun facts auto-rotator carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIdx((prev) => (prev + 1) % funFacts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-4 md:left-12 top-24 bottom-24 w-[92%] max-w-md md:max-w-lg pointer-events-none flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-auto"
      >
        <Card variant="glass" padding="lg" className="max-h-[75vh] overflow-y-auto custom-scrollbar flex flex-col gap-6">
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 border-b border-white/5 pb-4">
            <Sparkles className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// EXTRAS">
              Trivia & Hobbies
            </Heading>
          </motion.div>

          {/* Fun facts carousel */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <Heading level={3} variant="h5" className="text-accent-purple font-semibold flex items-center gap-2">
              <Info className="w-4 h-4" />
              Did You Know?
            </Heading>
            <div className="p-4 bg-white/5 border border-white/5 rounded-lg flex flex-col gap-3 shadow-glass-sm min-h-[96px] justify-between relative overflow-hidden">
              {/* Active Slide Fact */}
              <p className="text-xs text-text-secondary leading-relaxed font-sans italic">
                "{funFacts[currentFactIdx]}"
              </p>

              {/* Progress Indicators */}
              <div className="flex items-center gap-1.5 self-end">
                {funFacts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentFactIdx(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentFactIdx ? 'bg-accent-blue w-3' : 'bg-white/20 hover:bg-white/40'}`}
                    aria-label={`Show fun fact ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hobbies list */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <Heading level={3} variant="h5" className="text-accent-purple font-semibold flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Hobbies & Pastimes
            </Heading>
            <div className="flex flex-col gap-3">
              {hobbies.map((hobby) => {
                const Icon = extraIcons[hobby.icon] || Heart;
                return (
                  <div key={hobby.name} className="p-3 bg-white/5 border border-white/5 rounded-lg flex gap-3.5 items-start hover:border-white/10 hover:bg-white/10 transition-colors duration-200">
                    <div className="p-2 bg-white/5 border border-white/5 rounded-lg text-accent-blue flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-text-primary font-bold">{hobby.name}</span>
                      <span className="text-[10px] text-text-secondary leading-normal font-sans">{hobby.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
