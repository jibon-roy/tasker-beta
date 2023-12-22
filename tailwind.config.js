/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'primary-green': '#00BF63',
      'secondary-green': '#92DEBC',
      'primary-bg': '#EBF0EC',
      'primary-text': '#161616',
      'white': '#FFFFFF'
    },
    extend: {},
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
}

