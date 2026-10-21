import type { OxlintConfig } from 'oxlint';

const nodeConfig: OxlintConfig = {
  plugins: ['node'],

  rules: {
    //=============================================================================
    // NODE
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=node

    // https://oxc.rs/docs/guide/usage/linter/rules/node/callback-return.html
    'node/callback-return': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/exports-style.html
    'node/exports-style': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/global-require.html
    'node/global-require': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/handle-callback-err.html
    'node/handle-callback-err': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-exports-assign.html
    'node/no-exports-assign': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-mixed-requires.html
    'node/no-mixed-requires': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-new-require.html
    'node/no-new-require': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-path-concat.html
    'node/no-path-concat': 'error',

    // reading the environment is how scripts, servers and CLIs are configured
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-process-env.html
    'node/no-process-env': 'off',

    // scripts, tests and CLIs run one step at a time, where sync calls are simpler
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-sync.html
    'node/no-sync': 'off',

    // entry points await at the top level; libraries can turn it on for their sources
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-top-level-await.html
    'node/no-top-level-await': 'off',
  },
};

export { nodeConfig, nodeConfig as default };
