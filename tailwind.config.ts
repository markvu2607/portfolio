import type { Config } from "tailwindcss";

import { addVariablesForColors } from "./src/styles/plugins/add-variables-for-colors";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#C778DD",
      gray: "#ABB2BF",
      background: "#282C33",
      turquoise: "#55B6C2",
      sky: "#62AEEF",
      tan: "#E5C07A",
      lime: "#98C379",
      coral: "#E06B74",
      white: "#FFFFFF",
    },
    screens: {
      laptop: "1024px",
    },
    extend: {
      boxShadow: {
        "main-button-start": "inset 0 0 20px rgba(199, 120, 221, 0)",
        "main-button-end":
          "inset 0 0 20px rgba(199, 120, 221, 0.5), 0 0 20px rgba(199, 120, 221, 0.2)",
      },
      keyframes: {
        appear: {
          from: {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        appear: "appear 500ms ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
};
export default config;
