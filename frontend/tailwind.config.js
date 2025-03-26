/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#000000',
        'dark-gray': '#1E1F26',
        'darker-gray': '#1A1B20',
        'card-bg': '#232629',
        'primary': '#00E076',
        'secondary': '#86858A',
        'orange': '#FF8900',
        'purple': '#097944',
        'input-bg': '#1C1D1F',
        'border-gray': '#383A40',
      },
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      },
      gradientColorStops: {
        'gradient-start': '#000000',
        'gradient-end': '#1A1B20',
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  plugins: [],
}

