/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Theme
        fontPrimaryLt: "var(--font-primary-lt)",
        fontSecondaryLt: "var(--font-secondary-lt)",
        bgPrimaryLt: "var(--bg-primary-lt)",
        bgSecondaryLt: "var(--bg-secondary-lt)",
        bgSecondaryTransLt: "var(--bg-secondary-trans-lt)",
        tabletLt: "var(--tablet-lt)",
        focusPrimeryLt: "var(--focus-primary-lt)",
        focusSecondaryLt: "var(--focus-secondary-lt)",
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
