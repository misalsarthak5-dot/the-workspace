import { projects } from '@/data/projects';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import Button from '@/ui/components/Button';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Code } from 'lucide-react';

export default function ProjectsPanel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
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
            <FolderGit2 className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// SHOWCASE">
              Projects
            </Heading>
          </motion.div>

          {/* Grid Layout */}
          <div className="flex flex-col gap-4">
            {projects
              .sort((a, b) => a.order - b.order)
              .map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <div className="p-4 bg-white/5 border border-white/5 rounded-lg flex flex-col gap-3 shadow-glass-sm hover:border-white/10 hover:bg-white/10 transition-all duration-200">
                    {/* Title & Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-primary font-bold">{project.title}</span>
                      {project.featured && (
                        <span className="text-[9px] font-mono font-bold tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-0.5 border border-accent-blue/20 rounded">
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono text-text-secondary bg-white/5 px-2 py-0.5 border border-white/5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Links */}
                    <div className="flex items-center gap-2 mt-1">
                      {project.repoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.repoUrl}
                          target="_blank"
                          iconLeft={<Github className="w-3.5 h-3.5" />}
                        >
                          Code
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          variant="glass"
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          iconLeft={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
