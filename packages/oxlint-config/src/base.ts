import type { OxlintConfig } from 'oxlint';

const baseConfig: OxlintConfig = {
  plugins: ['eslint', 'import', 'oxc', 'promise', 'unicorn'],

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
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/complexity.html
    complexity: ['error', 30],

    'constructor-super': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html
    curly: ['error', 'all'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html
    'default-case': ['error', { commentPattern: '^no default$' }],

    'default-case-last': 'error',
    'default-param-last': 'error',
    eqeqeq: 'error',
    'for-direction': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'getter-return': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',

    // requires an explicit list of names to be useful
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-denylist.html
    'id-denylist': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-length.html
    'id-length': [
      'error',
      {
        exceptions: [
          // for test context
          't',

          // alias for version
          'v',

          // zod namespace
          'z',

          // unused placeholder
          '_',
        ],
      },
    ],

    // requires an explicit pattern to be useful
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-match.html
    'id-match': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/init-declarations.html
    'init-declarations': 'off',

    'logical-assignment-operators': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html
    'max-classes-per-file': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-depth.html
    'max-depth': ['error', { max: 4 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html
    'max-lines': ['error', { max: 500 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html
    'max-lines-per-function': ['error', { max: 200 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html
    'max-nested-callbacks': ['error', { max: 5 }],

    'max-params': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html
    'max-statements': ['error', { max: 30 }],

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

    // handled by import/no-duplicates
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html
    'no-duplicate-imports': 'off',

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

    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',

    'no-import-assign': 'error',
    'no-inline-comments': 'off',
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

    // handled by unicorn/no-negated-condition
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-negated-condition.html
    'no-negated-condition': 'off',

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
    // `default` is intentionally omitted: it conflicts with `unicorn/prefer-export-from`,
    // which requires `export { default } from '...'` when re-exporting a default export.
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports.html
    'no-restricted-exports': ['error', { restrictedNamedExports: ['then'] }],

    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-properties.html
    'no-restricted-properties': [
      'error',
      { object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated' },
      { object: 'global', property: 'isFinite', message: 'Please use Number.isFinite instead' },
      { object: 'self', property: 'isFinite', message: 'Please use Number.isFinite instead' },
      { object: 'window', property: 'isFinite', message: 'Please use Number.isFinite instead' },
      { object: 'global', property: 'isNaN', message: 'Please use Number.isNaN instead' },
      { object: 'self', property: 'isNaN', message: 'Please use Number.isNaN instead' },
      { object: 'window', property: 'isNaN', message: 'Please use Number.isNaN instead' },
      { property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
      { property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
      { object: 'Math', property: 'pow', message: 'Use the exponentiation operator (**) instead.' },
    ],

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

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ternary.html
    'no-ternary': 'off',

    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-unassigned-vars': 'error',
    'no-undef': 'error',

    // null and undefined the eternal fight
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undefined.html
    'no-undefined': 'off',

    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-useless-assignment': 'error',
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

    // default 'always' would require combining declarations
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/one-var.html
    'one-var': ['error', 'never'],

    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],

    'operator-assignment': 'error',

    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],

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
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'preserve-caught-error': 'error',
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-keys
    'sort-keys': 'off',

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
    'unicorn/consistent-template-literal-escape': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/explicit-timer-delay': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/filename-case.html
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          snakeCase: false,
          pascalCase: true,
        },
        multipleFileExtensions: true,
      },
    ],

    'unicorn/import-style': 'error',

    // default of 3 is reached by plain zod schemas
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/max-nested-calls.html
    'unicorn/max-nested-calls': ['error', { max: 5 }],

    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-accessor-recursion': 'error',

    // handled by import/no-anonymous-default-export
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html
    'unicorn/no-anonymous-default-export': 'off',

    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-fill-with-reference-type': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-array-reverse': 'error',
    'unicorn/no-array-sort': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-await-in-promise-methods': 'error',
    'unicorn/no-confusing-array-with': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-immediate-mutation': 'error',

    // handled by unicorn/no-instanceof-builtins
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-array.html
    'unicorn/no-instanceof-array': 'off',

    'unicorn/no-instanceof-builtins': 'error',
    'unicorn/no-invalid-fetch-options': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',

    // handled by unicorn/no-unnecessary-slice-end
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.html
    'unicorn/no-length-as-slice-end': 'off',

    'unicorn/no-lonely-if': 'error',
    'unicorn/no-magic-array-flat-depth': 'error',
    'unicorn/no-negated-condition': 'error',

    'unicorn/no-negation-in-equality-check': 'error',

    // handled by no-nested-ternary
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html
    'unicorn/no-nested-ternary': 'off',

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
    'unicorn/no-useless-iterator-to-array': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',

    // handled by typescript/switch-exhaustiveness-check
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html
    'unicorn/no-useless-switch-case': 'off',

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
    'unicorn/prefer-export-from': 'error',
    'unicorn/prefer-global-this': 'error',
    'unicorn/prefer-import-meta-properties': 'error',
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
    'unicorn/prefer-number-coercion': 'error',
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
    'unicorn/prefer-single-call': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-raw': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-structured-clone': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-ternary.html
    'unicorn/prefer-ternary': 'off',

    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/relative-url-style': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-module-attributes': 'error',
    'unicorn/require-module-specifiers': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-braces.html
    'unicorn/switch-case-braces': ['error', 'avoid'],

    'unicorn/switch-case-break-position': 'error',
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

    // https://oxc.rs/docs/guide/usage/linter/rules/import/max-dependencies.html
    'import/max-dependencies': ['error', { max: 30 }],

    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
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

    // zod documents the namespace import as the way to import it
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-namespace.html
    'import/no-namespace': ['error', { ignore: ['zod', 'zod/**'] }],

    'import/no-nodejs-modules': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html
    'import/no-relative-parent-imports': 'off',

    'import/no-self-import': 'error',

    // style files can only be imported for their side effects
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-unassigned-import.html
    'import/no-unassigned-import': ['error', { allow: ['**/*.{css,scss,sass,less}'] }],

    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'error',

    //=============================================================================
    // OXC
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=oxc

    'oxc/approx-constant': 'error',
    'oxc/bad-array-method-on-arguments': 'error',

    // handled by no-bitwise
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html
    'oxc/bad-bitwise-operator': 'off',

    'oxc/bad-char-at-comparison': 'error',
    'oxc/bad-comparison-sequence': 'error',
    'oxc/bad-match-all-arg': 'error',
    'oxc/bad-min-max-func': 'error',
    'oxc/bad-object-literal-comparison': 'error',
    'oxc/bad-replace-all-arg': 'error',
    'oxc/branches-sharing-code': 'error',
    'oxc/const-comparisons': 'error',
    'oxc/double-comparisons': 'error',
    'oxc/erasing-op': 'error',
    'oxc/misrefactored-assign-op': 'error',

    // handled by no-new
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/missing-throw.html
    'oxc/missing-throw': 'off',

    'oxc/no-accumulating-spread': 'error',

    // ban language features
    'oxc/no-async-await': 'off',
    'oxc/no-optional-chaining': 'off',
    'oxc/no-rest-spread-properties': 'off',

    // only valid for Express 4, reports fastify and hono handlers too
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html
    'oxc/no-async-endpoint-handlers': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-barrel-file.html
    'oxc/no-barrel-file': ['error', { threshold: 100 }],

    'oxc/no-const-enum': 'error',

    // immutable updates rely on spreading inside `map`
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-map-spread.html
    'oxc/no-map-spread': 'off',

    // reports functions declaring an explicit `this` parameter too
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html
    'oxc/no-this-in-exported-function': 'off',

    'oxc/number-arg-out-of-range': 'error',
    'oxc/only-used-in-recursion': 'error',
    'oxc/uninvoked-array-callback': 'error',

    //=============================================================================
    // PROMISE
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=promise

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/always-return.html
    'promise/always-return': ['error', { ignoreLastCallback: true }],

    // needed to wrap callback based APIs
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/avoid-new.html
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',

    // guess callbacks from their name (`done`, `next`, `cb`)
    'promise/no-callback-in-promise': 'off',
    'promise/no-promise-in-callback': 'off',
    'promise/prefer-await-to-callbacks': 'off',

    'promise/no-multiple-resolved': 'error',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',

    // handled by unicorn/no-useless-promise-resolve-reject
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html
    'promise/no-return-wrap': 'off',

    'promise/param-names': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html
    'promise/prefer-await-to-then': 'off',

    // `then(a, b)` is not equivalent to `then(a).catch(b)`
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html
    'promise/prefer-catch': 'off',

    'promise/spec-only': 'error',
    'promise/valid-params': 'error',
  },
} as const satisfies OxlintConfig;

/**
 * Config to disable eslint max rules
 */
const disableMaxStatementsConfig: OxlintConfig = {
  plugins: ['eslint'],
  rules: {
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-statements': 'off',
  },
};

export { disableMaxStatementsConfig, baseConfig, baseConfig as default };
