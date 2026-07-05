import { wallMaterial, floorMaterial } from './materials';

export default function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh
        position={[0, -0.005, 1]}
        material={floorMaterial}
        receiveShadow
      >
        <boxGeometry args={[10, 0.01, 10]} />
      </mesh>

      {/* Back Wall (behind the desk) */}
      <mesh
        position={[0, 2.5, -1.8]}
        material={wallMaterial}
        receiveShadow
        castShadow
      >
        <boxGeometry args={[10, 5, 0.1]} />
      </mesh>

      {/* Left Wall */}
      <mesh
        position={[-4.5, 2.5, 1]}
        material={wallMaterial}
        receiveShadow
        castShadow
      >
        <boxGeometry args={[0.1, 5, 10]} />
      </mesh>

      {/* Right Wall */}
      <mesh
        position={[4.5, 2.5, 1]}
        material={wallMaterial}
        receiveShadow
        castShadow
      >
        <boxGeometry args={[0.1, 5, 10]} />
      </mesh>
    </group>
  );
}
