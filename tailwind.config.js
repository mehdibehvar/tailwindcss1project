/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mcc: {
          white: "#FFFFFF",
          white50: "rgba(255, 255, 255, 0.5)",
          yellow50: "#FFB000", ////primary-50
          yellow75: "#CE9414", ////primary-75
          gray75: "#62615e", ///gray-75
          gray50: "#BABABA", ///gray-50
          gray25: "#838282", ///gray-25
          gray20: "rgba(151, 151, 151, 0.195)", ///gray-25
          info: "#0090B4",
          violet: "#B9A7FF",
          pink: "#FF89AE",
          black: "#000000",
        },
      },
      fontFamily: {
        'doran': ["doran"],
        'yekan': ['yekan'],
        'lalezar':["lalezar"],
        'vazir':['Vazir'],
        'PelakFA':['PelakFA'],
        'IRANYekan':['IRANYekanXFaNum'],
      },
      backgroundImage: {
        'hero-header': "url('../src/assets/images/herobg.png')",
        'brand-logo':"url('../src/assets/images/Logo.png')",
        'mask-group':"url('../src/assets/images/Mask group.png')",
        'last-article':"url('../src/assets/images/lastarticls.png')"
      }
    },
  },
  plugins: [],
};
