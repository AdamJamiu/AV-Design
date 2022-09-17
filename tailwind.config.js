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
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    boxShadow: {
      '4xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    plugins: [],
  },
};
