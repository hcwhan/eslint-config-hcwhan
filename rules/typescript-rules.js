const typescriptRecommended = require('@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended')
const typescriptOverrideRules = typescriptRecommended.overrides.find(({ files }) => files.includes('*.ts')).rules

const baseRules = require('./base-rules.js')
const noAutoFixRules = require('./no-autofix-rules.js')

const extendRules = [
  'brace-style',
  'comma-dangle',
  'comma-spacing',
  'default-param-last',
  // 'dot-notation', // project
  'func-call-spacing',
  'indent',
  'init-declarations',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-empty-function',
  'no-extra-parens',
  'no-extra-semi',
  // 'no-implied-eval', // project
  'no-invalid-this',
  'no-loop-func',
  'no-loss-of-precision',
  'no-magic-numbers',
  'no-redeclare',
  'no-restricted-imports',
  'no-shadow',
  // 'no-throw-literal', // project
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'object-curly-spacing',
  'padding-line-between-statements',
  'quotes',
  // 'require-await', // project
  'semi',
  'space-before-blocks',
  'space-before-function-paren',
  'space-infix-ops',
]

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    // "@typescript-eslint/eslint-plugin": "5.35.1",

    /* Override JS */
    'no-duplicate-imports': ['off'],

    /* typescriptOverrideRules */
    ...typescriptOverrideRules,

    /* no-autofix */
    ...noAutoFixRules,

    /* Extend Rules */
    ...extendRules.reduce((rules, ruleName) => {
      rules[ruleName] = ['off']
      rules[`@typescript-eslint/${ruleName}`] = baseRules.rules[ruleName] || ['error']
      return rules
    }, {}),
    'no-return-await': ['off'],
    '@typescript-eslint/return-await': baseRules.rules['no-return-await'],

    /* Typescript */
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    // '@typescript-eslint/await-thenable': ['error'], // project
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/ban-tslint-comment': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/class-literal-property-style': ['off'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': ['off'],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/method-signature-style': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    '@typescript-eslint/no-base-to-string': ['off'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['warn'],
    // '@typescript-eslint/no-confusing-void-expression': ['warn'], // project
    '@typescript-eslint/no-duplicate-enum-values': ['warn'],
    '@typescript-eslint/no-dynamic-delete': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    // '@typescript-eslint/no-for-in-array': ['warn'], // project
    '@typescript-eslint/no-implied-eval': ['off'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-invalid-void-type': ['error'],
    '@typescript-eslint/no-meaningless-void-operator': ['off'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-misused-promises': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-redundant-type-constituents': ['off'],
    '@typescript-eslint/no-require-imports': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-type-alias': ['off'],
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'], // project
    '@typescript-eslint/no-unnecessary-condition': ['off'],
    '@typescript-eslint/no-unnecessary-qualifier': ['off'],
    '@typescript-eslint/no-unnecessary-type-arguments': ['off'],
    // '@typescript-eslint/no-unnecessary-type-assertion': ['error'], // project
    '@typescript-eslint/no-unnecessary-type-constraint': ['off'],
    '@typescript-eslint/no-unsafe-argument': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-call': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/no-unsafe-return': ['off'],
    '@typescript-eslint/no-useless-empty-export': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    // '@typescript-eslint/non-nullable-type-assertion-style': ['warn'], // project
    '@typescript-eslint/parameter-properties': ['off'],
    '@typescript-eslint/prefer-as-const': ['off'],
    '@typescript-eslint/prefer-enum-initializers': ['off'],
    '@typescript-eslint/prefer-for-of': ['off'],
    '@typescript-eslint/prefer-function-type': ['off'],
    // '@typescript-eslint/prefer-includes': ['warn'], // project
    '@typescript-eslint/prefer-literal-enum-member': ['off'],
    '@typescript-eslint/prefer-namespace-keyword': ['off'],
    '@typescript-eslint/prefer-nullish-coalescing': ['off'],
    '@typescript-eslint/prefer-optional-chain': ['warn'],
    '@typescript-eslint/prefer-readonly': ['off'],
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
    '@typescript-eslint/prefer-reduce-type-parameter': ['off'],
    '@typescript-eslint/prefer-regexp-exec': ['off'],
    '@typescript-eslint/prefer-return-this-type': ['off'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['off'],
    '@typescript-eslint/prefer-ts-expect-error': ['error'],
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/require-array-sort-compare': ['off'],
    // '@typescript-eslint/restrict-plus-operands': [
    //   'warn',
    //   {
    //     checkCompoundAssignments: true,
    //     allowAny: true,
    //   },
    // ], // project
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/sort-type-union-intersection-members': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    // '@typescript-eslint/switch-exhaustiveness-check': ['warn'], // project
    '@typescript-eslint/triple-slash-reference': ['off'],
    '@typescript-eslint/type-annotation-spacing': ['warn'],
    '@typescript-eslint/typedef': ['off'],
    '@typescript-eslint/unbound-method': ['off'],
    '@typescript-eslint/unified-signatures': ['off'],
  },
}
