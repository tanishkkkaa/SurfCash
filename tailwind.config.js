/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'vw-10': '10vw',
        'vw-16': '16vw',
        'vw-20': '20vw',
        'vw-30': '30vw',
        'vw-40': '40vw',
        'vw-50': '50vw',
        // Add more as needed
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        wixmadefordisplay: ['Wix Madefor Display', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      margin: {
        '10vw': '10vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        // Add more as needed
      },
      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '42vh': '49vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '70vh': '70vh',
        // Add more as needed
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
}
