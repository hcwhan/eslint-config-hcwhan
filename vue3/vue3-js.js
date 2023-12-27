module.exports = {
  extends: ['../base/index.js'],
  overrides: [
    {
      files: ['*.vue'],
      extends: ['../rules/vue3-rules.js'],
      parser: 'vue-eslint-parser',
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
