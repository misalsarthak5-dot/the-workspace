import { experience } from '@/data/experience';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function ExperiencePanel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
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
            <Briefcase className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// TIMELINE">
              Experience
            </Heading>
          </motion.div>

          {/* Timeline Cards Container */}
          <div className="relative border-l border-white/10 pl-6 ml-3 flex flex-col gap-8 py-2">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg-base border border-accent-blue flex items-center justify-center shadow-[0_0_8px_rgba(79,140,255,0.4)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                </div>

                {/* Main Card */}
                <div className="p-4 bg-white/5 border border-white/5 rounded-lg flex flex-col gap-2 shadow-glass-sm hover:border-white/10 transition-colors">
                  {/* Title & Company */}
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-text-primary font-bold">{exp.role}</span>
                    <span className="text-xs text-accent-blue font-semibold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.organization}
                    </span>
                  </div>

                  {/* Dates */}
                  <span className="text-[10px] text-text-secondary flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3 h-3" />
                    {exp.startDate} — {exp.endDate}
                  </span>

                  {/* Job description */}
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">{exp.description}</p>

                  {/* Highlights list */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="flex flex-col gap-1.5 mt-2 pt-2 border-t border-white/5">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-xs text-text-secondary leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
