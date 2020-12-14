const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
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
        'primary' : '#4056A1',
        'secondary' : '#C6CBE3',
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
