module.exports = {
  extends: ['../javascript/index.js'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['../config/typescript-config.js', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['warn'],
      },
    },
  ],
}
