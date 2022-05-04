module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': { transform: 'translateY(500px)', opacity: 0, },
          '100%': { transform: 'translateY(0)', opacity: 1, },
        }
      },

      animation: {
        show: 'show .6s ease-in-out',
      }
    },
  },
  plugins: [],
}