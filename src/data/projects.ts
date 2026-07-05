import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Alpha',
    description: 'A short description of what this project does and the problem it solves.',
    longDescription:
      'A longer description covering architecture decisions, challenges faced, and lessons learned. Replace with real project details at M5.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    thumbnailUrl: '/textures/project-placeholder.webp',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-alpha',
    featured: true,
    order: 1,
  },
  {
    id: 'project-2',
    title: 'Project Beta',
    description: 'Another project description goes here.',
    stack: ['Python', 'FastAPI', 'Docker'],
    thumbnailUrl: '/textures/project-placeholder.webp',
    repoUrl: 'https://github.com/yourusername/project-beta',
    featured: true,
    order: 2,
  },
  {
    id: 'project-3',
    title: 'The Workspace',
    description:
      'This portfolio itself — a cinematic 3D developer portfolio with camera-driven navigation.',
    stack: ['React', 'TypeScript', 'Three.js', 'R3F', 'GSAP', 'Framer Motion'],
    thumbnailUrl: '/textures/project-placeholder.webp',
    liveUrl: 'https://yourportfolio.com',
    repoUrl: 'https://github.com/yourusername/the-workspace',
    featured: true,
    order: 3,
  },
];
