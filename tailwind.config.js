/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  darkMode:"class",
  
  theme: {
    extend: {
      boxShadow: {
        'hero': ' 0 0 7px rgba(0,0,0,.9)',
      },
      screens: {
        'tablet': '400px',
      }
    },
  },
  plugins: [],
}

