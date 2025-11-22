/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glitch': 'glitch 5s infinite',
        'scan': 'scan 2s linear infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-1px, 1px)' },
          '94%': { transform: 'translate(1px, -1px)' },
          '96%': { transform: 'translate(-2px, 0)' },
          '98%': { transform: 'translate(0, 2px)' },
        },
        scan: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}
