/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#583da1",
        secondary: "#2a70b8",
        tertiary: "#12131a",
        quaternary: "#e8e8e8",
        quinary: "#ffffff",
      },
    },
  },
  plugins: [],
};
