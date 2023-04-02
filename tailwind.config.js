/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijauPrimary: '#2a9134',
        hijauTransparentPrimary: '#2a913467',
        kuningPrimary: '#fff012',
      },
      backgroundColor: {
        bgHijauPrimary: '#2a9134',
        bgHijauTransparentPrimary: '#2a913467',
        bgKuningPrimary: '#fff012',
      }
    },
  },
  plugins: [],
}