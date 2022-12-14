module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
    requireConfigFile: false,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
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

    'yoda': ['error', 'never'],
    'func-names': 'off',
    'max-len': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',

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
