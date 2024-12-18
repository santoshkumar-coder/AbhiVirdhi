// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all files in src with these extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
      },
      skew: {
        '-7': '-7deg', // Custom skew value
      },
    },
  },
  plugins: [],
}
