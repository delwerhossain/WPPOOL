/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './asset/css/*.css',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2042B6', // Blue color for primary
            light: '#2256EA',   // Light shade of primary color
            dark: '#1E3A8A',    // Dark shade of primary color
          },
          secondary: {
            DEFAULT: '#6B7280', // Gray color for secondary
            light: '#9CA3AF',   // Light shade of secondary color
            dark: '#4B5563',    // Dark shade of secondary color
          },
        },
      },
    },
    plugins: [],
  };
  