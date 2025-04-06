/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      {
        black: {
          "primary": "rgb(29, 155, 240)",
          "secondary": "rgb(24, 24, 24)",
          "accent": "#1f2937",
          "neutral": "#3d4451",
          "base-100": "#000000",
          "info": "#2094f3",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
