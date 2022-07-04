module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1F2028",
        secondary: "#2E3039",
        tertiary: "#a9adc1",
      },
      fontFamily: {
        primary: ["Oregano", "cursive"],
        secondary: ["Vollkorn", "serif"],
      },
      transitionTimingFunction: {
        "easing-transition": "cubic-bezier(0.5, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
