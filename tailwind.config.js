const options = require("./config");

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: '',
  theme: {
    screens: {

    },
    fontSize: {
    },
    colors: {
    },
    boxShadow: {
    },
    container: {
      center: true,
      width: {
        DEFAULT: "100%",
        md: "768px",
        xl: "1294px",
      },
      padding: {
        DEFAULT: "12px",
      },
    },

    extend: {
      height: {
        screen: "var(--doc-height, 100vh)",
      },
    },
  },
  plugins: plugins,
};
