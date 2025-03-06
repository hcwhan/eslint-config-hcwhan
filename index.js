
import antfu from '@antfu/eslint-config'

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
      },

      rules: {
        ...baseRules,

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
        'node/prefer-global/buffer': ['off'],
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
