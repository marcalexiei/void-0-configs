import type { OxlintConfig } from 'oxlint';

const domConfig = {
  plugins: ['unicorn'],

  rules: {
    'unicorn/prefer-modern-dom-apis': 'error',
  },
} as const satisfies OxlintConfig;

export { domConfig as baseConfig, domConfig as default };
