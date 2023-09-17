/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popdown: {
          "0%": {
            transformOrigin: "top",
            transform: "scale(1 , 0) translateY(-130px)",
            opacity: "0",
          },
          "100%": {
            transform: "scaleY(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        popdown: "popdown .3s ease 1 ",
      },
    },
  },
  plugins: [],
};
