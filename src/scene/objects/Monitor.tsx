import { plasticMaterial, screenMaterial, metalMaterial } from '../materials';

export default function Monitor() {
  return (
    <group>
      {/* Stand Base */}
      <mesh
        position={[0, 0.75, -0.3]}
        material={metalMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.22, 0.01, 0.2]} />
      </mesh>

      {/* Stand Neck */}
      <mesh
        position={[0, 0.9, -0.32]}
        rotation={[0.1, 0, 0]}
        material={metalMaterial}
        castShadow
      >
        <boxGeometry args={[0.04, 0.3, 0.03]} />
      </mesh>

      {/* Monitor Display Group */}
      <group position={[0, 1.08, -0.3]}>
        {/* Back Casing */}
        <mesh
          position={[0, 0, -0.015]}
          material={plasticMaterial}
          castShadow
        >
          <boxGeometry args={[0.78, 0.44, 0.03]} />
        </mesh>

        {/* Screen Bezel */}
        <mesh
          position={[0, 0, 0]}
          material={plasticMaterial}
          castShadow
        >
          <boxGeometry args={[0.82, 0.48, 0.015]} />
        </mesh>

        {/* Active OLED Screen */}
        <mesh
          position={[0, 0, 0.008]}
          material={screenMaterial}
        >
          <boxGeometry args={[0.8, 0.46, 0.004]} />
        </mesh>
      </group>
    </group>
  );
}
