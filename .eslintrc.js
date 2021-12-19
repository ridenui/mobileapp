module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@dev', './src/.dev'],
          ['@atoms', './src/components/atoms/'],
          ['@molecules', './src/components/molecules/'],
          ['@organisms', './src/components/organisms/'],
          ['@helpers', './src/helpers/'],
          ['@styles', './src/styles/'],
          ['@assets', './src/assets/'],
          ['@type', './src/type/'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    curly: ['error', 'all'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-default-export': ['off'],
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'no-duplicate-imports': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: true }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-underscore-dangle': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    'keyword-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          from: { before: true, after: true },
          else: { before: true, after: true },
          catch: { before: true, after: true },
          as: { before: true, after: true },
          finally: { before: true, after: true },
        },
      },
    ],
    'simple-import-sort/exports': ['error'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            // Side effect imports.
            '^\\u0000',
            '^@?\\w',
            // Internal packages.
            '^(components|modules|utils)(/.*|$)',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // Style imports.
            '^.+\\.s?css$',
          ],
        ],
      },
    ],
  },
};
