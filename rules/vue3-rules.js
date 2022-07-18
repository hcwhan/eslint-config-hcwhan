const baseRules = require('./base-rules.js')

const extendRules = [
  'array-bracket-newline',
  'array-bracket-spacing',
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
  'keyword-spacing',
  'max-len',
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
    // "eslint-plugin-vue": "9.0.1",

    /* Override JS */
    // set here

    /* Extend Rules */
    ...extendRules.reduce((rules, ruleName) => {
      rules[`vue/${ruleName}`] = baseRules.rules[ruleName] || ['error']
      return rules
    }, {}),

    /* recommended change */
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
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/component-options-name-casing': ['warn', 'PascalCase'],
    'vue/custom-event-name-casing': ['warn', 'camelCase'],
    'vue/define-macros-order': ['warn', { order: ['defineProps', 'defineEmits'] }],
    'vue/html-comment-content-spacing': ['warn', 'always'],
    'vue/html-comment-indent': ['warn', 2],
    // 'vue/match-component-file-name': [
    //   'warn',
    //   {
    //     extensions: ['vue', 'jsx', 'tsx'],
    //     shouldMatchCase: true,
    //   },
    // ], // 组件 name 属性 需 匹配文件名
    'vue/new-line-between-multi-line-property': ['warn', { minLineOfMultilineProperty: 2 }],
    'vue/no-boolean-default': ['warn', 'default-false'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/no-template-target-blank': ['warn'],
    'vue/no-this-in-before-route-enter': ['error'],
    // 'vue/no-undef-components': ['warn', { ignorePatterns: ['el(\\-\\w+)+'] }], // 禁止使用未定义的组件
    'vue/no-undef-properties': ['warn'],
    // 'vue/no-unused-properties': ['warn'], // 禁止声明未使用的 props
    'vue/no-unused-refs': ['warn'],
    'vue/no-useless-mustaches': ['warn', { ignoreIncludesComment: true, ignoreStringEscape: true }],
    'vue/padding-line-between-blocks': ['warn', 'always'],
    'vue/prefer-prop-type-boolean-first': ['error'],
    'vue/prefer-separate-static-class': ['warn'],
    'vue/require-emit-validator': ['error'],
    'vue/v-for-delimiter-style': ['warn', 'of'],
  },
}
