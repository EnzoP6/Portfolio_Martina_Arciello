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
        white: "#FFFFFF",
        bone: "#FFFFFF",
        surface: "#FFFFFF",

        aquaDark: "#365E67",
        cyanBrand: "#0097B2",
        ink: "#191919",

        stone: "#4E5557",
        line: "#DDE7EA",
        softAqua: "#EAF5F7",
        sand: "#F7FAFA",

        background: "#FFFFFF",
        foreground: "#191919",
        border: "#DDE7EA",
        input: "#DDE7EA",
        ring: "#0097B2",

        primary: {
          DEFAULT: "#365E67",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0097B2",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#EAF5F7",
          foreground: "#4E5557",
        },
        accent: {
          DEFAULT: "#0097B2",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#191919",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#191919",
        },
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
