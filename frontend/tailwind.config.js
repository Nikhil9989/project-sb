/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'skill-bridge-primary': '#4A90E2',
        'skill-bridge-secondary': '#50C878',
        'obsidian': {
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#2a323f',
          700: '#1f2937',
          800: '#1a1a1a',
          900: '#121212',
          950: '#0a0a0a',
        },
        'gold': {
          400: '#FFD700',
          500: '#FFC107',
          600: '#FF9800',
        },
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'display': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(150%)' },
        },
      },
    },
  },
  plugins: [],
}