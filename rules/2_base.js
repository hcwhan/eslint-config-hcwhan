const stylistic = require('./0_stylistic.js')
const noAutoFix = require('./1_noAutoFix.js')

module.exports = {
  extends: ['eslint:recommended'],
  plugins: [...stylistic.plugins, ...noAutoFix.plugins],
  rules: {
    // "eslint": "8.56.0",

    /* recommended change */
    'no-control-regex': ['off'],
    'no-debugger': ['warn'],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],

    /* Possible Problems */
    'array-callback-return': ['error'],
    'no-await-in-loop': ['off'],
    'no-constant-binary-expression': ['error'],
    'no-constructor-return': ['error'],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-new-native-nonconstructor': ['error'],
    'no-promise-executor-return': ['error'],
    'no-self-compare': ['error'],
    'no-template-curly-in-string': ['warn'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unused-private-class-members': ['warn'],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: false }],
    'require-atomic-updates': ['off'],

    /* Suggestions */
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: true }],
    'arrow-body-style': ['off'],
    'block-scoped-var': ['error'],
    camelcase: ['off'],
    'capitalized-comments': ['off'],
    'class-methods-use-this': ['off'],
    complexity: ['off'],
    'consistent-return': ['error'],
    'consistent-this': ['error', 'self'],
    curly: ['error', 'all'],
    'default-case': ['error'],
    'default-case-last': ['error'],
    'default-param-last': ['off'],
    'dot-notation': ['error'],
    eqeqeq: ['error', 'always'],
    'func-name-matching': ['error', 'always', { includeCommonJSModuleExports: true }],
    'func-names': ['error', 'never'],
    'func-style': ['off'],
    'grouped-accessor-pairs': ['error', 'anyOrder'],
    'guard-for-in': ['off'],
    'id-denylist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    'init-declarations': ['off'],
    'logical-assignment-operators': ['warn', 'never'],
    'max-classes-per-file': ['off'],
    'max-depth': ['error', 6],
    'max-lines': ['off'],
    'max-lines-per-function': ['off'],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 5],
    'max-statements': ['off'],
    'multiline-comment-style': ['off'],
    'new-cap': ['off'],
    'no-alert': ['error'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['off'],
    'no-caller': ['error'],
    // 'no-confusing-arrow': [], // stylistic
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-continue': ['off'],
    'no-div-regex': ['off'],
    'no-else-return': ['off'],
    'no-empty-function': ['off'],
    'no-empty-static-block': ['warn'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['off'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['off'],
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-inline-comments': ['off'],
    'no-invalid-this': ['off'],
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['warn'],
    'no-loop-func': ['error'],
    'no-magic-numbers': ['off'],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          // ["+", "-", "*", "/", "%", "**"],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-multi-assign': ['error'],
    'no-multi-str': ['error'],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['off'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['off'],
    'no-plusplus': ['off'],
    'no-proto': ['error'],
    'no-restricted-exports': ['off'],
    'no-restricted-globals': ['off'],
    'no-restricted-imports': ['off'],
    'no-restricted-properties': ['off'],
    'no-restricted-syntax': ['off'],
    'no-return-assign': ['error'],
    'no-return-await': ['off'],
    'no-script-url': ['error'],
    'no-sequences': ['error'],
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [
          'id',
          'name',
          'value',
          'node',
          'index',
          'self',
          'field',
          'tr',
          'column',
          'event',
          'status',
          'close',
          'confirm',
          'Option',
          'level',
        ],
        ignoreOnInitialization: true,
      },
    ],
    'no-ternary': ['off'],
    'no-throw-literal': ['error'],
    'no-undef-init': ['off'],
    'no-undefined': ['off'],
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': ['error'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['off'],
    'no-useless-rename': ['error'],
    // 'no-useless-return': [], // noAutoFix
    'no-var': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['off'],
    'object-shorthand': ['error', 'always'],
    'one-var': ['off'],
    // 'one-var-declaration-per-line': [], // stylistic
    'operator-assignment': ['error'],
    'prefer-arrow-callback': ['error'],
    // 'prefer-const': [], // noAutoFix
    'prefer-destructuring': ['off'],
    'prefer-exponentiation-operator': ['error'],
    'prefer-named-capture-group': ['off'],
    'prefer-numeric-literals': ['off'],
    'prefer-object-has-own': ['off'],
    'prefer-object-spread': ['off'],
    'prefer-promise-reject-errors': ['off'],
    'prefer-regex-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['warn'],
    // 'quote-props': [], // stylistic
    radix: ['error', 'always'],
    'require-await': ['warn'],
    'require-unicode-regexp': ['off'],
    'sort-imports': ['off'],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    // 'spaced-comment': [], // stylistic
    strict: ['off'],
    'symbol-description': ['error'],
    'vars-on-top': ['off'],
    yoda: ['error', 'never'],

    /* Layout & Formatting */
    'line-comment-position': ['off'],
    'unicode-bom': ['warn', 'never'],

    /* stylistic */
    ...stylistic.rules,
    'no-extra-semi': ['off'],

    /* noAutoFix */
    ...noAutoFix.rules,
  },
}
