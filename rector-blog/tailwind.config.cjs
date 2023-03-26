/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};
