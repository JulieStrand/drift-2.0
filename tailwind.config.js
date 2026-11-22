/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html", "./styles/input.css"],
  safelist: ["top-0", "right-0", "bottom-0", "left-0"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        condensed: ['"Roboto Condensed"', "sans-serif"],
      },
      animation: {
        fade: "fade 21s infinite",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "0" },
          "5%, 30%": { opacity: "1" },
          "35%, 100%": { opacity: "0" },
        },
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [],
};
