/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        lightBg: "url('/assets/svgBgLight.svg')",
        darkBg: "url('/assets/svgBgDark.svg')",
      },
    },
  },
  plugins: [],
};
