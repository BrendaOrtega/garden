const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#0E0E11",
        iron: {
          300: "#a1a1a1",
          400: "#959595",
          500: "#373C50",
          800: "#1D1C20",
        },
        brand: {
          200: "#F1AFAA",
          500: "#E9786E",
        },
        greenlight: "#6CC597",
        lila: "#9A99EA",
        ironblue: "#00F7E2",
        bird: "#FFA800",
        water: "#6E85BB",
        sun: "#E8B140",
        blood: "#E63737",
        salmon: "#BD5648",
      },
      backgroundImage: {
        stars: "url('/assets/stars.png')",
        formmy: "url('/assets/formmy/back.png')",
        flink: "url('/assets/flink/back.png')",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
