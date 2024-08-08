/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vallayf: {
          50: "#F5F6F6",
          100: "#E4E7E9",
          200: "#CCD1D5",
          300: "#A9B1B7",
          400: "#7E8892",
          500: "#626C78",
          600: "#545B66",
          700: "#484E56",
          800: "#40444A",
          900: "#393B40",
          950: "#111214",
          riot: "#EB0029",
          purple: "#A670F0",
        },
      },
    },
  },
  plugins: [],
};
