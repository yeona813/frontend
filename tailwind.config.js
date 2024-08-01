/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-FF': '#FFF099',
        'kakao-yellow': '#FEE500',
        'yellow-FA': '#FAF9F3',
        'gray-D1': '#D1D1D1',
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
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'click']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.perspective-1100': {
          perspective: '1100px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'click']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.transformStyle-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'click']);
    },

    function ({ addUtilities }) {
      const newUtilities = {
        '.transform-rotY180': {
          transform: 'rotateY(180deg)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'click']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.transition-md': {
          transition: '2s',
        },
        '.transition-sm': {
          transition: '2s',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'click']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.transform-translatex-show': {
          visibility: 'visible',
        },
        '.transform-translatex-hide': {
          visibility: 'hidden',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'click']);
    },
  ],
};
