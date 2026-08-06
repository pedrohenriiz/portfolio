/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blueprint: {
          950: '#081019',
          900: '#0B1622',
          800: '#122236',
          700: '#183050',
          600: '#1F3B57',
        },
        ice: {
          300: '#A9E7F0',
          400: '#7FD8E8',
          500: '#4FC2D6',
        },
        paper: {
          50: '#EDEFF2',
          200: '#C7CCD4',
        },
        amber: {
          400: '#E8A33D',
          500: '#D6902A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(#1F3B57 1px, transparent 1px), linear-gradient(90deg, #1F3B57 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
};
