export interface ExtraHobby {
  name: string;
  description: string;
  icon: string; // Lucide icon
}

export const funFacts: string[] = [
  "I compiled my first program in C++ on a school computer and got 48 syntax errors immediately.",
  "I have a collection of mechanical keyboards with various switch types, including linear, tactile, and clicky.",
  "The 3D environment in this portfolio is rendered procedurally in real-time, utilizing standard Three.js geometry without loading any external .gltf files.",
  "I drink exactly two mugs of black coffee during late-night debugging sessions.",
  "I love sci-fi books and movies, especially those exploring time dilation and space travel."
];

export const hobbies: ExtraHobby[] = [
  {
    name: 'Acoustic Guitar',
    description: 'Playing fingerstyle covers and learning basic music theory in my spare time.',
    icon: 'Music',
  },
  {
    name: 'PC Building',
    description: 'Planning component compatibility, managing cables, and adjusting custom RGB profiles.',
    icon: 'Settings',
  },
  {
    name: 'Retro Gaming',
    description: 'Revisiting retro platforms, emulation, and playing classic platformers and RPGs.',
    icon: 'Gamepad2',
  },
  {
    name: 'Stargazing',
    description: 'Tracking constellations, planet alignments, and reading about astrophysics.',
    icon: 'Compass',
  },
];
