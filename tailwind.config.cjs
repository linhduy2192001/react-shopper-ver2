/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          "2x1": 1440,
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
