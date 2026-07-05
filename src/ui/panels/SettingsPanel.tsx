import { useEffect, useState } from 'react';
import { useAppStore } from '@/state/useAppStore';
import { CAMERA_STATES } from '@/config/cameraStates';
import Card from '@/ui/components/Card';
import Heading from '@/ui/components/Heading';
import Button from '@/ui/components/Button';
import { motion } from 'framer-motion';
import { Sliders, RefreshCw, Sun, Moon, ShieldAlert, Cpu } from 'lucide-react';
import gsap from 'gsap';

function FPSCounter() {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const tick = () => {
      frameCount++;
      const time = performance.now();
      if (time >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <span className="text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 border border-accent-blue/20 rounded">
      {fps} FPS
    </span>
  );
}

export default function SettingsPanel() {
  const isLiteMode = useAppStore((s) => s.isLiteMode);
  const toggleLiteMode = useAppStore((s) => s.toggleLiteMode);
  const qualityTier = useAppStore((s) => s.qualityTier);
  const setQualityTier = useAppStore((s) => s.setQualityTier);
  const camera = useAppStore((s) => s.camera);
  const activeSection = useAppStore((s) => s.activeSection);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const handleResetCamera = () => {
    if (!camera) return;
    const state = CAMERA_STATES[activeSection];
    if (!state) return;

    // Animate camera position, target lookAt and fov back to current section config
    gsap.to(camera.position, {
      x: state.position[0],
      y: state.position[1],
      z: state.position[2],
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => {
        camera.lookAt(state.target[0], state.target[1], state.target[2]);
      },
    });

    gsap.to(camera, {
      fov: state.fov,
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    });
  };

  return (
    <div className="absolute right-4 md:right-12 top-24 bottom-24 w-[92%] max-w-md md:max-w-lg pointer-events-none flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-auto"
      >
        <Card variant="glass" padding="lg" className="max-h-[75vh] overflow-y-auto custom-scrollbar flex flex-col gap-6">
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 border-b border-white/5 pb-4">
            <Sliders className="w-6 h-6 text-accent-blue" />
            <Heading level={2} variant="h2" prefixText="// CONTROLS">
              Settings
            </Heading>
          </motion.div>

          {/* Performance stats (FPS) */}
          <motion.div variants={itemVariants} className="flex items-center justify-between p-3.5 bg-white/5 border border-white/5 rounded-lg shadow-glass-sm">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-accent-blue" />
              <span className="text-xs text-text-primary font-bold">System Performance</span>
            </div>
            <FPSCounter />
          </motion.div>

          {/* Lite Mode Toggle */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary">
              Rendering Mode
            </span>
            <div className="p-3.5 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between shadow-glass-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-primary font-bold">Lite Mode (No 3D)</span>
                <span className="text-[10px] text-text-secondary leading-normal font-sans max-w-[200px]">
                  Disables WebGL canvas to optimize battery life and performance.
                </span>
              </div>
              <button
                onClick={toggleLiteMode}
                className={`
                  relative w-11 h-6 rounded-full transition-colors duration-200 outline-none
                  focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base
                  ${isLiteMode ? 'bg-accent-blue' : 'bg-white/20'}
                `}
                aria-label="Toggle Lite Mode"
                aria-pressed={isLiteMode}
              >
                <div
                  className={`
                    w-4 h-4 rounded-full bg-text-primary shadow transition-transform duration-200
                    ${isLiteMode ? 'translate-x-6' : 'translate-x-1'}
                  `}
                />
              </button>
            </div>
          </motion.div>

          {/* Graphics Quality */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary">
              Graphics Quality
            </span>
            <div className="grid grid-cols-3 gap-2 bg-white/5 p-1 rounded-lg border border-white/5 shadow-glass-sm">
              {(['low', 'medium', 'high'] as const).map((tier) => {
                const isActive = qualityTier === tier;
                return (
                  <button
                    key={tier}
                    onClick={() => setQualityTier(tier)}
                    disabled={isLiteMode}
                    className={`
                      py-1.5 rounded text-xs font-semibold capitalize tracking-wide transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue
                      ${isActive ? 'bg-white/10 text-text-primary shadow-glass-sm border border-white/10' : 'text-text-secondary hover:text-text-primary border border-transparent'}
                      disabled:opacity-40 disabled:pointer-events-none
                    `}
                    aria-label={`Set graphics quality to ${tier}`}
                  >
                    {tier}
                  </button>
                );
              })}
            </div>
            {isLiteMode && (
              <span className="text-[9px] text-accent-purple font-medium flex items-center gap-1.5 px-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Graphics quality controls are disabled in Lite Mode.
              </span>
            )}
          </motion.div>

          {/* Camera Controls */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2.5 mt-1 border-t border-white/5 pt-4">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary">
              Camera Viewport
            </span>
            <div className="flex items-center justify-between p-3.5 bg-white/5 border border-white/5 rounded-lg shadow-glass-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-primary font-bold">Reset Camera</span>
                <span className="text-[10px] text-text-secondary leading-normal font-sans max-w-[200px]">
                  Recalibrates position, target coordinates, and field of view.
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetCamera}
                iconLeft={<RefreshCw className="w-3.5 h-3.5" />}
              >
                Reset
              </Button>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
