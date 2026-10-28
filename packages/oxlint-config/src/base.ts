import type { OxlintConfig } from 'oxlint';

const baseConfig: OxlintConfig = {
  plugins: ['eslint', 'import', 'oxc', 'promise', 'unicorn'],

  rules: {
    //=============================================================================
    // ESLINT
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=eslint

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/accessor-pairs.html
    'accessor-pairs': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return.html
    'array-callback-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var.html
    'block-scoped-var': 'error',

    // commented-out code and identifiers start lowercase
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/capitalized-comments.html
    'capitalized-comments': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/class-methods-use-this.html
    'class-methods-use-this': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/complexity.html
    complexity: ['error', 30],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html
    'constructor-super': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html
    curly: ['error', 'all'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html
    'default-case': ['error', { commentPattern: '^no default$' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case-last.html
    'default-case-last': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-param-last.html
    'default-param-last': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq.html
    eqeqeq: 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/for-direction.html
    'for-direction': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-name-matching.html
    'func-name-matching': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-names.html
    'func-names': 'error',

    // declarations and arrow functions are both fine
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-style.html
    'func-style': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/getter-return.html
    'getter-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html
    'grouped-accessor-pairs': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/guard-for-in.html
    'guard-for-in': 'error',

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

    // a `let` assigned in branches starts without a value
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/init-declarations.html
    'init-declarations': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/logical-assignment-operators.html
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

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-params.html
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

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert.html
    'no-alert': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor.html
    'no-array-constructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html
    'no-async-promise-executor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html
    'no-await-in-loop': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise.html
    'no-bitwise': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller.html
    'no-caller': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-case-declarations.html
    'no-case-declarations': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html
    'no-class-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html
    'no-compare-neg-zero': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-cond-assign.html
    'no-cond-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html
    'no-console': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html
    'no-const-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.html
    'no-constant-binary-expression': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-condition.html
    'no-constant-condition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constructor-return.html
    'no-constructor-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-continue.html
    'no-continue': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-control-regex.html
    'no-control-regex': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-debugger.html
    'no-debugger': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-delete-var.html
    'no-delete-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-div-regex.html
    'no-div-regex': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html
    'no-dupe-class-members': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html
    'no-dupe-else-if': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html
    'no-dupe-keys': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-case.html
    'no-duplicate-case': 'error',

    // handled by import/no-duplicates
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html
    'no-duplicate-imports': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html
    'no-else-return': ['error', { allowElseIf: false }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html
    'no-empty': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-character-class.html
    'no-empty-character-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html
    'no-empty-function': ['error', { allow: ['constructors', 'arrowFunctions', 'methods'] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html
    'no-empty-pattern': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-static-block.html
    'no-empty-static-block': 'error',

    /** handled by eqeqeq rule */
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eq-null.html
    'no-eq-null': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval.html
    'no-eval': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ex-assign.html
    'no-ex-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native.html
    'no-extend-native': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind.html
    'no-extra-bind': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html
    'no-extra-boolean-cast': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-label.html
    'no-extra-label': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-fallthrough.html
    'no-fallthrough': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html
    'no-func-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-global-assign.html
    'no-global-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-coercion.html
    'no-implicit-coercion': ['error', { allow: ['!!'] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-globals.html
    'no-implicit-globals': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval.html
    'no-implied-eval': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html
    'no-import-assign': 'error',

    // a short trailing comment explains its line
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inline-comments.html
    'no-inline-comments': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html
    'no-inner-declarations': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html
    'no-invalid-regexp': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html
    'no-irregular-whitespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator.html
    'no-iterator': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-label-var.html
    'no-label-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lone-blocks.html
    'no-lone-blocks': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lonely-if.html
    'no-lonely-if': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loop-func.html
    'no-loop-func': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loss-of-precision.html
    'no-loss-of-precision': 'error',

    // would report every literal in layout code, tests and options
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-magic-numbers.html
    'no-magic-numbers': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html
    'no-misleading-character-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-assign.html
    'no-multi-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-str.html
    'no-multi-str': 'error',

    // handled by unicorn/no-negated-condition
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-negated-condition.html
    'no-negated-condition': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html
    'no-nested-ternary': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html
    'no-new': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-func.html
    'no-new-func': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html
    'no-new-native-nonconstructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html
    'no-new-wrappers': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html
    'no-nonoctal-decimal-escape': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html
    'no-obj-calls': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-object-constructor.html
    'no-object-constructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-param-reassign.html
    'no-param-reassign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-plusplus.html
    'no-plusplus': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html
    'no-promise-executor-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto.html
    'no-proto': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html
    'no-prototype-builtins': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html
    'no-redeclare': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html
    'no-regex-spaces': 'error',

    // `default` is intentionally omitted: it conflicts with `unicorn/prefer-export-from`,
    // which requires `export { default } from '...'` when re-exporting a default export.
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports.html
    'no-restricted-exports': ['error', { restrictedNamedExports: ['then'] }],

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

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-return-assign.html
    'no-return-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-script-url.html
    'no-script-url': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-assign.html
    'no-self-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare.html
    'no-self-compare': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences.html
    'no-sequences': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-setter-return.html
    'no-setter-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html
    'no-shadow': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.html
    'no-shadow-restricted-names': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sparse-arrays.html
    'no-sparse-arrays': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html
    'no-template-curly-in-string': 'error',

    // ternaries are fine; no-nested-ternary keeps them flat
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ternary.html
    'no-ternary': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html
    'no-this-before-super': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal.html
    'no-throw-literal': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unassigned-vars.html
    'no-unassigned-vars': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undef.html
    'no-undef': 'error',

    // null and undefined the eternal fight
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undefined.html
    'no-undefined': 'off',

    // external APIs use them, like zod's `_zod` and GraphQL's `__typename`
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-underscore-dangle.html
    'no-underscore-dangle': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.html
    'no-unexpected-multiline': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unmodified-loop-condition.html
    'no-unmodified-loop-condition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable.html
    'no-unreachable': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable-loop.html
    'no-unreachable-loop': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html
    'no-unsafe-finally': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html
    'no-unsafe-negation': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html
    'no-unsafe-optional-chaining': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html
    'no-unused-expressions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-labels.html
    'no-unused-labels': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.html
    'no-unused-private-class-members': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html
    'no-unused-vars': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-use-before-define.html
    'no-use-before-define': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-assignment.html
    'no-useless-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-backreference.html
    'no-useless-backreference': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-call.html
    'no-useless-call': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-catch.html
    'no-useless-catch': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html
    'no-useless-computed-key': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-concat.html
    'no-useless-concat': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html
    'no-useless-constructor': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape.html
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

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-return.html
    'no-useless-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var.html
    'no-var': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html
    'no-void': ['error', { allowAsStatement: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-warning-comments.html
    'no-warning-comments': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html
    'no-with': 'error',

    // default 'always' would require combining declarations
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/one-var.html
    'one-var': ['error', 'never'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/object-shorthand.html
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/operator-assignment.html
    'operator-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-arrow-callback.html
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-destructuring.html
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

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html
    'prefer-exponentiation-operator': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-named-capture-group.html
    'prefer-named-capture-group': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html
    'prefer-numeric-literals': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-has-own.html
    'prefer-object-has-own': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html
    'prefer-object-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html
    'prefer-promise-reject-errors': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-regex-literals.html
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html
    'prefer-rest-params': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread.html
    'prefer-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-template.html
    'prefer-template': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/preserve-caught-error.html
    'preserve-caught-error': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/radix.html
    radix: 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-await.html
    'require-await': 'error',

    // the patterns rarely meet characters outside the BMP, where the flag matters most
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-unicode-regexp.html
    'require-unicode-regexp': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-yield.html
    'require-yield': 'error',

    // handled by oxfmt `sortImports`
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-imports.html
    'sort-imports': 'off',

    // keys follow meaning, not the alphabet
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-keys.html
    'sort-keys': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-vars.html
    'sort-vars': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/symbol-description.html
    'symbol-description': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html
    'unicode-bom': ['error', 'never'],

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/use-isnan.html
    'use-isnan': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/valid-typeof.html
    'valid-typeof': 'error',

    // handled by no-var
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/vars-on-top.html
    'vars-on-top': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda.html
    yoda: 'error',

    //=============================================================================
    // UNICORN
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=unicorn

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/catch-error-name.html
    'unicorn/catch-error-name': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-assert.html
    'unicorn/consistent-assert': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-date-clone.html
    'unicorn/consistent-date-clone': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.html
    'unicorn/consistent-empty-array-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-existence-index-check.html
    'unicorn/consistent-existence-index-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.html
    'unicorn/consistent-function-scoping': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-template-literal-escape.html
    'unicorn/consistent-template-literal-escape': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/custom-error-definition.html
    'unicorn/custom-error-definition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.html
    'unicorn/empty-brace-spaces': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/error-message.html
    'unicorn/error-message': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/escape-case.html
    'unicorn/escape-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html
    'unicorn/explicit-length-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-timer-delay.html
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

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/import-style.html
    'unicorn/import-style': 'error',

    // default of 3 is reached by plain zod schemas
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/max-nested-calls.html
    'unicorn/max-nested-calls': ['error', { max: 5 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html
    'unicorn/new-for-builtins': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html
    'unicorn/no-abusive-eslint-disable': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.html
    'unicorn/no-accessor-recursion': 'error',

    // handled by import/no-anonymous-default-export
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html
    'unicorn/no-anonymous-default-export': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-callback-reference.html
    'unicorn/no-array-callback-reference': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-fill-with-reference-type.html
    'unicorn/no-array-fill-with-reference-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html
    'unicorn/no-array-for-each': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-method-this-argument.html
    'unicorn/no-array-method-this-argument': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html
    'unicorn/no-array-reduce': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reverse.html
    'unicorn/no-array-reverse': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-sort.html
    'unicorn/no-array-sort': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-expression-member.html
    'unicorn/no-await-expression-member': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html
    'unicorn/no-await-in-promise-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-confusing-array-with.html
    'unicorn/no-confusing-array-with': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-console-spaces.html
    'unicorn/no-console-spaces': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html
    'unicorn/no-document-cookie': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-empty-file.html
    'unicorn/no-empty-file': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html
    'unicorn/no-hex-escape': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-immediate-mutation.html
    'unicorn/no-immediate-mutation': 'error',

    // handled by unicorn/no-instanceof-builtins
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-array.html
    'unicorn/no-instanceof-array': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-builtins.html
    'unicorn/no-instanceof-builtins': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.html
    'unicorn/no-invalid-fetch-options': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html
    'unicorn/no-invalid-remove-event-listener': 'error',

    // handled by unicorn/no-unnecessary-slice-end
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.html
    'unicorn/no-length-as-slice-end': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-lonely-if.html
    'unicorn/no-lonely-if': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html
    'unicorn/no-magic-array-flat-depth': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negated-condition.html
    'unicorn/no-negated-condition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html
    'unicorn/no-negation-in-equality-check': 'error',

    // handled by no-nested-ternary
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html
    'unicorn/no-nested-ternary': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-array.html
    'unicorn/no-new-array': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html
    'unicorn/no-new-buffer': 'error',

    // DOM and JSON APIs return `null`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-null.html
    'unicorn/no-null': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.html
    'unicorn/no-object-as-default-parameter': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-process-exit.html
    'unicorn/no-process-exit': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html
    'unicorn/no-single-promise-in-promise-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html
    'unicorn/no-static-only-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-thenable.html
    'unicorn/no-thenable': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html
    'unicorn/no-this-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html
    'unicorn/no-typeof-undefined': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.html
    'unicorn/no-unnecessary-array-flat-depth': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.html
    'unicorn/no-unnecessary-array-splice-count': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html
    'unicorn/no-unnecessary-await': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.html
    'unicorn/no-unnecessary-slice-end': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.html
    'unicorn/no-unreadable-array-destructuring': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-iife.html
    'unicorn/no-unreadable-iife': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-collection-argument.html
    'unicorn/no-useless-collection-argument': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.html
    'unicorn/no-useless-error-capture-stack-trace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html
    'unicorn/no-useless-fallback-in-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-iterator-to-array.html
    'unicorn/no-useless-iterator-to-array': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-length-check.html
    'unicorn/no-useless-length-check': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html
    'unicorn/no-useless-promise-resolve-reject': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html
    'unicorn/no-useless-spread': 'error',

    // conflicts with typescript/switch-exhaustiveness-check, which wants a `case` for each union member
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html
    'unicorn/no-useless-switch-case': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html
    'unicorn/no-useless-undefined': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-zero-fractions.html
    'unicorn/no-zero-fractions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/number-literal-case.html
    'unicorn/number-literal-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/numeric-separators-style.html
    'unicorn/numeric-separators-style': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html
    'unicorn/prefer-add-event-listener': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-find.html
    'unicorn/prefer-array-find': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html
    'unicorn/prefer-array-flat': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html
    'unicorn/prefer-array-flat-map': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-index-of.html
    'unicorn/prefer-array-index-of': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html
    'unicorn/prefer-array-some': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-at.html
    'unicorn/prefer-at': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-bigint-literals.html
    'unicorn/prefer-bigint-literals': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html
    'unicorn/prefer-blob-reading-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-class-fields.html
    'unicorn/prefer-class-fields': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-classlist-toggle.html
    'unicorn/prefer-classlist-toggle': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-code-point.html
    'unicorn/prefer-code-point': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html
    'unicorn/prefer-date-now': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-default-parameters.html
    'unicorn/prefer-default-parameters': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html
    'unicorn/prefer-dom-node-append': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html
    'unicorn/prefer-dom-node-dataset': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html
    'unicorn/prefer-dom-node-remove': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.html
    'unicorn/prefer-dom-node-text-content': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html
    'unicorn/prefer-event-target': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-export-from.html
    'unicorn/prefer-export-from': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-global-this.html
    'unicorn/prefer-global-this': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-import-meta-properties.html
    'unicorn/prefer-import-meta-properties': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-includes.html
    'unicorn/prefer-includes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-keyboard-event-key.html
    'unicorn/prefer-keyboard-event-key': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.html
    'unicorn/prefer-logical-operator-over-ternary': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-min-max.html
    'unicorn/prefer-math-min-max': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html
    'unicorn/prefer-math-trunc': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-math-apis.html
    'unicorn/prefer-modern-math-apis': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-module.html
    'unicorn/prefer-module': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html
    'unicorn/prefer-native-coercion-functions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-negative-index.html
    'unicorn/prefer-negative-index': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html
    'unicorn/prefer-node-protocol': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-coercion.html
    'unicorn/prefer-number-coercion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html
    'unicorn/prefer-number-properties': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-object-from-entries.html
    'unicorn/prefer-object-from-entries': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.html
    'unicorn/prefer-optional-catch-binding': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html
    'unicorn/prefer-prototype-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-query-selector.html
    'unicorn/prefer-query-selector': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.html
    'unicorn/prefer-reflect-apply': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html
    'unicorn/prefer-regexp-test': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-response-static-json.html
    'unicorn/prefer-response-static-json': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-has.html
    'unicorn/prefer-set-has': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html
    'unicorn/prefer-set-size': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-single-call.html
    'unicorn/prefer-single-call': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-spread.html
    'unicorn/prefer-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-raw.html
    'unicorn/prefer-string-raw': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html
    'unicorn/prefer-string-replace-all': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html
    'unicorn/prefer-string-slice': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html
    'unicorn/prefer-string-starts-ends-with': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.html
    'unicorn/prefer-string-trim-start-end': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.html
    'unicorn/prefer-structured-clone': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-ternary.html
    'unicorn/prefer-ternary': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-top-level-await.html
    'unicorn/prefer-top-level-await': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html
    'unicorn/prefer-type-error': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/relative-url-style.html
    'unicorn/relative-url-style': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-array-join-separator.html
    'unicorn/require-array-join-separator': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-attributes.html
    'unicorn/require-module-attributes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-specifiers.html
    'unicorn/require-module-specifiers': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-post-message-target-origin.html
    'unicorn/require-post-message-target-origin': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-braces.html
    'unicorn/switch-case-braces': ['error', 'avoid'],

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-break-position.html
    'unicorn/switch-case-break-position': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/text-encoding-identifier-case.html
    'unicorn/text-encoding-identifier-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/throw-new-error.html
    'unicorn/throw-new-error': 'error',

    //=============================================================================
    // IMPORT
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=import

    // https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    // https://oxc.rs/docs/guide/usage/linter/rules/import/default.html
    'import/default': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/export.html
    'import/export': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/exports-last.html
    'import/exports-last': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/extensions.html
    'import/extensions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/first.html
    'import/first': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/group-exports.html
    'import/group-exports': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/max-dependencies.html
    'import/max-dependencies': ['error', { max: 30 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/import/named.html
    'import/named': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html
    'import/namespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/newline-after-import.html
    'import/newline-after-import': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html
    'import/no-absolute-path': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html
    'import/no-amd': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-anonymous-default-export.html
    'import/no-anonymous-default-export': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-commonjs.html
    'import/no-commonjs': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html
    'import/no-cycle': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-default-export.html
    'import/no-default-export': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html
    'import/no-duplicates': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html
    'import/no-dynamic-require': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html
    'import/no-empty-named-blocks': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html
    'import/no-mutable-exports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html
    'import/no-named-as-default': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default-member.html
    'import/no-named-as-default-member': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-default.html
    'import/no-named-default': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-export.html
    'import/no-named-export': 'off',

    // zod documents the namespace import as the way to import it
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-namespace.html
    'import/no-namespace': ['error', { ignore: ['zod', 'zod/**'] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-nodejs-modules.html
    'import/no-nodejs-modules': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html
    'import/no-relative-parent-imports': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html
    'import/no-self-import': 'error',

    // style files can only be imported for their side effects
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-unassigned-import.html
    'import/no-unassigned-import': [
      'error',
      { allow: ['**/*.{css,scss,sass,less,pcss,postcss,styl,stylus}'] },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html
    'import/no-webpack-loader-syntax': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/prefer-default-export.html
    'import/prefer-default-export': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/unambiguous.html
    'import/unambiguous': 'error',

    //=============================================================================
    // OXC
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=oxc

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/approx-constant.html
    'oxc/approx-constant': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.html
    'oxc/bad-array-method-on-arguments': 'error',

    // handled by no-bitwise
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html
    'oxc/bad-bitwise-operator': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-char-at-comparison.html
    'oxc/bad-char-at-comparison': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.html
    'oxc/bad-comparison-sequence': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-match-all-arg.html
    'oxc/bad-match-all-arg': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-min-max-func.html
    'oxc/bad-min-max-func': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.html
    'oxc/bad-object-literal-comparison': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.html
    'oxc/bad-replace-all-arg': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/branches-sharing-code.html
    'oxc/branches-sharing-code': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/const-comparisons.html
    'oxc/const-comparisons': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/double-comparisons.html
    'oxc/double-comparisons': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/erasing-op.html
    'oxc/erasing-op': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html
    'oxc/misrefactored-assign-op': 'error',

    // handled by no-new
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/missing-throw.html
    'oxc/missing-throw': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-accumulating-spread.html
    'oxc/no-accumulating-spread': 'error',

    // ban language features
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-await.html
    'oxc/no-async-await': 'off',

    // ban language features
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html
    'oxc/no-optional-chaining': 'off',

    // ban language features
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html
    'oxc/no-rest-spread-properties': 'off',

    // only valid for Express 4, reports fastify and hono handlers too
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html
    'oxc/no-async-endpoint-handlers': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-barrel-file.html
    'oxc/no-barrel-file': ['error', { threshold: 100 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-const-enum.html
    'oxc/no-const-enum': 'error',

    // immutable updates rely on spreading inside `map`
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-map-spread.html
    'oxc/no-map-spread': 'off',

    // reports functions declaring an explicit `this` parameter too
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html
    'oxc/no-this-in-exported-function': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html
    'oxc/number-arg-out-of-range': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html
    'oxc/only-used-in-recursion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html
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

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html
    'promise/catch-or-return': 'error',

    // guess callbacks from their name (`done`, `next`, `cb`)
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html
    'promise/no-callback-in-promise': 'off',

    // guess callbacks from their name (`done`, `next`, `cb`)
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html
    'promise/no-promise-in-callback': 'off',

    // guess callbacks from their name (`done`, `next`, `cb`)
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html
    'promise/prefer-await-to-callbacks': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html
    'promise/no-multiple-resolved': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-nesting.html
    'promise/no-nesting': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-new-statics.html
    'promise/no-new-statics': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-in-finally.html
    'promise/no-return-in-finally': 'error',

    // handled by unicorn/no-useless-promise-resolve-reject
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html
    'promise/no-return-wrap': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/param-names.html
    'promise/param-names': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html
    'promise/prefer-await-to-then': 'error',

    // `then(a, b)` is not equivalent to `then(a).catch(b)`
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html
    'promise/prefer-catch': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/spec-only.html
    'promise/spec-only': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/promise/valid-params.html
    'promise/valid-params': 'error',
  },
} as const satisfies OxlintConfig;

/**
 * Config to disable eslint max rules
 */
const disableMaxStatementsConfig: OxlintConfig = {
  plugins: ['eslint'],
  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html
    'max-lines': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html
    'max-lines-per-function': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html
    'max-statements': 'off',
  },
};

export { disableMaxStatementsConfig, baseConfig, baseConfig as default };
