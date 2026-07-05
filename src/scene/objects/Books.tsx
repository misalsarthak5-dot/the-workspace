export default function Books() {
  return (
    <group>
      {/* Bottom Book (Red) */}
      <mesh
        position={[0, 0.02, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.22, 0.04, 0.18]} />
        <meshStandardMaterial color="#991b1b" roughness={0.8} metalness={0.1} />
      </mesh>
      {/* Bottom Book Pages */}
      <mesh position={[0.005, 0.02, 0]} castShadow>
        <boxGeometry args={[0.212, 0.032, 0.172]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.9} />
      </mesh>

      {/* Middle Book (Blue, slightly rotated) */}
      <group rotation={[0, 0.15, 0]} position={[0, 0.055, 0]}>
        <mesh
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.2, 0.035, 0.15]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh position={[0.004, 0, 0]}>
          <boxGeometry args={[0.194, 0.028, 0.144]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.9} />
        </mesh>
      </group>

      {/* Top Book (Teal, rotated opposite direction) */}
      <group rotation={[0, -0.2, 0]} position={[0, 0.088, 0]}>
        <mesh
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.17, 0.03, 0.13]} />
          <meshStandardMaterial color="#0f766e" roughness={0.8} metalness={0.1} />
        </mesh>
        <mesh position={[0.003, 0, 0]}>
          <boxGeometry args={[0.165, 0.024, 0.124]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}
