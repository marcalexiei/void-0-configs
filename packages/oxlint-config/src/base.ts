import { defineConfig } from 'oxlint';

const baseConfig = defineConfig({
  $schema: '../node_modules/oxlint/configuration_schema.json',
  plugins: ['eslint', 'import'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=eslint

    'accessor-pairs': 'error',
    'array-callback-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    'block-scoped-var': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    complexity: 'error',
    'constructor-super': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html
    curly: ['error', 'all'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html
    'default-case': ['error', { commentPattern: '^no default$' }],

    'default-case-last': 'error',
    'default-param-last': 'error',
    eqeqeq: 'error',
    'for-direction': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'getter-return': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-length': 'error',
    'init-declarations': 'error',
    'max-classes-per-file': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-depth.html
    'max-depth': ['error', { max: 4 }],

    'max-lines': 'error',
    'max-lines-per-function': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html
    'max-nested-callbacks': ['error', { max: 5 }],

    'max-params': 'error',
    'max-statements': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/new-cap.html
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        properties: true,
      },
    ],

    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html
    'no-else-return': ['error', { allowElseIf: false }],

    'no-empty': 'error',
    'no-empty-character-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html
    'no-empty-function': ['error', { allow: ['constructors', 'arrowFunctions', 'methods'] }],
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',

    /** handled by eqeqeq rule */
    'no-eq-null': 'off',

    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-coercion.html
    'no-implicit-coercion': ['error', { allow: ['!!'] }],

    'no-import-assign': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-object-constructor': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-unassigned-vars': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename.html
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    'no-useless-return': 'error',
    'no-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html
    'no-void': ['error', { allowAsStatement: true }],

    'no-warning-comments': 'error',
    'no-with': 'error',

    // 'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],

    // 'one-var': ['error', 'never'],

    // 'prefer-arrow-callback': [
    //   'error',
    //   { allowNamedFunctions: false, allowUnboundThis: true },
    // ],

    'operator-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',

    // 'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'preserve-caught-error': 'error',
    radix: 'error',
    'require-await': 'error',
    'require-yield': 'error',
    'sort-imports': 'off',
    'sort-keys': 'error',
    'sort-vars': 'error',
    'symbol-description': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html#eslint-unicode-bom
    'unicode-bom': ['error', 'never'],

    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    yoda: 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=import
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': 'error',
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/max-dependencies': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'error',
  },
});

export { baseConfig, baseConfig as default };
