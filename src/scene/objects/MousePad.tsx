import { feltMaterial } from '../materials';

export default function MousePad() {
  return (
    <mesh
      position={[0, 0.746, 0.05]}
      material={feltMaterial}
      receiveShadow
    >
      <boxGeometry args={[0.9, 0.002, 0.45]} />
    </mesh>
  );
}
