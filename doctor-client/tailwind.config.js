/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        primery: '#FF5851',
        secondery: '#3D4461',
        link: '#3fabf3',
        textColor: '#3D44613D',
        sectionbg: '#E8F6FF',
      }
    },
  },

}