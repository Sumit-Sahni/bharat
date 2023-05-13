/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts}",
];
export const theme = {
  extend: {
    content: {
        homepic: "url('./assets/bharathome.jpg')"
    },
  },
};
export const plugins = [];