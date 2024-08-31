/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--charcoal)",
        canvas: {
          default: "#ebe6e2",
          100: "#fbfaf9",
          200: "#f7f5f3",
          300: "#f3f0ee",
          400: "#efebe8",
          500: "#ebe6e2",
          600: "#bcb8b5",
          700: "#8d8a88",
          800: "#5e5c5a",
          900: "#2f2e2d"
},
      },
      fontFamily: {
        inter: ["Inter"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
