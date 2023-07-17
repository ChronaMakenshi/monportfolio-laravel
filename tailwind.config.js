/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT ({
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
    "./resources/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'body': ['Courier New', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      'title':  ['Courier New bold', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
});

