module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 80,
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
