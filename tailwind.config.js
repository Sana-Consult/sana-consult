/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        sana_dark: {
          100: '#7A7977',
          200: `#484745`,
          300: '#3F3C39',
          400: '#32302E',
        },
        sana_light: {
          100: '#F7F4F2',
          200: `#F0EBE9`,
          300: '#E6DFDC',
          400: '#DED6D4',
        },
        sana_red: {
          100: '#B70E0C',
          200: `#A01007`,
          300: '#881001',
          400: '#700E00',
        },
      },

    },
  },
  plugins: [],
}
