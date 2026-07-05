import { plasticMaterial, metalMaterial } from '../materials';

export default function Mouse() {
  return (
    <group>
      {/* Mouse Main Body (Palm Rest) */}
      <mesh
        position={[0, 0.76, 0.015]}
        material={plasticMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.06, 0.03, 0.08]} />
      </mesh>

      {/* Left Click Button */}
      <mesh
        position={[-0.0145, 0.757, -0.03]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.027, 0.024, 0.04]} />
      </mesh>

      {/* Right Click Button */}
      <mesh
        position={[0.0145, 0.757, -0.03]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.027, 0.024, 0.04]} />
      </mesh>

      {/* Metal Scroll Wheel */}
      <mesh
        position={[0, 0.767, -0.025]}
        rotation={[Math.PI / 2, 0, 0]}
        material={metalMaterial}
      >
        <cylinderGeometry args={[0.006, 0.006, 0.005, 12]} />
      </mesh>
    </group>
  );
}
