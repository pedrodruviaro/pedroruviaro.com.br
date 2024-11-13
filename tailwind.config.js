/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#ffffff",
          300: "#DCD1BF",
          400: "#C3BAAB",
          500: "#4A4A45",
          700: "#111010",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
}
