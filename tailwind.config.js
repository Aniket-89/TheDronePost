/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: '#E09F40',
            darkGray: '#1E1E1E',
            charcoal: '#2B2B2B',
            softWhite: '#FAFAFA',
            lightGray: '#F3F3F3',
            mutedGold: '#D89B3A',
            richNavy: '#213759',
            deepMaroon: '#772E25',
            warmBeige: '#F7E8D5',
            slateBlue: '#587CA0',
          },
      },
    },
    plugins: [],
  }