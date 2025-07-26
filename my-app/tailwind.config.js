/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        romanticPink: '#FADADD',
        softPurple: '#DCC6E0',
        skyBlue: '#A7D3F1',
      },
      fontFamily: {
        romantic: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};
