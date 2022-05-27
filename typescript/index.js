const typescriptConfig = require('./config.js')

module.exports = {
  extends: ['../javascript/index.js', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts'],
      extends: [...typescriptConfig.extends, 'plugin:prettier/recommended'],
      rules: {
        ...typescriptConfig.rules,
      },
    },
  ],
}
