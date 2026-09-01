/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./study.html",
    "./src/study/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        surfaceHover: '#F1F5F9',
        primary: '#09984C',
        elite: '#8B5CF6',
        warning: '#F97316',
        gold: '#F59E0B'
      }
    },
  },
  plugins: [],
}
