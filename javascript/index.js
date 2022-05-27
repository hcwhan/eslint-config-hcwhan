const javascriptConfig = require('./config.js')

module.exports = {
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  extends: [...javascriptConfig.extends, 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  plugins: [],
  rules: {
    ...javascriptConfig.rules,
  },
}
