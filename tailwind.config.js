const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'all',
    enabled: true,
    content: [
      './src/**/*.ts',
      './src/**/*.html',
      './src/**/*.css',
    ],

  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quick' : 'Quicksand'
      },

      width: {
        '86' : '22rem',
        '100' : '30rem',
        '120' : '35rem'
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
