/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./study.html",
    "./src/study/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#1A1A1A',
        surfaceHover: '#2A2A2A',
        primary: '#09984C',
        elite: '#8B5CF6',
        warning: '#F97316',
        gold: '#F59E0B'
      }
    },
  },
  plugins: [],
}
