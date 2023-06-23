/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["retro", "cyberpunk", "synthwave"],
  },
  plugins: [require("daisyui")],
}

