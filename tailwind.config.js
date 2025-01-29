/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Path to your EJS templates
    "./routes/**/*.js",  // Path to your route files (if you use Tailwind classes there)
    "./controllers/**/*.js", // Path to controllers (if you have Tailwind classes there)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}