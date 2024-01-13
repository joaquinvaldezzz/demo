/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.astro',
    './src/layouts/**/*.astro',
    './src/pages/**/*.astro',
    './src/scripts/**/*.js',
  ],
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
