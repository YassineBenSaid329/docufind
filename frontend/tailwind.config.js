/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        docu: {
          bg: '#FAFAF9',        // Warm Stone/Ivory (Clean background)
          surface: '#FFFFFF',   // Pure White (Cards)
          border: '#E7E5E4',    // Stone-200 (Subtle borders)
          
          // Primary Brand (The "Espresso")
          primary: '#451a03',   // Darkest Amber/Brown (High contrast)
          'primary-hover': '#78350f', 
          
          // Accent (The "Gold")
          accent: '#d97706',    // Amber-600 (Base Gold)
          'accent-light': '#fef3c7', // Amber-100 (Backgrounds)
          'accent-hover': '#b45309', // Amber-700
          
          // Typography
          'text-main': '#292524',  // Stone-800 (Softer than black)
          'text-muted': '#78716c', // Stone-500 (Readable gray)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'], // Elegant headings
      },
      boxShadow: {
        'gold': '0 10px 30px -10px rgba(217, 119, 6, 0.3)', // Golden Glow
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}