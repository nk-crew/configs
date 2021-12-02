module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.min.css',
    '**/*.build.css',
    'build',
    'coverage',
    'cypress',
    'node_modules',
    'vendor',
    'vendors',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-name-space-after': 'always',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-opening-brace-space-before': null,

    // Disable max line length.
    'max-line-length': null,

    // Sometimes we need to use `0px` units inside CSS variables.
    'length-zero-no-unit': null,
    'no-descending-specificity': null,

    // Temporary disable color function notations
    // there is a problem with CSS variables in 'legacy' mode
    // and there is a problem with SASS compiler in 'modern' mode
    'color-function-notation': null,

    // By default used 'kebab-case' pattern, but we are using our own advanced pattern.
    'custom-property-pattern': null,

    // Since we may use large margins styles, it is not a good choice to shorthand it to single `margin`.
    'declaration-block-no-redundant-longhand-properties': null,

    // SCSS.
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
