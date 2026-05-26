/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      colors: {
        cream: "#F7F4EF",
        amber: {
          DEFAULT: "#E8B86D",
          hover: "#DDA85A",
          muted: "rgba(232,184,109,0.7)",
        },
        ink: {
          DEFAULT: "#1A1714",
          light: "#2E2A26",
        },
        stone: {
          50: "#FDFCFB",
          100: "#F7F4EF",
          200: "#E2DDD8",
          300: "#C5BEB8",
          400: "#B09070",
          500: "#9C948C",
          600: "#7A736C",
          700: "#6B6560",
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
        "5xl": "28px",
      },
    },
  },
  plugins: [],
};
