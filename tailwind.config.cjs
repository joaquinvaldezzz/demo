/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/scripts/**/*.js'],
  theme: {
    container: {
      screens: {
        xl: '1280px',
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
