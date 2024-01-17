/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'blue' : '#092635',
        'black' : '#000000',
        'white' : '#FFFFFF',
        'dark-gray' : '#64748b',
        'light-primary' : '#3887BE',
        'dark-primary' : '#0f172a',
        'dark-secondary' : '#1E2F58',
        'gray' : '#e3e7eb',
        'dark-gray' : '#1e293b',
        'bone' : '#E9F3FD',
        'dark-bone' : '#102334',
        'dark-card' : '#2E3447',
        'react' : '#62d4f1',
        'tailwind' : '#15b8c5'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
    
    fontFamily: {
      'pasifico' : ['Pacifico'],
      'poppins' : ['Poppins', 'sans-serif'],
      'sans' : ['ui-sans-serif', 'system-ui'],
      'inter' : ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

