import { skills } from '@/data/skills';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import { motion } from 'framer-motion';
import { Terminal, Code2, Server, Cloud, Wrench, Shield } from 'lucide-react';

const categoryConfig = [
  { key: 'languages', label: 'Languages', icon: Terminal, colorClass: 'text-accent-blue' },
  { key: 'frontend', label: 'Frontend Development', icon: Code2, colorClass: 'text-accent-purple' },
  { key: 'backend', label: 'Backend & APIs', icon: Server, colorClass: 'text-accent-blue' },
  { key: 'devops', label: 'Cloud & DevOps', icon: Cloud, colorClass: 'text-accent-purple' },
  { key: 'tools', label: 'Development Tools', icon: Wrench, colorClass: 'text-accent-blue' },
];

export default function SkillsPanel() {
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
            <Shield className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// TOOLBELT">
              Skills
            </Heading>
          </motion.div>

          {/* Categorized Skills Stack */}
          <div className="flex flex-col gap-5">
            {categoryConfig.map((category) => {
              const CategoryIcon = category.icon;
              const categorySkills = skills.filter((s) => s.category === category.key);

              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category.key}
                  variants={itemVariants}
                  className="flex flex-col gap-2.5"
                >
                  {/* Category Title */}
                  <div className="flex items-center gap-2">
                    <CategoryIcon className={`w-4 h-4 ${category.colorClass}`} />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary">
                      {category.label}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      // Determine border and highlight based on proficiency
                      const glowStyle =
                        skill.proficiency === 5
                          ? 'border-accent-blue/30 text-text-primary shadow-[0_0_12px_rgba(79,140,255,0.08)] bg-accent-blue/5'
                          : skill.proficiency === 4
                            ? 'border-accent-purple/30 text-text-primary shadow-[0_0_12px_rgba(155,92,255,0.08)] bg-accent-purple/5'
                            : 'border-white/10 text-text-secondary bg-white/5';

                      const dotColor =
                        skill.proficiency === 5
                          ? 'bg-accent-blue shadow-[0_0_6px_rgba(79,140,255,0.8)]'
                          : skill.proficiency === 4
                            ? 'bg-accent-purple shadow-[0_0_6px_rgba(155,92,255,0.8)]'
                            : 'bg-text-secondary/40';

                      return (
                        <div
                          key={skill.id}
                          className={`
                            px-3 py-1.5 border rounded-lg text-xs font-medium font-sans
                            flex items-center gap-2 transition-all duration-200 hover:scale-[1.03]
                            ${glowStyle}
                          `}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
