module.exports = {
  extends: ['../base/index.js'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['../rules/typescript-rules.js', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['warn'],
      },
    },
  ],
}
