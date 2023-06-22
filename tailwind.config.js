/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    transitionProperty: {
      'width': 'width',
    },
  },
};
export const plugins = [
  require('postcss-nested'),
  // ... other plugins
];