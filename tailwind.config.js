/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijauPrimary: '#2a9134',
        kuningPrimary: '#fff012',
      },
      backgroundColor: {
        bgHijauPrimary: '#2a9134',
        bgKuningPrimary: '#fff012',
      }
    },
  },
  plugins: [],
}