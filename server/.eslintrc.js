module.exports = {
  env: {
    browser: true,
    es6: true
  },
  // extends: ["airbnb-typescript/base"],
  extends: ['airbnb/base', 'plugin:@typescript-eslint/recommended'],
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
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "directory": "./tsconfig.json"
      },
    }
  },
  rules: {
    semi: ["error", "never"],
    'import/no-unresolved': 0,
    "@typescript-eslint/no-implied-eval": 0
  }
}
