import { woodMaterial, metalMaterial } from '../materials';

export default function Shelf() {
  return (
    <group>
      {/* Wood plank */}
      <mesh
        material={woodMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.8, 0.03, 0.28]} />
      </mesh>

      {/* Left Wall Support Bracket */}
      <group position={[-0.6, -0.05, -0.1]}>
        <mesh material={metalMaterial} castShadow>
          <boxGeometry args={[0.03, 0.1, 0.02]} />
        </mesh>
        <mesh position={[0, 0.04, 0.09]} material={metalMaterial} castShadow>
          <boxGeometry args={[0.03, 0.02, 0.18]} />
        </mesh>
      </group>

      {/* Right Wall Support Bracket */}
      <group position={[0.6, -0.05, -0.1]}>
        <mesh material={metalMaterial} castShadow>
          <boxGeometry args={[0.03, 0.1, 0.02]} />
        </mesh>
        <mesh position={[0, 0.04, 0.09]} material={metalMaterial} castShadow>
          <boxGeometry args={[0.03, 0.02, 0.18]} />
        </mesh>
      </group>
    </group>
  );
}
