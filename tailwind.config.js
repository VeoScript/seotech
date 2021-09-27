const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
