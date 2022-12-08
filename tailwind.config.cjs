/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '16/9': '177.7777777777778%',
        '9/16': '56.25%',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    plugin(function ({ addUtilities, theme, variants }) {
      const newUtilities = {
        // '.flip-horizontal': {
        //   '--transform-scale-x': '-1',
        // },
        // '.flip-vertical': {
        //   '--transform-scale-y': '-1',
        // },
        // '.backface-visible': {
        //   'backface-visibility': 'visible',
        // },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-x-180': {
          transform: 'rotateX(180deg)',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      };
      addUtilities(newUtilities, variants('flip'));
    }),
  ],
  daisyui: {
    styled: true,
    base: true,
    themes: false,
  },
};
