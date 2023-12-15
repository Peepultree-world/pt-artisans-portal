/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        Background: {
          primary: "#ffffff",
        },
        Button: {
          primary: "#C19426",
        },
        Text: {
          primary: "#1D1D1D",
          secondary:"#B4B4B4",
          tertiary:"#C19426",
        },
        Border: {
          primary:"#B4B4B4",
          seondary: "#E3E3E3"
        }
    },
  },
},
  plugins: [],
}
