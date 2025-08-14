/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',                // Root HTML file (Vite)
    './src/**/*.{js,jsx,ts,tsx}',  // All React files
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
