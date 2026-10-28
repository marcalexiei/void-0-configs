import type { OxlintConfig } from 'oxlint';

const typescriptConfig: OxlintConfig = {
  plugins: ['typescript'],
  rules: {
    // handled by their type-aware typescript counterpart
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval.html
    'no-implied-eval': 'off',

    // handled by typescript/only-throw-error
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal.html
    'no-throw-literal': 'off',

    // handled by their type-aware typescript counterpart
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html
    'prefer-promise-reject-errors': 'off',

    // handled by their type-aware typescript counterpart
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-await.html
    'require-await': 'off',

    // handled by typescript/no-floating-promises
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html
    'promise/catch-or-return': 'off',

    // handled by typescript/await-thenable
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html
    'unicorn/no-unnecessary-await': 'off',

    // handled by typescript/prefer-string-starts-ends-with
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html
    'unicorn/prefer-string-starts-ends-with': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/adjacent-overload-signatures.html
    'typescript/adjacent-overload-signatures': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/array-type.html
    'typescript/array-type': ['error', { default: 'generic' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/await-thenable.html
    'typescript/await-thenable': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html
    'typescript/ban-ts-comment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-tslint-comment.html
    'typescript/ban-tslint-comment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/class-literal-property-style.html
    'typescript/class-literal-property-style': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-generic-constructors.html
    'typescript/consistent-generic-constructors': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-indexed-object-style.html
    'typescript/consistent-indexed-object-style': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-return.html
    'typescript/consistent-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-assertions.html
    'typescript/consistent-type-assertions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions.html
    'typescript/consistent-type-definitions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-exports.html
    'typescript/consistent-type-exports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-imports.html
    'typescript/consistent-type-imports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/dot-notation.html
    'typescript/dot-notation': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-function-return-type.html
    'typescript/explicit-function-return-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-member-accessibility.html
    'typescript/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

    // handled by typescript/explicit-function-return-type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-module-boundary-types.html
    'typescript/explicit-module-boundary-types': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/method-signature-style.html
    'typescript/method-signature-style': ['error', 'property'],

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-array-delete.html
    'typescript/no-array-delete': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-base-to-string.html
    'typescript/no-base-to-string': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html
    'typescript/no-confusing-non-null-assertion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression.html
    'typescript/no-confusing-void-expression': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-deprecated.html
    'typescript/no-deprecated': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html
    'typescript/no-duplicate-enum-values': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-type-constituents.html
    'typescript/no-duplicate-type-constituents': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html
    'typescript/no-dynamic-delete': 'error',

    // handled by typescript/no-empty-object-type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-interface.html
    'typescript/no-empty-interface': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-object-type.html
    'typescript/no-empty-object-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any.html
    'typescript/no-explicit-any': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.html
    'typescript/no-extra-non-null-assertion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html
    'typescript/no-extraneous-class': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-floating-promises.html
    'typescript/no-floating-promises': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-for-in-array.html
    'typescript/no-for-in-array': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-generated-empty-object-type.html
    'typescript/no-generated-empty-object-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-implied-eval.html
    'typescript/no-implied-eval': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-import-type-side-effects.html
    'typescript/no-import-type-side-effects': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-inferrable-types.html
    'typescript/no-inferrable-types': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-invalid-void-type.html
    'typescript/no-invalid-void-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-meaningless-void-operator.html
    'typescript/no-meaningless-void-operator': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-new.html
    'typescript/no-misused-new': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-promises.html
    'typescript/no-misused-promises': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-spread.html
    'typescript/no-misused-spread': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-mixed-enums.html
    'typescript/no-mixed-enums': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-namespace.html
    'typescript/no-namespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html
    'typescript/no-non-null-asserted-nullish-coalescing': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.html
    'typescript/no-non-null-asserted-optional-chain': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-assertion.html
    'typescript/no-non-null-assertion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-redundant-type-constituents.html
    'typescript/no-redundant-type-constituents': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-require-imports.html
    'typescript/no-require-imports': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-this-alias.html
    'typescript/no-this-alias': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare.html
    'typescript/no-unnecessary-boolean-literal-compare': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-condition.html
    'typescript/no-unnecessary-condition': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-parameter-property-assignment.html
    'typescript/no-unnecessary-parameter-property-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-qualifier.html
    'typescript/no-unnecessary-qualifier': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression.html
    'typescript/no-unnecessary-template-expression': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-arguments.html
    'typescript/no-unnecessary-type-arguments': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion.html
    'typescript/no-unnecessary-type-assertion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html
    'typescript/no-unnecessary-type-constraint': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-conversion.html
    'typescript/no-unnecessary-type-conversion': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-parameters.html
    'typescript/no-unnecessary-type-parameters': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-argument.html
    'typescript/no-unsafe-argument': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment.html
    'typescript/no-unsafe-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-call.html
    'typescript/no-unsafe-call': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.html
    'typescript/no-unsafe-declaration-merging': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-enum-comparison.html
    'typescript/no-unsafe-enum-comparison': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html
    'typescript/no-unsafe-function-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-member-access.html
    'typescript/no-unsafe-member-access': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-return.html
    'typescript/no-unsafe-return': 'error',

    // assertions after a runtime check are how values get narrowed
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-type-assertion.html
    'typescript/no-unsafe-type-assertion': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-unary-minus.html
    'typescript/no-unsafe-unary-minus': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-default-assignment.html
    'typescript/no-useless-default-assignment': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-empty-export.html
    'typescript/no-useless-empty-export': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-var-requires.html
    'typescript/no-var-requires': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html
    'typescript/no-wrapper-object-types': 'error',

    // conflicts with typescript/no-non-null-assertion
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/non-nullable-type-assertion-style.html
    'typescript/non-nullable-type-assertion-style': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/only-throw-error.html
    'typescript/only-throw-error': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/parameter-properties.html
    'typescript/parameter-properties': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-as-const.html
    'typescript/prefer-as-const': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.html
    'typescript/prefer-enum-initializers': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-find.html
    'typescript/prefer-find': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-for-of.html
    'typescript/prefer-for-of': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-function-type.html
    'typescript/prefer-function-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-includes.html
    'typescript/prefer-includes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html
    'typescript/prefer-literal-enum-member': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html
    'typescript/prefer-namespace-keyword': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-nullish-coalescing.html
    'typescript/prefer-nullish-coalescing': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-optional-chain.html
    'typescript/prefer-optional-chain': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors.html
    'typescript/prefer-promise-reject-errors': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly.html
    'typescript/prefer-readonly': 'error',

    // would ask for `Readonly<>` on nearly every parameter
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly-parameter-types.html
    'typescript/prefer-readonly-parameter-types': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-reduce-type-parameter.html
    'typescript/prefer-reduce-type-parameter': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-regexp-exec.html
    'typescript/prefer-regexp-exec': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-return-this-type.html
    'typescript/prefer-return-this-type': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-string-starts-ends-with.html
    'typescript/prefer-string-starts-ends-with': 'error',

    // handled by typescript/ban-ts-comment
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.html
    'typescript/prefer-ts-expect-error': 'off',

    // `require-await` rule conflicts with this `promise-function-async`.
    // I'm disabling this one since we might end up marking an async function without `await` as `async`.
    // Also Typescript return type annotations should clearly declare if the Promise is async or not.
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/promise-function-async.html
    'typescript/promise-function-async': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs.html
    'typescript/related-getter-setter-pairs': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-array-sort-compare.html
    'typescript/require-array-sort-compare': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-await.html
    'typescript/require-await': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-plus-operands.html
    'typescript/restrict-plus-operands': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-template-expressions.html
    'typescript/restrict-template-expressions': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/return-await.html
    'typescript/return-await': 'error',

    // truthiness checks on strings and numbers are intentional
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-boolean-expressions.html
    'typescript/strict-boolean-expressions': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-void-return.html
    'typescript/strict-void-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check.html
    'typescript/switch-exhaustiveness-check': [
      'error',
      {
        allowDefaultCaseForExhaustiveSwitch: true,
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/triple-slash-reference.html
    'typescript/triple-slash-reference': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/unbound-method.html
    'typescript/unbound-method': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/unified-signatures.html
    'typescript/unified-signatures': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/use-unknown-in-catch-callback-variable.html
    'typescript/use-unknown-in-catch-callback-variable': 'error',
  },
};

export { typescriptConfig, typescriptConfig as default };
