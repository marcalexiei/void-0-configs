import type { OxlintConfig } from 'oxlint';

const domConfig: OxlintConfig = {
  plugins: ['unicorn'],

  rules: {
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.html
    'unicorn/prefer-modern-dom-apis': 'error',
  },
};

export { domConfig, domConfig as default };
