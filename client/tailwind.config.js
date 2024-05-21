/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary: "#26272D", //#26272D
        bgSecondary: "#31353C",
        primaryBlue: "#56E1E1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        'advent-pro': ["Advent Pro", "sans-serif"],
        'bad-script': ["Bad Script", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow:{
        'glow':"0px 0px 20px #31353C"
      }
    },
  },
  plugins: [],
}

