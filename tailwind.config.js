/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "primary-dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "neutral-gray": "hsl(0, 0%, 75%)",
        "neutral-gray-violet": "hsl(257, 7%, 63%)",
        "neutral-dark-blue": "hsl(255, 11%, 22%)",
        "neutral-dark-violet": "hsl(260, 8%, 14%)",
        "primary-cyan-hover": "hsl(180, 66%, 56%)",
      },
    },
  },
  plugins: [],
};
