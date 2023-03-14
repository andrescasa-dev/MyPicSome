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
        main: 'minmax(1rem, 1fr) repeat(4, 77px) minmax(1rem, 1fr)',
        landing: 'minmax(.3rem, 1fr) minmax(0, 80rem) minmax(.3rem, 1fr)'
      }
    }
  },
  plugins: []
}
