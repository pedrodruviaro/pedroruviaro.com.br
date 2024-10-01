/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        main: ["Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          100: "#f7f4f1",
          700: "#31312f",
          primary: "#e2e3dd",
        },
      },
    },
  },

  // plugins: [require("@tailwindcss/typography")],
}
