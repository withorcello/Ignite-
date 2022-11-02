/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#fff",

      grey: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },
      cyan: {
        500: "#61dafb",
        400: "#8fe7ff",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
