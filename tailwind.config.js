/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'button-color': 'linear-gradient(270deg, #EC47FE 0%, #77D0FD 100%)',
        'button-color-hover': 'linear-gradient(270deg, #77D0FD 0%, #EC47FE 100%)'
      }
    },
  },
  plugins: [],
}
