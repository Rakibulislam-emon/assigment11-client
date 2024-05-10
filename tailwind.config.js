/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:"'Roboto Slab', serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
