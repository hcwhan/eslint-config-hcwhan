module.exports = {
  extends: ['../typescript/index.js'],
  overrides: [
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
              allowNoLang: false,
              lang: 'ts',
            },
          },
        ],
      },
    },
  ],
}
