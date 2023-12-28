/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#f70500",
        "accent": "#E88107"
        // "accent": "#fad749",
      }
    },
    screens: {
      xs: "360px",
    },
  },
  plugins: [],
}

