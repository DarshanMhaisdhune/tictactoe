/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#d2fdff',
        'custom-green': '#2ecc71',
        'custom-red': '#e74c3c',
        'custom-grey': '#303C6C',
        'custom-dark-grey': '#333333',
      },
    },
  },
  plugins: [],
}

