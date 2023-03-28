/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        height:{
            '100':'32rem'
        },
        width:{
            'eigthy':'80%'
        }
        
    },
  },
  plugins: [],
}
