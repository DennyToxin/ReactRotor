/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fontPrimaryLt: "var(--charcoal)",
        bgPrimaryLt: "var(--bg-primary-lt)",
        bgSecondaryLt: "var(--bg-secondary-lt)",
        bgShadow: "var(--bg-shadow)",
        buttonPrimary: "var(--button-primary)",
        buttonSecondary: "var(--button-secondary)",
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
