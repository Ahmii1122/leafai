/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      overlock: ["Overlock", "sans-serif"],
      opensans: ["Open-sans", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      maxWidth: {
        contained: "1260px",
      },
      colors: {
        primary: "#317B22",
      },
    },
  },
  plugins: [],
};
