import type { PersonalInfo, SocialLink } from '@/types/content';

export const personalInfo: PersonalInfo = {
  name: 'Sarthak Misal',
  title: 'Software Engineer',
  tagline: 'Building things that live at the intersection of craft and code.',
  location: 'India',
  email: 'your@email.com',
  resumeUrl: '/resume/resume.pdf',
  avatarUrl: undefined,
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
  {
    label: 'X / Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
  },
  {
    label: 'Email',
    url: 'mailto:your@email.com',
    icon: 'Mail',
  },
];
