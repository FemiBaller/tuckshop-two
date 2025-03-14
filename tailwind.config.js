/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FAFAFA"
      },
      screens: {
        'xs': '500px',   // Extra small devices
        'sm': '640px',   // Small devices
        'md': '800px',   // Medium devices
        'lg': '1000px',  // Large devices
        'xl': '1200px',  // Extra large devices
        '2xl': '1536px', // 2x Extra large devices
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
