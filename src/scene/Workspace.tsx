import Desk from './objects/Desk';
import Monitor from './objects/Monitor';
import Keyboard from './objects/Keyboard';
import Mouse from './objects/Mouse';
import MousePad from './objects/MousePad';
import Chair from './objects/Chair';
import PC from './objects/PC';
import Shelf from './objects/Shelf';
import Plant from './objects/Plant';
import Books from './objects/Books';
import CoffeeMug from './objects/CoffeeMug';
import Speakers from './objects/Speakers';
import LEDStrip from './objects/LEDStrip';
import DecorativeBox from './objects/DecorativeBox';

export default function Workspace() {
  const deskHeight = 0.745; // Top surface height of the desk

  return (
    <group>
      {/* 1. Main Furniture */}
      <Desk />

      {/* Modern Office Chair, slightly rotated and pulled back */}
      <group position={[0, 0, 0.85]} rotation={[0, Math.PI + 0.1, 0]}>
        <Chair />
      </group>

      {/* Floating Wall Shelf mounted on back wall */}
      <group position={[0, 1.7, -1.6]}>
        <Shelf />
      </group>

      {/* 2. Primary Hardware */}
      {/* Centered Monitor on desk */}
      <Monitor />

      {/* Desktop Tower PC on the right side of the desk */}
      <group position={[0.8, deskHeight, -0.2]} rotation={[0, -0.15, 0]}>
        <PC />
      </group>

      {/* Flanking Studio Speakers (Left and Right) angled inwards */}
      <group position={[-0.56, deskHeight, -0.28]} rotation={[0, 0.25, 0]}>
        <Speakers />
      </group>
      <group position={[0.56, deskHeight, -0.28]} rotation={[0, -0.25, 0]}>
        <Speakers />
      </group>

      {/* 3. Desk Mat and Peripherals */}
      <MousePad />
      <Keyboard />
      <group position={[0.28, 0, 0.06]}>
        <Mouse />
      </group>

      {/* 4. Lighting Accents */}
      {/* LED Strip mounted to back edge of the desk */}
      <group position={[0, deskHeight + 0.005, -0.485]}>
        <LEDStrip />
      </group>

      {/* 5. Props & Decor */}
      {/* Stack of books on left side of desk */}
      <group position={[-0.8, deskHeight, -0.15]} rotation={[0, 0.1, 0]}>
        <Books />
      </group>

      {/* Coffee mug to the left of the keyboard */}
      <group position={[-0.32, deskHeight, 0.12]} rotation={[0, -0.4, 0]}>
        <CoffeeMug />
      </group>

      {/* Potted succulent plant on the floating shelf */}
      <group position={[0.4, 1.715, -1.55]}>
        <Plant />
      </group>

      {/* Decorative storage box on the floating shelf */}
      <group position={[-0.4, 1.715, -1.55]} rotation={[0, 0.05, 0]}>
        <DecorativeBox />
      </group>
    </group>
  );
}
