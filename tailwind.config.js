/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'disney-blue': '#0a84ff',
        'disney-black': '#040714',
        'disney-dark-gray': '#181818',
        'disney-light-gray': '#f9f9f9',
        'disney-white': '#f9f9f9',
      },
      backgroundImage: {
        'disney-background': "url('./assets/images/disney-background.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar'),
  ],
}