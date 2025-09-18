/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#C47A7E", // rose clay
          dark: "#A35F63",
          accent: "#6BAA9C"
        }
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
