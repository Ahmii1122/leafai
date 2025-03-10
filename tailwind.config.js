/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      overlock: ["Overlock", "sans-serif"],
      opensans: ["Open-sans", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      maxWidth: {
        contained: "1440px",
      },
      colors: {
        primary: "#317B22",
        "primary-dark": "#317B22",
        secondary: "#90DE78",
        "secondary-light": "#BBF9A8",
        gray: "#6D6D6D",
        "green-light": "#629C56",
      },
    },
  },
  plugins: [],
};
