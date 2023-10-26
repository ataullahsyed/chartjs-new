/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          150: "#045e83",
          350: "#f1fbfd",
          450: "#c0dde3",
          550: "#9dd7e3",
        },
        pink: { 150: "#fdefe6" },
        grey: { 150: "#f8f9fb" },
        green: { 150: "#e8f6d2" },
        orange: { 150: "#cac6ba" },
      },
    },
  },
  plugins: [],
};
