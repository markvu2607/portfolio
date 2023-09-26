import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
      white: "#FFFFFF"
    },
    screens: {
      laptop: "1024px"
    },
    extend: {
      boxShadow: {
        "main-button-start": "inset 0 0 20px rgba(199, 120, 221, 0)",
        "main-button-end": "inset 0 0 20px rgba(199, 120, 221, 0.5), 0 0 20px rgba(199, 120, 221, 0.2)",
      },
    }
  },
  plugins: [],
}
export default config
