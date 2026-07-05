// ─────────────────────────────────────────────────────────────
// src/types/content.ts
// All portfolio content types. Components consume ONLY these
// interfaces — never raw strings or literals from data files.
// ─────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  avatarUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // lucide-react icon name
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  thumbnailUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order: number;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'languages' | 'other';
  proficiency: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  startDate: string; // ISO date string
  endDate: string | 'present';
  description: string;
  highlights?: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
  icon?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon?: string;
}
