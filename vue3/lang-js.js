const javascript = require('../javascript/index.js')

module.exports = {
  extends: ['../javascript/index.js'],
  overrides: [
    ...javascript.overrides,
    {
      files: ['*.vue'],
      extends: ['./config.js', 'plugin:prettier/recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'vue/block-lang': [
          'error',
          {
            script: {
              allowNoLang: true,
              lang: 'js',
            },
          },
        ],
      },
    },
  ],
}
