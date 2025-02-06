/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Path to your EJS templates
    "./routes/**/*.js",  // Path to your route files (if you use Tailwind classes there)
    "./controllers/**/*.js", // Path to controllers (if you have Tailwind classes there)
  ],
  theme: {
    extend: {
      colors: {
        'text': '#180a0f',
        'background': '#fbf0f4',
        'primary': '#d43a72',
        'secondary': '#f08eb1',
        'accent': '#f34886',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}