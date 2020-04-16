module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'func-call-spacing': 'error',
    'eol-last': 'error',
    'semi': 'error',
    'semi-spacing': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'always'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'space-unary-ops': [
        'error',
        {
            'overrides': {
                '!': true
            }
        }
    ],

    // Indent with 2 spaces
    "indent": ["error", 2],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],

    // Rules for https://github.com/benmosher/eslint-plugin-import
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,

    // Support JSX in *.js and *.jsx files.
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  },
}
