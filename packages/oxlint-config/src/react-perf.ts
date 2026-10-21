import type { OxlintConfig } from 'oxlint';

const reactPerfConfig: OxlintConfig = {
  plugins: ['react-perf'],

  rules: {
    //=============================================================================
    // REACT PERF
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=react_perf

    // native elements are skipped: a new prop value there re-renders nothing below them

    // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.html
    'react-perf/jsx-no-jsx-as-prop': ['error', { nativeAllowList: 'all' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-array-as-prop.html
    'react-perf/jsx-no-new-array-as-prop': ['error', { nativeAllowList: 'all' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-function-as-prop.html
    'react-perf/jsx-no-new-function-as-prop': ['error', { nativeAllowList: 'all' }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.html
    'react-perf/jsx-no-new-object-as-prop': ['error', { nativeAllowList: 'all' }],
  },
};

export { reactPerfConfig, reactPerfConfig as default };
