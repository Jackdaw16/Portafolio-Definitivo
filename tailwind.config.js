const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xsm': {'raw' : '(min-height: 580px)'}
      },

      fontFamily: {
        'quick' : 'Quicksand'
      },

      width: {
        '100' : '30rem'
      },

      height: {
        '200' : '50rem'
      },

      colors: {
        gray: colors.trueGray,
        'primary' : '#388bfd',
        'secondary' : '#BBD8FF',
        'dark-blue-900' : '#0D1117',
        'dark-blue-800' : '#161B22',
      },

      boxShadow: {
        custom: '0px -1px 3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
