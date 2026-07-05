import { type ReactNode, type ElementType } from 'react';

export interface CardProps {
  /** The semantic HTML element to render */
  as?: ElementType;
  /** Visual style: 'glass' (default 3D style) or 'solid' (fallback/Lite style) */
  variant?: 'glass' | 'solid';
  /** Enables hover lifting and shadow glow animations */
  hoverable?: boolean;
  /** Card padding scale */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Custom Tailwind CSS classes */
  className?: string;
  /** Children nodes */
  children: ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

export default function Card({
  as = 'div',
  variant = 'glass',
  hoverable = false,
  padding = 'md',
  className = '',
  children,
  onClick,
}: CardProps) {
  const Tag = as;

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  // Base styling for glass panels vs high-contrast solid panels
  const variantClasses = {
    glass: 'bg-bg-panel backdrop-blur-glass border border-border-glass shadow-glass-md rounded-panel',
    solid: 'bg-[#14141E] border border-white/10 shadow-lg rounded-panel',
  };

  const interactiveClasses = hoverable
    ? 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-accent-glow hover:border-accent-blue/30 cursor-pointer'
    : '';

  return (
    <Tag
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${interactiveClasses}
        ${className}
      `.trim()}
    >
      {children}
    </Tag>
  );
}
