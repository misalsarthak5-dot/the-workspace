import { biography, interests } from '@/data/about';
import { education } from '@/data/education';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import Section from '@/ui/components/Section';
import { motion } from 'framer-motion';
import { Cpu, GitBranch, Music, BookOpen, GraduationCap, Calendar, User } from 'lucide-react';

const interestIcons: Record<string, React.ComponentType<any>> = {
  Cpu,
  GitBranch,
  Music,
  BookOpen,
};

export default function AboutPanel() {
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
            <User className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// ABOUT ME">
              Biography
            </Heading>
          </motion.div>

          {/* Bio text */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 text-sm text-text-secondary leading-relaxed font-sans">
            {biography.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* Education list */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <Heading level={3} variant="h4" className="text-accent-purple font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </Heading>
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div key={edu.id} className="p-3 bg-white/5 border border-white/5 rounded-lg flex flex-col gap-1.5 shadow-glass-sm">
                  <span className="text-xs text-accent-blue font-semibold">{edu.degree}</span>
                  <span className="text-xs text-text-primary font-medium">{edu.institution}</span>
                  <span className="text-[10px] text-text-secondary flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {edu.startDate} — {edu.endDate}
                  </span>
                  {edu.description && <p className="text-xs text-text-secondary leading-normal">{edu.description}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <Heading level={3} variant="h4" className="text-accent-purple font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Interests
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interests.map((interest) => {
                const Icon = interestIcons[interest.icon] || Cpu;
                return (
                  <div key={interest.name} className="p-3 bg-white/5 border border-white/5 rounded-lg flex gap-2.5 items-start">
                    <Icon className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-text-primary font-semibold">{interest.name}</span>
                      <span className="text-[10px] text-text-secondary leading-normal">{interest.description}</span>
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
