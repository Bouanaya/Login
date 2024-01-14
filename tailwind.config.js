/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        img: 'url("https://images.expothemes.com/macos-monterey/images/macos-monterey-windows-theme-5-hd.jpg")',
      },
    },
  },
  plugins: [],
}

