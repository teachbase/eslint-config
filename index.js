module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['compat'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'function-paren-newline': ['error', 'consistent'],
    'no-shadow': 'off',
    'no-bitwise': ['error', {
      allow: ['~'],
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'no-empty': ['error', {
      allowEmptyCatch: true,
    }],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
      ObjectPattern: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
      ExportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
    }],

    'compat/compat': 'error',

    "import/no-extraneous-dependencies": ["error", {
      devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.config.js'],
      optionalDependencies: false,
      peerDependencies: true
    }],

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: [ 'nesting', 'id' ]
      }
    }],

    'react/jsx-closing-tag-location': 'error',
    'react/jsx-sort-props': ['error', {
      shorthandFirst: true,
      noSortAlphabetically: false,
      callbacksLast: true,
      reservedFirst: true,
      ignoreCase: true
    }],
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      requiredFirst: true,
      sortShapeProp: true
    }],
    'react/sort-comp': ['warn', {
      order: [
        'type-annotations',
        'instance-variables',
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^on.+$/',
        '/^render.+$/',
        'render'
      ]
    }],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js'],
    }]
  },
};
