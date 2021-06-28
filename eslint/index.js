module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
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
  ignorePatterns: [
    '**/*.min.js',
    '**/*.build.js',
    'build',
    'coverage',
    'cypress',
    'node_modules',
    'vendor',
    'vendors',
  ],
  rules: {
    'prettier/prettier': 'error',

    'func-names': 'off',
    'max-len': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',

    // Rules for https://github.com/benmosher/eslint-plugin-import
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,

    // Support JSX in *.js and *.jsx files.
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // React.
    'react/display-name': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-key': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-props-no-spreading': 'off',
  },
}
