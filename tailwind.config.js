/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["retro", "cyberpunk", "synthwave"],
  },
  plugins: [require("daisyui")],
}

