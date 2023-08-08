/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c1' : "#FFEECC",
        'c2' : "#FFDDCC",
        'c3' : "#FFCCCC",
        'c4' : "#FEBBCC",
      },
      fontFamily: {
        "smg": ['Sorts Mill Goudy', "sans-serif"],
      }
    },
  },
  plugins: [],
}