
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

        'prefer-const': ['off'],
        'no-autofix/prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: false }],
        'no-useless-return': ['off'],
        'no-autofix/no-useless-return': ['warn'],

        'antfu/top-level-function': ['off'],
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
      files: ['**/tsconfig.json'],
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
