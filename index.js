module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['compat', 'flowtype'],
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
    "operator-linebreak": ["error", "after"],
    "react/destructuring-assignment": "off",
    "react/button-has-type": "off", // https://github.com/yannickcr/eslint-plugin-react/issues/1846
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "react/jsx-one-expression-per-line": "off",
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": false,
      "ignoreStrings": false,
      "ignoreTemplateLiterals": false
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        consistent: true
      },
      ObjectPattern: {
        multiline: true,
        consistent: true
      },
      ImportDeclaration: {
        multiline: true,
        consistent: true
      },
      ExportDeclaration: {
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
    }],
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': ["error", {
      allowRequiredDefaults: true,
    }],

    "flowtype/boolean-style": [
      "error",
      "boolean"
    ],
    "flowtype/define-flow-type": "error",
    "flowtype/delimiter-dangle": [
      "error",
      "always-multiline"
    ],
    "flowtype/generic-spacing": [
      "error",
      "never"
    ],
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/no-types-missing-file-annotation": "error",
    "flowtype/object-type-delimiter": [
      "error",
      "comma"
    ],
    "flowtype/no-weak-types": "error",
    "flowtype/require-valid-file-annotation": ["error", "never", { "annotationStyle": "block" }],
    "flowtype/semi": [
      "error",
      "always"
    ],
    "flowtype/space-after-type-colon": [
      "error",
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      "error",
      "never"
    ],
    "flowtype/space-before-type-colon": [
      "error",
      "never"
    ],
    "flowtype/union-intersection-spacing": [
      "error",
      "always"
    ],
    "flowtype/use-flow-type": "warn",
  },
};
