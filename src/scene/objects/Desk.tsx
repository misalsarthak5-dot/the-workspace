import { woodMaterial, metalMaterial } from '../materials';

export default function Desk() {
  return (
    <group>
      {/* Wooden Desktop Plank */}
      <mesh
        position={[0, 0.72, 0]}
        material={woodMaterial}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.2, 0.05, 1.0]} />
      </mesh>

      {/* Under-desk support frame */}
      <mesh
        position={[0, 0.67, 0]}
        material={metalMaterial}
        castShadow
      >
        <boxGeometry args={[1.9, 0.04, 0.7]} />
      </mesh>

      {/* Metal Legs */}
      {/* Front Left Leg */}
      <mesh
        position={[-1.0, 0.3475, 0.4]}
        material={metalMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.025, 0.025, 0.695, 16]} />
      </mesh>

      {/* Front Right Leg */}
      <mesh
        position={[1.0, 0.3475, 0.4]}
        material={metalMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.025, 0.025, 0.695, 16]} />
      </mesh>

      {/* Back Left Leg */}
      <mesh
        position={[-1.0, 0.3475, -0.4]}
        material={metalMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.025, 0.025, 0.695, 16]} />
      </mesh>

      {/* Back Right Leg */}
      <mesh
        position={[1.0, 0.3475, -0.4]}
        material={metalMaterial}
        castShadow
      >
        <cylinderGeometry args={[0.025, 0.025, 0.695, 16]} />
      </mesh>
    </group>
  );
}
