import { certifications } from '@/data/certifications';
import { achievements } from '@/data/achievements';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import Button from '@/ui/components/Button';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Trophy, Medal } from 'lucide-react';

export default function CertificationsPanel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className="absolute right-4 md:right-12 top-24 bottom-24 w-[92%] max-w-md md:max-w-lg pointer-events-none flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-auto"
      >
        <Card variant="glass" padding="lg" className="max-h-[75vh] overflow-y-auto custom-scrollbar flex flex-col gap-6">
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 border-b border-white/5 pb-4">
            <Award className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// RECOGNITIONS">
              Certifications
            </Heading>
          </motion.div>

          {/* Certifications List */}
          <div className="flex flex-col gap-3">
            <Heading level={3} variant="h5" className="text-accent-purple font-semibold flex items-center gap-2">
              <Medal className="w-4 h-4" />
              Credentials
            </Heading>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <motion.div key={cert.id} variants={itemVariants}>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-start justify-between gap-3 hover:border-white/10 transition-colors shadow-glass-sm">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-text-primary font-bold">{cert.title}</span>
                      <span className="text-[10px] text-text-secondary font-medium">{cert.issuer}</span>
                      <span className="text-[9px] text-text-secondary flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                    </div>
                    {cert.credentialUrl && (
                      <Button
                        variant="glass"
                        size="sm"
                        href={cert.credentialUrl}
                        target="_blank"
                        className="px-2 py-1 flex-shrink-0"
                        iconLeft={<ExternalLink className="w-3.5 h-3.5" />}
                        aria-label={`View credentials for ${cert.title}`}
                      >
                        Verify
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements list */}
          {achievements && achievements.length > 0 && (
            <div className="flex flex-col gap-3 mt-2 border-t border-white/5 pt-4">
              <Heading level={3} variant="h5" className="text-accent-purple font-semibold flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Achievements
              </Heading>
              <div className="flex flex-col gap-3">
                {achievements.map((ach) => (
                  <motion.div key={ach.id} variants={itemVariants}>
                    <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex flex-col gap-1.5 hover:border-white/10 transition-colors shadow-glass-sm">
                      <span className="text-xs text-text-primary font-bold">{ach.title}</span>
                      <span className="text-[10px] text-accent-blue font-semibold">{ach.issuer}</span>
                      <span className="text-[9px] text-text-secondary flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {ach.date}
                      </span>
                      {ach.description && <p className="text-[11px] text-text-secondary leading-relaxed font-sans mt-0.5">{ach.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
