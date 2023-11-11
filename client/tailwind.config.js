/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mycolor": "#3c6e71",
        "headercolor" :"#57cc99"
      }
    },
    
  },
  plugins: [],
}