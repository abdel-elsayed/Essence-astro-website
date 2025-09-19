/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "2.5rem"
        },
        screens: {
          "2xl": "1200px"
        }
      },
      colors: {
        brand: {
          DEFAULT: "#C47A7E", // rose clay
          dark: "#A35F63",
          accent: "#6BAA9C"
        }
      },
      boxShadow: {
        soft: "0 20px 45px -24px rgba(22, 32, 50, 0.35)"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
