/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#111",
          white: "#f8f7f4",
          accent: "#62E884",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
}
