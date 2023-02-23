const baseRules = require('./base-rules.js')

const extendRules = [
  'array-bracket-newline',
  'array-bracket-spacing',
  'array-element-newline',
  'arrow-spacing',
  'block-spacing',
  'brace-style',
  'camelcase',
  'comma-dangle',
  'comma-spacing',
  'comma-style',
  'dot-location',
  'dot-notation',
  'eqeqeq',
  'func-call-spacing',
  'key-spacing',
  'keyword-spacing',
  'max-len',
  'multiline-ternary',
  'no-constant-condition',
  'no-empty-pattern',
  'no-extra-parens',
  'no-irregular-whitespace',
  'no-loss-of-precision',
  'no-restricted-syntax',
  'no-sparse-arrays',
  'no-useless-concat',
  'object-curly-newline',
  'object-curly-spacing',
  'object-property-newline',
  'object-shorthand',
  'operator-linebreak',
  'prefer-template',
  'quote-props',
  'space-in-parens',
  'space-infix-ops',
  'space-unary-ops',
  'template-curly-spacing',
]

module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    // "eslint-plugin-vue": "9.4.1",

    /* Override JS */
    // set here

    /* Extend Rules */
    ...extendRules.reduce((rules, ruleName) => {
      rules[`vue/${ruleName}`] = baseRules.rules[ruleName] || ['error']
      return rules
    }, {}),

    /* vue3-recommended change */
    'vue/no-mutating-props': ['off'],
    'vue/no-v-text-v-html-on-component': ['off'],
    'vue/valid-template-root': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/v-on-event-hyphenation': ['warn', 'never', { autofix: true }],
    'vue/component-tags-order': [
      'warn',
      {
        order: ['template', 'script[setup]', 'script:not([setup])', 'style'],
      },
    ],
    'vue/no-v-html': ['off'],

    'vue/singleline-html-element-content-newline': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/attribute-hyphenation': ['warn', 'never'],
    'vue/require-v-for-key': ['off'],
    'vue/valid-v-for': ['off'],

    /* Uncategorized */
    'vue/block-lang': ['off'],
    'vue/block-tag-newline': [
      'warn',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/component-name-in-template-casing': [
      'warn',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/component-options-name-casing': ['warn', 'PascalCase'],
    'vue/custom-event-name-casing': ['warn', 'camelCase'],
    'vue/define-emits-declaration': ['warn', 'runtime'],
    'vue/define-macros-order': ['warn', { order: ['defineProps', 'defineEmits'] }],
    'vue/define-props-declaration': ['warn', 'runtime'],
    'vue/html-button-has-type': ['off'],
    'vue/html-comment-content-newline': ['off'],
    'vue/html-comment-content-spacing': ['warn', 'always'],
    'vue/html-comment-indent': ['warn', 2],
    // 'vue/match-component-file-name': [
    //   'warn',
    //   {
    //     extensions: ['vue', 'jsx', 'tsx'],
    //     shouldMatchCase: true,
    //   },
    // ], // 组件 name 属性 需 匹配文件名
    'vue/match-component-import-name': ['off'],
    'vue/new-line-between-multi-line-property': ['warn', { minLineOfMultilineProperty: 2 }],
    'vue/next-tick-style': ['off'],
    'vue/no-bare-strings-in-template': ['off'],
    'vue/no-boolean-default': ['warn', 'default-false'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/no-empty-component-block': ['off'],
    'vue/no-multiple-objects-in-class': ['warn'],
    'vue/no-potential-component-option-typo': ['warn'],
    'vue/no-ref-object-destructure': ['error'],
    'vue/no-required-prop-with-default': ['warn', { autofix: false }],
    'vue/no-restricted-block': ['off'],
    'vue/no-restricted-call-after-await': ['off'],
    'vue/no-restricted-class': ['off'],
    'vue/no-restricted-component-options': ['off'],
    'vue/no-restricted-custom-event': ['off'],
    'vue/no-restricted-html-elements': ['off'],
    'vue/no-restricted-props': ['off'],
    'vue/no-restricted-static-attribute': ['off'],
    'vue/no-restricted-v-bind': ['off'],
    'vue/no-static-inline-styles': ['off'],
    'vue/no-template-target-blank': ['warn'],
    'vue/no-this-in-before-route-enter': ['error'],
    // 'vue/no-undef-components': ['warn', { ignorePatterns: ['el(\\-\\w+)+'] }], // 禁止使用未定义的组件
    'vue/no-undef-properties': ['warn'],
    'vue/no-unsupported-features': ['off'],
    'vue/no-unused-properties': ['warn'], // 禁止声明未使用的 props
    'vue/no-unused-refs': ['warn'],
    'vue/no-useless-mustaches': ['warn', { ignoreIncludesComment: true, ignoreStringEscape: true }],
    'vue/no-useless-v-bind': ['off'],
    'vue/no-v-text': ['off'],
    'vue/padding-line-between-blocks': ['warn', 'always'],
    'vue/padding-line-between-tags': ['off'],
    'vue/padding-lines-in-component-definition': ['off'],
    'vue/prefer-prop-type-boolean-first': ['error'],
    'vue/prefer-separate-static-class': ['warn'],
    'vue/prefer-true-attribute-shorthand': ['off'],
    'vue/require-direct-export': ['off'],
    'vue/require-emit-validator': ['error'],
    'vue/require-expose': ['off'],
    'vue/require-name-property': ['off'],
    'vue/require-prop-comment': ['off'],
    'vue/script-indent': ['off'],
    'vue/sort-keys': ['off'],
    'vue/static-class-names-order': ['off'],
    'vue/v-for-delimiter-style': ['warn', 'of'],
    'vue/v-on-handler-style': ['warn', ['method', 'inline-function']],
  },
}
