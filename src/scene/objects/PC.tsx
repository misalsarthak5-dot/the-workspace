import { plasticMaterial, glassMaterial, matteMaterial, ledMaterial, metalMaterial } from '../materials';

export default function PC() {
  return (
    <group>
      {/* Main PC Case Chassis */}
      <mesh
        position={[0, 0.22, 0]}
        material={plasticMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.22, 0.44, 0.44]} />
      </mesh>

      {/* Front Panel (slight indent, matte finish) */}
      <mesh
        position={[0, 0.22, 0.221]}
        material={plasticMaterial}
        castShadow
      >
        <boxGeometry args={[0.21, 0.42, 0.004]} />
      </mesh>

      {/* Tempered Glass Left Side Panel */}
      <mesh
        position={[-0.111, 0.22, 0]}
        material={glassMaterial}
      >
        <boxGeometry args={[0.004, 0.42, 0.42]} />
      </mesh>

      {/* Internal Shroud (PSU basement) */}
      <mesh
        position={[0, 0.05, 0]}
        material={plasticMaterial}
      >
        <boxGeometry args={[0.21, 0.1, 0.41]} />
      </mesh>

      {/* Internal Motherboard Plate */}
      <mesh
        position={[0.09, 0.24, 0]}
        material={matteMaterial}
      >
        <boxGeometry args={[0.02, 0.28, 0.38]} />
      </mesh>

      {/* Internal GPU (Graphics Card) */}
      <mesh
        position={[0.03, 0.2, 0.02]}
        material={metalMaterial}
        castShadow
      >
        <boxGeometry args={[0.1, 0.06, 0.26]} />
      </mesh>

      {/* Internal RAM Sticks */}
      <mesh
        position={[0.07, 0.29, 0.08]}
        material={ledMaterial}
      >
        <boxGeometry args={[0.01, 0.04, 0.005]} />
      </mesh>
      <mesh
        position={[0.07, 0.29, 0.092]}
        material={ledMaterial}
      >
        <boxGeometry args={[0.01, 0.04, 0.005]} />
      </mesh>

      {/* CPU Cooler block */}
      <mesh
        position={[0.06, 0.28, 0.0]}
        material={plasticMaterial}
      >
        <boxGeometry args={[0.04, 0.08, 0.08]} />
      </mesh>
      {/* CPU Cooler fan light */}
      <mesh
        position={[0.018, 0.28, 0.0]}
        rotation={[0, 0, Math.PI / 2]}
        material={ledMaterial}
      >
        <cylinderGeometry args={[0.035, 0.035, 0.004, 12]} />
      </mesh>

      {/* Internal RGB LED Strip (Back corner) */}
      <mesh
        position={[0.09, 0.38, -0.19]}
        material={ledMaterial}
      >
        <boxGeometry args={[0.01, 0.01, 0.38]} />
      </mesh>

      {/* Rear exhaust fan */}
      <mesh
        position={[0, 0.3, -0.19]}
        material={plasticMaterial}
      >
        <boxGeometry args={[0.18, 0.1, 0.02]} />
      </mesh>
    </group>
  );
}
