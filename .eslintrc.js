module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended", "plugin:react/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 11,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: [],
  rules: {
    "no-undef": [0],
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
