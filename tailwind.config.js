/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        accent: '#ff5555',
        dark: {
          bg: '#121212',
          surface: '#1E1E1E',
          text: '#E0E0E0',
          muted: '#A0A0A0'
        }
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
      }
    }
  },
  plugins: []
}