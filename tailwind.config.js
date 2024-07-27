/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-FF': '#FFF099',
        'kakao-yellow': '#FEE500',
      },
      boxShadow: {
        'custom-top-left': '-4px -4px 10px rgba(0, 0, 0, 0.5)',
        'custom-top-right': '4px -4px 10px rgba(0, 0, 0, 0.5)',
        'custom-bottom-left': '-4px 4px 10px rgba(0, 0, 0, 0.5)',
        'custom-bottom-right': '4px 4px 10px rgba(0, 0, 0, 0.5)',
        custom: '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
