/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        customRed: '#990011',
        customPink: '#FB98A2',
        Pink2: '#FFC5CB',
        lightPink: '#FFB6C1',
      },
      fontFamily: {
        imprima: ['Imprima', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
        inder: ['Inder', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

