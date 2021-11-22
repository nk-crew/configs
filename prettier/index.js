module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 100, // default: 80
  endOfLine: 'lf',
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
