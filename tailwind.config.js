/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    extend: {
      animation: {
        'rotate-slow': 'spin 15s linear infinite',
      },
    }
    
  },
  plugins: [],
}