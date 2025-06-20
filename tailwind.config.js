/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'nm': ['Neue Montreal', 'sans-serif'],
        },
        colors: {
          meglix: {
            black: '#000000',
            white: '#FFFFFF',
            pink: {
              400: '#f472b6',
              500: '#ec4899',
              600: '#db2777',
            },
          }
        },
      },
    },
    plugins: [],
  }