import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: "#00a7ef",
          hover: "#0094d1",
          escuro: "#334a73",
        },
        preto: "#333",
        branco: "#fff",
        cinza: {
          DEFAULT: "#6c6c6c",
          footer: "#7D7C7C",
          claro: "#26272b",
          escuro: "#1b1b1d",
        },
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
