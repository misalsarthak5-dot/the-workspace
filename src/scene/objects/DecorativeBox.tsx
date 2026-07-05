import { plasticMaterial, woodMaterial, metalMaterial } from '../materials';

export default function DecorativeBox() {
  return (
    <group>
      {/* Box Main Body */}
      <mesh
        position={[0, 0.05, 0]}
        material={plasticMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.18, 0.1, 0.15]} />
      </mesh>

      {/* Wooden Lid */}
      <mesh
        position={[0, 0.105, 0]}
        material={woodMaterial}
        castShadow
      >
        <boxGeometry args={[0.19, 0.012, 0.16]} />
      </mesh>

      {/* Metal Latch Lock on Front */}
      <mesh
        position={[0, 0.06, 0.076]}
        material={metalMaterial}
        castShadow
      >
        <boxGeometry args={[0.025, 0.035, 0.004]} />
      </mesh>
    </group>
  );
}
