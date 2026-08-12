/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rd-teal': '#016D74',
        'rd-dark': '#0C3C3E',
        'rd-dark-teal': '#134e4a',
        'rd-light': '#FAF9E3',
        'rd-green': '#066d75',
        'rd-cream': '#F8F8FB',
        'rd-lime': '#D4F479',
        'rd-mint': '#C3EAB3',
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
