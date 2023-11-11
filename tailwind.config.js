/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,txs,js,jsx}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
