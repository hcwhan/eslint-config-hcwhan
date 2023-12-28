module.exports = {
  plugins: ['no-autofix'],
  rules: {
    // "eslint-plugin-no-autofix": "1.2.3",

    'prefer-const': ['off'],
    'no-autofix/prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: false }],

    'no-useless-return': ['off'],
    'no-autofix/no-useless-return': ['warn'],
  },
}
