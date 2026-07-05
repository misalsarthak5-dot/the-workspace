/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0A0A0F',
        'bg-panel': 'rgba(20, 20, 30, 0.55)',
        'border-glass': 'rgba(255, 255, 255, 0.08)',
        'accent-blue': '#4F8CFF',
        'accent-purple': '#9B5CFF',
        'text-primary': '#F5F5FA',
        'text-secondary': '#A0A0B8',
        success: '#4FDE8C',
        warning: '#FFB84F',
        error: '#FF5C7A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      lineHeight: {
        body: '1.5',
        heading: '1.15',
      },
      borderRadius: {
        panel: '1rem', // 16px = rounded-2xl baseline
      },
      backdropBlur: {
        glass: '12px',
      },
      spacing: {
        // 8px base spacing scale
        '0.5': '4px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
        '12': '96px',
        '16': '128px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #4F8CFF, #9B5CFF)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
