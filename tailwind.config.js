const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.ts',
      './src/**/*.html',
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
        'primary' : '#008C89',
        'secondary' : '#C7FFED',
        'secondary-hover' : '#77F9CF',
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
};
