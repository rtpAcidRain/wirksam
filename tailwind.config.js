// const options = require("./config");

// const allPlugins = {
// };

// const plugins = Object.keys(allPlugins)
//   .filter((k) => options.plugins[k])
//   .map((k) => {
//     if (k in options.plugins && options.plugins[k]) {
//       return allPlugins[k];
//     }
//   });

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,php}"],
//   darkMode: '',
//   theme: {
//     screens: {
//       tablet: "40rem",
//       laptop: "64rem",
//       desktop: "80rem"
//     },
//     colors: {
//       red: '#AF1917'
//     },
//     boxShadow: {
//     },
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '0.75rem',
//       },
//       screens: {
//         DEFAULT: "105rem",
//       }
//     },

//     extend: {
//       height: {
//         screen: "var(--doc-height, 100vh)",
//       },
//     },
//   },
//   plugins: plugins,
// };
const options = require("./config");

const allPlugins = {
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
      desktop: { "max": "120rem" },
      subDesktop: { "max": "103rem" },
      laptop: { "max": "calc(80rem - 1px)" },
      tablet: { "max": "calc(64rem - 1px)" },
      mobile: { "max": "calc(48rem - 1px)" },
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#FFFFFF',
      black: '#000000',
      black2: '#1A1A1A',
      red: '#AF1917',
      grey: '#f6f6f6',
      grey2: '#919191',
      grey3: '#ECEDF1',
      grey4: '#C7C7C7',
      bluegrey: '#f0f3f5',
      yellow: '#FFE05E',
      yellow2: '#DDB103',
      yellow3: '#BD9700'
    },
    boxShadow: {
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2.5rem',
      }
    },

    fontFamily: {
      'primary': ['"Stem"', 'sans-serif'],
      'secondary': ['"Inter"', 'sans-serif'],
    },

    extend: {
      height: {
        screen: "var(--doc-height, 100vh)",
      },
    },
  },
  plugins: plugins,
};
