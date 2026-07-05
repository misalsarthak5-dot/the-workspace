import type { Skill } from '@/types/content';

export const skills: Skill[] = [
  // Languages
  { id: 'ts', name: 'TypeScript', category: 'languages', proficiency: 5 },
  { id: 'js', name: 'JavaScript', category: 'languages', proficiency: 5 },
  { id: 'python', name: 'Python', category: 'languages', proficiency: 4 },
  // Frontend
  { id: 'react', name: 'React', category: 'frontend', proficiency: 5 },
  { id: 'r3f', name: 'React Three Fiber', category: 'frontend', proficiency: 4 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', proficiency: 5 },
  { id: 'framer', name: 'Framer Motion', category: 'frontend', proficiency: 4 },
  // Backend
  { id: 'node', name: 'Node.js', category: 'backend', proficiency: 4 },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', proficiency: 3 },
  // DevOps
  { id: 'docker', name: 'Docker', category: 'devops', proficiency: 3 },
  { id: 'github-actions', name: 'GitHub Actions', category: 'devops', proficiency: 3 },
  // Tools
  { id: 'git', name: 'Git', category: 'tools', proficiency: 5 },
  { id: 'vite', name: 'Vite', category: 'tools', proficiency: 4 },
  { id: 'figma', name: 'Figma', category: 'tools', proficiency: 3 },
];
