import type { OxlintConfig } from 'oxlint';

const domConfig: OxlintConfig = {
  plugins: ['unicorn'],

  rules: {
    'unicorn/prefer-modern-dom-apis': 'error',
  },
};

export { domConfig as baseConfig, domConfig as default };
