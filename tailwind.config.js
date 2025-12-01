// tailwind.config.js
export default {
  // or module.exports = { ... } if using CommonJS
  darkMode: "class", // This tells Tailwind to use the 'dark' class on an ancestor element (like html)
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
