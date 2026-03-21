import { defineConfig } from 'oxlint';

const baseConfig = defineConfig({
  $schema: '../node_modules/oxlint/configuration_schema.json',
  plugins: ['eslint', 'import', 'unicorn'],

  rules: {
    //=============================================================================
    // ESLINT
    //=============================================================================
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
    'id-length': [
      'error',
      {
        exceptions: [
          // for test context
          't',
        ],
      },
    ],
    'init-declarations': 'error',
    'max-classes-per-file': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-depth.html
    'max-depth': ['error', { max: 4 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html
    'max-lines': ['error', { max: 500 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html
    'max-lines-per-function': ['error', { max: 100 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html
    'max-nested-callbacks': ['error', { max: 5 }],

    'max-params': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html
    'max-statements': ['error', { max: 15 }],

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

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html
    'no-duplicate-imports': [
      'error',
      {
        allowSeparateTypeImports: true,
      },
    ],

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

    //=============================================================================
    // UNICORN
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=unicorn

    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-assert': 'error',
    'unicorn/consistent-date-clone': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/consistent-existence-index-check': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/filename-case.html
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          snakeCase: false,
          pascalCase: false,
        },
      },
    ],

    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-accessor-recursion': 'error',
    'unicorn/no-anonymous-default-export': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-array-reverse': 'error',
    'unicorn/no-array-sort': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-await-in-promise-methods': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-immediate-mutation': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-instanceof-builtins': 'error',
    'unicorn/no-invalid-fetch-options': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-length-as-slice-end': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-magic-array-flat-depth': 'error',
    'unicorn/no-negation-in-equality-check': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-null.html
    'unicorn/no-null': 'off',

    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-single-promise-in-promise-methods': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-unnecessary-array-flat-depth': 'error',
    'unicorn/no-unnecessary-array-splice-count': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-unnecessary-slice-end': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-useless-collection-argument': 'error',
    'unicorn/no-useless-error-capture-stack-trace': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-bigint-literals': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-class-fields': 'error',
    'unicorn/prefer-classlist-toggle': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-global-this': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-math-min-max': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-response-static-json': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-set-size': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-raw': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-structured-clone': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/relative-url-style': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-module-attributes': 'error',
    'unicorn/require-module-specifiers': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/switch-case-braces': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error',

    //=============================================================================
    // IMPORT
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=import

    // https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': 'error',
    'import/first': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/group-exports.html
    'import/group-exports': 'off',

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

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html
    'import/no-relative-parent-imports': 'off',

    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'error',
  },
});

export { baseConfig, baseConfig as default };
