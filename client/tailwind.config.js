/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/images/one.png')",
        'hero-sm':"url('/images/two.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

}