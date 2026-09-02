import type { OxlintConfig } from 'oxlint';

const vitestConfig: OxlintConfig = {
  plugins: ['jest', 'vitest'],
  rules: {
    //=============================================================================
    // JEST
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=jest

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/consistent-test-it
    'jest/consistent-test-it': 'error',

    'jest/expect-expect': 'error',
    'jest/max-expects': 'error',
    'jest/max-nested-describe': ['error', { max: 3 }],
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-conditional-in-test': 'error',
    'jest/no-confusing-set-timeout': 'off',
    'jest/no-deprecated-functions': 'off',
    'jest/no-disabled-tests': 'error',
    'jest/no-done-callback': 'off',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/no-hooks
    'jest/no-hooks': 'off',

    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'off',
    'jest/no-large-snapshots': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-jest-methods': 'error',
    'jest/no-restricted-matchers': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-unneeded-async-expect-function': 'error',
    'jest/no-untyped-mock-factory': 'off',
    'jest/padding-around-after-all-blocks': 'off',
    'jest/padding-around-test-blocks': 'off',
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-each': 'error',

    // too noisy: not every test needs a trailing expect
    // https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-ending-with-an-expect
    'jest/prefer-ending-with-an-expect': 'off',

    'jest/prefer-equality-matcher': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-expect-assertions
    'jest/prefer-expect-assertions': 'off',

    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-in-order': 'error',
    'jest/prefer-hooks-on-top': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-importing-jest-globals
    'jest/prefer-importing-jest-globals': 'error',

    'jest/prefer-jest-mocked': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-lowercase-title
    'jest/prefer-lowercase-title': 'off',

    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-mock-return-shorthand': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-snapshot-hint
    'jest/prefer-snapshot-hint': 'off',

    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-been-called': 'off',
    'jest/prefer-to-have-been-called-times': 'off',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-hook': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/require-to-throw-message
    'jest/require-to-throw-message': 'error',

    'jest/require-top-level-describe': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',

    // this rule is enabled by default when a test file is detected
    // vitest allows to pass Function as parameters to infer the name
    // https://oxc.rs/docs/guide/usage/linter/rules/jest/valid-title
    'jest/valid-title': 'off',

    //=============================================================================
    // VITEST
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=vitest

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-each-for
    'vitest/consistent-each-for': [
      'error',
      {
        describe: 'each',
        suite: 'each',
        it: 'each',
        test: 'each',
      },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-filename
    'vitest/consistent-test-filename': [
      'error',
      {
        pattern: '.*\\.spec\\.[tj]sx?$',
        allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
      },
    ],

    'vitest/consistent-test-it': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-vitest-vi
    'vitest/consistent-vitest-vi': ['error', { fn: 'vi' }],

    'vitest/expect-expect': 'error',
    'vitest/hoisted-apis-on-top': 'error',
    'vitest/max-expects': ['error', { max: 5 }],
    'vitest/max-nested-describe': ['error', { max: 2 }],
    'vitest/no-alias-methods': 'error',
    'vitest/no-commented-out-tests': 'error',
    'vitest/no-conditional-expect': 'error',
    'vitest/no-conditional-in-test': 'error',
    'vitest/no-conditional-tests': 'error',
    'vitest/no-disabled-tests': 'error',
    'vitest/no-duplicate-hooks': 'error',

    // warn only: focused tests are useful while developing but should not be committed
    'vitest/no-focused-tests': 'warn',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-hooks
    'vitest/no-hooks': 'off',

    'vitest/no-identical-title': 'error',
    'vitest/no-import-node-test': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-importing-vitest-globals
    'vitest/no-importing-vitest-globals': 'off',

    'vitest/no-interpolation-in-snapshots': 'error',
    'vitest/no-large-snapshots': 'error',
    'vitest/no-mocks-import': 'error',
    'vitest/no-restricted-matchers': 'error',
    'vitest/no-restricted-vi-methods': 'error',
    'vitest/no-standalone-expect': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/no-unneeded-async-expect-function': 'error',
    'vitest/padding-around-after-all-blocks': 'off',
    'vitest/padding-around-test-blocks': 'off',
    'vitest/prefer-called-exactly-once-with': 'error',

    // prefer-called-times is enabled
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-once
    'vitest/prefer-called-once': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-times
    'vitest/prefer-called-times': 'error',

    'vitest/prefer-called-with': 'error',
    'vitest/prefer-comparison-matcher': 'error',
    'vitest/prefer-describe-function-title': 'error',
    'vitest/prefer-each': 'error',
    'vitest/prefer-equality-matcher': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-assertions
    'vitest/prefer-expect-assertions': 'off',

    'vitest/prefer-expect-resolves': 'error',
    'vitest/prefer-expect-type-of': 'error',
    'vitest/prefer-hooks-in-order': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-import-in-mock': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-importing-vitest-globals
    'vitest/prefer-importing-vitest-globals': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-lowercase-title
    'vitest/prefer-lowercase-title': 'off',

    'vitest/prefer-mock-promise-shorthand': 'error',
    'vitest/prefer-mock-return-shorthand': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-snapshot-hint
    'vitest/prefer-snapshot-hint': 'off',

    'vitest/prefer-spy-on': 'error',
    'vitest/prefer-strict-boolean-matchers': 'error',
    'vitest/prefer-strict-equal': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-be-falsy': 'error',
    'vitest/prefer-to-be-object': 'error',
    'vitest/prefer-to-be-truthy': 'error',
    'vitest/prefer-to-contain': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-have-been-called-times
    'vitest/prefer-to-have-been-called-times': 'off',

    'vitest/prefer-to-have-length': 'error',
    'vitest/prefer-todo': 'error',
    'vitest/require-awaited-expect-poll': 'error',
    'vitest/require-hook': 'error',
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
    'vitest/require-mock-type-parameters': 'error',

    // requiring an explicit timeout on every test is too noisy
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-test-timeout
    'vitest/require-test-timeout': 'off',

    'vitest/require-to-throw-message': 'error',
    'vitest/require-top-level-describe': 'error',
    'vitest/valid-describe-callback': 'error',
    'vitest/valid-expect': 'error',
    'vitest/valid-expect-in-promise': 'error',

    // vitest allows to pass Function as parameters to infer the name
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-title
    'vitest/valid-title': 'off',

    'vitest/warn-todo': 'error',
  },
};

export { vitestConfig, vitestConfig as default };
