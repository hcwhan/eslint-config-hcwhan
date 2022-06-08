const typescript = require('../typescript/index.js')

module.exports = {
  extends: ['../javascript/index.js'],
  overrides: [
    ...typescript.overrides,
    {
      files: ['*.vue'],
      extends: ['../config/typescript-config.js', '../config/vue3-config.js', 'plugin:prettier/recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'prettier/prettier': ['warn'],

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
