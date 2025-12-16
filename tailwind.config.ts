import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Requires 'dark' class on html element to enable dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
