import { metalMaterial, plasticMaterial, ledMaterial } from '../materials';

export default function Keyboard() {
  return (
    <group>
      {/* Keyboard Underglow LED Strip (creates the glowing keyboard silhouette) */}
      <mesh
        position={[0, 0.746, 0]}
        material={ledMaterial}
      >
        <boxGeometry args={[0.42, 0.002, 0.12]} />
      </mesh>

      {/* Keyboard Aluminum Case Base */}
      <mesh
        position={[0, 0.751, 0]}
        material={metalMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.44, 0.012, 0.14]} />
      </mesh>

      {/* Top Plastic Plate */}
      <mesh
        position={[0, 0.758, 0]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.43, 0.004, 0.13]} />
      </mesh>

      {/* Procedural Keycap Blocks (optimized representation of a 96% layout) */}
      {/* Function Row */}
      <mesh
        position={[0, 0.762, -0.05]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.41, 0.006, 0.015]} />
      </mesh>

      {/* Main Alphas & Modifiers Block */}
      <mesh
        position={[-0.07, 0.762, 0.01]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.25, 0.006, 0.088]} />
      </mesh>

      {/* Spacebar */}
      <mesh
        position={[-0.07, 0.765, 0.045]}
        material={metalMaterial}
        castShadow
      >
        <boxGeometry args={[0.12, 0.008, 0.015]} />
      </mesh>

      {/* Navigation & Arrows Block */}
      <mesh
        position={[0.08, 0.762, 0.01]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.038, 0.006, 0.088]} />
      </mesh>

      {/* Numpad Block */}
      <mesh
        position={[0.155, 0.762, 0.01]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.08, 0.006, 0.088]} />
      </mesh>

      {/* Custom Emissive Escape Keycap */}
      <mesh
        position={[-0.19, 0.765, -0.05]}
        material={ledMaterial}
      >
        <boxGeometry args={[0.018, 0.01, 0.015]} />
      </mesh>

      {/* Custom Emissive Enter Keycap */}
      <mesh
        position={[0.045, 0.765, 0.01]}
        material={ledMaterial}
      >
        <boxGeometry args={[0.018, 0.01, 0.032]} />
      </mesh>
    </group>
  );
}
