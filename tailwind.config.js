/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#ebf8ff',
        },
        purple: {
          300: '#d6bcfa',
        },
        // Add more colors as needed
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          openSans: ['Open Sans', 'sans-serif'],
          lora: ['Lora', 'serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
