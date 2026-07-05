export interface ResumeSummary {
  title: string;
  summary: string;
  skillsHighlight: string[];
  contactEmail: string;
}

export const resumeSummary: ResumeSummary = {
  title: 'Sarthak Misal - Resume',
  summary:
    'Dedicated Software Engineer with 2+ years of experience in designing, building, and maintaining robust web applications. Proficient in React, TypeScript, Node.js, and Three.js, with a strong focus on pixel-perfect UI execution, rendering performance, and interactive 3D graphics.',
  skillsHighlight: [
    'Frontend: React, TypeScript, Next.js, Redux, Tailwind CSS, Framer Motion, HTML5, CSS3',
    '3D/Graphics: Three.js, React Three Fiber (R3F), GLSL Shaders, GSAP Animation',
    'Backend: Node.js, Express, FastAPI, REST APIs, GraphQL',
    'Database: PostgreSQL, MongoDB, Redis',
    'DevOps & Tools: Git, Docker, GitHub Actions, AWS, Vercel, Figma'
  ],
  contactEmail: 'your@email.com'
};
