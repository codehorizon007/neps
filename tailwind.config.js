/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu": ["NeueMachina", 'sans-serif'],
        "HelveticaNeue": ["HelveticaNeue", 'sans-serif'],
        "HelveticaNeue-Light": ["HelveticaNeue-light", 'sans-serif'],
        "poppins": ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [],
}