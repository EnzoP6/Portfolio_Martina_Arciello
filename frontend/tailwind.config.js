/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"ITC Benguiat Condensed"', '"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"TT Ramillas"', '"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"TT Interphases"', "Inter", "system-ui", "sans-serif"],
        serif: ['"TT Ramillas"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"TT Interphases"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bone: "#FFFFFF",
        surface: "#FFFFFF",
        aquaDark: "#365E67",
        cyanBrand: "#0097B2",
        ink: "#191919",
        stone: "#4E5557",
        line: "#DDE7EA",
        softAqua: "#EAF5F7",
        sand: "#F7FAFA",
        clay: "#0097B2",
        background: "#FFFFFF",
        foreground: "#191919",
      },
      borderRadius: {
        lg: "24px",
        md: "18px",
        sm: "12px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
