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
  env: {
    browser: true,
    node: true,
    es2023: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2023,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  plugins: [],
  extends: ['./rules/2_base.js'],
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      extends: ['./rules/3_typescript.js'],
      rules: {},
    },
    {
      files: ['*.vue'],
      extends: ['./rules/3_typescript.js', './rules/4_vue.js'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2023,
      },
      rules: {},
    },
  ],
}
