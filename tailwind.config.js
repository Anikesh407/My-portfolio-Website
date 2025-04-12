/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure this includes your App.jsx file
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      white: "#f1e1d9",
      black: "#1e1917",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      cyan: "#00ffff",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      gray: "#626965",
      lightGray: "#978580",
      darkGray: "#3f4441",
    },
    extend: {

      boxShadow: {
        cyanshadow: "0px 0px 20px 0px rgba(0, 255, 255, 0.5)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94,206,220,0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240,169,79,0.5)"

      },
    },
    fontFamily: {
      body: ['josefin sans'],
      special: ['Roboto']
    }
  },
  plugins: [],
};