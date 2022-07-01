module.exports = {
  extends: ['../base/index.js'],
  overrides: [
    {
      files: ['*.vue'],
      extends: ['../rules/vue3-rules.js', 'plugin:prettier/recommended'],
      parser: 'vue-eslint-parser',
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
