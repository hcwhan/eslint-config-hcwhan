module.exports = {
  'prefer-const': ['off'],
  'no-autofix/prefer-const': [
    'warn',
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: false,
    },
  ],

  'no-useless-return': ['off'],
  'no-autofix/no-useless-return': ['warn'],
}
