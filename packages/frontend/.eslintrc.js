module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
},
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
