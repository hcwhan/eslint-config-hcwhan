const typescript = require('../typescript/index.js')
const typescriptConfig = require('../typescript/config.js')
const vueConfig = require('./config.js')

module.exports = {
  extends: ['../javascript/index.js', 'plugin:prettier/recommended'],
  overrides: [
    ...typescript.overrides,
    {
      files: ['*.vue'],
      extends: [...typescriptConfig.extends, ...vueConfig.extends, 'plugin:prettier/recommended'],
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
        ...typescriptConfig.rules,
        ...vueConfig.rules,
      },
    },
  ],
}
