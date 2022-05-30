const javascript = require('../javascript/index.js')
const typescript = require('../typescript/index.js')

module.exports = {
  extends: ['../javascript/index.js'],
  overrides: [
    ...javascript.overrides,
    ...typescript.overrides,
    {
      files: ['*.vue'],
      extends: ['../typescript/index.js', './config.js', 'plugin:prettier/recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'vue/block-lang': [
          'error',
          {
            script: {
              allowNoLang: false,
              lang: 'ts',
            },
          },
        ],
      },
    },
  ],
}
