import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    jsx: false,
    test: false,
    vue: true,
    markdown: true,
    ignores: ['tsconfig.json'],
  },
  {
    rules: {
      'no-console': 'warn',
      'ts/consistent-type-definitions': ['error', 'type'],
      'unused-imports/no-unused-vars': 'warn',
    },
  },
)
