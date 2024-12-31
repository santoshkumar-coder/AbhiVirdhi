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
      keyframes: {
        bump: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bumpOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
      },
      animation: {
        bump: 'bump 0.4s ease-out',
        bumpOut: 'bumpOut 0.4s ease-in',
      },
    },

  },
  plugins: [],
}
