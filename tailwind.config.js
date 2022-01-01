module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        dancingScript: ["Dancing Script"],
      },

      maxHeight: ["focus"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
