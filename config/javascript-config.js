module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['no-autofix'],
  rules: {
    // "eslint": "8.16.0",

    /* recommended change */
    'no-control-regex': ['off'],
    'no-debugger': ['warn'],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],

    /* Possible Problems */
    'array-callback-return': ['error'],
    'no-await-in-loop': ['off'],
    'no-constant-binary-expression': ['error'],
    'no-constructor-return': ['error'],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-promise-executor-return': ['error'],
    'no-self-compare': ['error'],
    'no-template-curly-in-string': ['warn'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unused-private-class-members': ['warn'],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: false }],
    'require-atomic-updates': ['off'],

    /* Suggestions */
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: true,
      },
    ],
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
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-continue': ['off'],
    'no-div-regex': ['off'],
    'no-else-return': ['off'],
    'no-empty-function': ['off'],
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
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['off'],
    'no-useless-rename': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['off'],
    'object-shorthand': ['error', 'always'],
    'one-var': ['off'],
    'one-var-declaration-per-line': ['off'],
    'operator-assignment': ['error'],
    'prefer-arrow-callback': ['error'],
    // 'prefer-const': [], // no-autofix
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
    'prefer-template': ['off'],
    'quote-props': [
      'error',
      'as-needed',
      {
        numbers: true,
      },
    ],
    radix: ['error', 'always'],
    'require-await': ['error'],
    'require-unicode-regexp': ['off'],
    'sort-imports': ['off'],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    'spaced-comment': ['error', 'always'],
    strict: ['off'],
    'symbol-description': ['error'],
    'vars-on-top': ['off'],
    yoda: ['error', 'never'],

    /* Layout & Formatting */
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['off'],
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'dot-location': ['warn', 'property'],
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'generator-star-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    'implicit-arrow-linebreak': ['warn', 'beside'],
    indent: ['warn', 2, { SwitchCase: 1, offsetTernaryExpressions: true }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    'line-comment-position': ['off'],
    'linebreak-style': ['warn', 'unix'],
    'lines-around-comment': ['off'],
    'lines-between-class-members': ['warn', 'always'],
    'max-len': ['off'],
    'max-statements-per-line': ['warn', { max: 3 }],
    'multiline-ternary': ['off'],
    'new-parens': ['warn', 'always'],
    'newline-per-chained-call': ['off'],
    'no-extra-parens': ['off'],
    'no-multi-spaces': ['warn'],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 3,
        maxEOF: 1,
        maxBOF: 1,
      },
    ],
    'no-tabs': ['warn'],
    'no-trailing-spaces': ['warn'],
    'no-whitespace-before-property': ['warn'],
    'nonblock-statement-body-position': ['warn'],
    'object-curly-newline': [
      'warn',
      {
        consistent: true,
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['off'],
    'operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'padded-blocks': ['off'],
    'padding-line-between-statements': ['off'],
    quotes: ['warn', 'single'],
    'rest-spread-spacing': ['warn', 'never'],
    semi: ['warn', 'never'],
    'semi-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': ['warn', 'last'],
    'space-before-blocks': ['warn'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': ['warn'],
    'space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
      },
    ],
    'no-lonely-if': ['off'],
    'switch-colon-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'template-curly-spacing': ['warn', 'never'],
    'template-tag-spacing': ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'wrap-iife': [
      'warn',
      'inside',
      {
        functionPrototypeMethods: true,
      },
    ],
    'wrap-regex': ['off'],
    'yield-star-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],

    /* no-autofix */
    'prefer-const': ['off'],
    'no-autofix/prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
}
