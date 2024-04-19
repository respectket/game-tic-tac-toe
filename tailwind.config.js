/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    gridTemplateColumns: {
      // Simple 16 column grid
      "game-field": "repeat(3, 30px)",
    },
    gridTemplateRows: {
      // Simple 16 column grid
      "game-field": "repeat(3, 30px)",
    },
  },
  plugins: [],
};

