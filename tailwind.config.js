/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oga-gold': '#ffd700',
        'oga-dark': '#1a1a1a',
        'oga-gray': '#2a2a2a',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}