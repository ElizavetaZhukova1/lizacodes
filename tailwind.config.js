/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white_bg': '#F5F5F5',
        'blue_light': '#2872DF',
        'blue_dark': '#0645C1',
        'black_bg': '#030303',
      },
      fontFamily: {
        head_text: ['Abel', 'sans-serif'],
        body_text: ['"Crimson Text"', 'serif'],
        hl_text: ['"Crimson Text"', 'serif'],
      },
      screens:{
        'xs': '350px',
        'md':'800px'
      }
    },
  },
  plugins: [],
}

