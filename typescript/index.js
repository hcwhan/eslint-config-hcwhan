module.exports = {
  extends: ['../base/index.js'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['../rules/typescript-rules.js'],
      rules: {},
    },
  ],
}
