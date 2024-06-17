/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.html"],
  darkMode:"class",
  theme: {
    fontFamily: {

    'ansh': ['Helvetica', 'Arial', 'sans-serif'],
    },


    extend: {
      boxShadow: {
        'card': ' 0px 3px 8px rgb(0, 0, 0);',
      }
    },
  plugins: [],
}

}