import { plantPotMaterial, leafMaterial, matteMaterial } from '../materials';

export default function Plant() {
  return (
    <group>
      {/* Tapered Ceramic Pot */}
      <mesh
        position={[0, 0.07, 0]}
        material={plantPotMaterial}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.07, 0.05, 0.14, 16]} />
      </mesh>

      {/* Dirt Inside Pot */}
      <mesh
        position={[0, 0.136, 0]}
        material={matteMaterial}
      >
        <cylinderGeometry args={[0.065, 0.065, 0.005, 12]} />
      </mesh>

      {/* Low-poly Succulent Leaves */}
      <group position={[0, 0.14, 0]}>
        {/* Central Core */}
        <mesh material={leafMaterial} castShadow>
          <sphereGeometry args={[0.03, 8, 8]} />
        </mesh>

        {/* Leaf 1 */}
        <mesh
          position={[0.05, 0.01, 0]}
          rotation={[0, 0, -0.4]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.07, 0.012, 0.035]} />
        </mesh>

        {/* Leaf 2 */}
        <mesh
          position={[-0.05, 0.01, 0]}
          rotation={[0, 0, 0.4]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.07, 0.012, 0.035]} />
        </mesh>

        {/* Leaf 3 */}
        <mesh
          position={[0, 0.01, 0.05]}
          rotation={[0.4, 0, 0]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.035, 0.012, 0.07]} />
        </mesh>

        {/* Leaf 4 */}
        <mesh
          position={[0, 0.01, -0.05]}
          rotation={[-0.4, 0, 0]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.035, 0.012, 0.07]} />
        </mesh>

        {/* Diagonal Leaves */}
        <mesh
          position={[0.035, 0.02, 0.035]}
          rotation={[0.3, -Math.PI / 4, -0.3]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.06, 0.01, 0.03]} />
        </mesh>
        <mesh
          position={[-0.035, 0.02, -0.035]}
          rotation={[-0.3, -Math.PI / 4, 0.3]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.06, 0.01, 0.03]} />
        </mesh>
        <mesh
          position={[-0.035, 0.02, 0.035]}
          rotation={[0.3, Math.PI / 4, 0.3]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.06, 0.01, 0.03]} />
        </mesh>
        <mesh
          position={[0.035, 0.02, -0.035]}
          rotation={[-0.3, Math.PI / 4, -0.3]}
          material={leafMaterial}
          castShadow
        >
          <boxGeometry args={[0.06, 0.01, 0.03]} />
        </mesh>
      </group>
    </group>
  );
}
