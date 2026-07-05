import { Canvas } from '@react-three/fiber';
import { AdaptiveEvents, AdaptiveDpr } from '@react-three/drei';
import CameraRig from './CameraRig';
import CameraController from './CameraController';
import Lighting from './Lighting';
import Environment from './Environment';
import Ground from './Ground';
import { useAppStore } from '@/state/useAppStore';
import { useAdaptiveQuality } from '@/hooks/useAdaptiveQuality';

function AdaptiveQualityController() {
  useAdaptiveQuality();
  return null;
}

export default function SceneRoot() {
  const isLite = useAppStore((s) => s.isLiteMode);
  const qualityTier = useAppStore((s) => s.qualityTier);

  if (isLite) return null;

  // Resolve rendering configuration based on current quality tier
  const dpr = qualityTier === 'high' ? 2 : qualityTier === 'medium' ? 1.5 : 1.0;
  const antialias = qualityTier !== 'low';
  const shadows = qualityTier !== 'low';

  return (
    <Canvas
      shadows={shadows ? 'soft' : false}
      dpr={dpr}
      gl={{
        antialias,
        powerPreference: 'high-performance',
        alpha: false,
        stencil: false,
        depth: true,
      }}
      className="absolute inset-0 w-full h-full pointer-events-none"
      eventSource={document.getElementById('root') || undefined}
      eventPrefix="client"
    >
      <AdaptiveEvents />
      <AdaptiveDpr pixelated />
      <AdaptiveQualityController />
      <CameraRig />
      <CameraController />
      <Lighting />
      <Environment />
      <Ground />
    </Canvas>
  );
}
