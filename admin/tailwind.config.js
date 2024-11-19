/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FBF9F3',
        'primary-dark': "#beb99b",
        'primary-light': '#C9C5B1',
        'text-dark': '#4b4942',
        'text-light': '#787569',
        'dark': '#272723',
        'accent':'#C95E3C'
      }
    },
  },
  plugins: [],
}
