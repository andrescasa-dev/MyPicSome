/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: 'Merriweather Sans'
    },
    extend: {
      gridTemplateColumns: {
        main: 'minmax(1rem, 1fr) repeat(4, 77px) minmax(1rem, 1fr)'
      }
    }
  },
  plugins: []
}
