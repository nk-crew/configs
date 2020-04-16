module.exports = {
  ignoreFiles: [ '**/*.js', '**/*.jsx' ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-name-space-after': 'always',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-opening-brace-space-before': null,
    'color-named': 'never',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-empty-line-before': null,
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': [
      'numeric',
      {
        'ignore': [
          'relative',
        ],
      },
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'length-zero-no-unit': true,
    'indentation': 4,
    'max-empty-lines': 2,
    'max-line-length': null,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'order/properties-order': [
      'content',
      'position',
      'display',
      'flex',
      'flex-align',
      'flex-basis',
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'flex-shrink',
      'flex-grow',
      'flex-order',
      'flex-pack',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',
      'box-sizing',
      'float',
      'top',
      'right',
      'bottom',
      'left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'overflow',
      'overflow-x',
      'overflow-y',
      '-webkit-overflow-scrolling',
      '-ms-overflow-x',
      '-ms-overflow-y',
      '-ms-overflow-style',
      'columns',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-span',
      'column-width',
      'orphans',
      'widows',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-style',
      'font-weight',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'src',
      'hyphens',
      'line-height',
      'color',
      'text-align',
      'text-align-last',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-decoration',
      'text-indent',
      'text-justify',
      'text-outline',
      '-ms-text-overflow',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-shadow',
      'text-transform',
      'text-wrap',
      '-webkit-text-size-adjust',
      '-ms-text-size-adjust',
      'letter-spacing',
      '-ms-word-break',
      'word-break',
      'word-spacing',
      '-ms-word-wrap',
      'word-wrap',
      'overflow-wrap',
      'tab-size',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'pointer-events',
      '-ms-touch-action',
      'touch-action',
      'cursor',
      'visibility',
      'zoom',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      'background',
      'background-color',
      'background-image',
      'filter',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-clip',
      'background-origin',
      'background-size',
      'border',
      'border-color',
      'border-style',
      'border-width',
      'border-top',
      'border-top-color',
      'border-top-style',
      'border-top-width',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'box-shadow',
      'opacity',
      '-ms-interpolation-mode',
      'transition',
      'transition-delay',
      'transition-timing-function',
      'transition-duration',
      'transition-property',
      'transform',
      'transform-origin',
      'perspective',
      'appearance',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'fill',
      'stroke',
      'z-index',
    ],
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': null,
    'selector-attribute-quotes': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never-single-line',
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'double',
    'unicode-bom': 'never',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-no-vendor-prefix': true,

    // SCSS.
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': null,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/media-feature-value-dollar-variable': null,
    'scss/no-duplicate-dollar-variables': [
      null,
      {
        'ignoreInsideAtRules': [
          'if',
          'mixin'
        ]
      }
    ],
    'scss/no-duplicate-mixins': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
  },
}
