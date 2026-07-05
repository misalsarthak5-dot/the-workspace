import { metalMaterial, matteMaterial, plasticMaterial } from '../materials';

export default function Chair() {
  return (
    <group>
      {/* 5-Spoke Radial Base (Procedural spokes) */}
      <group position={[0, 0.05, 0]}>
        {/* Central hub */}
        <mesh material={metalMaterial} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.05, 12]} />
        </mesh>
        
        {/* Spokes */}
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i * 2 * Math.PI) / 5;
          return (
            <mesh
              key={i}
              position={[Math.sin(angle) * 0.25, 0, Math.cos(angle) * 0.25]}
              rotation={[0, angle, 0]}
              material={metalMaterial}
              castShadow
            >
              <boxGeometry args={[0.04, 0.03, 0.5]} />
            </mesh>
          );
        })}
      </group>

      {/* Gas Lift Hydraulic Cylinder */}
      <mesh
        position={[0, 0.25, 0]}
        material={metalMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.025, 0.025, 0.35, 12]} />
      </mesh>
      <mesh
        position={[0, 0.4, 0]}
        material={plasticMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.035, 0.035, 0.1, 12]} />
      </mesh>

      {/* Seat Cushion */}
      <mesh
        position={[0, 0.48, 0]}
        material={matteMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.55, 0.06, 0.52]} />
      </mesh>

      {/* Backrest Support Arm */}
      <mesh
        position={[0, 0.65, -0.22]}
        rotation={[0.1, 0, 0]}
        material={metalMaterial}
        castShadow
      >
        <boxGeometry args={[0.06, 0.35, 0.04]} />
      </mesh>

      {/* Backrest Cushion */}
      <mesh
        position={[0, 0.85, -0.25]}
        rotation={[0.08, 0, 0]}
        material={matteMaterial}
        castShadow
      >
        <boxGeometry args={[0.48, 0.65, 0.05]} />
      </mesh>

      {/* Left Armrest */}
      <group position={[-0.3, 0.6, 0.05]}>
        <mesh material={metalMaterial} castShadow>
          <boxGeometry args={[0.03, 0.2, 0.03]} />
        </mesh>
        <mesh position={[0, 0.1, -0.05]} material={plasticMaterial} castShadow>
          <boxGeometry args={[0.06, 0.02, 0.22]} />
        </mesh>
      </group>

      {/* Right Armrest */}
      <group position={[0.3, 0.6, 0.05]}>
        <mesh material={metalMaterial} castShadow>
          <boxGeometry args={[0.03, 0.2, 0.03]} />
        </mesh>
        <mesh position={[0, 0.1, -0.05]} material={plasticMaterial} castShadow>
          <boxGeometry args={[0.06, 0.02, 0.22]} />
        </mesh>
      </group>
    </group>
  );
}
