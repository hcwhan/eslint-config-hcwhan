const javascript = require('../javascript/index.js')

module.exports = {
  extends: ['../javascript/index.js'],
  overrides: [
    ...javascript.overrides,
    {
      files: ['*.ts'],
      extends: ['./config.js', 'plugin:prettier/recommended'],
      rules: {},
    },
  ],
}
