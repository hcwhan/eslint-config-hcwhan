const TypescriptConfig = require('../typescript/index.js')

module.exports = {
  extends: ['../base/index.js'],
  overrides: [
    ...TypescriptConfig.overrides,
    {
      files: ['*.vue'],
      extends: ['../rules/typescript-rules.js', '../rules/vue3-rules.js'],
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
