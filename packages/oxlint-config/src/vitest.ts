import type { OxlintConfig } from 'oxlint';

const vitestConfig = {
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
    'jest/padding-around-test-blocks': 'off',
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-in-order': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-jest-mocked': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-lowercase-title
    'jest/prefer-lowercase-title': 'off',

    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-mock-return-shorthand': 'error',
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

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-vitest-vi
    'vitest/consistent-vitest-vi': ['error', { fn: 'vi' }],

    'vitest/hoisted-apis-on-top': 'error',
    'vitest/no-conditional-tests': 'error',
    'vitest/no-import-node-test': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-importing-vitest-globals
    'vitest/no-importing-vitest-globals': 'off',

    // prefer-called-times is enabled
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-once
    'vitest/prefer-called-once': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-times
    'vitest/prefer-called-times': 'error',

    'vitest/prefer-describe-function-title': 'error',
    'vitest/prefer-expect-type-of': 'error',
    'vitest/prefer-import-in-mock': 'error',
    'vitest/prefer-to-be-falsy': 'error',
    'vitest/prefer-to-be-object': 'error',
    'vitest/prefer-to-be-truthy': 'error',
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
    'vitest/warn-todo': 'error',
  },
} as const satisfies OxlintConfig;

export { vitestConfig, vitestConfig as default };
