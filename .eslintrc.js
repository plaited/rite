module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  'plugins': [
    'mocha',
  ],
  extends: ['eslint:recommended'],
  rules: {
    strict: 0,
    semi: ['error', 'never'],
    quotes: [
      'error',
      'single',
      {avoidEscape: true, allowTemplateLiterals: true},
    ],
    camelcase: 0,
    'no-unused-expressions': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'max-len': [
      'error',
      {
        ignoreComments: true,
        tabWidth: 2,
        ignoreTemplateLiterals: true,
        code: 120,
      },
    ],
    indent: [
      'error',
      2,
      {
        flatTernaryExpressions: true,
        ignoredNodes: ['ConditionalExpression'],
        SwitchCase: 1,
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {overrides: {'?': 'before', ':': 'before'}},
    ],
    'eol-last': ['error'],
    'no-prototype-builtins': 0,
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'func-names': ['error', 'always', {generators: 'never'}],
    'no-use-before-define': ['error', {functions: false}],
    'no-console': ['error', {allow: ['warn', 'error']}],
    'no-restricted-syntax': 0,
    'no-return-assign': ['error'],
    'class-methods-use-this': ['error', {exceptMethods: ['render']}],
    'no-useless-constructor': 0,
    'max-classes-per-file': 0,
    'object-curly-spacing': ['error', 'never'],
  },
  overrides: [
    {
      files: ['**/*.spec.js'],
      rules: {
        'no-console': 0,
        'no-shadow': 0,
        'no-return-assign': 0,
        'no-global-assign': 0,
      },
    },
  ],
}
