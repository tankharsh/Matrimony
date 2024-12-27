/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        royalPurple: '#6A0DAD',
        lavender: '#E6E6FA',
        gold: '#FFD700',
        ivory: '#FFFFF0',
        lilac: '#C8A2C8',
        teal: '#008080',
        darkSlateGray: '#2F4F4F',
        lightGray: '#D3D3D3',
        crimson:'#DC143C',
      },
    },
  },
  plugins: [],
}