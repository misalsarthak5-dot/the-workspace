import { contactDetails } from '@/data/contact';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import Button from '@/ui/components/Button';
import Container from '@/ui/components/Container';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ExternalLink, MessageSquare, Send } from 'lucide-react';

const contactIcons: Record<string, React.ComponentType<any>> = {
  Mail,
  Github,
  Linkedin,
  MapPin,
};

export default function ContactPanel() {
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
        <Card variant="glass" padding="lg" className="flex flex-col gap-6 shadow-glass-lg">
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 border-b border-white/5 pb-4">
            <MessageSquare className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// GET IN TOUCH">
              Contact
            </Heading>
          </motion.div>

          {/* Intro description */}
          <motion.p variants={itemVariants} className="text-xs text-text-secondary leading-relaxed font-sans -mt-2">
            Have a question, an interesting project proposal, or just want to say hello? 
            Feel free to connect with me through any of the channels below.
          </motion.p>

          {/* Social/Direct links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {contactDetails.map((detail) => {
              const Icon = contactIcons[detail.icon] || Mail;
              return (
                <motion.div key={detail.type} variants={itemVariants}>
                  <div className="p-3.5 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between gap-3 hover:border-white/10 hover:bg-white/10 transition-all duration-200 shadow-glass-sm group">
                    <div className="flex gap-2.5 items-center">
                      <div className="p-2 bg-white/5 border border-white/5 rounded-lg text-accent-blue group-hover:text-accent-purple transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono uppercase tracking-wide text-text-secondary">
                          {detail.type}
                        </span>
                        <span className="text-xs text-text-primary font-semibold truncate max-w-[130px] sm:max-w-[150px]">
                          {detail.value}
                        </span>
                      </div>
                    </div>

                    <a
                      href={detail.url}
                      target={detail.type !== 'Email' && detail.type !== 'Location' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 text-text-secondary hover:text-text-primary transition-all duration-200"
                      aria-label={`${detail.label} (${detail.value})`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form Placeholder Structure (as requested, prepared for later integration) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 mt-1 pt-4 border-t border-white/5 opacity-50 select-none relative"
          >
            <div className="absolute inset-0 bg-transparent z-20 cursor-not-allowed" title="Contact form integration scheduled for Milestone 6" />
            <Heading level={3} variant="h5" className="text-accent-purple font-semibold">
              Message Form (Placeholder)
            </Heading>
            <div className="flex flex-col gap-3 font-sans">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-text-secondary uppercase">Name</span>
                  <div className="h-9 px-3 bg-white/5 border border-white/5 rounded-md" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-text-secondary uppercase">Email</span>
                  <div className="h-9 px-3 bg-white/5 border border-white/5 rounded-md" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-text-secondary uppercase">Message</span>
                <div className="h-16 bg-white/5 border border-white/5 rounded-md" />
              </div>
              <Button variant="outline" size="md" className="self-end pointer-events-none gap-2" iconLeft={<Send className="w-3.5 h-3.5" />}>
                Send Message
              </Button>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </Container>
  );
}
