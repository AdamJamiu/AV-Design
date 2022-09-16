module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        silverBg: "rgba(236, 241, 244, 0.1)",
        activeBg: "rgba(255, 102, 0, 1)",
        silverText: "rgba(236, 241, 244, 0.75)",
        greyBg: "#000000 25%"
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

    },

    screens: {
      'desktop': '1090px',
    },

    boxShadow: {
      '4xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    plugins: [],
  },
};
