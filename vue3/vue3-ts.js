const TypescriptConfig = require('../typescript/index.js')

module.exports = {
  extends: ['../base/index.js'],
  overrides: [
    ...TypescriptConfig.overrides,
    {
      files: ['*.vue'],
      extends: ['../rules/typescript-rules.js', '../rules/vue3-rules.js', 'plugin:prettier/recommended'],
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
