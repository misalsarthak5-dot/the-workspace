export interface Interest {
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export const biography: string[] = [
  "Hi, I'm Sarthak Misal, a passionate Software Engineer based in India. I specialize in building highly interactive, beautiful, and performant web applications that live at the intersection of craft and code.",
  "With a strong foundation in computer science and full-stack development, I love creating clean architectures, modular components, and fluid animations. I believe that web interfaces should not only be functional but also offer an engaging, cinematic experience.",
  "When I'm not writing code, you can find me exploring new 3D graphics trends, playing acoustic guitar, or reading tech blogs. I'm always eager to learn new technologies and apply them to solve real-world problems."
];

export const interests: Interest[] = [
  {
    name: '3D & Graphics',
    description: 'Experimenting with WebGL, Three.js, and shaders to create immersive interactive spaces.',
    icon: 'Cpu',
  },
  {
    name: 'Open Source',
    description: 'Contributing to open source libraries and crafting reusable UI design components.',
    icon: 'GitBranch',
  },
  {
    name: 'Music & Art',
    description: 'Playing guitar, appreciating visual design, and drawing inspirations from architecture.',
    icon: 'Music',
  },
  {
    name: 'Tech Writing',
    description: 'Documenting engineering concepts, system architectures, and coding workflows.',
    icon: 'BookOpen',
  },
];
