/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      bxl: { max: "1400px" },
      // => @media (max-width: 1400px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      blend: { max: "1179px" },
      // => @media (max-width: 1179px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      reblend: { max: "970px" },
      // => @media (max-width: 970px) { ... }
      ham: { max: "900px" },
      // => @media (max-width: 900px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "600px" },
      // => @media (max-width: 600px) { ... }
      xss: { max: "400px" },
      // => @media (max-width: 400px) { ... }
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        unica: ["Unica One", "cursive"],
        clashbold: ["ClashDisplayBold", "sans-serif"],
        clashextralight: ["ClashDisplayExtraLight", "sans-serif"],
        clashlight: ["ClashDisplayLight", "sans-serif"],
        clashmedium: ["ClashDisplayMedium", "sans-serif"],
        clashregular: ["ClashDisplayRegular", "sans-serif"],
        clashsemibold: ["ClashDisplaySemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
