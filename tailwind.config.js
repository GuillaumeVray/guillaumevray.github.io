/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#60A5FA",
        "cornsilk": "#fff8dc",
        "darkblue": "#080831",
        "whitesmoke": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
