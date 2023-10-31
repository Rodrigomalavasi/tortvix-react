/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      /*keyframes: {
        abrirMenu: {
          'from': { transform: 'translateX(-600px)' },
          'to': { opacity: '1' },
        }
      },
      animation: {
        abrirMenu: 'abrirMenu 1.5s ease forwards',
      },
      keyframes: {
        fecharMenu: {
          'from': { transform: 'translateX(600px)' },
          'to': { opacity: '0' },
        }
      },
      animation: {
        fecharMenu: 'fecharMenu 1.5s ease forwards',
      },*/
    },
  },
  plugins: [],
}
