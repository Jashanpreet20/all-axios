/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:"#6439FF",
        dlt:"#092635",
        edit:"#4B527E"
      }
    },
  },
  plugins: [],
}

