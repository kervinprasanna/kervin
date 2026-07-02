/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'accent-color': '#6366f1',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'border-color': '#27272a',
      },
    },
  },
  plugins: [],
}
