/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twitch: {
          purple: '#9147ff',
          'purple-dark': '#772ce8',
          black: '#0e0e10',
          'gray-dark': '#18181b',
          'gray-medium': '#1f1f23',
          'gray-light': '#efeff1',
          text: '#dedee3',
        },
      },
    },
  },
  plugins: [],
};
