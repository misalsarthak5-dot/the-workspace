import { plasticMaterial, metalMaterial, speakerConeMaterial } from '../materials';

export default function Speakers() {
  return (
    <group>
      {/* Speaker Cabinet */}
      <mesh
        position={[0, 0.11, 0]}
        material={plasticMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.11, 0.22, 0.13]} />
      </mesh>

      {/* Main Woofer Cone */}
      <mesh
        position={[0, 0.07, 0.066]}
        rotation={[Math.PI / 2, 0, 0]}
        material={speakerConeMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.038, 0.038, 0.005, 16]} />
      </mesh>
      {/* Woofer Center Dust Cap */}
      <mesh
        position={[0, 0.07, 0.068]}
        rotation={[Math.PI / 2, 0, 0]}
        material={metalMaterial}
      >
        <sphereGeometry args={[0.012, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>

      {/* Tweeter Cone (high frequency) */}
      <mesh
        position={[0, 0.16, 0.066]}
        rotation={[Math.PI / 2, 0, 0]}
        material={speakerConeMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.018, 0.018, 0.005, 12]} />
      </mesh>
      {/* Tweeter Center Dust Cap */}
      <mesh
        position={[0, 0.16, 0.068]}
        rotation={[Math.PI / 2, 0, 0]}
        material={metalMaterial}
      >
        <sphereGeometry args={[0.006, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>
    </group>
  );
}
