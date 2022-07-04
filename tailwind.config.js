/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '200':'200rem',
        'fit':'repeat(auto-fit, minmax(5rem, 1fr))',
      }
    },
  },
  plugins: [],
};
