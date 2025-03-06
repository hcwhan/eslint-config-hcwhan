
import baseRules from './base.js'


const typescriptOverrideules = {
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'no-var': 'error',
  'prefer-const': 'off',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
}

const baseExtendRules = [
  'class-methods-use-this',
  'default-param-last',
  // 'dot-notation', // project
  'init-declarations',
  // 'max-params', //  different params
  'no-array-constructor',
  'no-dupe-class-members',
  'no-empty-function',
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
  'prefer-destructuring',
  // 'require-await', // project
  // 'return-await', // different key
]

const typescriptRules = {
  /* Override JS */
  'no-duplicate-imports': ['off'],

  /* typescriptOverrideRules */
  ...typescriptOverrideules,

  /* Extend Rules */
  ...baseExtendRules.reduce((rules, ruleName) => {
    rules[ruleName] = ['off']
    rules[`ts/${ruleName}`] = baseRules[ruleName] || ['error']
    return rules
  }, {}),

  'ts/return-await': ['off'],
}

export default typescriptRules
