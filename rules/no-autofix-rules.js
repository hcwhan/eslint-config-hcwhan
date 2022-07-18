module.exports = {
  'prefer-const': ['off'],
  'no-autofix/prefer-const': [
    'warn',
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: false,
    },
  ],
}
