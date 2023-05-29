/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#23272A',
        light: '#ffffff',
        primary: '#404EED',
        grey: '#F6F6F6',
      },

      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1920'
      },

      backgroundImage: {
        'hmBG': 'url("./dc-img/hm-bg.svg")',
        'sparkle': 'url("./dc-img/sparkles.svg")',
      },
    },
  },
  plugins: [],
}

