const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'red-orange': '#fe4a22',
      'yellow-sunglow': '#ffd026',
      'onyx': '#383838',
      'light-silver': '#d9d9d9'
    }
  },
  darkMode: "class",
  plugins: [heroui(
      {
        themes: {
          light: {
            colors: {
              background: "#F9F9F9",
              primary: {
                DEFAULT: "#fe4a22",
                foreground: "white",
              }
            }
          },
          dark: {
            colors: {
              primary: {
                DEFAULT: "#fe4a22",
                foreground: "white",
              }
            }
          }
        }
      }
  )]
}