/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'seaSalt': '#FAFAFA',
      'aliceBlue': '#E3F2FD',
      'brightPink': '#FF6978',
      'oxfordBlue': '#14213D',
      'orange': '#FFA400',
      'licroice': '#100007',
      'pear': '#C2E812'
    },
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

