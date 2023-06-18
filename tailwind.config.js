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
      'gotham-book': ["Gotham-book", 'sans-serif'],
      'poppin' : ['"poppins"', 'sans-serif'],
      'poppin-thin': ['"poppins"', 'sans-serif'],
      'poppin-bold': ['"poppins"', 'sans-serif'],
      'poppin-light': ['"poppins"', 'sans-serif'],
      'poppin-book': ['"poppins"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

