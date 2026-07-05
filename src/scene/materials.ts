import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────
// Reusable Materials System
// Centralizes material instantiation to prevent duplicate shader compiles
// and ensure consistent visual language across all procedural assets.
// ─────────────────────────────────────────────────────────────

export const woodMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#2d1c10'), // Dark walnut
  roughness: 0.6,
  metalness: 0.05,
});

export const metalMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#94a3b8'), // Sleek aluminum
  roughness: 0.25,
  metalness: 0.85,
});

export const plasticMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#1e293b'), // Slate/dark plastic
  roughness: 0.5,
  metalness: 0.1,
});

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#ffffff'),
  transparent: true,
  opacity: 0.25,
  transmission: 0.9,
  roughness: 0.1,
  metalness: 0.1,
  ior: 1.5,
  thickness: 1.0,
});

export const screenMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#090d16'), // Powered off OLED screen look
  emissive: new THREE.Color('#0a1128'), // Extremely subtle powered-on blue glow
  roughness: 0.2,
  metalness: 0.9,
});

export const matteMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#0f172a'), // Dark blue/slate matte
  roughness: 0.8,
  metalness: 0.0,
});

export const wallMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#0c1020'), // Slightly deeper blue wall shade
  roughness: 0.9,
  metalness: 0.0,
});

export const floorMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#1a1a24'), // Dark floor
  roughness: 0.75,
  metalness: 0.05,
});

export const feltMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#1b2030'), // Felt pad/desk mat
  roughness: 0.85,
  metalness: 0.0,
});

export const ledMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#ff00aa'), // Bright pink accent led
  emissive: new THREE.Color('#ff0088'),
  emissiveIntensity: 2.0,
  roughness: 0.5,
  metalness: 0.0,
});

export const speakerConeMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#050505'),
  roughness: 0.3,
  metalness: 0.2,
});

export const plantPotMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#cbd5e1'), // Tapered white clay pot
  roughness: 0.9,
  metalness: 0.0,
});

export const leafMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#0f766e'), // Dark teal-green succulent leaves
  roughness: 0.6,
  metalness: 0.0,
});
