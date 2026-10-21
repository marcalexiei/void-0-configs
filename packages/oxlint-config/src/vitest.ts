import type { OxlintConfig } from 'oxlint';

const vitestConfig: OxlintConfig = {
  plugins: ['eslint', 'vitest'],
  rules: {
    //=============================================================================
    // ESLINT
    //=============================================================================

    // a test file holds whole suites, and a `describe` body counts as one function
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html
    'max-lines': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html
    'max-lines-per-function': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html
    'max-statements': 'off',

    //=============================================================================
    // VITEST
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=vitest

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-each-for.html
    'vitest/consistent-each-for': [
      'error',
      {
        describe: 'each',
        suite: 'each',
        it: 'each',
        test: 'each',
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-filename.html
    'vitest/consistent-test-filename': [
      'error',
      {
        pattern: '.*\\.spec\\.[tj]sx?$',
        allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-it.html
    'vitest/consistent-test-it': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-vitest-vi.html
    'vitest/consistent-vitest-vi': ['error', { fn: 'vi' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/expect-expect.html
    'vitest/expect-expect': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/hoisted-apis-on-top.html
    'vitest/hoisted-apis-on-top': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/max-expects.html
    'vitest/max-expects': ['error', { max: 5 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/max-nested-describe.html
    'vitest/max-nested-describe': ['error', { max: 2 }],

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-alias-methods.html
    'vitest/no-alias-methods': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-commented-out-tests.html
    'vitest/no-commented-out-tests': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-expect.html
    'vitest/no-conditional-expect': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-in-test.html
    'vitest/no-conditional-in-test': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-tests.html
    'vitest/no-conditional-tests': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-disabled-tests.html
    'vitest/no-disabled-tests': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-duplicate-hooks.html
    'vitest/no-duplicate-hooks': 'error',

    // warn only: focused tests are useful while developing but should not be committed
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-focused-tests.html
    'vitest/no-focused-tests': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-hooks.html
    'vitest/no-hooks': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-identical-title.html
    'vitest/no-identical-title': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-import-node-test.html
    'vitest/no-import-node-test': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-importing-vitest-globals.html
    'vitest/no-importing-vitest-globals': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-interpolation-in-snapshots.html
    'vitest/no-interpolation-in-snapshots': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-large-snapshots.html
    'vitest/no-large-snapshots': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-mocks-import.html
    'vitest/no-mocks-import': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-standalone-expect.html
    'vitest/no-standalone-expect': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-test-prefixes.html
    'vitest/no-test-prefixes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-test-return-statement.html
    'vitest/no-test-return-statement': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-unneeded-async-expect-function.html
    'vitest/no-unneeded-async-expect-function': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/padding-around-after-all-blocks.html
    'vitest/padding-around-after-all-blocks': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/padding-around-test-blocks.html
    'vitest/padding-around-test-blocks': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-exactly-once-with.html
    'vitest/prefer-called-exactly-once-with': 'error',

    // prefer-called-times is enabled
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-once.html
    'vitest/prefer-called-once': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-times.html
    'vitest/prefer-called-times': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-with.html
    'vitest/prefer-called-with': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-comparison-matcher.html
    'vitest/prefer-comparison-matcher': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-describe-function-title.html
    'vitest/prefer-describe-function-title': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-each.html
    'vitest/prefer-each': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-equality-matcher.html
    'vitest/prefer-equality-matcher': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-assertions.html
    'vitest/prefer-expect-assertions': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-resolves.html
    'vitest/prefer-expect-resolves': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-type-of.html
    'vitest/prefer-expect-type-of': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-hooks-in-order.html
    'vitest/prefer-hooks-in-order': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-hooks-on-top.html
    'vitest/prefer-hooks-on-top': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-import-in-mock.html
    'vitest/prefer-import-in-mock': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-importing-vitest-globals.html
    'vitest/prefer-importing-vitest-globals': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-lowercase-title.html
    'vitest/prefer-lowercase-title': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-mock-promise-shorthand.html
    'vitest/prefer-mock-promise-shorthand': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-mock-return-shorthand.html
    'vitest/prefer-mock-return-shorthand': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-snapshot-hint.html
    'vitest/prefer-snapshot-hint': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-spy-on.html
    'vitest/prefer-spy-on': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-strict-boolean-matchers.html
    'vitest/prefer-strict-boolean-matchers': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-strict-equal.html
    'vitest/prefer-strict-equal': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be.html
    'vitest/prefer-to-be': 'error',

    // Both ask for the `toBeTruthy()` / `toBeFalsy()` that `prefer-strict-boolean-matchers`
    // rewrites back to `toBe(true)` / `toBe(false)`, so the two rules fight over every line.
    // The strict matcher is the stronger assertion, so it is the one that stays on.
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.html
    'vitest/prefer-to-be-falsy': 'off',

    // Both ask for the `toBeTruthy()` / `toBeFalsy()` that `prefer-strict-boolean-matchers`
    // rewrites back to `toBe(true)` / `toBe(false)`, so the two rules fight over every line.
    // The strict matcher is the stronger assertion, so it is the one that stays on.
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.html
    'vitest/prefer-to-be-truthy': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-object.html
    'vitest/prefer-to-be-object': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-contain.html
    'vitest/prefer-to-contain': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-have-been-called-times.html
    'vitest/prefer-to-have-been-called-times': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-have-length.html
    'vitest/prefer-to-have-length': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-todo.html
    'vitest/prefer-todo': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-awaited-expect-poll.html
    'vitest/require-awaited-expect-poll': 'error',

    // `RuleTester` registers its own tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-hook.html
    'vitest/require-hook': ['error', { allowedFunctionCalls: ['ruleTester.run'] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-local-test-context-for-concurrent-snapshots.html
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-mock-type-parameters.html
    'vitest/require-mock-type-parameters': 'error',

    // requiring an explicit timeout on every test is too noisy
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-test-timeout.html
    'vitest/require-test-timeout': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-to-throw-message.html
    'vitest/require-to-throw-message': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-top-level-describe.html
    'vitest/require-top-level-describe': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-describe-callback.html
    'vitest/valid-describe-callback': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-expect.html
    'vitest/valid-expect': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-expect-in-promise.html
    'vitest/valid-expect-in-promise': 'error',

    // vitest allows to pass Function as parameters to infer the name
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-title.html
    'vitest/valid-title': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/warn-todo.html
    'vitest/warn-todo': 'error',
  },
};

export { vitestConfig, vitestConfig as default };
