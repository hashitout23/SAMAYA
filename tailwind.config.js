/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('flowbite/plugin')],
};
