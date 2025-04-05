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
          900: '#121212',
        },
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}