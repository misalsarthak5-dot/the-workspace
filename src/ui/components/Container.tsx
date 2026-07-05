import { type ReactNode } from 'react';

export interface ContainerProps {
  /** Responsive width constraint tier */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: ReactNode;
}

export default function Container({
  size = 'lg',
  className = '',
  children,
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl', // Reading width
    md: 'max-w-5xl', // Narrow layout
    lg: 'max-w-7xl', // Default dashboard layout
    xl: 'max-w-[90rem]', // Ultra-wide layout
    full: 'max-w-full', // Unconstrained width
  };

  return (
    <div
      className={`
        w-full
        mx-auto
        px-4
        sm:px-6
        md:px-8
        ${sizeClasses[size]}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}
