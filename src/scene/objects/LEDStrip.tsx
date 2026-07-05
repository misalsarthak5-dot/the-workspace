import { ledMaterial } from '../materials';

export default function LEDStrip() {
  return (
    <group>
      {/* Light tube representing physical LED bar */}
      <mesh
        material={ledMaterial}
      >
        <boxGeometry args={[1.8, 0.012, 0.012]} />
      </mesh>

      {/* Dynamic light emission casting color onto nearby surfaces */}
      <pointLight
        color="#ff0088" // Neon Pink/Magenta
        intensity={1.8}
        distance={3.0}
        decay={2.0}
        position={[0, 0.05, -0.02]}
      />
    </group>
  );
}
