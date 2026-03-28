import { defineConfig } from 'oxlint';

const vitestConfig = defineConfig({
  plugins: ['vitest'],

  rules: {
    // this rule is enabled by default when a test file is detected
    // vitest allows to pass Function as parameters to infer the name
    // https://oxc.rs/docs/guide/usage/linter/rules/jest/valid-title
    'jest/valid-title': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/jest/require-to-throw-message
    'jest/require-to-throw-message': 'error',

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
});

export { vitestConfig, vitestConfig as default };
