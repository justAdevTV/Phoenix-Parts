module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb/base",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:import/typescript"
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  settings: {
    'import/extensions': [".js",".jsx",".ts",".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts",".tsx"]
      },
      'import/resolver': {
          'node': {
              'extensions': [".js",".jsx",".ts",".tsx"]
          }
      }
  },
  rules: {
    semi: ["error", "never"],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    '@typescript-eslint/no-explicit-any': 0,
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "none",
      "ignoreRestSiblings": false
    }],
    'import/prefer-default-export': 0,
  }
}
