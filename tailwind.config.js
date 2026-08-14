/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rd-teal': '#3d405b',
        'rd-dark': '#1e2035',
        'rd-dark-teal': '#2d2f45',
        'rd-light': '#FAF9E3',
        'rd-green': '#3d405b',
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
