
import antfu from '@antfu/eslint-config'
import noAutofix from 'eslint-plugin-no-autofix'

import baseRules from './rules/base.js'
import stylisticRules from './rules/stylistic.js'
import typescriptRules from './rules/typescript.js'
import vueRules from './rules/vue.js'


const hcwhan = (config = {}) => {
  const { ignores, unocss } = config

  return antfu(
    {
      ignores,

      formatters: {
        css: true,
        html: true,
        markdown: 'prettier',
      },

      unocss,

      plugins: {
        'no-autofix': noAutofix,
      },

      rules: {
        ...baseRules,

        // no-autofix
        'prefer-const': ['off'],
        'no-autofix/prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: false }],
        'no-useless-return': ['off'],
        'no-autofix/no-useless-return': ['warn'],

        // plugins
        'perfectionist/sort-imports': ['off'],
        'perfectionist/sort-exports': ['off'],
        'perfectionist/sort-named-imports': ['off'],
        'perfectionist/sort-named-exports': ['off'],
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',

              'parent',
              'index',
              'sibling',
              'internal',

              'object',
              'type',
            ],
            pathGroups: [
              { pattern: '~/**', group: 'parent', position: 'before' },
              { pattern: '@/**', group: 'parent', position: 'before' },
              { pattern: '~@/**', group: 'parent', position: 'before' },
              { pattern: '@~/**', group: 'parent', position: 'before' },
              { pattern: '~~/**', group: 'parent', position: 'before' },
              { pattern: '@@/**', group: 'parent', position: 'before' },
            ],
            'newlines-between': 'always',
            pathGroupsExcludedImportTypes: ['builtin', 'external', 'object', 'type'],
          },
        ],
        'antfu/top-level-function': ['off'],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'unicorn/prefer-number-properties': ['warn', { checkNaN: false }],
        'unused-imports/no-unused-imports': ['warn'],
        'unused-imports/no-unused-vars': ['warn', baseRules['no-unused-vars'][1]],
      },

      stylistic: {
        overrides: stylisticRules,
      },

      typescript: true,
      vue: true,
    },

    {
      files: ['**/tsconfig.json', '**/tsconfig.*.json'],
      rules: {
        'jsonc/sort-keys': ['off'],
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
      rules: {
        ...typescriptRules,
      },
    },
    {
      files: ['**/*.vue'],
      rules: {
        ...typescriptRules,
        ...vueRules,
      },
    },
  )
}

export default hcwhan
