export default function CoffeeMug() {
  return (
    <group>
      {/* Mug Body */}
      <mesh
        position={[0, 0.045, 0]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.04, 0.04, 0.09, 16]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.15} metalness={0.1} />
      </mesh>

      {/* Mug Handle */}
      <mesh
        position={[0.04, 0.045, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <torusGeometry args={[0.022, 0.007, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.15} metalness={0.1} />
      </mesh>

      {/* Coffee Inside Mug */}
      <mesh
        position={[0, 0.082, 0]}
      >
        <cylinderGeometry args={[0.035, 0.035, 0.004, 12]} />
        <meshStandardMaterial color="#3f2305" roughness={0.3} />
      </mesh>
    </group>
  );
}
