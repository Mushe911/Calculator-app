/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/wave-haikei.svg')",
        'villain-pattern': "url('../assets/inverse-wave.svg')",
      },
    },
  },
  plugins: [],
}

