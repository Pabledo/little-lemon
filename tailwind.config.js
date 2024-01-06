/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondaryOrange': '#EE9972',
        'primaryGreen': '#495E57'
      },
    },
  },
  plugins: [],
}

