/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-green': '#00BF63',
      'secondary-green': '#00BF63',
      'primary-bg': '#EBECF0',
      'primary-text': '#161616'
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}

