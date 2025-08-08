/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'font-denton',
    'font-thin',
    'font-light', 
    'font-normal',
    'font-medium',
    'font-bold',
    'font-extrabold',
    'font-black'
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        denton: ['"Denton Test"', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        comet: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(140%)', opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        comet: 'comet 3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // ✅ scroll plugin
  ],
}
