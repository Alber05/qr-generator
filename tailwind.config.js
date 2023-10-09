/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        customWhite: '#F2F5F9',
        customBlue: '#3662E3',
        customNavyBlue: '#111729',
        customGray: '#364153'
      },
      backgroundImage: {
        'bg-illustration': "url('./assets/bg-illustration.svg')"
      }
    }
  },
  plugins: []
}
