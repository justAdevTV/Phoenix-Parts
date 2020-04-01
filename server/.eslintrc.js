module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:import/typescript"
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
  }
}
