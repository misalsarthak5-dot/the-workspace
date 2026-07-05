import { type ReactNode } from 'react';

export interface SectionProps {
  /** Section ID, useful for routing and anchor links */
  id?: string;
  /** Vertical padding scale */
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Accessibility labeling (aria-label) */
  label?: string;
  /** ID of the element that labels this section (aria-labelledby) */
  labelledBy?: string;
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: ReactNode;
}

export default function Section({
  id,
  spacing = 'md',
  label,
  labelledBy,
  className = '',
  children,
}: SectionProps) {
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  return (
    <section
      id={id}
      aria-label={label}
      aria-labelledby={labelledBy}
      className={`
        w-full
        ${spacingClasses[spacing]}
        ${className}
      `.trim()}
    >
      {children}
    </section>
  );
}
