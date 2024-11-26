/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '20%, 40%, 60%, 80%' :{
            transform: 'translateX(1%)'
          },
          '10%, 30%, 50%, 70%, 90% ':{
            transform: 'translateX(-1%)'
          },
          'from, to': {
            transform: 'none'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      }

    },
  },
  plugins: [],
}