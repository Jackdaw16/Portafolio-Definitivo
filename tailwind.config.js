const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quick' : 'Quicksand'
      },

      width: {
        '100' : '30rem'
      },

      colors: {
        gray: colors.trueGray,
        'primary' : '#388bfd',
        'secondary' : '#BBD8FF',
        'secondary-hover' : '#95C2FF',
        'dark-blue-900' : '#0D1117',
        'dark-blue-800' : '#161B22',
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
