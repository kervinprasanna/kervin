/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F8FAFC',
        'card': '#FFFFFF',
        'primary': '#1E3A8A',
        'accent': '#3B82F6',
        'secondary-accent': '#14B8A6',
        'heading': '#0F172A',
        'body': '#475569',
        'border-soft': '#E2E8F0',
      },
    },
  },
  plugins: [],
}
