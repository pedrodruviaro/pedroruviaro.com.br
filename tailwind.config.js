/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#111",
          white: "#f8f7f4",
          pink: "#FF79C6",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
}
