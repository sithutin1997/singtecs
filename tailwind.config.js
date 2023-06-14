/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'gotham-thin': ["Gotham-thin", 'sans-serif'],
      'gotham-bold': ["Gotham-bold", 'sans-serif'],
      'gotham-light': ["Gotham-light", 'sans-serif'],
      'gotham-book': ["Gotham-book", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

