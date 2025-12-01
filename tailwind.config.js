/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316', // Using Tailwind orange-500 as a base, can be adjusted
          graphite: '#1F2937', // Using Tailwind gray-800 as graphite
          light: '#F3F4F6', // Light gray for background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming Inter or similar clean font
      }
    },
  },
  plugins: [],
}
