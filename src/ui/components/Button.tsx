import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

type CommonProps = {
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'glass' | 'outline';
  /** Button sizing scale */
  size?: 'sm' | 'md' | 'lg';
  /** Icon to render before text */
  iconLeft?: ReactNode;
  /** Icon to render after text */
  iconRight?: ReactNode;
  /** Show loading spinner and disable interactions */
  isLoading?: boolean;
  /** Anchor URL (renders as <a> instead of <button>) */
  href?: string;
  /** For <a> element: target attribute */
  target?: string;
  /** For <a> element: rel attribute */
  rel?: string;
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: ReactNode;
};

// Combine button attributes and anchor attributes safely
export type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;

export default function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  isLoading = false,
  href,
  target,
  rel,
  className = '',
  children,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  const isLink = !!href;
  const isDisabled = disabled || isLoading;

  const baseStyles = `
    inline-flex items-center justify-center
    font-sans font-medium rounded-lg
    transition-all duration-200 ease-out
    active:scale-[0.97]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base
    disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100
  `.trim();

  const variantStyles = {
    primary: 'bg-accent-gradient text-text-primary hover:shadow-accent-glow border border-transparent shadow-md',
    secondary: 'bg-transparent border border-accent-purple text-text-primary hover:bg-accent-purple/10 hover:shadow-[0_0_15px_rgba(155,92,255,0.15)]',
    glass: 'bg-white/5 border border-white/10 text-text-primary backdrop-blur-glass hover:bg-white/10 hover:border-white/20 shadow-glass-sm',
    outline: 'bg-transparent border border-white/20 text-text-secondary hover:border-white/40 hover:text-text-primary',
  };

  const sizeStyles = {
    sm: 'text-xs py-1.5 px-3 gap-1.5',
    md: 'text-sm py-2 px-4 gap-2',
    lg: 'text-base py-2.5 px-5 gap-2.5',
  };

  const loadingSpinner = (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const sharedClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  if (isLink) {
    return (
      <a
        href={isDisabled ? undefined : href}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        className={sharedClasses}
        aria-disabled={isDisabled ? true : undefined}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {!isLoading && iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
        {isLoading && loadingSpinner}
        <span>{children}</span>
        {!isLoading && iconRight && <span className="flex-shrink-0">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={sharedClasses}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {!isLoading && iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      {isLoading && loadingSpinner}
      <span>{children}</span>
      {!isLoading && iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </button>
  );
}
