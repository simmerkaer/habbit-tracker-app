module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    quotes: ["error", "double"],
    "import/no-named-as-default": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": 0,
    "react/no-array-index-key": 0,
    "arrow-parens": 0,
    "no-shadow": 0,
    "no-use-before-define": ["error", { variables: false }],
    "no-console": 0,
    "consistent-return": 0,
    "import/no-cycle": 0
  }
};
