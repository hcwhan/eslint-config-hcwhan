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
  extends: ['../rules/base-rules.js', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['warn'],
  },
  overrides: [],
}
