
import baseRules from './base.js'
import stylisticRules from './stylistic.js'


const baseExtendRules = [
  'camelcase',
  'dot-notation',
  'eqeqeq',
  'no-console',
  'no-constant-condition',
  'no-empty-pattern',
  'no-irregular-whitespace',
  'no-loss-of-precision',
  'no-restricted-syntax',
  'no-sparse-arrays',
  'no-useless-concat',
  'object-shorthand',
  'prefer-template',
]

const stylisticExtendRules = [
  'array-bracket-newline',
  'array-bracket-spacing',
  'array-element-newline',
  'arrow-spacing',
  'block-spacing',
  'brace-style',
  'comma-dangle',
  'comma-spacing',
  'comma-style',
  'dot-location',
  'func-call-spacing',
  'key-spacing',
  'keyword-spacing',
  'max-len',
  'multiline-ternary',
  'no-extra-parens',
  'object-curly-newline',
  'object-curly-spacing',
  'object-property-newline',
  'operator-linebreak',
  'quote-props',
  'space-in-parens',
  'space-infix-ops',
  'space-unary-ops',
  'template-curly-spacing',
]

const vueRules = {
  // "eslint-plugin-vue": "9.30.0",

  /* Override JS */
  // set here

  /* Extend Rules */
  ...baseExtendRules.reduce((rules, ruleName) => {
    rules[`vue/${ruleName}`] = baseRules[ruleName] || ['error']
    return rules
  }, {}),
  ...stylisticExtendRules.reduce((rules, ruleName) => {
    rules[`vue/${ruleName}`] = stylisticRules[`style/${ruleName}`] || ['error']
    return rules
  }, {}),


  /* vue3-recommended change */
  // Priority A: Essential
  'vue/multi-word-component-names': ['off'],
  'vue/no-mutating-props': ['error', { shallowOnly: true }],
  'vue/return-in-computed-property': ['warn'],
  'vue/valid-template-root': ['off'],
  // Priority B: Strongly Recommended
  'vue/attribute-hyphenation': ['warn', 'never'],
  'vue/html-self-closing': ['warn', { html: { void: 'always', normal: 'never', component: 'never' }, svg: 'never', math: 'never' }],
  'vue/max-attributes-per-line': ['off'],
  'vue/singleline-html-element-content-newline': ['off'],
  // Priority B: Strongly Recommended for Vue.js 3.x
  'vue/v-on-event-hyphenation': ['warn', 'never', { autofix: true }],
  // Priority C: Recommended
  'vue/no-v-html': ['off'],


  /* Uncategorized */
  'vue/block-lang': ['error', { script: { allowNoLang: false, lang: 'ts' } }],
  'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
  'vue/block-tag-newline': ['warn', { singleline: 'always', multiline: 'always' }],
  'vue/component-api-style': ['error', ['script-setup', 'composition']],
  'vue/component-name-in-template-casing': ['warn', 'kebab-case', { registeredComponentsOnly: false }],
  'vue/component-options-name-casing': ['warn', 'PascalCase'],
  'vue/custom-event-name-casing': ['warn', 'camelCase'],
  'vue/define-emits-declaration': ['warn', 'type-literal'],
  'vue/define-macros-order': ['warn', { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'], defineExposeLast: true }],
  'vue/define-props-declaration': ['warn', 'type-based'],
  'vue/enforce-style-attribute': ['off'],
  'vue/html-button-has-type': ['off'],
  'vue/html-comment-content-newline': ['warn'],
  'vue/html-comment-content-spacing': ['warn', 'always'],
  'vue/html-comment-indent': ['warn', 2],
  'vue/match-component-file-name': ['off'],
  'vue/match-component-import-name': ['off'],
  'vue/max-lines-per-block': ['off'],
  'vue/max-props': ['off'],
  'vue/max-template-depth': ['off'],
  'vue/new-line-between-multi-line-property': ['warn', { minLineOfMultilineProperty: 4 }],
  'vue/next-tick-style': ['off'],
  'vue/no-bare-strings-in-template': ['off'],
  'vue/no-boolean-default': ['warn', 'default-false'],
  'vue/no-deprecated-delete-set': ['warn'],
  'vue/no-deprecated-model-definition': ['error', { allowVue3Compat: true }],
  'vue/no-duplicate-attr-inheritance': ['error'],
  'vue/no-empty-component-block': ['off'],
  'vue/no-multiple-objects-in-class': ['warn'],
  'vue/no-potential-component-option-typo': ['warn'],
  'vue/no-ref-object-reactivity-loss': ['error'],
  'vue/no-required-prop-with-default': ['warn', { autofix: false }],
  'vue/no-restricted-block': ['off'],
  'vue/no-restricted-call-after-await': ['off'],
  'vue/no-restricted-class': ['off'],
  'vue/no-restricted-component-names': ['off'],
  'vue/no-restricted-component-options': ['off'],
  'vue/no-restricted-custom-event': ['off'],
  'vue/no-restricted-html-elements': ['off'],
  'vue/no-restricted-props': ['off'],
  'vue/no-restricted-static-attribute': ['off'],
  'vue/no-restricted-v-bind': ['off'],
  'vue/no-root-v-if': ['off'],
  'vue/no-setup-props-reactivity-loss': ['error'],
  'vue/no-static-inline-styles': ['off'],
  'vue/no-template-target-blank': ['warn'],
  'vue/no-this-in-before-route-enter': ['error'],
  // 'vue/no-undef-components': ['warn', { ignorePatterns: ['el(\\-\\w+)+'] }], // 禁止使用未定义的组件
  'vue/no-undef-properties': ['warn'],
  'vue/no-unsupported-features': ['off'],
  'vue/no-unused-emit-declarations': ['off'],
  'vue/no-unused-properties': ['warn'], // 禁止声明未使用的 props
  'vue/no-unused-refs': ['warn'],
  'no-use-v-else-with-v-for': ['off'],
  'vue/no-useless-mustaches': ['warn', { ignoreIncludesComment: true, ignoreStringEscape: true }],
  'vue/no-useless-v-bind': ['off'],
  'vue/no-v-text': ['off'],
  'vue/padding-line-between-blocks': ['warn', 'always'],
  'vue/padding-line-between-tags': ['off'],
  'vue/padding-lines-in-component-definition': ['off'],
  'vue/prefer-define-options': ['error'],
  'vue/prefer-prop-type-boolean-first': ['error'],
  'vue/prefer-separate-static-class': ['warn'],
  'vue/prefer-true-attribute-shorthand': ['off'],
  'vue/require-default-export': ['warn'],
  'vue/require-direct-export': ['warn'],
  'vue/require-emit-validator': ['error'],
  'vue/require-explicit-slots': ['warn'],
  'vue/require-expose': ['warn'],
  'vue/require-macro-variable-name': ['error'],
  'vue/require-name-property': ['off'],
  'vue/require-prop-comment': ['off'],
  'vue/require-typed-object-prop': ['warn'],
  'vue/require-typed-ref': ['warn'],
  'vue/script-indent': ['off'],
  'vue/sort-keys': ['off'],
  'vue/static-class-names-order': ['off'],
  'vue/v-for-delimiter-style': ['warn', 'of'],
  'v-if-else-key': ['off'],
  'vue/v-on-handler-style': ['off'],
  'vue/valid-define-options': ['error'],
}

export default vueRules
