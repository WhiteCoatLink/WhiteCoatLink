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

    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
      colors: {
        'seaSalt': '#FAFAFA',
        'aliceBlue': '#E3F2FD',
        'brightPink': '#FF6978',
        'oxfordBlue': '#14213D',
        'orange': '#FFA400',
        'licroice': '#22181C',
        'pear': '#C2E812',
        'lavenderBlush':"#F6E8EA",
        'crayola':'#EF626C',
        'jet':'#312F2F',
        'tiffanyBlue':'#84DCCF',
        'teaGreen':'#CFFFB0',
        'primaryColor':'#0067ff',
        'yellowColor':'#feb60d',
        'irisBlueColor':'#181a1e',
        'textColor':'#4e545f',
      },
      boxShadow : {
        panelShadow:'rgba(17, 12,46,0.15) 0px 48px 100px 0px;',
      },
    },
  },
  plugins: [],
}

