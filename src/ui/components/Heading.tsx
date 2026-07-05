import { type ReactNode, type ElementType } from 'react';

export interface HeadingProps {
  /** The semantic HTML tag level to render */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** The visual style variant of the heading */
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Apply gradient styling using the accent colors */
  gradient?: boolean;
  /** Render using the JetBrains Mono typeface */
  mono?: boolean;
  /** Optional prefix text, formatted like a terminal or code comment (e.g. "// 01 — ") */
  prefixText?: string;
  /** Additional CSS classes */
  className?: string;
  /** Children nodes */
  children: ReactNode;
  /** Optional ID for linking/anchoring */
  id?: string;
}

export default function Heading({
  level = 2,
  variant,
  gradient = false,
  mono = false,
  prefixText,
  className = '',
  children,
  id,
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;
  const visualVariant = variant || `h${level}`;

  // Build the tailwind base styles for typography scale
  const variantStyles = {
    display: 'text-display font-bold tracking-tight',
    h1: 'text-4xl md:text-5xl font-extrabold tracking-tight',
    h2: 'text-2xl md:text-3xl font-bold tracking-tight',
    h3: 'text-xl md:text-2xl font-bold tracking-tight',
    h4: 'text-lg md:text-xl font-semibold',
    h5: 'text-base font-semibold',
    h6: 'text-sm font-semibold tracking-wider uppercase',
  };

  const baseStyles = mono ? 'font-mono' : 'font-sans';
  const colorStyles = gradient
    ? 'gradient-text bg-gradient-to-r from-accent-blue to-accent-purple'
    : 'text-text-primary';

  return (
    <Tag
      id={id}
      className={`
        ${baseStyles}
        ${variantStyles[visualVariant]}
        ${colorStyles}
        leading-heading
        ${className}
      `.trim()}
    >
      {prefixText && (
        <span className="font-mono text-xs md:text-sm text-text-secondary mr-2 block sm:inline mb-1 sm:mb-0 opacity-70">
          {prefixText}
        </span>
      )}
      <span>{children}</span>
    </Tag>
  );
}
