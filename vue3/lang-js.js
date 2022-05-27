const typescript = require('../typescript/index.js')
const vueConfig = require('./config.js')

module.exports = {
  extends: ['../javascript/index.js', 'plugin:prettier/recommended'],
  overrides: [
    ...typescript.overrides,
    {
      files: ['*.vue'],
      extends: [...vueConfig.extends, 'plugin:prettier/recommended'],
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
        ...vueConfig.rules,
      },
    },
  ],
}
