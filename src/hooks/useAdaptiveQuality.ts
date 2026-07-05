import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useAppStore } from '@/state/useAppStore';

export function useAdaptiveQuality() {
  const qualityTier = useAppStore((s) => s.qualityTier);
  const setQualityTier = useAppStore((s) => s.setQualityTier);
  const toggleLiteMode = useAppStore((s) => s.toggleLiteMode);

  const frameTimes = useRef<number[]>([]);
  const lastTime = useRef<number>(performance.now());
  const cooldownActive = useRef<boolean>(false);

  useFrame(() => {
    const now = performance.now();
    const delta = now - lastTime.current;
    lastTime.current = now;

    // Skip tracking during active cooling period (e.g. after a quality step down)
    if (cooldownActive.current) return;

    frameTimes.current.push(delta);
    if (frameTimes.current.length > 120) { // Check every 2 seconds (~120 frames at 60 FPS)
      const avgFrameTime = frameTimes.current.reduce((a, b) => a + b, 0) / frameTimes.current.length;
      frameTimes.current = [];

      const avgFps = 1000 / avgFrameTime;

      // If average FPS drops below 45, degrade quality
      if (avgFps < 45) {
        if (qualityTier === 'high') {
          setQualityTier('medium');
          triggerCooldown();
        } else if (qualityTier === 'medium') {
          setQualityTier('low');
          triggerCooldown();
        } else if (qualityTier === 'low') {
          // If already low and still struggling, fall back to Lite Mode
          toggleLiteMode();
        }
      }
    }
  });

  const triggerCooldown = () => {
    cooldownActive.current = true;
    setTimeout(() => {
      cooldownActive.current = false;
      lastTime.current = performance.now();
    }, 4000); // 4-second cooldown before checking again
  };
}
