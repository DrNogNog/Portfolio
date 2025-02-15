/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ffa2',
        chat: '#ffb4b4',
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};