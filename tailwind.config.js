/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Lalezar: "Lalezar, system-ui",
      Montserrat: "Montserrat, sans-serif",
    },
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(245.74% 150.11% at -13.02% -30.97%, rgba(157, 36, 191, 0.50) 0%, rgba(39, 0, 97, 0.00) 100%), radial-gradient(137.06% 113.98% at 108.52% 65.16%, #9162F0 0%, #100047 100%);",
        "summit-2023":"url('/banners/summit-2023.webp')",
        "summit-2023-responsive":"url('/banners/summit-2023-responsive.webp')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      "violet-crea": {
        300: "#CFB9FC",
        400: "#9162F0",
        500: "#793FC9",
        600: "#2E0667",
        700: "#56008C",
        800: "#0B0030",
      },
      "pink-summit": {
        400: "#FF007E",
        500: "#270061",
      }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
