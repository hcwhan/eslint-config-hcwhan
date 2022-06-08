module.exports = {
  extends: ['../javascript/index.js'],
  overrides: [
    {
      files: ['*.vue'],
      extends: ['../config/vue3-config.js', 'plugin:prettier/recommended'],
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
              allowNoLang: true,
              lang: 'js',
            },
          },
        ],
      },
    },
  ],
}
