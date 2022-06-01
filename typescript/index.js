module.exports = {
  extends: ['../javascript/index.js'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['./config.js', 'plugin:prettier/recommended'],
      rules: {},
    },
  ],
}
