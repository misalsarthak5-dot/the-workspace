import { resumeSummary } from '@/data/resume';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import Button from '@/ui/components/Button';
import Container from '@/ui/components/Container';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export default function ResumePanel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <Container size="sm" className="flex items-center justify-center min-h-[calc(100vh-10rem)] pointer-events-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl px-4 pointer-events-auto"
      >
        <Card variant="glass" padding="lg" className="flex flex-col gap-6 shadow-glass-lg relative">
          {/* Decorative clipboard handle flourish at the top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-white/5 border-b border-x border-white/10 rounded-b-lg shadow-inner flex items-center justify-center">
            <div className="w-10 h-1 bg-white/20 rounded-full" />
          </div>

          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 border-b border-white/5 pb-4 pt-2">
            <FileText className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// CURRICULUM VITAE">
              Resume
            </Heading>
          </motion.div>

          {/* Title & Summary */}
          <div className="flex flex-col gap-3">
            <motion.span variants={itemVariants} className="text-sm font-semibold text-accent-blue">
              {resumeSummary.title}
            </motion.span>
            <motion.p variants={itemVariants} className="text-xs text-text-secondary leading-relaxed font-sans">
              {resumeSummary.summary}
            </motion.p>
          </div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <Heading level={3} variant="h5" className="text-accent-purple font-semibold">
              Key Focus Areas
            </Heading>
            <div className="flex flex-col gap-2">
              {resumeSummary.skillsHighlight.map((highlight, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-xs text-text-secondary leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Download Action */}
          <motion.div variants={itemVariants} className="flex items-center justify-center border-t border-white/5 pt-4 mt-1">
            <Button
              variant="primary"
              size="lg"
              href="/resume/resume.pdf"
              target="_blank"
              download
              iconLeft={<Download className="w-4.5 h-4.5" />}
            >
              Download PDF Resume
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </Container>
  );
}
