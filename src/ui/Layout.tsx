import { type ReactNode } from 'react';

export interface LayoutProps {
  /** Additional CSS classes for the outer wrapper */
  className?: string;
  /** Children elements */
  children: ReactNode;
}

export default function Layout({ className = '', children }: LayoutProps) {
  return (
    <div
      className={`
        min-h-screen
        w-full
        bg-bg-base
        text-text-primary
        flex
        flex-col
        relative
        overflow-x-hidden
        antialiased
        ${className}
      `.trim()}
    >
      {/* 
        Grid backdrop - subtle design touch that gives a premium tech/canvas feel 
        without introducing heavy visual weight or performance issues.
      */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col relative z-10">
        {children}
      </main>
    </div>
  );
}
