/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'selection-bg': '#1A202C', 
        'selection-text': '#38a169',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Optional if you want scrollbar customization
  ],
  variants: {
    extend: {
      zIndex: ['negative'],
    },
  },
}
