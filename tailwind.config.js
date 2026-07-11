/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: "#0A5C36",
          primaryGreen: "#128A45",
          leafGreen: "#3AAE4D",
          lightGreen: "#A6E36D",
          gold: "#D4AF37",
          lightGold: "#F5D87A",
          cream: "#FAF9F4",
          dark: "#222222"
        }
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        subheading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        button: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(10, 92, 54, 0.15)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
      }
    },
  },
  plugins: [],
}
