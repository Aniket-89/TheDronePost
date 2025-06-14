/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#0A0A0A',
        secondary: '#14F195',
        accent: '#1A1A1A',
        muted: '#666666',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'grid-fade': 'grid-fade 3s ease-in-out infinite',
        'type': 'type 4s steps(40) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(20, 241, 149, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(20, 241, 149, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
        'type': {
          '0%': { width: '0ch' },
          '50%': { width: '40ch' },
          '100%': { width: '0ch' },
        },
      },
    },
  },
  plugins: [],
};