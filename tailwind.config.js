/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation :{
        blob: "blob 7s infinite",
      },
      keyframes : {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      

      colors: {
        cornelia: {
        softpink: "#FF96A2",
        darkpink: "#F17694",
        softwhite: "#FCFBFC",
        jetblack: "#474344",
        },
      },
    },
  },
  plugins: [],
}

