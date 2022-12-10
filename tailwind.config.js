/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE3F",
        secoundary: "#FA5D3A",
        gray1: "#414141",
        gray2:"#F5F5F6",
        gray3:"#EBEDEF",
        gray4:"#FAFBFB",
        gray5:"#E6E6E6",
        green1:"#34A853",
        red1:"#EC0000",
        red2:"#FA5D3A",
        green1:"#34A853",
        blue1:"#236EFF"
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
