/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "backgroundLinear": "linear-gradient(0deg, #ff9ad1 2%, #FBAB7E 33%, #ffd77c 66%, #ffebb1 100%)"
      },
      fontFamily: {
        // "title": "Abril Fatface, serif",
        // "headline": "Yeseva One, serif",
        "title": 'Josefin Sans Variable',
        "body": "Fira Mono, monospace"
      },
      colors: {
        "darkColor": "#FF9292",
        "lightColor": "#FFCCD2",
        "accentColorDark": "#e0ad14",
        "accentColorLight": "#FFF9B6"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
