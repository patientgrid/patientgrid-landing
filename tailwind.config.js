/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        nav: {
          100: "rgba(217, 217, 217, 0.5)",
          200: "#2A0896",
          300: "#F5F5F5",
          400: "rgba(40, 40, 40, 0.7)",
          500: "rgba(72, 209, 204, 0.37)",
          700: "#D9DEEF",
          800: "#4482C2"
        }
      },

      textColor: {
        para: "rgba(40, 40, 40, 0.7)",
        para2: "rgba(0, 0, 0, 0.7)"
      },

      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
