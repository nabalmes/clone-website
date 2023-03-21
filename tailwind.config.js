/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'button-color': 'linear-gradient(270deg, #45bcde 0%, #77D0FD 100%)',
        'button-color-hover': 'linear-gradient(270deg, #77D0FD 0%, #45bcde 100%)',

        /** Background */
        'bg-1': 'linear-gradient(60deg, #3FB5FD38 0%, #45bcde 100%)',
      }
    },
  },
  plugins: [],
}
