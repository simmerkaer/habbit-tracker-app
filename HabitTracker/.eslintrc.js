module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    quotes: ["error", "double"],
    "import/no-named-as-default": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": 0,
    "react/no-array-index-key": 0,
    "arrow-parens": 0
  }
};
